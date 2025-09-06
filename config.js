import 'dotenv/config';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

global.prefa = ['','!','.',',',';'] 

fs.watchFile(__filename, () => {
  fs.unwatchFile(__filename)
  console.log(`Update ${__filename}`)
})

// Exportar como objeto nombrado en lugar de default
export const config = {
  BOT_TOKEN: process.env.BOT_TOKEN, // Debe estar definido en .env
  ADMIN_IDS: process.env.ADMIN_IDS
    ? process.env.ADMIN_IDS.split(',').map(id => Number(id.trim()))
    : [7223378630, 7046308321,7867614420] // Puedes poner más IDs aquí
};