const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const cliente_actualFlow = require("./cliente_actual.flow");
const cliente_nuevoFlow = require("./cliente_nuevo.flow");
const defaultFlow = require("./default.flow");
const polizasFlow = require("./polizas.flow");
const pqrs = require("./pqrs");
const fiestaCumpleaños = require("./fiestaCumpleaños")
const inactividad = require("./inactividad.flow")

/**
 * Punto de Entrada!
 * NO Inteligente (no usa intelgencia artificial)
 * Flujo de bienvenida
 */

module.exports = addKeyword(['hola', 'ole', 'alo', 'buenas', 'menu', 'holi', 'hol', 'oe'])
    // module.exports =  addKeyword('BOT')
    .addAnswer('🙌 ¡Hola FlikFlaker! Bienvenid@ a un mundo lleno de piruetas con *Flik-Flak*. Soy tu asistente virtual, *FlikFlakBot*.')
    .addAnswer(
        [
            '*Menú:*',
            '',
            '1. 🌐 Ya eres cliente.',
            '2. 👋 Nuevo FlikFlaker.',
            '3. 📋 Pólizas.',
            '4. 📪 PQRS',
            '5. 🎊 Agenda tu fiesta de cumpleaños.'
            ,
        ],
        { capture: true, idle: Number(process.env.TIEMPO_INACTIVIDAD) },
        async (ctx, { gotoFlow, fallBack }) => {

            if (ctx?.idleFallBack) {
                return gotoFlow(inactividad)
            } else {
                const numero = ctx.body
                switch (numero) {
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
                    case '5': {
                        gotoFlow(fiestaCumpleaños)
                        break;
                    }
                    default: {
                        await gotoFlow(defaultFlow)
                        return fallBack()
                    }
                }
            }


        }
    )