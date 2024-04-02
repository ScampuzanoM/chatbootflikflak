const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const eliteFlow = require("./cliente_antiguo/elite.flow");
const defaultFlow = require("./default.flow");
const regularFlow = require("./cliente_antiguo/regular.flow");

/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */
module.exports = addKeyword('USUARIOS_REGISTRADOS')
    .addAnswer(['¡Bienvenido de nuevo, FlikFlaker! 🌟',
    'Dinos a qué sede de Flik-Flak perteneces', 
    '1. Estadio: Coliseo de gimnasia Jorge Hugo Giraldo. Unidad Atanasio Girardot', 
    '2. Poblado: A una cuadra de la estación poblado del metro',
    '3. Palmas: Parque la reserva. A 300m de Indiana Mall',
    ],
    { capture: true},
    async (ctx, { state }) => {
        console.log(ctx);
        sede = ctx.body;
        await state.update({ sede: ctx.body })
        return null;
    })
    .addAnswer(
    [
        '¡FlikFlaker! 🌟',
        'Elije que tipo de deportista eres:', 
        '1. Amateur/Aficionado',
        '2. Élite'
    ],
    { capture: true},

    async (ctx, { state, gotoFlow }) => {
        console.log(ctx);
        
        tipo_cliente = ctx.body;
        await state.update({ tipo_cliente: ctx.body })
},
[regularFlow, eliteFlow]
)

