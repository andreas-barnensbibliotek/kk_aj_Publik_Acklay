﻿//här sätts alla pluggin och jquery.ready starters 
var $ = require("jquery");
var appsettingsobject = require("./appSettings.js");
var HandlebarTemplet = require("./HandlebarTemplethandler.js");
var _appsetting = appsettingsobject.config;

module.exports = {
    getArrFormJsonData: function (arrJson) {
        maincontent(arrJson);
        faktaContent(arrJson);
        utovareContent(arrJson);        
    }
};


var maincontent = function (arrJson) {
    $('.granska_rubrik').html( arrJson.Rubrik);
    $('.granska_underrubrik').html(arrJson.UnderRubrik);
    $('.granska_innehall').html(arrJson.Innehall);
    var imgsrc = _appsetting.globalconfig.arrtmpimgurl +'_'+ arrJson.MainImage.MediaUrl;
    $('.granska_pressentationsbild').attr('src', imgsrc);

    if (arrJson.MediaList.length > 0) {
        $('.granska_exempel').show();
    } else {
        $('.granska_exempel').hide();
    }

    //if (arrJson.MediaList.length < 0) {
    //    $('.granska_exempel').show();
    //} else {
    //    $('.granska_exempel').hide();
    //}

}
var faktaContent = function (fakalistJson) {

    HandlebarTemplet.injecthtmltemplate(".granskaFaktaMainblock", "kk_aj_granskafaktaList.txt", fakalistJson);

}
var utovareContent = function (utovareJson) {
    $('.granska_Utovare_Organisation').html($('#utovare_aktor_grupp').val());
    $('.granska_Utovare_namn').html($('#utovare_fornamn').val() + " " + $('#utovare_efternamn').val());
    $('.granska_Utovare_Adress').html($('#utovare_adress').val());
    $('.granska_Utovare_postort').html($('#utovare_postnummer').val() + " " + $('#utovare_ort').val());
    $('.granska_Utovare_tfn').html($('#utovare_telefonnr').val());
    $('.granska_Utovare_epost').html($('#utovare_epost').val());
    $('.granska_Utovare_hemsida').html($('#utovare_orghemsida').val());
}