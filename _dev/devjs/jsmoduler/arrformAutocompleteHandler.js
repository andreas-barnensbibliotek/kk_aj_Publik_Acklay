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
    allreadyExistsutovare: function (epost, postnr, callback) {
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
                console.log("detta är REtmess " +retmess);
                if (data.kk_aj_admin.antalutovare >0) {
                    callback(true);

                } else {
                    callback(false);
                    console.log("fel vid hämtning av befintlig utövardata");
                };

            });
        }

    },
    emptyutovareform: function () {
        tomutovarefield();
    },
    savekontaktuppgifter: function () {
        savekontaktupg();
    },
    kopierakontaktuppgifter: function () {
        copykontaktupg();
    }

};

var fyllutovaredata = function (data) {
    var utovare = data.kk_aj_admin.Utovarelist[0];
    tomutovarefield();
    if (utovare) {
        $('.kk_aj_form_befintligutovare').attr('rel', utovare.UtovarID);
       
        $('#utovare_aktor_grupp').val(utovare.Organisation);
        $('#visa_utovareNamn2').html(utovare.Organisation);

        $('#utovare_orghemsida').val(utovare.Weburl);
        $('#visa_utovareHemsida2').html(utovare.Weburl);

        $('#utovare_adress').val(utovare.Adress);
        $('#visa_utovareAdress2').html(utovare.Adress);

        $('#utovare_postnummer').val(utovare.Postnr);
        $('#visa_utovarePostnr2').html(utovare.Postnr);

        $('#utovare_ort').val(utovare.Ort);
        $('#visa_utovareOrt2').html(utovare.Ort);

        $('#utovare_kommun').val(utovare.Kommun);
        $('#visa_utovareKommun2').html(utovare.Kommun);

        $('#utovare_fornamn').val(utovare.Fornamn);
        $('#visa_utovareForamn2').html(utovare.Fornamn);

        $('#utovare_efternamn').val(utovare.Efternamn);
        $('#visa_utovareEfternamn2').html(utovare.Efternamn);

        $('#utovare_telefonnr').val(utovare.Telefon);
        $('#visa_utovareTelenr2').html(utovare.Telefon);

        $('#utovare_epost').val(utovare.Epost);
        $('#visa_utovareEpost2').html(utovare.Epost);
        return true;
    } else {
        return false;
    };

}
var savekontaktupg = function () {
    let grupp = $('#utovare_aktor_grupp').val();
    $('#visa_utovareNamn2').html(grupp);

    let orghemsida = $('#utovare_orghemsida').val();
    $('#visa_utovareHemsida2').html(orghemsida);

    let Adress = $('#utovare_adress').val();
    $('#visa_utovareAdress2').html(Adress);

    let Postnr = $('#utovare_postnummer').val();
    $('#visa_utovarePostnr2').html(Postnr);

    let Ort = $('#utovare_ort').val();
    $('#visa_utovareOrt2').html(Ort);

    let Kommun = $('#utovare_kommun').val();
    $('#visa_utovareKommun2').html(Kommun);

    let Fornamn = $('#utovare_fornamn').val();
    $('#visa_utovareForamn2').html(Fornamn);

    let Efternamn = $('#utovare_efternamn').val();
    $('#visa_utovareEfternamn2').html(Efternamn);

    let Telefon = $('#utovare_telefonnr').val();
    $('#visa_utovareTelenr2').html(Telefon);

    let Epost = $('#utovare_epost').val();
    $('#visa_utovareEpost2').html(Epost);
    
};

var copykontaktupg = function () {

    let Fornamn = $('#utovare_fornamn').val();
    $('#arr_kontakt_fornamn').val(Fornamn);

    let Efternamn = $('#utovare_efternamn').val();
    $('#arr_kontakt_efternamn').val(Efternamn);
    
    let Telefon = $('#utovare_telefonnr').val();
    $('#arr_kontakt_telefonnr').val(Telefon);    

    let Epost = $('#utovare_epost').val();
    $('#arr_kontakt_epost').val(Epost);    

}

//var fyllutovaredata = function (data) {
//    var utovare = data.kk_aj_admin.Utovarelist[0];
//    tomutovarefield();
//    if (utovare) {
//        $('.kk_aj_form_befintligutovare').attr('rel', utovare.UtovarID);
//        $('#utovare_aktor_grupp').val(utovare.Organisation);
//        $('#utovare_orghemsida').val(utovare.Weburl);
//        $('#utovare_adress').val(utovare.Adress);
//        $('#utovare_postnummer').val(utovare.Postnr);
//        $('#utovare_ort').val(utovare.Ort);
//        $('#utovare_kommun').val(utovare.Kommun);
//        $('#utovare_fornamn').val(utovare.Fornamn);
//        $('#utovare_efternamn').val(utovare.Efternamn);
//        $('#utovare_telefonnr').val(utovare.Telefon);
//        $('#utovare_epost').val(utovare.Epost);
//        return true;
//    } else {
//        return false;
//    }; 
    
//}

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