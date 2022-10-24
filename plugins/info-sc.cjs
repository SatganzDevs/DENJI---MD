var handler = async(m, { conn, text, usedPrefix, command }) => {

var str = `Ngapain Banh? Mau Sc? Chat Owner Aja 🗿`
conn.sendButtonDoc(m.chat, str, wm, 'Owner', '/owner', m, {
		contextInfo: {
			externalAdReply: {
				mediaType: 2,
				description: 'BOTSTYLEE',
				title: bottime,
				mediaUrl: 'bit.ly/Papah-Chan', 
				body: '𓃗𓅜',
				thumbnail: profil,
				sourceUrl: 'https://chat.whatsapp.com/DXzNLv2I7mh01ikTbyFXBq',
				showAdAttribution: true, // false
				//renderLargerThumbnail: true // false
			}
		}
	})
}
handler.command = handler.help = ['sc']
handler.tags = ['info']
    
module.exports = handler