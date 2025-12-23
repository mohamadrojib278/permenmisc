let handler = async (m, { conn }) => {
  try {
    const thumb = 'https://telegra.ph/file/b27e064ee5e69705b81fd.jpg'
    const m2 = `> </> PermenMDXDDoS

-------------------
\`| .ipinfo\`
\`| .macinfo\`
\`| .methods\`
\`| .ddos\`
\`| .proxy\`
\`| .ua\`
-------------------

*PermenMDXDDoS By PermenMD*
`;

conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: `PermenMDXDDoS`,
body: `Cheapest DDoS Bot By PermenMD`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: `https://telegra.ph/file/aa15d66762da2caca8d5f.png`,
sourceUrl: ``
}}, text: m2}, {quoted: m})
	  } catch (e) {
    conn.reply(m.chat, 'Menu Error Bejir', m);
    throw e;
  }
};

handler.help = ['misc'];
handler.tags = ['main'];
handler.command = /^(misc)$/i;
module.exports = handler
