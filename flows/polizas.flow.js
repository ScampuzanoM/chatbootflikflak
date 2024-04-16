const { addKeyword } = require("@bot-whatsapp/bot");
/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */
module.exports = addKeyword(['3']).addAnswer('*Mas informacion sobre el uso de la poliza*')
    .addAnswer('https://www.instagram.com/reel/C5oxMo6RB-N/?igsh=MXVtaHRiaDI5emRtZA==')
//    .addAnswer('Si tienes alguna pregunta o necesitas más información sobre los detalles de la póliza, no dude en ponerte en contacto con nosotros.')


