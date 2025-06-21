const fs = require('fs')
const file = require.resolve(__filename)

global.prefa = ['','!','.',',',';'] 

fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})

const config = {
  // Mover token a variables de entorno
  BOT_TOKEN: process.env.BOT_TOKEN || '8171241707:AAEDHi2KRbBBld-F15-Te2oBxkaBN4fuF08',
  // Límites de uso
  LIMITS: {
    MAX_SESSIONS_PER_USER: 1,
    MAX_CRASHES_PER_DAY: 50,
    COOLDOWN_MINUTES: 5
  },
  // IDs de administradores
  ADMIN_IDS: [7223378630],
  // Precios
  PRICES: {
    DAY: 5,
    WEEK: 25,
    MONTH: 80,
    YEAR: 800
  }
};

module.exports = config;