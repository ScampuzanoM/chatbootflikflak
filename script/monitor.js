const pm2 = require('pm2');
const os = require('os');

const appName = 'app'; // Reemplaza con el nombre de tu aplicación en PM2
const maxCpuUsage = 90; // Umbral de uso de CPU en porcentaje

setInterval(() => {
  pm2.describe(appName, (err, list) => {
    if (err) {
      console.error(err);
      return;
    }

    const app = list[0];
    const cpuUsage = app.monit.cpu;

    if (cpuUsage > maxCpuUsage) {
      console.log(`CPU usage is ${cpuUsage}%, restarting ${appName}...`);
      pm2.restart(appName, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`${appName} restarted successfully.`);
        }
      });
    }
  });
}, 10000); // Verificar cada 10 segundos
