const axios = require('axios').default;
shopeeUpdateSeoSanPhamDir = "http://auto.tranquoctoan.com/api_user/shopeeUpdateSeoSanPham"

let page

headersearch = {

cookie: '_gcl_au=1.1.699808476.1607702732; SPC_IA=-1; SPC_EC=-; SPC_F=FXGW8llunAQuf5baIJM19NtcxbG2f9tj; REC_T_ID=b28c0ef6-3bca-11eb-a793-b49691844b48; SPC_U=-; _fbp=fb.1.1607702732348.1633153129; _hjid=0ecfc287-f2da-4004-826d-8ad89e4b90b8; _gcl_aw=GCL.1608656038.EAIaIQobChMIi8qo2Ybi7QIVTT5gCh2--ggXEAYYAiABEgK-1_D_BwE; _med=cpc; _gac_UA-61914164-6=1.1608656040.EAIaIQobChMIi8qo2Ybi7QIVTT5gCh2--ggXEAYYAiABEgK-1_D_BwE; SPC_SI=mall.pFUIKPdyxP5VnhVg50pEFlynHNuJRRuW; SL_GWPT_Show_Hide_tmp=1; SL_wptGlobTipTmp=1; _gid=GA1.2.1577912680.1609217942; csrftoken=7VQS9mkU5q5Q7WVXoz3ZpaISzMY6pmF0; cto_bundle=oonKA185cGlHMUdYYkQxRyUyQmdadTdzRjJFVk1KRHIycVBUUk1TcHloa3U2eVMwUkkyUnM5bkdvOGJwUUdERVRRZFZSRHQ0VmJaeFhBek9RbVVIMkwyY0FNTU13QXVCWTVGWXExcE1URFRTT25LMXY2UjBqeHpKT00wdXJCZG9hdlZoWjNhUFduTDZMWXJuendJRm5ocnF4TXVDQSUzRCUzRA; _ga_M32T05RVZT=GS1.1.1609303653.16.1.1609307858.0; _ga=GA1.1.802594605.1607702734; SPC_R_T_ID="MHYDKro2Fd4NUQJZR4w7Fo6d9p0Riyckd4IyA9QwUfZ9dHG982W1hn7Bh6ixp6C5652W0aR87Qs0OcPQ1JpOLzC7LCayCB0AgMfqsvAw21s="; SPC_T_IV="JlfVIc0gll7Lnf2hf9gUZw=="; SPC_R_T_IV="JlfVIc0gll7Lnf2hf9gUZw=="; SPC_T_ID="MHYDKro2Fd4NUQJZR4w7Fo6d9p0Riyckd4IyA9QwUfZ9dHG982W1hn7Bh6ixp6C5652W0aR87Qs0OcPQ1JpOLzC7LCayCB0AgMfqsvAw21s="',
referer: 'https://shopee.vn/search?keyword=v%C3%AD%20n%E1%BB%AF%20%C4%91%E1%BA%B9p',
'if-none-match-': ' 55b03-362c8065febe2677f1d3f36f302b86c8'

}

test_post = async () => {
    linkShopeeAccountUpdate = "https://auto.tranquoctoan.com/api_user/shopeeAccountUpdate" 
    accountInfo = {"user":"soriotdo929","pass":"pdaq6260PD\\r","cookie":[{"name":"_gali","value":"modal","domain":".shopee.vn","path":"/","expires":1624395427,"size":10,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"_ga","value":"GA1.2.1558700477.1624395353","domain":".shopee.vn","path":"/","expires":1687467377,"size":30,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"SPC_R_T_ID","value":'\\"TwMDZrd8K20kAsGpSo2GFUekVBiqr5Od8OAsZAzfDEfgiYWcvCy9bekMsvMSSQsw/fhp01orYoXeYTwF5LCVfZI6WJUi1youpD3PRrPSwic=\\"',"domain":".shopee.vn","path":"/","expires":2255115376.497776,"size":120,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"G_ENABLED_IDPS","value":"google","domain":".shopee.vn","path":"/","expires":253402257600,"size":20,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"SPC_PC_HYBRID_ID","value":"6","domain":"shopee.vn","path":"/","expires":-1,"size":17,"httpOnly":false,"secure":false,"session":true,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"_dc_gtm_UA-61914164-6","value":"1","domain":".shopee.vn","path":"/","expires":1624395414,"size":22,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"REC_T_ID","value":"39c640da-d39c-11eb-8410-48df37dd8404","domain":"shopee.vn","path":"/","expires":2255115350.357022,"size":44,"httpOnly":true,"secure":true,"session":false,"sameSite":"None","sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"SPC_T_ID","value":'\\"TwMDZrd8K20kAsGpSo2GFUekVBiqr5Od8OAsZAzfDEfgiYWcvCy9bekMsvMSSQsw/fhp01orYoXeYTwF5LCVfZI6WJUi1youpD3PRrPSwic=\\"',"domain":"shopee.vn","path":"/","expires":2255115376.497935,"size":118,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"_hjid","value":"2eac86d9-2286-4837-9531-f585e1fc084d","domain":".shopee.vn","path":"/","expires":1655931354,"size":41,"httpOnly":false,"secure":false,"session":false,"sameSite":"Lax","sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"SPC_EC","value":"UsoRQmjbnZx/V+WYXcLrzHx9P9FXwvs1iG1vS9xPwzesQnoJy15W487IlJKHD8cy31MtvHa3JWhsDNVXRb05LVNzSrmna2e1WCCu0MYbCZUSEDxsyCUb4DF83LDsOkBSOHlzWDT8TrwO8dJdn3D4jwy29iVBzU+8C81FcmhZwFA=","domain":".shopee.vn","path":"/","expires":2255115378.216296,"size":178,"httpOnly":true,"secure":true,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"SPC_R_T_IV","value":'\\"1SgWC09232mlhq2HDN3Zdg==\\"',"domain":".shopee.vn","path":"/","expires":2255115376.497894,"size":36,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"welcomePkgShown","value":"true","domain":"shopee.vn","path":"/","expires":-1,"size":19,"httpOnly":false,"secure":false,"session":true,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"_fbp","value":"fb.1.1624395350103.810231750","domain":".shopee.vn","path":"/","expires":1632171402,"size":32,"httpOnly":false,"secure":false,"session":false,"sameSite":"Lax","sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"_gid","value":"GA1.2.2099166465.1624395354","domain":".shopee.vn","path":"/","expires":1624481777,"size":31,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"SPC_F","value":"wmgmIXnimiXn6n7lJAStd2o5mVv7A3EI","domain":".shopee.vn","path":"/","expires":2255115350.358431,"size":37,"httpOnly":false,"secure":true,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"_gcl_au","value":"1.1.1221309320.1624395349","domain":".shopee.vn","path":"/","expires":1632171349,"size":32,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"AMP_TOKEN","value":"%24NOT_FOUND","domain":".shopee.vn","path":"/","expires":1624398954,"size":21,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"_hjAbsoluteSessionInProgress","value":"0","domain":".shopee.vn","path":"/","expires":1624397178,"size":29,"httpOnly":false,"secure":false,"session":false,"sameSite":"Lax","sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"REC_T_ID","value":"39c561d3-d39c-11eb-94cb-2cea7f935587","domain":".shopee.vn","path":"/","expires":2255115350.358379,"size":44,"httpOnly":true,"secure":true,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"_hjFirstSeen","value":"1","domain":".shopee.vn","path":"/","expires":1624397154,"size":13,"httpOnly":false,"secure":false,"session":false,"sameSite":"Lax","sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"SPC_SI","value":"mall.zdAXBqCynMi5YitmxnUheSR6LrdG53Vb","domain":".shopee.vn","path":"/","expires":1624481776.729612,"size":43,"httpOnly":true,"secure":true,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"SPC_T_IV","value":'\\"1SgWC09232mlhq2HDN3Zdg==\\',"domain":"shopee.vn","path":"/","expires":2255115376.497854,"size":34,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"_ga_M32T05RVZT","value":"GS1.1.1624395353.1.1.1624395377.36","domain":".shopee.vn","path":"/","expires":1687467377,"size":48,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"csrftoken","value":"qg8MnyqFlhUxWbBIh7tng8wP1tuUJxtF","domain":"shopee.vn","path":"/","expires":-1,"size":41,"httpOnly":false,"secure":false,"session":true,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"SPC_IA","value":"-1","domain":"shopee.vn","path":"/","expires":2255115375.298886,"size":8,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"SPC_CLIENTID","value":"d21nbUlYbmltaVhupbrxrsxqhnmnzbzv","domain":".shopee.vn","path":"/","expires":2255115375.299467,"size":44,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"SPC_U","value":"399139911","domain":".shopee.vn","path":"/","expires":2255115378.216372,"size":14,"httpOnly":false,"secure":true,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443}],"user_agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 UBrowser/5.6.13705.206 Safari/537.36","status":1,"message":"cập nhật account"}

    await axios.post(linkShopeeAccountUpdate, {
        data: accountInfo,
        timeout: 50000
    },
        {
            headers: {
                Connection: 'keep-alive',
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'
            }
        })
        .then(function (response) {
            console.log("Update action: " + " " + response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

test_get = async () => {
    linkShopeeAccountUpdate = "http://auto.tranquoctoan.com/api_user/shopeeAccountUpdate" 
    accountInfo = {
        user: "QuyenNguyen3242",
        pass: "QuyenNguyen3242",
        status: 0,
        message: "Account bị khoá"
    }
    try {
        let datatest = await axios.get(linkShopeeAccountUpdate, {
            params: {
                data: {
                    dataToServer: accountInfo,
                }
            }
        })
        console.log(datatest.data)
    } catch (error) {
        console.log(error)
        //console.log("Không gửi được dữ liệu thứ hạng mới đến master")
    }
}

runAllTime = async () => {
    productInfo = {
        sanpham: 'VD64',
        id: '22',
        shopId: '19608398',
        trang: '2',
        vitri: 26,
        keyword: 'ví nữ đẹp',
        time: '12/30/2020, 10:16:59 AM',
        user: '0965966078'
    }

    // try {
    //     let datatest = await axios.get(shopeeUpdateSeoSanPhamDir, {
    //         params: {
    //             data: {
    //                 dataToServer: productInfo,
    //             }
    //         }
    //     })
    //     console.log(datatest.data)
    // } catch (error) {
    //     console.log("Không gửi được dữ liệu thứ hạng mới đến server")
    //     console.log(error)

    // }
    for(let i=1; i<2; i++){

        page = 50*i
        shopeesearch = "https://shopee.vn/api/v2/search_items/?by=relevancy&keyword=v%C3%AD%20n%E1%BB%AF%20%C4%91%E1%BA%B9p&limit=50&newest="+page+"&order=desc&page_type=search&version=2"
        shopInfo = "https://shopee.vn/api/v2/shop/get?shopid=74300615"
        productInfo = "https://shopee.vn/api/v2/item/get?itemid=6705447143&shopid=74300615"
        shopProduct = "https://shopee.vn/api/v2/search_items/?by=pop&entry_point=ShopByPDP&limit=100&match_id=19608398&newest=000&order=desc&page_type=shop"
        keywordApi = "https://shopee.vn/api/v4/search/search_hint?keyword=v%C3%AD%20n%E1%BB%AF&search_type=0&version=1"
        search_api = "https://shopee.vn/api/v2/search_items/?by=relevancy&keyword=v%C3%AD%20n%E1%BB%AF%20%C4%91%E1%BA%B9p&limit=50&newest=50&order=desc&page_type=search&version=2"
        try {
            datatest = await axios.get(search_api, {
              
               // headers : headersearch
            })
            
        } catch (error) {
            console.log("Không lấy dc data")
            console.log(error)
        }
        data = datatest.data
        console.log(datatest.data.items.length)
        console.log(datatest.data.items[0].name)
        if(data.items != undefined){
            //console.log(i + " --- " +datatest.data.items.length)
            //console.log(datatest.data.items[0].itemid)
        }else{
            console.log("Không lấy dc dữ liệu")
        }
       
       
    }

 

}

(async () => {
    //await runAllTime()
    await test_post()

})();