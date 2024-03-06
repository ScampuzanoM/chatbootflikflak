
const { addKeyword } = require("@bot-whatsapp/bot");
const { EVENTS } = require('@bot-whatsapp/bot')

module.exports =  addKeyword(EVENTS.ACTION).addAnswer('Se canceló por inactividad')


