const { addKeyword } = require("@bot-whatsapp/bot");

/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */

//const TEL = '+573243009519'
const json = require("../../../roles.json")

module.exports = addKeyword(['2']).addAnswer(
    [
        '¡Seras dirigido con un asesor personalizado que te ayudara con tu cambio de horario! 🌟',

    ], null, async(ctx,{flowDynamic, state}) => {
        const myState = state.getMyState();
        const mensaje = `Hola,  mi nombre es ${myState.nombre} y necesito cambiar un horario para el deportista ${myState.nonmbreDeportista}`
        const SEDE = json.sedes.find((sede) => sede.id === Number(myState.sede) );
        const TEL = SEDE.roles.cambio_horario;
        // Codificar el mensaje para usarlo en el enlace de WhatsApp
        const enlaceWhatsApp = encodeURI(`https://wa.me/${TEL}?text=${mensaje}`);

        // Mensaje final que se enviará a través de tu flujo dinámico
        const mensajeFinal = `*Haz clic en el siguiente enlace:* 
        ${enlaceWhatsApp}`;
        // Enviar el mensaje utilizando tu función flowDynamic
        return flowDynamic(mensajeFinal);

    }
    )


