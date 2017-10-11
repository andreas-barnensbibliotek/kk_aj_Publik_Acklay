//här sätts alla pluggin och jquery.ready starters 
var $ = require("jquery");
var appsettingsobject = require("./appSettings.js");
var _appsetting = appsettingsobject.config;

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
    if ($('input[name=arr_ljud]:checked').length <= 0) {
        $('.kk_aj_search_arr_ljud_error').css('display', 'block');        
        ret = false;
    }
   
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

var konstforminputs ={
    forestallningtune: "kk_aj_ft",   
    foresallningfastscen: "kk_aj_ff",
    forfattarbesok: "kk_aj_fb",
    kulturpedagogiskaprojekt: "kk_aj_kp",
    fortbildningar: "kk_aj_fob",
    resmal: "kk_aj_rm",
    museielador:"kk_aj_ml"    
}