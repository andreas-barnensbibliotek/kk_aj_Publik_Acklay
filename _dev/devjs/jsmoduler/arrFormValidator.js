//här sätts alla pluggin och jquery.ready starters 
var $ = require("jquery");
var appsettingsobject = require("./appSettings.js");
var _appsetting = appsettingsobject.config;
var _basesrc = "/DesktopModules/kk_aj_Publik_ArrangemangForm/images/";

module.exports = {
    formvalidator:function (step) {
        var ret = false;
        var next = step + 1;

        //Break validation om app i debugläge
        if (_appsetting.debug == "true") {
            $('.kk_aj_verifystep' + next + '').removeClass('disabled');
            ret = true;
        } else {
            switch (step) {
                case 0:
                    ret = step0(next);
                    break;
                case 1:
                    ret = step1(next);
                    break;
                case 2:
                    ret = step2(next);
                    break;
                case 3:
                    ret = step3(next);
                    break;
                case 4:
                    ret = step3(next);
                    break;
            }
        }
        if (ret == false) {
            $('.kk_aj_btn_next_step[rel=' + next + ']').addClass('error').removeClass('success');
            $('.tab-title[rel=' + step + ']').addClass('error').removeClass('done');

        } else {
            $('#addarrtab-' + step + ' small').hide();
            $('.kk_aj_btn_next_step[rel=' + next + ']').addClass('success').removeClass('error');
            $('.tab-title[rel=' + step + ']').addClass('done').removeClass('error').removeClass('active');
        }
        return ret;
    },
    arrtypimg: function (vald) {
        var basesrc = _basesrc;
        
        $('.img_forestallningtune').attr("src", basesrc + "forestallningpatune.png");
        $('.img_foresallningfastscen').attr("src", basesrc + "Skolbio.png");
        $('.img_forfattarbesok').attr("src", basesrc + "forfattarbesok.png");
        $('.img_Kulturpedagogiskaprojekt').attr("src", basesrc + "kulturpedagogiskaprojekt.png");
        $('.img_Fortbildningar').attr("src", basesrc + "Fortbildningar.png");
        $('.img_museielador').attr("src", basesrc + "resmalsbesok.png");


        switch (vald) {
            case "1":
                $('.img_forestallningtune').attr("src", basesrc + "forestallningpatune_invert.png");
                break;
            case "8":
                $('.img_foresallningfastscen').attr("src", basesrc + "Skolbio_invert.png");
                break;
            case "3":
                $('.img_forfattarbesok').attr("src", basesrc + "forfattarbesok_invert.png");
                break;
            case "4":
                $('.img_Kulturpedagogiskaprojekt').attr("src", basesrc + "kulturpedagogiskaprojekt_invert.png");
                break;
            case "5":
                $('.img_Fortbildningar').attr("src", basesrc + "Fortbildningar_invert.png");
                break;
            case "6":
                $('.img_museielador').attr("src", basesrc + "resmalsbesok_invert.png");
                break;
        }
        return false;

    },
    konsttypimg: function (vald) {
        var basesrc = _basesrc;
        var img_arkitektur = $('.img_arkitektur');
        var img_dans = $('.img_dans');
        var img_film = $('.img_film');
        var img_konst = $('.img_konst');
        var img_litteratur = $('.img_litteratur');
        var img_musik = $('.img_musik');
        var img_naturochkultruarv = $('.img_naturochkultruarv');
        var img_nycirkus = $('.img_nycirkus');
        var img_slojd = $('.img_slojd');
        var img_teater = $('.img_teater');
        var img_teknik = $('.img_teknik');
        var img_annascenkonst = $('.img_annascenkonst');

        img_arkitektur.attr("src", basesrc + "Arkitekturochdesign.png");
        img_dans.attr("src", basesrc + "dans.png");
        img_film.attr("src", basesrc + "Filmochmedia.png");
        img_konst.attr("src", basesrc + "Konstformochdesign.png");
        img_litteratur.attr("src", basesrc + "Litteraturberattandeskrivande.png");
        img_musik.attr("src", basesrc + "musik.png");
        img_naturochkultruarv.attr("src", basesrc + "Naturochkulturarv.png");
        img_nycirkus.attr("src", basesrc + "Nycirkus_cirkus.png");
        img_slojd.attr("src", basesrc + "Slojd.png");
        img_teater.attr("src", basesrc + "teater.png");
        img_teknik.attr("src", basesrc + "Teknikochmultimedia.png");
        img_annascenkonst.attr("src", basesrc + "Annanscenkonst.png");


        switch (vald) {
            case "1":
                img_arkitektur.attr("src", basesrc + "Arkitekturochdesign_invert.png");
                break;
            case "2":
                img_dans.attr("src", basesrc + "dans_invert.png");
                break;
            case "3":
                img_film.attr("src", basesrc + "Filmochmedia_invert.png");
                break;
            case "4":
                img_konst.attr("src", basesrc + "Konstformochdesign_invert.png")
                break;
            case "5":
                img_litteratur.attr("src", basesrc + "Litteraturberattandeskrivande_invert.png");
                break;
            case "6":
                img_musik.attr("src", basesrc + "musik_invert.png");
                break;
            case "7":
                img_naturochkultruarv.attr("src", basesrc + "Naturochkulturarv_invert.png");
                break;
            case "8":
                img_nycirkus.attr("src", basesrc + "Nycirkus_cirkus_invert.png");
                break;
            case "9":
                img_slojd.attr("src", basesrc + "Slojd_invert.png");
                break;
            case "10":
                img_teater.attr("src", basesrc + "teater_invert.png");
                break;
            case "11":
                img_teknik.attr("src", basesrc + "Teknikochmultimedia_invert.png");
                break;
            case "12":
                img_annascenkonst.attr("src", basesrc + "Annanscenkonst_invert.png");
                break;
        }
        return false;
    },
    arrShowforminputs: function (arrtypid) {
        
        switch (arrtypid) {
            case "0":
                hideformfields();
                break;
            case "1":
                konstforminputs.forestallningtune.kontroller();
                $('.kk_aj_form_Arrangemang').show(500);
                break;
            case "3":
                konstforminputs.forfattarbesok.kontroller();
                $('.kk_aj_form_Arrangemang').show(500);
                break;
            case "5":
                konstforminputs.fortbildningar.kontroller();
                $('.kk_aj_form_Arrangemang').show(500);
                break;
            default:
                hideformfields();
                $('.kk_aj_form_Arrangemang').show(500);
                break;
        }
    }
};


var step0 = function (next) {
    var pass = $("#password");
    var passconfirm = $("#confirm");
    console.log("pass: " + pass);
    if (pass.val() != "" && pass.val() === passconfirm.val()) {
        pass.removeClass("formerror");
        ret = true;
    } else {
        pass.addClass("formerror");
        ret = false;
    }
    return ret;
}

var step1 = function (next) {
    var validateobj = $('.kk_aj_requireValidation_step1');
    return validateinputs(validateobj, next);
}

var step2 = function (next) {
    var ret = true;

    var validateobj = $('.kk_aj_requireValidation_step2');
    ret = validateinputs(validateobj, next);

    $('.arr_radioValArrtyp_error').css('display', 'none');
    $('.arr_radioValkontstform_error').css('display', 'none');
    $('.kk_aj_search_arr_ljud_error').css('display', 'none');
    $('.ArrangemangtypBlock').removeClass('radioError');
    $('.kontformBlock').removeClass('radioError');

    if ($('input[name=arr_radioValArrtyp]:checked').length <= 0) {
        $('.arr_radioValArrtyp_error').css('display', 'block');
        $('.ArrangemangtypBlock').addClass('radioError');
        ret = false;
    }
    if ($('input[name=arr_radioValkontstform]:checked').length <= 0) {
        $('.arr_radioValkontstform_error').css('display', 'block');
        $('.kontformBlock').addClass('radioError');
        ret = false;
    }
        
    ret = validatearrtyp(validateobj, next, ret);

    return ret;
}
var step3 = function (next) {
    ret = true;
    return ret;
}

var step4 = function (next) {
    ret = true;
    return ret;
}



var validateinputs = function (validateobj, next) {
    var ret = true;
    validateobj.each(function () {
        var current = $(this);
        var current_error = $("." + current.attr('id') + "_error");

        if (current.val() != "") {
            
            $('.tab-title[rel=' + next + ']').addClass('active').removeClass('done').removeClass('disabled');
            $('.kk_aj_verifystep' + next + '').removeClass('disabled');
            current_error.css('display', 'none');
        } else {
            current_error.css('display', 'block');
            ret = false;
        }

    });
    return ret;
}

var validatearrtyp = function(validateobj, next, ret) {   
    var obj;
    var arrtypid = $('input[name=arr_radioValArrtyp]').val();
    switch (arrtypid) {
        case "1": {
            obj = $('.kk_aj_ft');
            ret = validateinputs(obj, next);

            if ($('input[name=arr_ljud]:checked').length <= 0) {
                $('.kk_aj_search_arr_ljud_error').css('display', 'block');
                ret = false;
            }            
            break;
        }
        case "3": {
            obj = $('.kk_aj_fb');
            ret = validateinputs(obj, next);
            break;
        }
        case "5": {
            obj = $('.kk_aj_fob');
            ret = validateinputs(obj, next);
            break;
        }
    }

    return ret;

}
       

var hideformfields = function(){
    //lokalblock
    $('.kk_aj_form_Arrangemang').hide();
    
    $('.kk_aj_ft').hide();  //forestallningtune
    $('.kk_aj_fb').hide();  //forfattarbesok
    $('.kk_aj_fob').hide(); //fortbildningar      
        
}

var konstforminputs ={
    forestallningtune:{
        block:"kk_aj_ft",
        kontroller: function () {
            hideformfields();            
            $('.kk_aj_ft').show();                
       }
    },
    foresallningfastscen:{
        block: "kk_aj_ff",
        kontroller: function () {
            hideformfields();
        }
    }, 
    forfattarbesok:{
        block: "kk_aj_fb",
        kontroller: function () {
            hideformfields();
            $('.kk_aj_fb').show();
        }
    },
    kulturpedagogiskaprojektforesallningfastscen:{
        block: "kk_aj_kp",
        kontroller: function () {
            hideformfields();
        }
    },  
    fortbildningar:{
        block: "kk_aj_fob",
        kontroller: function () {
            hideformfields();
            $('.kk_aj_fob').show();
        }
    },   
    resmal:{
        block: "kk_aj_rm",
        kontroller: function () {
            hideformfields();
        }
    },   
    museielador:{
        block: "kk_aj_ml",
        kontroller: function () {
            hideformfields();
        }
    }   
}