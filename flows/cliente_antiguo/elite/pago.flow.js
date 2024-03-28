const { addKeyword } = require("@bot-whatsapp/bot");

/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */

const TEL = '+573508363260'

module.exports = addKeyword(['1'])
.addAnswer(
    [
        'TARIFAS ELITE',
        'Recuerda que la tarifa de la mensualidad de nuestras deportistas Élite, son de acuerdo con la cantidad clases e intensidad de horaria. '
    ])
.addAnswer('Poblado', {media: 'https://firebasestorage.googleapis.com/v0/b/flikflka.appspot.com/o/elite-pagos%2Fpoblado.jpeg?alt=media&token=c18e39a9-3172-4473-9332-329002251be9'})
.addAnswer('Palmas', {media: 'https://firebasestorage.googleapis.com/v0/b/flikflka.appspot.com/o/elite-pagos%2Fpalmas.jpeg?alt=media&token=c18e39a9-3172-4473-9332-329002251be9'})
.addAnswer('Estadio', {media: 'https://firebasestorage.googleapis.com/v0/b/flikflka.appspot.com/o/elite-pagos%2Festadio.jpeg?alt=media&token=c18e39a9-3172-4473-9332-329002251be9'})
.addAnswer([
    'Te comparto la cuenta 💰💰',
    'CLUB FLIK FLAK S.A.S.',
    'NIT. 901.678.946-0',
    'Bancolombia Ahorros',
    '01600002587']
    ,{media: 'https://firebasestorage.googleapis.com/v0/b/flikflka.appspot.com/o/elite-pagos%2Fqr.jpeg?alt=media&token=c18e39a9-3172-4473-9332-329002251be9'})
.addAnswer(
    [
        '¡Seras dirigido con un asesor personalizado que te ayudara con el pago.! 🌟',

    ], null, async(ctx,{flowDynamic, state}) => {
        const myState = state.getMyState();
        const mensaje = `Hola, mi nombre es ${myState.nombre} y a continuacion adjunto el comprobante de pago` ;

        // Codificar el mensaje para usarlo en el enlace de WhatsApp
        const enlaceWhatsApp = encodeURI(`https://wa.me/${TEL}?text=${mensaje}`);

        // Mensaje final que se enviará a través de tu flujo dinámico
        const mensajeFinal = `*Haz clic en el siguiente enlace:* 
        ${enlaceWhatsApp}`;
        // Enviar el mensaje utilizando tu función flowDynamic
        await flowDynamic(mensajeFinal);

    }
    )


