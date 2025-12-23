
/*

     
    👇👇👇 𝙱𝙰𝙲𝙰 𝙸𝙽𝙸 𝙿𝙴𝙽𝚃𝙸𝙽𝙶 !! 👇👇👇

 * Script :  Made By Anggazyy ❤😁
 * Script : Di lindungi dengan ketat !
 * Note : This script not for free, hargai creator.
 * Thanks To ❤ : Saqioo, Hanmood, Anggazyy, Zaenshi 
 * Terimakasih telah berkontribusi di script ini :)
 * Owner utama : https://t.me/anggazyydev
 * Saluran Saya : https://whatsapp.com/channel/0029VakZidSIXnlmikWIgS1z
 * Script Security ( Anti Air Bug )
 
 * Attention : terimakasi telah membeli script devil ini
              semoga kalian betah pakai script ini
              jangan pernah beli ke orang cukup
              beli ke owner langsung (anggazyydev)
 *Thank You...
 

*/
const { modul } = require('./module');
const { human } = modul;
const { sizeFormatter } = human

const unixTimestampSeconds = (date = new Date()) => Math.floor(date.getTime() / 1000)


exports.formatp = sizeFormatter({
    std: 'JEDEC', 
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})



