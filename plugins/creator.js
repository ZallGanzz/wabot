let handler = function (m) {
  // this.sendContact(m.chat, '6283169279519', 'Xyraa Canss', m)
  this.sendContact(m.chat, '6285832260016', 'Admin Zall Ganzz', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
