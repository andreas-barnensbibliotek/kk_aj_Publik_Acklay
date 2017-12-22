//här sätts alla pluggin och jquery.ready starters 
var $ = require("jquery");
var appsettingsobject = require("./appSettings.js");
var HandlebarTemplet = require("./HandlebarTemplethandler.js");
var _appsetting = appsettingsobject.config;

module.exports = {
    RenderMainContent: function (arrJson) {
        maincontent(arrJson);       
    },
    RendeFaktaContent: function (arrJson) {       
        faktaContent(arrJson);
    },
    RenderUtovareContent: function (arrJson) {       
        utovareContent(arrJson);
    },
    RenderUtovareContentJson: function (arrJson) {
        utovareContentJson(arrJson);
    },
    RenderExempelContentJson: function (arrJson) {
        exempelcontent(arrJson);
       
    }
};


var maincontent = function (arrJson) {
    $('.granska_rubrik').html(arrJson.Rubrik);
    $('.granska_underrubrik').html(arrJson.UnderRubrik);
    $('.granska_innehall').html(arrJson.Innehall);
    var imgsrc = "";
    if (arrJson.Arrid) {
        imgsrc = _appsetting.globalconfig.arrimgurl + arrJson.Arrid + '_' + arrJson.MainImage.MediaUrl;
    } else {
        imgsrc = _appsetting.globalconfig.arrimgurl + 'tmp/_' + arrJson.MainImage.MediaUrl;
    }
    
    $('.granska_pressentationsbild').attr('src', imgsrc);
    $('.arrmainfoto').html('<span>Foto: </span> ' + arrJson.MainImage.MediaFoto);

    if (arrJson.MediaList.length > 0) {
        $('.granska_exempel').show();
    } else {
        $('.granska_exempel').hide();
    }
 
    $('#shareMail').attr('href', 'mailto:?Subject=Delat%20fr%C3%A5n+Kulturkatalogen%20V%C3%A4st%20-%20' + arrJson.Rubrik + '&body=Jag%20vill%20dela%20arrangemanget:%20%22' + arrJson.Rubrik + '%22%20%0D%0Afr%C3%A5n%20Kulturkatalogen%20V%C3%A4st%3A%20 http://kulturkatalog.kivdev.se/Kulturkatalogen/ArrangemangDetail/id/' + arrJson.Arrid);
    let facebokURI = "https://www.facebook.com/sharer.php?u=";
    facebokURI += encodeURIComponent('http://kulturkatalog.kivdev.se/Kulturkatalogen/ArrangemangDetail/id/') + arrJson.Arrid  +'&picture=&' + encodeURIComponent(imgsrc) + '&t=' + encodeURIComponent(arrJson.Rubrik) + '&description=' + encodeURIComponent(arrJson.UnderRubrik);
    $('#shareFacebook').attr('href', facebokURI);
       
    
};

var faktaContent = function (fakalistJson) {

    HandlebarTemplet.injecthtmltemplate(".granskaFaktaMainblock", "kk_aj_granskafaktaList.txt", fakalistJson);

};
var exempelcontent = function (arrJson) {
    HandlebarTemplet.injecthtmltemplate(".arrExempellist", "kk_aj_arrpubExempelList.txt", arrJson);
}
var utovareContent = function (utovareJson) {
    $('.granska_Utovare_Organisation').html($('#utovare_aktor_grupp').val());
    $('.granska_Utovare_namn').html($('#utovare_fornamn').val() + " " + $('#utovare_efternamn').val());
    $('.granska_Utovare_Adress').html($('#utovare_adress').val());
    $('.granska_Utovare_postort').html($('#utovare_postnummer').val() + " " + $('#utovare_ort').val());
    $('.granska_Utovare_tfn').html($('#utovare_telefonnr').val());
    $('.granska_Utovare_epost').html($('#utovare_epost').val());
    $('.granska_Utovare_hemsida').html($('#utovare_orghemsida').val());
};

var utovareContentJson = function (utovareJson) {
    $('.granska_Utovare_Organisation').html(utovareJson.UtovareData.Organisation);
    $('.granska_Utovare_namn').html(utovareJson.UtovareData.Fornamn + " " + utovareJson.UtovareData.Efternamn);
    $('.granska_Utovare_Adress').html(utovareJson.UtovareData.Adress);
    $('.granska_Utovare_postort').html(utovareJson.UtovareData.Postnr + " " + utovareJson.UtovareData.Ort);
    $('.granska_Utovare_tfn').html(utovareJson.UtovareData.Telefon);
    $('.granska_Utovare_epost').html(utovareJson.UtovareData.Epost);
    $('.granska_Utovare_hemsida').html(utovareJson.UtovareData.Weburl);
};

