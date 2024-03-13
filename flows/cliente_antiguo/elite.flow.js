const { addKeyword } = require("@bot-whatsapp/bot");
const inscripcion_competenciasFlow = require("./elite/inscripcion_competencias.flow");
const pagoFlow = require("./elite/pago.flow");
const informacionFlow = require("./elite/informacion.flow");
/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */
module.exports = addKeyword('1').addAnswer('Cual es tu nombre ? 🌟',
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
        '1. 📋 Inscripción de competencias.',
        '2. 📋 Pago Mensualidad',
        '3. 📋 Información(Competencias, campamentos...)',
        '',
        '¡Comencemos tu viaje de *Flik-Flak* juntos! ¿En qué puedo ayudarte hoy? 😊✨',
    ],null,null,
    [inscripcion_competenciasFlow, pagoFlow, informacionFlow]
)

