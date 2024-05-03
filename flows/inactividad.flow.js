
const { EVENTS, addKeyword } = require("@bot-whatsapp/bot");


module.exports =  addKeyword(EVENTS.ACTION)
.addAnswer('🚫 Lamentamos informarte que la sesión se ha cancelado por inactividad. Para continuar, por favor escribe *menú* o *hola* y estaré encantado de ayudarte nuevamente. 😊')


// module.exports = addKeyword(EVENTS.ACTION)
//     .addAction(async (_, { endFlow }) => {
//         return endFlow('🚫 Lamentamos informarte que la sesión se ha cancelado por inactividad. Para continuar, por favor escribe *menú* o *hola* y estaré encantado de ayudarte nuevamente. 😊');
//     })


