const { addKeyword } = require("@bot-whatsapp/bot");
const welcomeFlow = require("../welcome.flow");
/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */
module.exports = addKeyword(['3']).addAnswer(
    [
        '¡Conoce mas de nuestras tarifas! 🌟',
        'https://www.instagram.com/p/CyTMBzoOYdb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    ], null, async(ctx,{gotoFlow}) => {
        // gotoFlow(welcomeFlow)
    }
    ).addAnswer('Muchas gracias por comunicarse con nosotrso, si requiere algo mas escriba *Menu*')


