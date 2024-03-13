const { addKeyword } = require("@bot-whatsapp/bot");

/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */

const TEL = '+573176827341'

module.exports = addKeyword(['2']).addAnswer(
    [
        '¡Seras dirigido con un asesor persolanizado que te ayudara con tu clase de prueba.! 🌟',

    ], null, async(ctx,{flowDynamic, state}) => {
        const myState = state.getMyState();
        const mensaje = `Hola,
        Estoy ${myState.nombre}
        interesado en la clase de prueba.
        Mi edad es ${myState.edad}.`;

        // Codificar el mensaje para usarlo en el enlace de WhatsApp
        const enlaceWhatsApp = encodeURI(`https://wa.me/${TEL}?text=${mensaje}`);

        // Mensaje final que se enviará a través de tu flujo dinámico
        const mensajeFinal = `*Haz clic en el siguiente enlace para contactarme por WhatsApp:*${enlaceWhatsApp}`;

        // Enviar el mensaje utilizando tu función flowDynamic
        await flowDynamic(mensajeFinal);

    }
    )


