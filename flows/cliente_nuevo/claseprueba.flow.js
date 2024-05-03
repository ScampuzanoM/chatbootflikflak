const { addKeyword } = require("@bot-whatsapp/bot");
const defaultFlow = require("../default.flow");
const json = require("../../roles.json")
const inactividad = require("../inactividad.flow")

/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */

// const TEL = '+573176827341'

module.exports = addKeyword(['1'])
    .addAnswer('¿Cual es tu nombre ? ', { capture: true, idle: Number(process.env.TIEMPO_INACTIVIDAD) },
        async (ctx, {gotoFlow, state }) => {
            if (ctx?.idleFallBack) {
                return gotoFlow(inactividad)
            } else {
                await state.update({ nombre: ctx.body })
                return null;
            }
        })
    .addAnswer('¿Cual es el nombre del deportista?', { capture: true, idle: Number(process.env.TIEMPO_INACTIVIDAD) },
        async (ctx, { gotoFlow, flowDynamic, state }) => {
            if (ctx?.idleFallBack) {
                return gotoFlow(inactividad)
            } else {
                await state.update({ nonmbreDeportista: ctx.body })
                return null;
            }
        })
    .addAnswer('¿Cual es la experiencia del deportista en meses?', { capture: true, idle: Number(process.env.TIEMPO_INACTIVIDAD) },
        async (ctx, { gotoFlow, flowDynamic, state }) => {
            if (ctx?.idleFallBack) {
                return gotoFlow(inactividad)
            } else {
                await state.update({ experiencia: ctx.body })
                return null;
            }
        })
    .addAnswer('¿Cual es la edad del deportista?', { capture: true, idle: Number(process.env.TIEMPO_INACTIVIDAD) },
        async (ctx, { gotoFlow, flowDynamic, state }) => {
            if (ctx?.idleFallBack) {
                return gotoFlow(inactividad)
            } else {
                await state.update({ edad: ctx.body })
                return null;
            }
        })
    .addAnswer(['*¿Para que la clase de prueba?*', ''])
    .addAnswer(['Flikflakers, recuerda que en tu clase de prueba no solo podrás conocernos a nosotros, a nuestros profesores y la metodología de las clases; sino que también aprovecharemos para conocerte e identificar el nivel de fuerza, flexibilidad y destreza motriz. De esta manera, asignar un grupo adecuado para que tengas un mejor desarrollo y aprendizaje.', ''])
    .addAnswer(['Después de la clase de prueba, se acordará el horario según el nivel. Tenemos clases de lunes a domingo. 🤸🏻‍♂️🤸🏻‍♂️🤸🏻‍♂️', ''])
    .addAnswer(['¡Conoce un poco mas! 🌟', 'https://www.instagram.com/reel/C5v9jrmR0E4/?igsh=a3R6bzhqY3I5YjMx'])
    .addAnswer(
        [
            '*¿En cual de nuestras clases de prueba estas interesad@?*',
            '1. 🤰Madres gestantes',
            '2. 👩‍🍼Estimulación 6 meses hasta 48 meses',
            '3. 🤸‍♀️Gimnasia Básica',
            '4. 🤸Gimnasia Artistica',
            '5. 🏃‍♂️Parkour',
            '6. 🤸‍♂️Acrobacia adultos',
            '7. 🏋️‍♀️Centro de alto rendimiento'
            ,
        ],
        { capture: true, idle: Number(process.env.TIEMPO_INACTIVIDAD) },
        async (ctx, { state, gotoFlow, fallBack }) => {
            if (ctx?.idleFallBack) {
                return gotoFlow(inactividad)
            } else {
                const clase_prueba = ctx.body
                switch (clase_prueba) {
                    case '1': {
                        clase_prueba_desc = '"Madres gestantes"'
                        await state.update({ clase_prueba_desc: clase_prueba_desc })
                        break;
                    }
                    case '2': {
                        clase_prueba_desc = '"Estimulación 6 meses hasta 48 meses"'
                        await state.update({ clase_prueba_desc: clase_prueba_desc })
                        break;
                    }
                    case '3': {
                        clase_prueba_desc = '"Gimnasia Básica"'
                        await state.update({ clase_prueba_desc: clase_prueba_desc })
                        break;
                    }
                    case '4': {
                        clase_prueba_desc = '"Gimnasia Artistica"'
                        await state.update({ clase_prueba_desc: clase_prueba_desc })
                        break;
                    }
                    case '5': {
                        clase_prueba_desc = '"Parkour"'
                        await state.update({ clase_prueba_desc: clase_prueba_desc })
                        break;
                    }
                    case '6': {
                        clase_prueba_desc = '"Acrobacia adultos'
                        await state.update({ clase_prueba_desc: clase_prueba_desc })
                        break;
                    }
                    case '7': {
                        clase_prueba_desc = '"Centro de alto rendimiento"'
                        await state.update({ clase_prueba_desc: clase_prueba_desc })
                        break;
                    }
                    default: {
                        //await gotoFlow(defaultFlow)
                        return fallBack('🌟 ¡por favor ingresa una opcion valida! 🌟')
                    }
                }
            }
        })
    .addAnswer('¿En cual de nuestras sedes deseas reservar la clase de prueba')
    .addAnswer(['1. Poblado: A una cuadra de la estación poblado del metro',
        '2. Palmas: Parque la reserva. A 300m de Indiana Mall',
        '3. Estadio: Coliseo de gimnasia Jorge Hugo Giraldo. Unidad Atanasio Girardot'],
        { capture: true, idle: Number(process.env.TIEMPO_INACTIVIDAD) },
        async (ctx, { state, gotoFlow, fallBack }) => {
            if (ctx?.idleFallBack) {
                return gotoFlow(inactividad)
            } else {
                id_sede = ctx.body;
                if (id_sede != '1' && id_sede != '2' && id_sede != '3') {
                    //await gotoFlow(defaultFlow)
                    return fallBack('🌟 ¡por favor ingresa una opcion valida! 🌟')
                } else {
                    await state.update({ id_sede: ctx.body })
                    return null;
                }
            }
        })
    .addAction(
        async (ctx, { flowDynamic, state }) => {
            const myState = state.getMyState();
            const mensaje = `Hola, mi nombre es ${myState.nombre} y estoy interesad@ en la clase de prueba ${myState.clase_prueba_desc} para el deportista ${myState.nonmbreDeportista} que tiene una edad de ${myState.edad} años y una experiencia de ${myState.experiencia} meses `;
            const SEDE = json.sedes.find((sede) => sede.id === Number(id_sede));
            const TEL = SEDE.roles.numero_clase_pruebas
            // Codificar el mensaje para usarlo en el enlace de WhatsApp
            const enlaceWhatsApp = encodeURI(`https://wa.me/${TEL}?text=${mensaje}`);
            // Mensaje final que se enviará a través de tu flujo dinámico
            const mensajeFinal = `*Para reservar una clase de prueba haz clic en el siguiente enlace:* 
        ${enlaceWhatsApp}`;
            // Enviar el mensaje utilizando tu función flowDynamic
            return flowDynamic(mensajeFinal);
        }
    )


