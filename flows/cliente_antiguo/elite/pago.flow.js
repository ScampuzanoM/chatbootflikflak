const { addKeyword } = require("@bot-whatsapp/bot");
const defaultFlow = require("../../default.flow");
const inactividad = require("../../inactividad.flow")

/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */

//const TEL = '+573003278599'
const json = require("../../../roles.json")

module.exports = addKeyword(['1'])
    .addAnswer(
        [
            'TARIFAS ELITE',
            'Recuerda que la tarifa de la mensualidad de nuestras deportistas Élite, son de acuerdo con la cantidad clases e intensidad horaria. '
        ])
    .addAnswer([
        'Te comparto la cuenta 💰💰',
        'CLUB FLIK FLAK S.A.S.',
        'NIT. 901.678.946-0',
        'Bancolombia Ahorros',
        '01600002587']
        , { media: 'https://firebasestorage.googleapis.com/v0/b/flikflka.appspot.com/o/elite-pagos%2Fqr.jpeg?alt=media&token=c18e39a9-3172-4473-9332-329002251be9' })
    .addAnswer([
        '*Menu*',
        '1. ⚠️ Ayuda con el pago',
        '2. 📋 Adjuntar Comprobante de pago'],
        { capture: true, idle: Number(process.env.TIEMPO_INACTIVIDAD) },
        async (ctx, { gotoFlow, flowDynamic, state }) => {
            if (ctx?.idleFallBack) {
                return gotoFlow(inactividad)
            } else {
                opcion = ctx.body
                const myState = state.getMyState();
                const SEDE = json.sedes.find((sede) => sede.id === Number(myState.sede));
                const TEL = SEDE.roles.numero_pagos;
                switch (opcion) {
                    case '1': {
                        const mensaje = `Hola, mi nombre es ${myState.nombre} y necesito ayuda con el pago para el deportista ${myState.nonmbreDeportista}`;
                        // Codificar el mensaje para usarlo en el enlace de WhatsApp
                        const enlaceWhatsApp = encodeURI(`https://wa.me/${TEL}?text=${mensaje}`);
                        // Mensaje final que se enviará a través de tu flujo dinámico
                        const mensajeFinal = `*Haz clic en el siguiente enlace:* 
                    ${enlaceWhatsApp}`;
                        // Enviar el mensaje utilizando tu función flowDynamic
                        return flowDynamic(mensajeFinal);
                    }
                    case '2': {
                        const mensaje = `Hola, mi nombre es ${myState.nombre} y a continuacion adjunto el comprobante de pago`;
                        // Codificar el mensaje para usarlo en el enlace de WhatsApp
                        const enlaceWhatsApp = encodeURI(`https://wa.me/${TEL}?text=${mensaje}`);
                        // Mensaje final que se enviará a través de tu flujo dinámico
                        const mensajeFinal = `*Haz clic en el siguiente enlace:* 
                    ${enlaceWhatsApp}`;
                        // Enviar el mensaje utilizando tu función flowDynamic
                        return flowDynamic(mensajeFinal);
                    }
                    default: {
                        //gotoFlow(defaultFlow)
                        return fallBack('🌟 ¡por favor ingresa una opcion valida! 🌟')
                    }
                }
            }
        })
