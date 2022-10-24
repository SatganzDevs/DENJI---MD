var {
	randomBytes
} = require('crypto');

var handler = async (m, {
	conn,
	text
}) => {
	var chats = Object.entries(store.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
	var cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
	var teks = text ? text : cc.text
	conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
	for (var id of chats)
	conn.sendHydrated(id, text, 'wm', global.thumb2, 'https://chat.whatsapp.com/DXzNLv2I7mh01ikTbyFXBq', 'WhatsApp Group', null, null, [
	m.reply('Selesai Broadcast All Chat :)')
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i

handler.owner = true

module.exports = handler

var more = String.fromCharCode(8206)
var readMore = more.repeat(4001)

var randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)