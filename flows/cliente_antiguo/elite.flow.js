const { addKeyword } = require("@bot-whatsapp/bot");
const inscripcion_competenciasFlow = require("./elite/inscripcion_competencias.flow");
const pagoFlow = require("./elite/pago.flow");
const informacionFlow = require("./elite/informacion.flow");
/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */
module.exports = addKeyword('2')
.addAnswer('¿Cual es el nombre del deportista?', {capture: true},
    async(ctx,{flowDynamic, state}) => {
            await state.update({ nonmbreDeportista: ctx.body })
            return null;
})
.addAnswer('¿Cual es tu nombre completo? 🌟',{ capture: true},    
    async (ctx, { state ,flowDinamics}) => {
            await state.update({ nombre: ctx.body })
            return null;
})

.addAnswer([
        'Explora las emocionantes opciones que tenemos para ti. ¿List@ para sumergirte en el fascinante universo de la gimnasia artística? 🌍',
        '',
        '*Menú:*',
        '1. 💵 Pago Mensualidad',
        '2. 🏅 Eventos deportivos Elites'
    ],null,null,
    [pagoFlow, informacionFlow]
)

