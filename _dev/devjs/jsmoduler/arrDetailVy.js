//här sätts alla pluggin och jquery.ready starters 
var $ = require("jquery");
var appsettingsobject = require("./appSettings.js");
var detailhandler = require("./arrDetailHandler.js");
var _appsetting = appsettingsobject.config;

module.exports = {
    DetailVy: function (arrid) {

        fillDetaildata(arrid);

        
    }
};

var renderDetails = function (arrJson) {
    detailhandler.RenderMainContent(arrJson);
    detailhandler.RendeFaktaContent(arrJson);
    detailhandler.RenderUtovareContentJson(arrJson);
}


var fillDetaildata = function (arrid) {

    Servicehandler(arrid, function (data) {
        if (data.kk_aj_admin.ansokningarlista.ansokningarcount == "0") {
            window.location.href = "/404";
            return false;
        };
        fyllArrJson(data, function (json) {

            renderDetails(json);
            
        });
    })

}


var Servicehandler = function (arrid, callback) {
    var arrurl = "/Api_v2/arrangemang/details/uid/0/typ/" + arrid + "/devkey/alf?type=json&callback=testar";
    var serverurl = _appsetting.globalconfig.apiserver + arrurl;

    $.ajax({
        async: true,
        type: "GET",
        url: serverurl,
        dataType: "json",
        success: function (data) {
            console.log("utövardata hämtad: ");
            callback(data, "funkar");
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("Nått blev fel hämtning utövardata!");
            alert("Nått blev fel hämtning utövardata!");
        }
    });   
}

var fyllArrJson = function (data, callback) {
    var arrdata = data.kk_aj_admin.ansokningarlista.ansokningar[0];

    // MAINBLOCK
    _arrjsondata.Arrid = arrdata.ansokningid;
    _arrjsondata.Rubrik = arrdata.ansokningtitle;
    _arrjsondata.UnderRubrik = arrdata.ansokningsubtitle;
    _arrjsondata.Innehall = arrdata.ansokningContent;
    _arrjsondata.Arrangemangtyp = arrdata.ansokningtyp;
    _arrjsondata.Konstform = arrdata.ansokningkonstform;
    _arrjsondata.MainImage.MediaUrl = arrdata.ansokningMediaImage.MediaUrl;
    _arrjsondata.MainImage.MediaAlt = arrdata.ansokningMediaImage.MediaAlt;
    _arrjsondata.MainImage.MediaFoto = arrdata.ansokningMediaImage.MediaFoto;

    //UTÖVAREBLOCK
    _arrjsondata.UtovareData.UtovarID = arrdata.ansokningUtovardata.UtovarID;
    _arrjsondata.UtovareData.Organisation = arrdata.ansokningUtovardata.Organisation;
    _arrjsondata.UtovareData.Fornamn = arrdata.ansokningUtovardata.Fornamn;
    _arrjsondata.UtovareData.Efternamn = arrdata.ansokningUtovardata.Efternamn;
    _arrjsondata.UtovareData.Telefon = arrdata.ansokningUtovardata.Telefon;
    _arrjsondata.UtovareData.Adress = arrdata.ansokningUtovardata.Adress;
    _arrjsondata.UtovareData.Postnr = arrdata.ansokningUtovardata.Postnr;
    _arrjsondata.UtovareData.Ort = arrdata.ansokningUtovardata.Ort;
    _arrjsondata.UtovareData.Epost = arrdata.ansokningUtovardata.Epost;
    _arrjsondata.UtovareData.Kommun = arrdata.ansokningUtovardata.Kommun;
    _arrjsondata.UtovareData.Weburl = arrdata.ansokningUtovardata.Weburl;
    
    // FAKTA BLOCK
    //_arrformjsondata.Faktalist = [];
    $.each(arrdata.ansokningFaktalist, function (itm, val) {
        
        switch (val.FaktaTypID) {
            // FAKTA 1
            case 1: case 2: case 3: case 4: case 5: case 25:  case 41:
                _arrjsondata.Faktalist.push({
                    "Faktaid": "1",
                    "FaktaTypID": val.FaktaTypID,
                    "Faktarubrik": val.Faktarubrik,
                    "FaktaValue": val.FaktaValue
                });
                break;

                // LOKAL 2
            case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 17: case 18: case 33: case 34:
                _arrjsondata.Faktalist.push({
                    "Faktaid": "2",
                    "FaktaTypID": val.FaktaTypID,
                    "Faktarubrik": val.Faktarubrik,
                    "FaktaValue": val.FaktaValue
                });
                break;

                // PUBLIK 3
            case 6: case 7: case 8: case 9: case 32: case 42:

                if (val.FaktaTypID == 7 || val.FaktaTypID == 8) {
                    val.FaktaValue = val.FaktaValue + " år"
                };

                _arrjsondata.Faktalist.push({
                    "Faktaid": "3",
                    "FaktaTypID": val.FaktaTypID,
                    "Faktarubrik": val.Faktarubrik,
                    "FaktaValue": val.FaktaValue
                });
                break;

                // EKONOMI 4
            case 19: case 20: case 21: case 22: case 23: case 24: case 35: case 36: case 37: case 38: case 40:
                _arrjsondata.Faktalist.push({
                    "Faktaid": "4",
                    "FaktaTypID": val.FaktaTypID,
                    "Faktarubrik": val.Faktarubrik,
                    "FaktaValue": val.FaktaValue
                });
                break;
                // ÖVRIGT 5
            case 39:
                _arrjsondata.Faktalist.push({
                    "Faktaid": "5",
                    "FaktaTypID": val.FaktaTypID,
                    "Faktarubrik": val.Faktarubrik,
                    "FaktaValue": val.FaktaValue
                });
                break;

                // default är ÖVRIGT
            default:
                _arrjsondata.Faktalist.push({
                    "Faktaid": "5",
                    "FaktaTypID": val.FaktaTypID,
                    "Faktarubrik": val.Faktarubrik,
                    "FaktaValue": val.FaktaValue
                });
                break;
        };

    });

    callback(_arrjsondata)


}
var _arrjsondata = {
    "Arrid" :"",
    "Rubrik": "",
    "UnderRubrik": "",
    "Innehall": "",
    "Arrangemangtyp": "",
    "Konstform": "",
    "Faktalist": [],
    "MediaList": [],
    "Username": "",
    "MainImage": {
        "MediaID": 0,
        "MediaUrl": "",
        "MediaFilename": "",
        "MediaSize": "",
        "MediaAlt": "",
        "MediaFoto": "",
        "MediaTyp": "",
        "MediaVald": "nej",
        "mediaTitle": "",
        "mediaBeskrivning": "",
        "mediaLink": "",
        "sortering": "0"
    },
    "Utovare": "0",
    "UtovareData": {
        "UtovarID": "0",
        "Organisation": "",
        "Fornamn": "",
        "Efternamn": "",
        "Telefon": "",
        "Adress": "",
        "Postnr": "",
        "Ort": "",
        "Epost": "",
        "Kommun": "",
        "Weburl": ""
    }
}