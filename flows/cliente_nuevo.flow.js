const { addKeyword } = require("@bot-whatsapp/bot");
const programasFlow = require("./programas.flow");
const clasepruebaFlow = require("./claseprueba.flow");
const tarifasFlow = require("./tarifas.flow");
const matriculaFlow = require("./matricula.flow");
/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */
module.exports = addKeyword('USUARIOS_NO_REGISTRADOS').addAnswer(
    [
        '¡Bienvenido a FlikFlaker! 🌟',
        'Dinos la edad del deportista por favor.',
        'En cualquier momento, si deseas contactar con un asesor, simplemente escribe *asesor* y serás redirigido automáticamente.',
    ],
    { capture: true},

    async (ctx, {state}) => {
        console.log(ctx);
        edad = ctx.body;
        await state.update({ edad: ctx.body })
        return null;
        //return  await flowSecundario;
                // Puedes continuar con el flujo aquí según sea necesario.
        // Por ejemplo, puedes usar el valor capturado en ctx.body (sede) para personalizar más el flujo.
    }).addAnswer(
        [
            'Cual es tu nombre ? 🌟'
        ],
        { capture: true},
    
        async (ctx, {state}) => {
            console.log(ctx);
            nombre = ctx.body;
            await state.update({ nombre: ctx.body })
            return null;
            //return  await flowSecundario;
                    // Puedes continuar con el flujo aquí según sea necesario.
            // Por ejemplo, puedes usar el valor capturado en ctx.body (sede) para personalizar más el flujo.
        }).addAnswer(
    [
        'Explora las emocionantes opciones que tenemos para ti. ¿Listo/a para sumergirte en el fascinante universo de la gimnasia artística? 🌍',
        '',
        '**Menú:**',
        '1. 📋 Programas: Consulta la informacion de nuestros programas.',
        '2. 📋 Clase Prueba: Reservar nuestra clase de prueba',
        '3. 📋 Tarifas: Conoce nuestras tarifas.',
        '4. 📋 Matriculas: Inicia nuestro proceso de matricula.',
        '0. ☎️ Contactar un asesor.',
        '',
        '¡Comencemos tu viaje de *Flik-Flak* juntos! ¿En qué puedo ayudarte hoy? 😊✨',
    ],null,null,
    [programasFlow,clasepruebaFlow,tarifasFlow,matriculaFlow]
)

