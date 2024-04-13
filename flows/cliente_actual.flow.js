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
    '',
    '1. Poblado: A una cuadra de la estación poblado del metro',
    '2. Palmas: Parque la reserva. A 300m de Indiana Mall',
    '3. Estadio: Coliseo de gimnasia Jorge Hugo Giraldo. Unidad Atanasio Girardot', 
    ],
    { capture: true},
    async (ctx, { state, gotoFlow, fallBack }) => {
        sede = ctx.body;
        if(sede != '1' && sede !='2' && sede != '3'){
            await gotoFlow(defaultFlow)
            return fallBack()
        }else{
            await state.update({ sede: ctx.body })
            return null;
        }
    })
    .addAnswer(
    [
        '¡FlikFlaker! 🌟',
        'Elije que tipo de deportista eres:', 
        '',
        '1. Amateur/Aficionado',
        '2. Élite'
    ],
    { capture: true},

    async (ctx, { state, gotoFlow, fallBack }) => {
        tipo_cliente = ctx.body;
        if(tipo_cliente != '1' && tipo_cliente !='2'){
            await gotoFlow(defaultFlow)
            return fallBack()
        }else{
            await state.update({ tipo_cliente: ctx.body })
            return null;
        }
},
[regularFlow, eliteFlow]
)

