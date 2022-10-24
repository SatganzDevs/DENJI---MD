import didyoumean from 'didyoumean'
import similarity from 'similarity'
export async function before(m, { match, usedPrefix, command }) {
	if ((usedPrefix = (match[0] || '')[0])) {
		let noPrefix = m.text.replace(usedPrefix, '')
		let args = noPrefix.trim().split` `.slice(1)
		let text = args.join` `
		let help = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
	if (help.includes(noPrefix)) return
		let mean = didyoumean(noPrefix, help)
		let sim = similarity(noPrefix, mean)
		let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
		let name = await conn.getName(who)
		let caption = `👋 Hai ${name} @${who.split("@")[0]}, Apakah yang kamu maksud: *${usedPrefix + mean}*\nSimilarity: *${Number(sim * 100).toFixed(2)}%*`
	if (mean) this.send2ButtonDoc(m.chat, caption, wm, 'Iya', `${usedPrefix + mean} ${text}`, 'Bukan', usedPrefix + '?', m, { mentions: this.parseMention(caption)
		contextInfo: {
			externalAdReply: {
				mediaType: 2,
				description: 'BOTSTYLEE',
				title: bottime,
				mediaUrl: 'bit.ly/Papah-Chan', 
				body: 'ð“ƒ—ð“…œ',
				thumbnail: profil,
				sourceUrl: 'https://chat.whatsapp.com/DXzNLv2I7mh01ikTbyFXBq',
				showAdAttribution: true, // false
				//renderLargerThumbnail: true // false
			}
		}
	})
	}
}
export const disabled = false