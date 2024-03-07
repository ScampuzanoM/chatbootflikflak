const { addKeyword } = require("@bot-whatsapp/bot");
const welcomeFlow = require("../welcome.flow");
/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */
module.exports = addKeyword(['1']).addAnswer(
    [
        '¡Conoce mas de nuestros programas! 🌟',
        'https://www.instagram.com/reel/C2-LUsmrSCp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    ], null, async(ctx,{gotoFlow}) => {
        // gotoFlow(welcomeFlow)
    }
    ).addAnswer('Muchas gracias por comunicarse con nosotrso, si requiere algo mas escriba *Menu*')


