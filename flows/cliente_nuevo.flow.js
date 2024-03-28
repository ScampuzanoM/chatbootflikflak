const { addKeyword } = require("@bot-whatsapp/bot");
const programasFlow = require("./cliente_nuevo/programas.flow");
const clasepruebaFlow = require("./cliente_nuevo/claseprueba.flow");
const tarifasFlow = require("./cliente_nuevo/tarifas.flow");
const matriculaFlow = require("./cliente_nuevo/matricula.flow");
/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */
module.exports = addKeyword('USUARIOS_NO_REGISTRADOS').addAnswer(
    [
        '*Menu:*',
        '',
        '1. 📋 Clase Prueba: Reservar nuestra clase de prueba.',
        '2. 📋 Tarifas: Conoce nuestras tarifas.',
        '3. 📋 Matriculas: Inicia nuestro proceso de matricula.',
        '4. 📋 Conócenos: Conócenos un poco mas.',
    ],null,null,
    [clasepruebaFlow,tarifasFlow, matriculaFlow, programasFlow,]
)

