const { addKeyword } = require("@bot-whatsapp/bot");

/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */

const TEL = '+573043760881'

module.exports = addKeyword(['ASESOR_']).addAnswer(
    [
        '¿Cual es la edad del deportista?'
    ], 
    { capture: true},
    
    async (ctx, {state}) => {
        console.log(ctx);
        edad = ctx.body;
        await state.update({ edad: ctx.body })
        return null;
    },[])
.addAnswer(['¿Cual es tu nombre?'],{ capture: true},
    async (ctx, {state}) => {
        console.log(ctx);
        nombre = ctx.body;
        await state.update({ nombre: ctx.body })
        return null;
    }
)
.addAnswer(['¡Seras dirigido con un asesor personalizado.! 🌟'], null, async(ctx,{flowDynamic, state}) => {
        const myState = state.getMyState();
        const mensaje = `Hola,
        Estoy ${myState.nombre}
        interesado en el proceso de matrícula.
        Mi edad es ${myState.edad}.`;

        // Codificar el mensaje para usarlo en el enlace de WhatsApp
        const enlaceWhatsApp = encodeURI(`https://wa.me/${TEL}?text=${mensaje}`);

        // Mensaje final que se enviará a través de tu flujo dinámico
        const mensajeFinal = `*Haz clic en el siguiente enlace para contactarme por WhatsApp:* ${enlaceWhatsApp}`;

        // Enviar el mensaje utilizando tu función flowDynamic
        await flowDynamic(mensajeFinal);

    }
    )


