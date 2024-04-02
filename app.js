require('dotenv').config()
const {
  createBot,
  createProvider,
  createFlow,
} = require("@bot-whatsapp/bot");

const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const MockAdapter = require("@bot-whatsapp/database/mock");

const welcomeFlow = require("./flows/welcome.flow");
const ServerAPI = require('./http');
const cliente_actualFlow = require('./flows/cliente_actual.flow');
const cliente_nuevoFlow = require('./flows/cliente_nuevo.flow');
const media_flow =  require('./flows/media.flow');
const pqrs = require('./flows/pqrs');
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
    cliente_actualFlow,
    cliente_nuevoFlow,
    pqrs,
    media_flow
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
