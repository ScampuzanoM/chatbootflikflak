const { addKeyword } = require("@bot-whatsapp/bot");

/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */

const TEL = '+573508363260'

module.exports = addKeyword(['PQRS'])
.addAnswer('¡Seras dirigido con un asesor personalizado que te ayudara con la queja.! 🌟', 
    {capture: false}, async(ctx,{flowDynamic, state}) => {
        const myState = state.getMyState();
        const mensaje = `Hola,  necesito dejar una PQR's .`;

        // Codificar el mensaje para usarlo en el enlace de WhatsApp
        const enlaceWhatsApp = encodeURI(`https://wa.me/${TEL}?text=${mensaje}`);

        // Mensaje final que se enviará a través de tu flujo dinámico
        const mensajeFinal = `*Haz clic en el siguiente enlace:* 
        ${enlaceWhatsApp}`;
        // Enviar el mensaje utilizando tu función flowDynamic
        await flowDynamic(mensajeFinal);

    }
    )


