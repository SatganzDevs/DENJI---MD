var handler = async m => m.reply(`
╭─「 Donasi 」
│ • TELKOMSEL [081316701742]
│ • DANA [081266891985]
│ • OVO [-]
│ • GOPAY [082398383300]
│ • SHOPPY PAY [082398383300]
│ • Saweria [https://saweria.co/SatganzDevs]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281316701742
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
