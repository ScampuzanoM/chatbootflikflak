require('dotenv').config()
const {
  createBot,
  createProvider,
  createFlow,
} = require("@bot-whatsapp/bot");

const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const MockAdapter = require("@bot-whatsapp/database/mock");

const welcomeFlow = require("./flows/welcome.flow");
const vendedorFlow = require('./flows/vendedor.flow')
const expertoFlow = require('./flows/experto.flow')
const pagarFlow = require('./flows/pagar.flow')

const ServerAPI = require('./http');
/**
 * Configuracion de Plugin
 */




/**
 *
 */


const main = async () => {
  const adapterDB = new MockAdapter();
  const adapterFlow = createFlow([
    welcomeFlow,
    vendedorFlow,
    expertoFlow,
    pagarFlow
  ]);

  const adapterProvider = createProvider(BaileysProvider);

  const httpServer = new ServerAPI(adapterProvider, adapterDB)

  const configBot = {
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  }



  await createBot(configBot);
  httpServer.start()
};

main();
