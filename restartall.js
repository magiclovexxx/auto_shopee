var cron = require('node-cron');
const exec = require('child_process').exec;

restartAll = async () => {

 console.log("------- Restart all -------")
    exec("shutdown -r", (error) => {
    //exec("pm2 restart all", (error) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
    });
}

cron.schedule('*/240 * * * *', async () => {
    await restartAll()
  })