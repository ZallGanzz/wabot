let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat Oleh Zall JB

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @Zall_Ganzzz
➥ YouTube:
https://youtube.com/channel/UCLcKUSrq3THHHle4V7aZyTQ

*Thanks To :*
kawan Kawan  :)

╠═〘 DONASI 〙 ═
╠➥ Axis : 0831-6927-9519
╠➥ Indosat: 0858-3226-0016
║>Request? Wa.me/6285832260016
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

