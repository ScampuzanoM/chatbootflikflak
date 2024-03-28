const { addKeyword } = require("@bot-whatsapp/bot");

/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */

const TEL = '+573176827341'

module.exports = addKeyword(['1'])
.addAnswer('¿Cual es tu nombre ? ',{ capture: true},
    async (ctx, {state}) => {
        await state.update({ nombre: ctx.body })
        return null;
    })
.addAnswer('¿Cual es el nombre del deportista?', {capture: true},
    async(ctx,{flowDynamic, state}) => {
        await state.update({ nonmbreDeportista: ctx.body })
        return null;
    })
.addAnswer('¿Cual es la experiencia del deportista en meses?', {capture: true},
    async(ctx,{flowDynamic, state}) => {
        await state.update({ experiencia: ctx.body })
        return null;
    })
.addAnswer('¿Cual es la edad del deportista?', {capture: true},
    async(ctx,{flowDynamic, state}) => {
        await state.update({ edad: ctx.body })
        return null;
    })
.addAnswer(['*¿Para que la clase de prueba?*',''])
.addAnswer(['Flikflakers, recuerda que en tu clase de prueba no solo podrás conocernos a nosotros, a nuestros profesores y la metodología de las clases; sino que también aprovecharemos para conocerte e identificar el nivel de fuerza, flexibilidad y destreza motriz. De esta manera, asignar un grupo adecuado para que tengas un mejor desarrollo y aprendizaje.',''])
.addAnswer(['Después de la clase de prueba, se acordará el horario según el nivel. Tenemos clases de lunes a domingo. 🤸🏻‍♂️🤸🏻‍♂️🤸🏻‍♂️',''])
.addAnswer(['¡Recuerda que puedes realizar el pago por transferencia o en efectivo en nuestra sede! ¡Elige la opción que más te convenga! 🏦💵',''])
.addAnswer('*HORARIOS CLASE DE PRUEBA*')
.addAnswer(
    ['*POBLADO*',
     'Lunes 2 -3 AÑOS 2:00pm',
     'Lunes 6-10 AÑOS 4:00pm',
     'Martes 3 - 4 AÑOS 2:00pm',
     'Sabado 6-10 AÑOS 12:00m' ,
     'Sabado 12-16 AÑOS 12:00pm'])
.addAnswer(
    ['*PALMAS*',
     'Martes 6 - 10 AÑOS 5:00pm',
     'Miércoles 1 -2 años 3:00pm',
     'Jueves 3-4 aÑOS 3:00pm',
     'Viernes 2 a 3 años 3:00pm ' ,
     'Viernes 6 - 10 años 5:00pm',''])
.addAnswer('Por favor, nos confirma si deseas asistir a la clase de prueba para que podamos reservar su lugar y brindarles la mejor experiencia posible.')
.addAnswer(['*Por favor escribe "SI" o "NO"* '],{ capture: true}, 
    async(ctx,{flowDynamic, state}) => {
        const myState = state.getMyState();
        const respuesta = ctx.body;
        const mensaje = `Hola, mi nombre es ${myState.nombre} y estoy interesad@ en la clase de prueba para el deportista ${myState.nonmbreDeportista} que tiene una edad de ${myState.edad} años y una experiencia de ${myState.experiencia} meses `;

        // Codificar el mensaje para usarlo en el enlace de WhatsApp
        const enlaceWhatsApp = encodeURI(`https://wa.me/${TEL}?text=${mensaje}`);

        // Mensaje final que se enviará a través de tu flujo dinámico
        const mensajeFinal = `*Haz clic en el siguiente enlace:* 
        ${enlaceWhatsApp}`;

        // Enviar el mensaje utilizando tu función flowDynamic
        if(respuesta.toUpperCase() == 'SI' ){
            await flowDynamic(mensajeFinal);
        }else{
            await flowDynamic('Muchas gracias.');
        }

    }
)


