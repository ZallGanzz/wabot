let handler = async (m, { usedPrefix, command, text, args }) => {
  let isEnable = /true|enable|(turn)?on/i.test(command)
  let chat = global.DATABASE._data.chats[m.chat]
  let type = (args[0] || '').toLowerCase()
  switch (type) {
    case 'welcome':
      chat.welcome = isEnable
      break
    case 'delete':
      chat.delete = isEnable
      break
    default:
      return m.reply(`
List option: welcome | delete

Contoh:
${usedPrefix}mode on njer
${usedPrefix}mode off ler 
`.trim())
  }
  m.reply(`
*${type}* MAKLEMAK *${isEnable ? LMK: ''}LMK*BAPAK LU
`.trim())
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff))$/i

module.exports = handler
