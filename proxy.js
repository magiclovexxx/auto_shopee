const axios = require('axios').default;
const puppeteer = require('puppeteer');


gen_browser = async (option) =>{
  
    let proxy1 = option.proxy
  
   
        // let param = [
        //     `--user-data-dir=${profile_dir}`,      // load profile chromium
        //     '--disable-gpu',
        //     '--no-sandbox',
        //     '--lang=en-US',
        //     '--disable-setuid-sandbox',
        //     '--disable-dev-shm-usage',
        //     '--disable-background-timer-throttling',
        //     '--disable-backgrounding-occluded-windows',
        //     '--disable-renderer-backgrounding',
        //     '--disable-dev-shm-usage',
        //     '--disable-accelerated-2d-canvas',
        //     '--no-first-run',
        // ]
  
           
            let proxy_for_slave = "--proxy-server=" + proxy1.proxy_ip + ":" + proxy1.proxy_port
         
           
            let param = [         
                proxy_for_slave
            ]

            param.push('--ignore-certificate-errors')

        console.log(param)
        const browser = await puppeteer.launch({
            //executablePath: chromiumDir,
            headless:false,
            devtools: false,
            args: param
        });
        
        return browser
}

gen_page = async (browser, option) => {

    let page = (await browser.pages())[0];
     
        let proxy1 = option.proxy
      
        // Random kích cỡ màn hình
        width = Math.floor(Math.random() * (1280 - 1000)) + 1000;;
        height = Math.floor(Math.random() * (800 - 600)) + 600;;

        await page.setViewport({
            width: 1280,
            height: 800
        });

       
            let proxy_pass = proxy1.proxy_password.split("\r")[0]
            console.log(" proxxy ip: " + proxy1.proxy_ip + ":" + proxy1.proxy_port + ":" + proxy1.proxy_username + ":" + proxy_pass)
            await page.authenticate({ username: proxy1.proxy_username, password: proxy_pass });
        

        return page
}

get_proxy_url = "https://hotaso.tranquoctoan.com/api_user/get_proxy"

runAllTime = async () => {
    console.log("Lấy proxy từ server");
    proxy = await axios.get(get_proxy_url)
    proxy = proxy.data
    console.log(proxy)

    
    let option1 = {
    
        proxy: proxy,
      
    }
    
    let browser = await gen_browser(option1)
    let page = await gen_page(browser,option1)
    await page.goto("https://shopee.vn")
    await page.waitForTimeout(9999999)
}

(async () => {

    await runAllTime()

})();