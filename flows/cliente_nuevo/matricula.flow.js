const { addKeyword } = require("@bot-whatsapp/bot");

/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */

const TEL = '+573176827341'

module.exports = addKeyword(['3'])
.addAnswer('¿Cual es tu nombre ? ',{ capture: true},
    async (ctx, {state}) => {
        await state.update({ nombre: ctx.body })
        return null;
    })
.addAnswer('¿Cual es el nombre del deportista?', {capture: true},
    async(ctx,{flowDynamic, state}) => {
        await state.update({ nonmbreDeportista: ctx.body })
        return null;
    })
.addAnswer('¿Cuantos dias a la semana desea asistir el deportista?',{capture: true}, 
async(ctx,{flowDynamic, state}) => {
    await state.update({ diasSemana: ctx.body })
    return null;
    })
.addAnswer('¿En cual de nuestras sedes deseas matricularte')
.addAnswer([
        'Nuestras sedes:',
        'Poblado: Lunes a Domingo',
        'Palmas: Lunes a Sábado',
        'Estadio: Lunes a Viernes'],
        {capture: true}, 
        async(ctx,{flowDynamic, state}) => {
            await state.update({ sede: ctx.body })
            return null;
})
.addAnswer(
    [
        '¡Seras dirigido con un asesor personalizado que te ayudara con tu proceso de matricula.! 🌟',

    ], null, async(ctx,{flowDynamic, state}) => {
        const myState = state.getMyState();
        const mensaje = `Hola, mi nombre es ${myState.nombre} y estoy interesad@ en el proceso de matrícula para el deportista ${myState.nonmbreDeportista}, desea asistir ${myState.diasSemana} dias en la sede ${myState.sede}  `;

        // Codificar el mensaje para usarlo en el enlace de WhatsApp
        const enlaceWhatsApp = encodeURI(`https://wa.me/${TEL}?text=${mensaje}`);

        // Mensaje final que se enviará a través de tu flujo dinámico
        const mensajeFinal = `*Haz clic en el siguiente enlace:* 
        ${enlaceWhatsApp}`;

        // Enviar el mensaje utilizando tu función flowDynamic
        await flowDynamic(mensajeFinal);

    }
    )


