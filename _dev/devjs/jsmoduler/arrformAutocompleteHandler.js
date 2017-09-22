//här sätts alla pluggin och jquery.ready starters 
var $ = require("jquery");
var appsettingsobject = require("./appSettings.js");
var _appsetting = appsettingsobject.config;

module.exports = {
    getBefintligutovare: function (epost, postnr, callback) {
        var requesturl = "";
        var ok = "false";

        if (epost) {
            ok = true;
        }
        if (!postnr) {
            ok = false;
        }

        if (ok) {
            epost = epost.replace(/\s+/g, '');
            postnr = postnr.replace(/\s+/g, '');
       
            requesturl = _appsetting.globalconfig.apiserver + "/Api_v3/utovare/searchForm/user/" + epost + "/val/" + postnr + "/devkey/alf?type=json";

            servercall(requesturl, function (data, retmess) {
                if (retmess) {                    
                    callback(fyllutovaredata(data));
                    
                } else {
                    callback(false);
                    console.log("fel vid hämtning av befintlig utövardata");
                };

            });
          }             
        
    },
    emptyutovareform: function () {
        tomutovarefield();
    }

};
var fyllutovaredata = function (data) {
    var utovare = data.kk_aj_admin.Utovarelist[0];
    tomutovarefield();
    if (utovare) {
        $('.kk_aj_form_befintligutovare').attr('rel', utovare.UtovarID);
        $('#utovare_aktor_grupp').val(utovare.Organisation);
        $('#utovare_orghemsida').val(utovare.Weburl);
        $('#utovare_adress').val(utovare.Adress);
        $('#utovare_postnummer').val(utovare.Postnr);
        $('#utovare_ort').val(utovare.Ort);
        $('#utovare_kommun').val(utovare.Kommun);
        $('#utovare_fornamn').val(utovare.Fornamn);
        $('#utovare_efternamn').val(utovare.Efternamn);
        $('#utovare_telefonnr').val(utovare.Telefon);
        $('#utovare_epost').val(utovare.Epost);
        return true;
    } else {
        return false;
    }; 
    
}

var servercall = function (currurl, callback) {
    
    $.ajax({
        async: true,
        type: "GET",
        url: currurl,
        dataType: "json",            
        success: function (data) {
            console.log("utövardata hämtad: ");
            callback(data,"funkar");
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("Nått blev fel hämtning utövardata!");
            alert("Nått blev fel hämtning utövardata!");
        }
    });

}

var tomutovarefield = function () {
    $('.kk_aj_form_befintligutovare').attr('rel', '0');
    $('#utovare_aktor_grupp').val("");
    $('#utovare_orghemsida').val("");
    $('#utovare_adress').val("");
    $('#utovare_postnummer').val("");
    $('#utovare_ort').val("");
    $('#utovare_kommun').val("");
    $('#utovare_fornamn').val("");
    $('#utovare_efternamn').val("");
    $('#utovare_telefonnr').val("");
    $('#utovare_epost').val("");
};