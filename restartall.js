var cron = require('node-cron');
const exec = require('child_process').exec;
const actionsShopee = require('./src/actions.js')
require('dotenv').config();
slavenumber = process.env.SLAVE
os_slave = process.env.OS_SLAVE

restartAll = async () => {
    if(os_slave != "LINUX"){
        exec("shutdown -r", (error) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
        });
     }

 console.log("------- Restart all -------")

 let check = await actionsShopee.check_slave_die(slavenumber)
 console.log(check)
 if(check){
 //exec("shutdown -r", (error) => {
    if(os_slave != "LINUX"){
        exec("tskill chrome", (error) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
        });
     }
     
     if(os_slave == "LINUX"){
        exec("pkill chrome", (error) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
        });
     }
   
    exec("pm2 restart all", (error) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
    });
 }
   

}

cron.schedule('0 */1 * * *', async () => {
    await restartAll()
  })