import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, writeFileSync, readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FREE_FILE = join(__dirname, 'free.json');
const FREE_STATE_FILE = join(__dirname, 'free_state.json');

// Inicializa archivos si no existen
if (!existsSync(FREE_FILE)) writeFileSync(FREE_FILE, '[]', 'utf8');
if (!existsSync(FREE_STATE_FILE)) writeFileSync(FREE_STATE_FILE, '{"active":false}', 'utf8');

function getFreeUsers() {
  return JSON.parse(readFileSync(FREE_FILE, 'utf8'));
}

function addFreeUser(telegram_id) {
  let users = getFreeUsers();
  if (!users.includes(telegram_id)) {
    users.push(telegram_id);
    writeFileSync(FREE_FILE, JSON.stringify(users, null, 2));
  }
}

function removeFreeUser(telegram_id) {
  let users = getFreeUsers();
  users = users.filter(id => id != telegram_id);
  writeFileSync(FREE_FILE, JSON.stringify(users, null, 2));
}

function isFreeUser(telegram_id) {
  return getFreeUsers().includes(telegram_id);
}

function setFreeMode(active) {
  writeFileSync(FREE_STATE_FILE, JSON.stringify({ active: !!active }, null, 2));
}

function isFreeMode() {
  try {
    return JSON.parse(readFileSync(FREE_STATE_FILE, 'utf8')).active;
  } catch {
    return false;
  }
}

// Exportar todo como un objeto por default
const free = {
  getFreeUsers,
  addFreeUser,
  removeFreeUser,
  isFreeUser,
  setFreeMode,
  isFreeMode
};

export default free;
