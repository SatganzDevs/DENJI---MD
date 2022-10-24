var linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
var handler = m => m
handler.before = async function(m, {
	isAdmin,
	isBotAdmin,
	participants
}) {
	if (m.isBaileys && m.fromMe)
		return !0
	if (!m.isGroup) return !1
	var chat = db.data.chats[m.chat]
	var bot = db.data.settings[this.user.jid] || {}
	var hapus = m.key.participant
    var bang = m.key.id
	var isGroupLink = linkRegex.exec(m.text)
	if (isGroupLink) {
		if (isBotAdmin) {
			var linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
			if (m.text.includes(linkThisGroup)) throw !0
		}
		if (isBotAdmin) {
		    await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }}) } 
		} else if (!bot.restrict) return m.reply('Owner disable auto kick!')
	}
	return !0
}
handler.group = true
module.exports = handler
