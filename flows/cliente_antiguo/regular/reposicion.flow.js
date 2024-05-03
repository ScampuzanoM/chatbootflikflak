const { addKeyword } = require("@bot-whatsapp/bot");

/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */

//const TEL = '+573508363260'
const json = require("../../../roles.json")

module.exports = addKeyword(['1']).addAnswer(
    [
        '¡Seras dirigido con un asesor personalizado que te ayudara con tu clase de reposición! 🌟',

    ], null, async(ctx,{flowDynamic, state}) => {
        const myState = state.getMyState();
        const mensaje = `Hola,  mi nombre es ${myState.nombre} y necesito reponer una clase para el deportista ${myState.nonmbreDeportista}`
        const SEDE = json.sedes.find((sede) => sede.id === Number(myState.sede) );
        const TEL = SEDE.roles.numero_reposicion;
        // Codificar el mensaje para usarlo en el enlace de WhatsApp
        const enlaceWhatsApp = encodeURI(`https://wa.me/${TEL}?text=${mensaje}`);

        // Mensaje final que se enviará a través de tu flujo dinámico
        const mensajeFinal = `*Haz clic en el siguiente enlace:* 
        ${enlaceWhatsApp}`;
        // Enviar el mensaje utilizando tu función flowDynamic
        return flowDynamic(mensajeFinal);

    }
    )


