const { addKeyword } = require("@bot-whatsapp/bot");
const welcomeFlow = require("./welcome.flow");
/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */
module.exports = addKeyword(['2']).addAnswer(
    [
        '¡Seras dirigido con un asesor persolanizado que te ayudara a agendar tu clase de prueba.! 🌟',
    ], null, async(ctx,{gotoFlow}) => {
        // gotoFlow(welcomeFlow)
    }
    )


