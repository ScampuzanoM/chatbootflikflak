const { addKeyword } = require("@bot-whatsapp/bot");
/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */
module.exports = addKeyword(['3']).addAnswer(
    [
        '¡Conoce mas de nosotrs y nuestros eventos! 🌟',
        '',
        'https://www.instagram.com/reel/C4TeRHRREdG/?utm_source=ig_web_button_native_share'
    ]
    ).addAnswer('Muchas gracias por comunicarse con nosotrso, si requiere algo mas escriba *Menu*')


