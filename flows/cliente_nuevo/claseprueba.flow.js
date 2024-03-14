const { addKeyword } = require("@bot-whatsapp/bot");

/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */

const TEL = '+573176827341'

module.exports = addKeyword(['2']).addAnswer(
    [
        'Bienvenid@s 🥳🥳',
        'Flikflakers, recuerda que en tu clase de prueba no solo podrás conocernos a nosotros, a nuestros profesores y la metodología de las clases; sino que también aprovecharemos para conocerte e identificar el nivel de fuerza, flexibilidad y destreza motriz. De esta manera, asignar un grupo adecuado para que tengas un mejor desarrollo y aprendizaje.',
        'Después de la clase de prueba, se acordará el horario según el nivel. Tenemos clases de lunes a domingo.🤸🏻‍♂️🤸🏻‍♂️🤸🏻‍♂️',
        '',
        '📍 NUESTRAS SEDES',
        '',
        '🤸🏻‍♀️ Estadio: Coliseo de gimnasia Jorge Hugo Giraldo. Unidad Atanasio Girardot',
        '🤸🏻‍♀️ Poblado: A una cuadra de la estación poblado del metro',
        '🤸🏻‍♀️ Palmas: Parque la reserva. A 300m de Indiana Mall',
        '',
        'Las clases de prueba se realizan en la sede Poblado y Palmas 📍(duración 1 h):',
        '',
        'Inversión 💰💰💰',
        'Sede Poblado $30.000',
        'Sede Palmas $40.000',
        '',
        'NOTA:',
        'Los menores de 3 años deben ingresar con acompañante a la clase.',
        '' ,
        'Para agendar la clase de prueba seras dirigido con un asesor personalizado que te ayudara! 🌟',

    ], null, async(ctx,{flowDynamic, state}) => {
        const myState = state.getMyState();
        const mensaje = `Hola,
        Estoy ${myState.nombre}
        interesado en la clase de prueba.
        Mi edad es ${myState.edad}.`;

        // Codificar el mensaje para usarlo en el enlace de WhatsApp
        const enlaceWhatsApp = encodeURI(`https://wa.me/${TEL}?text=${mensaje}`);

        // Mensaje final que se enviará a través de tu flujo dinámico
        const mensajeFinal = `*Haz clic en el siguiente enlace para contactarme por WhatsApp:*${enlaceWhatsApp}`;

        // Enviar el mensaje utilizando tu función flowDynamic
        await flowDynamic(mensajeFinal);

    }
    )


