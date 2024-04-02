const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const cliente_actualFlow = require("./cliente_actual.flow");
const cliente_nuevoFlow = require("./cliente_nuevo.flow");
const asesorFlow = require("./asesor.flow");
const defaultFlow = require("./default.flow");
const polizasFlow = require("./polizas.flow");
const pqrs = require("./pqrs");

/**
 * Punto de Entrada!
 * NO Inteligente (no usa intelgencia artificial)
 * Flujo de bienvenida
 */


//module.exports =  addKeyword(['hola', 'ole', 'alo','buenas','menu'])
module.exports =  addKeyword('BOT')
.addAnswer('🙌 ¡Hola FlikFlaker! Bienvenid@ a un mundo lleno de piruetas con *Flik-Flak*. Soy tu asistente virtual, *FlikFlakBot*.')
.addAnswer(
    [
        '*Menú:*',
        '1. 🌐 Ya eres cliente.',
        '2. 👋 Nuevo FlikFlaker.',
        '3. 📋 Pólizas.',
        '4. 📪 Quejas y reclamos '
        ,
    ],
    {capture: true}, async (ctx,{gotoFlow, fallBack}) => {

        const numero = ctx.body
        switch(numero) { 
            case '1': { 
                gotoFlow(cliente_actualFlow)
               break; 
            } 
            case '2': { 
                gotoFlow(cliente_nuevoFlow)
                break; 
            } 
            case '3': { 
                gotoFlow(polizasFlow)
                break; 
            } 
            case '4': { 
                gotoFlow(pqrs)
                break; 
            } 
            // case '0': { 
            //     gotoFlow(asesorFlow)
            //     break; 
            // } 
            default: { 
                gotoFlow(defaultFlow)
                return fallBack()
            } 
         } 
    })