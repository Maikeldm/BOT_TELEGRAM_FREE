import TelegramBot from 'node-telegram-bot-api';
import fs from 'fs';
import path from 'path';
import pino from 'pino';
import simple from './lib/oke.js';
import smsg from './lib/smsg.js'; // Agregar la extensión .js
import { default as makeWASocket, Browsers, useMultiFileAuthState, DisconnectReason, makeInMemoryStore, jidDecode, proto, getContentType, downloadContentFromMessage } from 'baron-baileys-v2';
import { 
  getUser, 
  updateUserWhatsapp, 
  clearUserWhatsapp, 
  isActive,
  db 
} from './lib/users.js'; // Agregar la extensión .js
import dotenv from 'dotenv';
dotenv.config();
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const TOKEN = process.env.BOT_TOKEN || 'pon_tu_token_aqui'; // Usa .env
const bot = new TelegramBot(TOKEN, { polling: true });

const activeSessions = {};
const userStates = {};

// --- FUNCIONES CENTRALIZADAS ---

// Cambiar la estructura de pairing: pairing/<telegram_id>/<numero>
async function startSession(telegram_id, number) {
  // Verificar si ya existe una sesión activa para este usuario
  if (activeSessions[telegram_id]) {
    console.log(`Ya existe una sesión activa para ${telegram_id}`);
    return activeSessions[telegram_id];
  }

  // Verificar si el número ya está siendo usado
  const users = await new Promise((resolve) => {
    db.all('SELECT * FROM users WHERE whatsapp_number != ""', [], (err, rows) => {
      resolve(err ? [] : rows);
    });
  });

  const existingUser = users.find(u => u.whatsapp_number === number && u.telegram_id !== telegram_id);
  if (existingUser) {
    console.log(`El número ${number} ya está en uso por otro usuario`);
    await clearUserWhatsapp(existingUser.telegram_id);
    delete activeSessions[existingUser.telegram_id];
  }

  const sessionPath = path.join(__dirname, 'lib', 'pairing', String(telegram_id), number);
  const { state, saveCreds } = await useMultiFileAuthState(sessionPath);
  const store = makeInMemoryStore({ logger: pino({ level: 'silent' }) });
  const conn = simple({
    logger: pino({ level: 'silent' }),
    printQRInTerminal: false,
    auth: state,
    // Actualiza la versión para corregir el error de conexión
    version: [2, 3000, 1023223821],
    browser: Browsers.ubuntu('Edge'),
    getMessage: async key => {
      const msg = await store.loadMessage(key.remoteJid, key.id);
      return msg?.message || '';
    }
  }, store);

  store.bind(conn.ev);
  conn.ev.on('creds.update', saveCreds);
  conn.public = true;

  // Variables para reconexión estable
  let reconnectTries = 0;
  let reconnectTimeout = null;

  conn.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === 'close') {
      const code = lastDisconnect?.error?.output?.statusCode;
      if (
        code === DisconnectReason.loggedOut ||
        code === DisconnectReason.forbidden
      ) {
        console.log('Desconectado permanentemente con código:', code);
        delete activeSessions[telegram_id];
        cleanSession(telegram_id);
        await clearUserWhatsapp(telegram_id);
        // NO recargues comandos ni listeners aquí.
      } else {
        reconnectTries++;
        if (reconnectTries <= 5) {
          console.log('Desconexión temporal, reintentando conexión en 3s...');
          clearTimeout(reconnectTimeout);
          reconnectTimeout = setTimeout(() => startSession(telegram_id, number), 3000);
        } else {
          console.log('Demasiados intentos de reconexión fallidos, limpiando sesión...');
          delete activeSessions[telegram_id];
          cleanSession(telegram_id);
          await clearUserWhatsapp(telegram_id);
          // NO recargues comandos ni listeners aquí.
        }
      }
    } else if (connection === 'open') {
      reconnectTries = 0;
      console.log(`WhatsApp ${number} conectado para usuario ${telegram_id}.`);
    }
  });

  activeSessions[telegram_id] = conn;

  function isCommandMessage(m) {
    if (!m || !m.message) return false;
    const mtype = Object.keys(m.message)[0];
    let text = '';
    switch (mtype) {
      case 'conversation': text = m.message.conversation; break;
      case 'extendedTextMessage': text = m.message.extendedTextMessage.text; break;
      case 'imageMessage': text = m.message.imageMessage.caption || ''; break;
      case 'videoMessage': text = m.message.videoMessage.caption || ''; break;
      default: return false;
    }
    return text && (text.trim().startsWith('.') || text.trim().startsWith('/'));
  }

  // En el evento messages.upsert
  conn.ev.on('messages.upsert', async chatUpdate => {
    try {
      const mek = chatUpdate.messages[0];
      if (!mek.message) return;
      mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
      if (mek.key && mek.key.remoteJid === 'status@broadcast') return;
      if (!conn.public && !mek.key.fromMe && chatUpdate.type === 'notify') return;
      if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return;
      const m = smsg(conn, mek, store);
      const bruxin = await import('./bruxin.js');
      bruxin.default(conn, m, chatUpdate, store);
    } catch (err) {
      console.log(err);
    }
  });

  return conn;
}

function cleanSession(telegram_id) {
  const pairingDir = path.join(__dirname, 'lib', 'pairing', String(telegram_id));
  if (fs.existsSync(pairingDir)) {
    fs.rmSync(pairingDir, { recursive: true, force: true });
  }
  if (activeSessions[telegram_id]) delete activeSessions[telegram_id];
  // NO reinicies el proceso ni recargues comandos aquí.
}

function defineBuyOptions(chatId) {
  const opts = {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Comprar 1 día', url: `https://wa.me/593969533280?text=Quiero%20comprar%201%20d%C3%ADa%20de%20acceso%20al%20bot%20VIP%20para%20mi%20Telegram%20ID%20${chatId}` }],
        [{ text: 'Comprar 7 días', url: `https://wa.me/593969533280?text=Quiero%20comprar%207%20d%C3%ADas%20de%20acceso%20al%20bot%20VIP%20para%20mi%20Telegram%20ID%20${chatId}` }],
        [{ text: 'Comprar 30 días', url: `https://wa.me/593969533280?text=Quiero%20comprar%2030%20d%C3%ADas%20de%20acceso%20al%20bot%20VIP%20para%20mi%20Telegram%20ID%20${chatId}` }],
        [{ text: 'Comprar 365 días', url: `https://wa.me/593969533280?text=Quiero%20comprar%20un%20a%C3%B1o%20de%20acceso%20al%20bot%20VIP%20para%20mi%20Telegram%20ID%20${chatId}` }]
      ]
    }
  };
 return opts;
};
async function sendUserMenu(chatId) {
  try {
    let whatsappConnected = false;
    if (userStates[chatId]?.whatsapp_number) {
      const pairingDir = path.join(__dirname, 'lib', 'pairing', String(chatId), userStates[chatId].whatsapp_number);
      const credsPath = path.join(pairingDir, 'creds.json');
      if (fs.existsSync(pairingDir) && fs.existsSync(credsPath)) {
        whatsappConnected = true;
      }
    }

    let extraButtons = [];
    if (!whatsappConnected) {
      extraButtons.push([{ text: '📱 Conectar WhatsApp', callback_data: 'start_pairing' }]);
    } else {
      extraButtons.push([{ text: '❌ Desconectar WhatsApp', callback_data: 'disconnect_whatsapp' }]);
    }

    let menuMsg = await bot.sendPhoto(chatId, path.join(__dirname, 'src', 'foto.jpg'), {
      caption: '*📱 ZETAS-BOT V4 MENU*\n\n_Selecciona un comando para ejecutar_',
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          [{ text: '📱 CRASH ANDROID', callback_data: 'exec_crashwa' }, { text: '📱 CRASH IPHONE', callback_data: 'exec_crash-ios' }],
          [{ text: '💻 CRASH PC', callback_data: 'exec_crash-pc' }, { text: '⚡ ATRASO', callback_data: 'exec_atraso' }],
          ...extraButtons
        ]
      }
    });
  } catch (e) {
    console.error(e);
  }
}

// --- CARGA LOS COMANDOS DE USUARIO DESDE chocoplus.js ---
async function loadChocoplus() {
  bot.removeAllListeners();
  
  // Eliminar uso de require.cache y usar import dinámico
  try {
    const chocoplusModule = await import(`./chocoplus.js?update=${Date.now()}`);
    if (typeof chocoplusModule.default === 'function') {
      chocoplusModule.default(bot, {
        userStates,
        activeSessions,
        cleanSession,
        sendUserMenu,
        defineBuyOptions,
        updateUserWhatsapp,
        clearUserWhatsapp
      });
    }
  } catch (err) {
    console.error('Error al cargar chocoplus.js:', err);
  }
}
loadChocoplus();

// --- Recarga automática de chocoplus.js al cambiar el archivo (como bruxin.js) ---
// Solo deja este watcher, elimina cualquier otro watcher o recarga automática
const chocoplusPath = path.join(__dirname, 'chocoplus.js');

// Define la función de recarga fuera del watcher
async function reloadChocoplus() {
  fs.unwatchFile(chocoplusPath);
  console.log(`Archivo ${chocoplusPath} modificado. Recargando comandos...`);
  await loadChocoplus();
  // Vuelve a poner el watcher
  fs.watchFile(chocoplusPath, reloadChocoplus);
}

fs.watchFile(chocoplusPath, reloadChocoplus);

// --- COMANDOS DE ADMINISTRADOR ---

// Elimina los comandos de admin duplicados de este archivo, ya que ahora están en chocoplus.js
// Borra todo este bloque:

/*
async function sendNotificationToAll(text) {
    db.all('SELECT telegram_id FROM users WHERE expires > ?', [new Date().toISOString()], async (err, rows) => {
        if (err) return;
        for (const row of rows) {
            try {
                await bot.sendMessage(row.telegram_id, `📢 *AVISO IMPORTANTE:*\n\n${text}`, { parse_mode: 'Markdown' });
            } catch (e) {}
        }
    });
}

bot.onText(/\/addvip (\d+) (\d+)/, async (msg, match) => {
  const adminId = 7223378630;
  if (msg.chat.id !== adminId) {
    return bot.sendMessage(msg.chat.id, '⛔ Solo el administrador puede usar este comando.');
  }
  const targetId = parseInt(match[1]);
  const days = parseInt(match[2]);
  if (!targetId || !days || days < 1) {
    return bot.sendMessage(msg.chat.id, '❌ Uso: /addvip <telegram_id> <días>');
  }
  await addOrUpdateVip(targetId, days);
  const user = await getUser(targetId);
  await bot.sendMessage(msg.chat.id, `✅ Se otorgaron ${days} días VIP al usuario ${targetId}.`);
  try {
    const message = user && isActive(user) 
      ? `🎉 ¡Has recibido ${days} días VIP! Ya puedes usar el bot.` 
      : `🎉 ¡Has recibido ${days} días VIP! Si no puedes acceder, espera unos segundos y usa /start.`;
    await bot.sendMessage(targetId, message);
  } catch (e) {
    console.log(`No se pudo notificar al usuario ${targetId} sobre su VIP.`);
  }
});

bot.onText(/\/notificar (.+)/, async (msg, match) => {
  const adminId = 7223378630;
  if (msg.chat.id !== adminId) return;
  const texto = match[1];
  await sendNotificationToAll(texto);
  await bot.sendMessage(adminId, '✅ Notificación enviada a todos los usuarios VIP activos.');
});
*/

// --- PROCESOS DE INICIO Y FONDO ---

// Al iniciar, reconectar automáticamente todas las sesiones guardadas (VIP y FREE)
(async () => {
  // Restaurar sesiones VIP
  db.all('SELECT * FROM users WHERE whatsapp_number != ""', [], async (err, users) => {
    if (err) {
        console.error("Error al leer la base de datos para restaurar sesiones:", err);
        return;
    }
    for (const user of users) {
      const pairingDir = path.join(__dirname, 'lib', 'pairing', String(user.telegram_id), user.whatsapp_number);
      const credsPath = path.join(pairingDir, 'creds.json');
      if (fs.existsSync(pairingDir) && fs.existsSync(credsPath)) {
        try {
          console.log(`Intentando restaurar sesión para usuario ${user.telegram_id} y número ${user.whatsapp_number}...`);
          await startSession(Number(user.telegram_id), user.whatsapp_number);
          console.log(`✅ Sesión restaurada para usuario ${user.telegram_id} y número ${user.whatsapp_number}`);
        } catch (e) {
          console.error(`❌ No se pudo restaurar la sesión para ${user.telegram_id}/${user.whatsapp_number}:`, e);
        }
      } else {
        if (user.whatsapp_number) {
          try {
            await clearUserWhatsapp(user.telegram_id);
            console.log(`Limpieza: Usuario ${user.telegram_id} tenía whatsapp_number pero no sesión, campo limpiado.`);
          } catch (e) {}
        }
      }
    }
    console.log('Restauración de sesiones VIP finalizada.');
  });

  // Restaurar sesiones FREE
  const freePairingRoot = path.join(__dirname, 'lib', 'pairing', 'free');
  if (fs.existsSync(freePairingRoot)) {
    const freeUsers = fs.readdirSync(freePairingRoot);
    for (const freeUserId of freeUsers) {
      const userDir = path.join(freePairingRoot, freeUserId);
      if (!fs.statSync(userDir).isDirectory()) continue;
      const numbers = fs.readdirSync(userDir);
      for (const number of numbers) {
        const sessionDir = path.join(userDir, number);
        const credsPath = path.join(sessionDir, 'creds.json');
        if (fs.existsSync(credsPath)) {
          try {
            console.log(`Intentando restaurar sesión FREE para usuario ${freeUserId} y número ${number}...`);
            await startSession(Number(freeUserId), number);
            console.log(`✅ Sesión FREE restaurada para usuario ${freeUserId} y número ${number}`);
          } catch (e) {
            console.error(`❌ No se pudo restaurar la sesión FREE para ${freeUserId}/${number}:`, e);
          }
        }
      }
    }
    console.log('Restauración de sesiones FREE finalizada.');
  }
})();

// Manejo robusto de errores de Telegram (evita spam de "message to delete not found")
process.on('unhandledRejection', reason => {
  if (reason && reason.response && reason.response.body && reason.response.body.description && reason.response.body.description.includes('message to delete not found')) {
    // Silencia este error específico
    return;
  }
  console.error('Promesa rechazada no capturada:', reason);
});

// Mensaje final de inicio
console.log('Telegram x Baileys conectado com sucesso');