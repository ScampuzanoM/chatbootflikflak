const { addKeyword } = require("@bot-whatsapp/bot");
const conocenosFlow = require("./cliente_nuevo/conocenos.flow");
const clasepruebaFlow = require("./cliente_nuevo/claseprueba.flow");
const matriculaFlow = require("./cliente_nuevo/matricula.flow");
const defaultFlow = require("./default.flow");

/**
 * FLujo Inteligente (va a ser activado por una intencion de una persona o por palabra clave)
 * Flujo de bienvenida
 */
module.exports = addKeyword('USUARIOS_NO_REGISTRADOS').addAnswer(
    [
        '*Menu:*',
        '',
        '1. 📋 Clase Prueba: Reservar nuestra clase de prueba.',
        '2. 🧑‍🎓 Matriculas: Inicia nuestro proceso de matricula.',
        '3. ⚠️ Conócenos: Conócenos un poco mas.',
    ],
    {capture: true}, 
    async (ctx,{gotoFlow, fallBack}) => {

        const numero = ctx.body
        if(numero != '1' && numero != '2' && numero != '3'  ){
            await gotoFlow(defaultFlow)
            return fallBack()
        }
    },
    [clasepruebaFlow, matriculaFlow, conocenosFlow]
)

