const { addKeyword } = require("@bot-whatsapp/bot");

const pagoFlow = require("./regular/pago.flow");
const reposicionFlow = require("./regular/reposicion.flow");
const incapacidadFlow = require("./regular/incapacidad.flow");
const inscripcion_festivalFlow = require("./regular/inscripcion_festival.flow");
const cambio_horarioFlow = require("./regular/cambio_horario.flow");
/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */
module.exports = addKeyword('2').addAnswer('Cual es tu nombre ? 🌟',
{ capture: true},
        async (ctx, { state ,flowDinamics}) => {
            console.log(ctx);
            nombre = ctx.body;
            await state.update({ nombre: ctx.body })
            return null;
        })
        .addAnswer([
        'Explora las emocionantes opciones que tenemos para ti. ¿Listo/a para sumergirte en el fascinante universo de la gimnasia artística? 🌍',
        '',
        '**Menú:**',
        '1. 📋 Reposición de clases.',
        '2. 📋 Cambio horario.',
        '3. 📋 Reportar Incapacidad.',
        '4. 📋 Información Pagos.',
        '5. 📋 Inscripción a inventos deportivos.',
        '',
        '¡Comencemos tu viaje de *Flik-Flak* juntos! ¿En qué puedo ayudarte hoy? 😊✨',
    ],null,null,
    [reposicionFlow, cambio_horarioFlow,incapacidadFlow, pagoFlow, inscripcion_festivalFlow]
)

