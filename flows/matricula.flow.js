const { addKeyword } = require("@bot-whatsapp/bot");
const welcomeFlow = require("./welcome.flow");
/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */

const TEL = '+573043760881'

module.exports = addKeyword(['4']).addAnswer(
    [
        '¡Seras dirigido con un asesor persolanizado que te ayudara con tu proceso de matricula.! 🌟',

    ], null, async(ctx,{flowDynamic, state}) => {
        const myState = state.getMyState();
        const msn = `Hola estoy ${myState.nombre} interesado en el proceso de matricula mi edad es ${myState.edad}`
        const link = encodeURI(`https://wa.me/${TEL}?text=${msn}`);
        await flowDynamic(`**Dar click en el siguiente link** ${link}`)

    }
    )


