const { addKeyword } = require("@bot-whatsapp/bot");
const inactividad = require("./inactividad.flow")

/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */

const TEL = '573016471547'

module.exports = addKeyword(['vacacionesRecreativa'])
    .addAnswer('¡Seras dirigido con un asesor personalizado que te ayudara con toda la informacion.! 🌟',
        { capture: false }, async (ctx, { flowDynamic, state }) => {
            const myState = state.getMyState();
            const mensaje = `Hola, necesito recibir informacion sobre vacaciones recreativas `;

            // Codificar el mensaje para usarlo en el enlace de WhatsApp
            const enlaceWhatsApp = encodeURI(`https://wa.me/${TEL}?text=${mensaje}`);

            // Mensaje final que se enviará a través de tu flujo dinámico
            const mensajeFinal = `*Haz clic en el siguiente enlace:*
        ${enlaceWhatsApp}`;
            // Enviar el mensaje utilizando tu función flowDynamic
            return flowDynamic(mensajeFinal);

        }
    )


