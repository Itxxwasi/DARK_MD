import chalk from 'chalk'
import { fileURLToPath } from 'url'
import { watchFile, unwatchFile, readFileSync } from 'fs'

global.owner = 
 [
  ['+923192173398', '𝐖𝐀𝐒𝐈', true]
]
// Put your number here
// [number, he creator/owner?, he developer?]

global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit

// api key here okay
global.xyro = 'LyrK9JMI7N' // https://api.xyroinee.xyz free limit unlimited
global.apilol = 'GataDios' // https://api.lolhuman.xyz free limit unlimited by @BrunoSobrino

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b'
}

 global.thumbnailUrl = [
  'https://telegra.ph/file/fd596f5ef12b47b2e6607.jpg', 'https://telegra.ph/file/fd596f5ef12b47b2e6607.jpg',
  'https://telegra.ph/file/fd596f5ef12b47b2e6607.jpg', 'https://telegra.ph/file/fd596f5ef12b47b2e6607.jpg',
  'https://telegra.ph/file/fd596f5ef12b47b2e6607.jpg', 'https://telegra.ph/file/fd596f5ef12b47b2e6607.jpg',
  'https://telegra.ph/file/55e5af5f33fbd57104187.jpg', 'https://telegra.ph/file/fd596f5ef12b47b2e6607.jpg',
  'https://telegra.ph/file/fd596f5ef12b47b2e6607.jpg', 'https://telegra.ph/file/fd596f5ef12b47b2e6607.jpg'
]

// Sticker WM
global.packname = `「 wasi md 」`
global.author = 'dark md'
global.thumb = readFileSync('./me.png')
global.thumb2 = readFileSync('./me2.jpeg')
global.multiplier = 69 // The higher, The harder levelup

//Text here
global.me = '𝑪𝑹𝑬𝑨𝑻𝑬𝑫 𝑩𝒀 𝑾𝑨𝑺𝑰'
global.bott = '𝐖𝐀𝐒𝐈 𝐌𝐃'
global.nomorown = '923192173398'
// owner put this creator.js
global.str = '-------------'
global.l = '「'
global.r = '」'
global.wait = '```「𝑷𝑳𝒁𝒁 𝑾𝑨𝑰𝑻 𝑫𝑨𝑹𝑲 𝑴𝑫 𝑰𝑵 𝑷𝑹𝑶𝑮𝑹𝑬𝑺𝑺```'
global.eror = '```404 𝑬𝑹𝑹𝑶𝑹```'

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      health: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.cyanBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
