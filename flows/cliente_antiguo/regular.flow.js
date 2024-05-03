const { addKeyword } = require("@bot-whatsapp/bot");

const pagoFlow = require("./regular/pago.flow");
const reposicionFlow = require("./regular/reposicion.flow");
const incapacidadFlow = require("./regular/incapacidad.flow");
const inscripcion_festivalFlow = require("./regular/inscripcion_festival.flow");
const cambio_horarioFlow = require("./regular/cambio_horario.flow");
const defaultFlow = require("../default.flow");
const inactividad = require("../inactividad.flow")

/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */
module.exports = addKeyword('1')
    .addAnswer('¿Cual es el nombre del deportista? 🌟', { capture: true, idle: Number(process.env.TIEMPO_INACTIVIDAD) },
        async (ctx, { gotoFlow, flowDynamic, state }) => {
            if (ctx?.idleFallBack) {
                return gotoFlow(inactividad)
            } else {
                await state.update({ nonmbreDeportista: ctx.body })
                return null;
            }
        })
    .addAnswer('¿Cual es tu nombre completo? 🌟', { capture: true, idle: Number(process.env.TIEMPO_INACTIVIDAD) },
        async (ctx, { gotoFlow, state, flowDinamics }) => {
            if (ctx?.idleFallBack) {
                return gotoFlow(inactividad)
            } else {
                await state.update({ nombre: ctx.body })
                return null;
            }
        })
    .addAnswer([
        '*Menu*',
        '',
        '1. 🔁 Reposición de clases.',
        '2. 🗓️ Cambio horario.',
        '3. 💊 Reportar Incapacidad.',
        '4. 💵 Realizar pago.',
        '5. 🏅 Inscripción a eventos deportivos.',
    ], { capture: true, idle: Number(process.env.TIEMPO_INACTIVIDAD) },
        async (ctx, { gotoFlow, fallBack }) => {
            if (ctx?.idleFallBack) {
                return gotoFlow(inactividad)
            } else {
                const numero = ctx.body
                if (numero != '1' && numero != '2' && numero != '3' && numero != '4' && numero != '5') {
                    //await gotoFlow(defaultFlow)
                    return fallBack('🌟 ¡por favor ingresa una opcion valida! 🌟')
                }
            }
        },
        [reposicionFlow, cambio_horarioFlow, incapacidadFlow, pagoFlow, inscripcion_festivalFlow]
    )

