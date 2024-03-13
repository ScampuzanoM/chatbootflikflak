const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const cliente_actualFlow = require("./cliente_actual.flow");
const cliente_nuevoFlow = require("./cliente_nuevo.flow");
const asesorFlow = require("./asesor.flow");
const defaultFlow = require("./default.flow");
const polizasFlow = require("./polizas.flow")

/**
 * Punto de Entrada!
 * NO Inteligente (no usa intelgencia artificial)
 * Flujo de bienvenida
 */

// module.exports =  addKeyword(['hola', 'ole', 'alo','buenas','menu'])
module.exports =  addKeyword('BOT')
.addAnswer('🙌 ¡Hola FlikFlaker! Bienvenido/a a un mundo lleno de piruetas con *Flik-Flak*. Soy tu asistente virtual, *FlikFlakBot*.')
.addAnswer(
    [
        'Explora las emocionantes opciones que tenemos para ti. ¿Listo/a para sumergirte en el fascinante universo de la gimnasia artística? 🌍',
        '',
        '**Menú:**',
        '1. 🌐 Identificar si ya eres cliente Accede a tu cuenta y descubre promociones exclusivas.',
        '   - Realiza trámites de pagos de mensualidades de manera rápida y sencilla.',
        '2. 👋 Nuevo FlikFlaker: ¡Bienvenido/a al equipo! Explora las opciones para empezar tu viaje con *Flik-Flak*.',
        '3. 📋 Pólizas: Conoce nuestras políticas y términos.',
        '0. ☎️ Contactar un asesor: Deja tu número y uno de nuestros asesores se comunicará contigo para ofrecerte la mejor asesoría de una manera ¡divertida y personalizada!',
        '',
        '¡Comencemos tu viaje de *Flik-Flak* juntos! ¿En qué puedo ayudarte hoy? 😊✨',
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
            case '0': { 
                gotoFlow(asesorFlow)
                break; 
            } 
            default: { 
                gotoFlow(defaultFlow)
                return fallBack()
            } 
         } 
    })