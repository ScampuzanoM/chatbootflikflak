const { addKeyword } = require("@bot-whatsapp/bot");

/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */
module.exports = addKeyword(['3'])
.addAnswer(
    [
        '¡Conocenos un poco mas! 🌟',
        'https://www.instagram.com/reel/C5msLL2RGjO/?igsh=Z3dlMDByeXdkaGZj'
    ]
)
    .addAnswer('Muchas gracias por comunicarse con nosotros, si requiere algo mas escriba *Menu*')


