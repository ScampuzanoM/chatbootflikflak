const { addKeyword } = require("@bot-whatsapp/bot");
/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */
module.exports = addKeyword(['1']).addAnswer(
    [
        '¡Bienvenido de nuevo, FlikFlaker! 🌟',
        'Dinos a qué sede de Flik-Flak perteneces (Poblado, Palmas o Estadio).',
        'En cualquier momento, si deseas contactar con un asesor, simplemente escribe *asesor* y serás redirigido automáticamente.',
    ],
    { capture: true},

    async (ctx, { flowSecundario, endFlow }) => {
        console.log(ctx);
        if (ctx.body == '❌ Cancelar solicitud') {
            return endFlow({
                body: '❌ Su solicitud ha sido cancelada ❌'
            });
        }
        sede = ctx.body;
        return  await flowSecundario;
                // Puedes continuar con el flujo aquí según sea necesario.
        // Por ejemplo, puedes usar el valor capturado en ctx.body (sede) para personalizar más el flujo.
    },
    []
).addAnswer(
    [
        '¡FlikFlaker! 🌟',
        'Eres Elite o entrenas una sola vez a la semana?',
        'Responde Elite o amateur',
    ],
    { capture: true},

    async (ctx, { flowSecundario, endFlow }) => {
        console.log(ctx)
        if (ctx.body == '❌ Cancelar solicitud') {
            return endFlow({
                body: '❌ Su solicitud ha sido cancelada ❌'
            });
        }
        sede = ctx.body;
        return  await flowSecundario;
                // Puedes continuar con el flujo aquí según sea necesario.
        // Por ejemplo, puedes usar el valor capturado en ctx.body (sede) para personalizar más el flujo.
    },
    []
)

