const { addKeyword } = require("@bot-whatsapp/bot");

/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */
module.exports = addKeyword(['1']).addAnswer(
    [
        '¡Conoce mas de nuestros programas! 🌟',
        'https://www.instagram.com/reel/C2-LUsmrSCp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    ], {capture:true}, async(ctx,{gotoFlow}) => {
        console.log(ctx.body)
        return null;
        // gotoFlow(welcomeFlow)
    }
    ).addAnswer('Muchas gracias por comunicarse con nosotrso, si requiere algo mas escriba *Menu*')


