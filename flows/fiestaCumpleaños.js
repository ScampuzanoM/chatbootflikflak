const { addKeyword } = require("@bot-whatsapp/bot");

/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */

const TEL = '573016453429'

module.exports = addKeyword(['fiestaCumpleaños'])
.addAnswer(
    [
        '¡Conocenos un poco mas sobre nuestras reservas de cumpleaños! 🌟'
    ]
)
.addAnswer('Cuentanos la edad de el/la cumpleañer@',{ capture: true},
    async (ctx, {state}) => {
        await state.update({ edad_cumpleañero: ctx.body })
        return null;
    })
.addAnswer('Cual es el nombre de el/la cumpleañer@',{ capture: true},
    async (ctx, {state}) => {
        await state.update({ nombre_cumpleañero: ctx.body })
        return null;
    })
.addAnswer(['¿Donde deseas tu fiesta?', '1. En alguna de nuestras sedes', '2. En tu casa'],
{ capture: true},
async (ctx, {state}) => {
    switch (ctx.body) {
        case '1':
            await state.update({ sede_cumpleaños: 'en una sede de flik flak' })
            break;
        case '2':
            await state.update({ sede_cumpleaños: 'en casa' })
            break;
        default:
            await gotoFlow(defaultFlow)
            return fallBack()
    }
})
.addAnswer('¡Seras dirigido con un asesor personalizado que te ayudara con la reserva.! 🌟', 
    {capture: false}, async(ctx,{flowDynamic, state}) => {
        const myState = state.getMyState();
        const mensaje = `Hola,  necesito hacer una reserva para una fiesta de cumpleaños ${myState.sede_cumpleaños} para el cumpleañero ${myState.nombre_cumpleañero} `;

        // Codificar el mensaje para usarlo en el enlace de WhatsApp
        const enlaceWhatsApp = encodeURI(`https://wa.me/${TEL}?text=${mensaje}`);

        // Mensaje final que se enviará a través de tu flujo dinámico
        const mensajeFinal = `*Haz clic en el siguiente enlace:* 
        ${enlaceWhatsApp}`;
        // Enviar el mensaje utilizando tu función flowDynamic
        await flowDynamic(mensajeFinal);

    }
    )


