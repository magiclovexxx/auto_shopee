const axios = require('axios').default;

const check_slave_die = async(slave)=>{
    let url = "https://auto.tranquoctoan.com/api_user/check_slave?slave=" + slave
    let check_slave
    await axios.get(url, {
        timeout: 50000
    })
        .then(function (response) {
           
            check_slave = response.data
            return check_slave
        })
        .catch(function (error) {
            console.log(error);
            return 0
        })
        .then(function () {
            // always executed
        });
    return check_slave
}

module.exports = {
    
    check_slave_die

}