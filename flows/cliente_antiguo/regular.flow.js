const { addKeyword } = require("@bot-whatsapp/bot");
const inscripcion_competenciasFlow = require("./elite/inscripcion_competencias.flow");
const pagoFlow = require("./regular/pago.flow");
const ReposicionFlow = require("./regular/Reposicion.flow");
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
        '1. 📋 Reposicion.',
        '2. 📋 Pago.',
        '3. 📋 Incapacidad.',
        '4. 📋 Inscripción festival.',
        '5. 📋 Cambio horario.',
        '',
        '¡Comencemos tu viaje de *Flik-Flak* juntos! ¿En qué puedo ayudarte hoy? 😊✨',
    ],null,null,
    [pagoFlow, ReposicionFlow, incapacidadFlow, inscripcion_festivalFlow, cambio_horarioFlow]
)

