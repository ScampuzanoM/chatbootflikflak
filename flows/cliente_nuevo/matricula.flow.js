const { addKeyword } = require("@bot-whatsapp/bot");
const defaultFlow = require("../default.flow");
const inactividad = require("..//inactividad.flow")

/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */

//const TEL = '+573176827341'
const json = require("../../roles.json")

module.exports = addKeyword(['2'])
    .addAnswer('¿Cual es tu nombre ? ', { capture: true, idle: Number(process.env.TIEMPO_INACTIVIDAD) },
        async (ctx, {gotoFlow, state }) => {
            if (ctx?.idleFallBack) {
                return gotoFlow(inactividad)
            } else {
                await state.update({ nombre: ctx.body })
                return null;
            }
        })
    .addAnswer('¿Cual es el nombre del deportista?', { capture: true, idle: Number(process.env.TIEMPO_INACTIVIDAD) },
        async (ctx, {gotoFlow, flowDynamic, state }) => {
            if (ctx?.idleFallBack) {
                return gotoFlow(inactividad)
            } else {
                await state.update({ nonmbreDeportista: ctx.body })
                return null;
            }
        })
    .addAnswer('¿Cuantos dias a la semana desea asistir el deportista?', { capture: true, idle: Number(process.env.TIEMPO_INACTIVIDAD) },
        async (ctx, {gotoFlow, flowDynamic, state }) => {
            if (ctx?.idleFallBack) {
                return gotoFlow(inactividad)
            } else {
                await state.update({ diasSemana: ctx.body })
                return null;
            }
        })
    .addAnswer('¿En cual de nuestras sedes deseas matricularte?')
    .addAnswer(['1. Poblado: A una cuadra de la estación poblado del metro',
        '2. Palmas: Parque la reserva. A 300m de Indiana Mall',
        '3. Estadio: Coliseo de gimnasia Jorge Hugo Giraldo. Unidad Atanasio Girardot'],
        { capture: true, idle: Number(process.env.TIEMPO_INACTIVIDAD) },
        async (ctx, { state, gotoFlow, fallBack }) => {
            if (ctx?.idleFallBack) {
                return gotoFlow(inactividad)
            } else {
                id_sede = ctx.body;
                if (id_sede != '1' && id_sede != '2' && id_sede != '3') {
                    await gotoFlow(defaultFlow)
                    return fallBack()
                } else {
                    const SEDE = json.sedes.find((sede) => sede.id === Number(id_sede));
                    const TEL = SEDE.roles.numero_matriculas
                    await state.update({ sede: ctx.body })
                    return null;
                }
            }
        })
    .addAnswer(
        [
            '¡Seras dirigido con un asesor personalizado que te ayudara con tu proceso de matricula.! 🌟',

        ], null, async (ctx, { flowDynamic, state }) => {
            const myState = state.getMyState();
            const SEDE = json.sedes.find((sede) => sede.id === Number(id_sede));
            const TEL = SEDE.roles.numero_matriculas
            const SEDE_DESC = SEDE.sede

            const mensaje = `Hola, mi nombre es ${myState.nombre} y estoy interesad@ en el proceso de matrícula para el deportista ${myState.nonmbreDeportista}, desea asistir ${myState.diasSemana} dias en la sede ${SEDE_DESC}  `;

            // Codificar el mensaje para usarlo en el enlace de WhatsApp
            const enlaceWhatsApp = encodeURI(`https://wa.me/${TEL}?text=${mensaje}`);

            // Mensaje final que se enviará a través de tu flujo dinámico
            const mensajeFinal = `*Haz clic en el siguiente enlace:* 
        ${enlaceWhatsApp}`;

            // Enviar el mensaje utilizando tu función flowDynamic
            await flowDynamic(mensajeFinal);

        }
    )


