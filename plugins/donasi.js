let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • AXIS [083169279519]
│ • INDOSAT [085832260016]
│ • Gopay [081357302007]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285832260016
╰────

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal Indomaret
2.) Bilang ke konter terdekat..
"Beli pulsa telkomsel"
3.)Dan terus masukkan nomor kami 085832260016
4.) Jika sudah kirim bukti ke sini.. Terimakasih
*Kalau tidak juga gak papa*👍🏻
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
