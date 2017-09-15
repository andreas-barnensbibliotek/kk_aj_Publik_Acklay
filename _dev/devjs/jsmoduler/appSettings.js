window.kk_aj_publikAppsettings= 
    {
        globalconfig: {
            apiserver: "http://localhost:60485",
            dnnURL: "http://dnndev.me",
            //apiserver: "http://kulturkatalog.kivdev.se:8080",
            //dnnURL: "http://kulturkatalog.kivdev.se",
            localOrServerURL: this.apiserver + "/Api_v2",
            htmltemplateURL: "http://dnndev.me/Portals/_default/Skins/kk_aj_Publik_Acklay/htmltemplates",
            detailediturl: this.apiserver + "/Api_v3/updatearrangemang",
            basepageUri: "/KulturkatalogenAdmin",
        },
        userinfo: {
            userid: "",
            rollid: ""
        },
        arrtab: {
            currenttab: 0           
        },
        currentpage: ""
    };

module.exports = {  
    config: window.kk_aj_publikAppsettings
}

