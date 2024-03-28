const { addKeyword } = require("@bot-whatsapp/bot");
const inscripcion_competenciasFlow = require("./inscripcion_competencias.flow");
/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */
module.exports = addKeyword(['2']).addAnswer(
    [
        'Nos complace compartir el calendario de actividades del año para nuestros deportistas. 🌟'
    ])
    .addAnswer('PDF....',{media: 'https://firebasestorage.googleapis.com/v0/b/flikflka.appspot.com/o/elite-pagos%2Fplanaccion.pdf?alt=media&token=c18e39a9-3172-4473-9332-329002251be9'})
    .addAnswer('¡Gracias por ser parte de nuestro mundo lleno de piruetas!')
    .addAnswer(
        ['*¿Deseas inscribirte en alguna competencia?*'],
        { capture: true}, null, 
        [inscripcion_competenciasFlow]
        )
    