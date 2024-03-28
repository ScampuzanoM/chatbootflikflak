const { addKeyword } = require("@bot-whatsapp/bot");
/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */
module.exports = addKeyword(['3']).addAnswer('*Poliza*')
    .addAnswer('Recuerda que por ser deportistas flikflakers estas afiliado a nuestra póliza de seguro deportivo. Esta póliza nos cubre en caso de cualquier siniestro dentro de nuestras instalaciones. Esta póliza está diseñada para brindarte tranquilidad mientras entrenes y compitas con nosotros.')
    .addAnswer('*MAFRE* ref. póliza # 931 2901523900131')
    .addAnswer('Si tienes alguna pregunta o necesitas más información sobre los detalles de la póliza, no dude en ponerte en contacto con nosotros.')


