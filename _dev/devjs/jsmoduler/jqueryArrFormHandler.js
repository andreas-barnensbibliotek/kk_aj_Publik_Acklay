//här sätts alla pluggin och jquery.ready starters 
var $ = require("jquery");
var appsettingsobject = require("./appSettings.js");
var arrformjsonBuilder = require("./arrformJsonBuilder.js");
var handlebarTemplethandler = require("./HandlebarTemplethandler.js");
var arrformValidator = require("./arrFormValidator.js");
var arrGranskaVy = require("./arrGranskaVy.js");
var arrformAutocompleteHandler = require("./arrformAutocompleteHandler.js");
var _exempellistobject = { "exempelitemlist": [] };

module.exports = {
    start: function (tab) {
        var appsettings = appsettingsobject.config;
        $(function () {

            var storage = Storages.localStorage
            storage.set('foo', 'Detta funkar bra detta!');
            var storage = Storages.localStorage
            console.log("localstorage: " + storage.get('foo'))

            var btn_ny_utovareBlock = $('.kk_aj_form_befintligutovare');
            var btn_befintlig_utovareBlock = $('.kk_aj_form_utovareuppgifter');

            // Nav Event
            $('body').on('click', '.kk_aj_btnbefintligutovare', function () {
                $('.kk_aj_form_utovareuppgifter :input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').val('');
                btn_befintlig_utovareBlock.hide();
                btn_ny_utovareBlock.show();
                $('.kk_aj_verifystep2').hide();                
                $('small.error').hide();
                $(this).removeClass("secondary");
                $('.kk_aj_btnnyutovare').addClass("secondary");
                $('#utovare_epost').addClass('befintligutovare')
                
                return false;
            });
            $('body').on('click', '.kk_aj_btnnyutovare', function () {
                arrformAutocompleteHandler.emptyutovareform();
                btn_befintlig_utovareBlock.removeClass('successborder').show();
                btn_ny_utovareBlock.hide();
                $('.kk_aj_befintlignotme').hide();
                $('.kk_aj_verifystep2').show();
                $(this).removeClass("secondary");
                $('.kk_aj_btnbefintligutovare').addClass("secondary");
                $('#utovare_epost').removeClass('befintligutovare')
                $('.utovare_epost_errorutovareexeists').hide();
                return false;
            });

            // Get befintlig arrangör
            $('body').on('click', '.kk_aj_btnHamtakontaktupg', function () {

                var epost = $('.kk_aj_search_utovareEpost');
                var postnr = $('.kk_aj_search_utovarePostnr');
                var kk_aj_search_utovarePostnr_error = $('.kk_aj_search_utovarePostnr_error');
                var kk_aj_search_utovareEpost_error = $('.kk_aj_search_utovareEpost_error');
                var kk_aj_search_Nothingtoshow = $('.kk_aj_search_Nothingtoshow');
                var kk_aj_search_Nothingtoshow_error = $('.kk_aj_search_Nothingtoshow_error').hide();
                var kk_aj_form_utovareuppgifter = $('.kk_aj_form_utovareuppgifter');
                var kk_aj_btnHamtakontaktupg = $('.kk_aj_btnHamtakontaktupg');
                $('#utovare_epost').removeClass('notYouTest');                
                $('.utovare_epost_errorNotYou').hide();
                
                var kk_aj_verifystep2 = $('.kk_aj_verifystep2');

                kk_aj_search_utovarePostnr_error.hide();
                kk_aj_search_utovareEpost_error.hide();
                kk_aj_search_Nothingtoshow.hide();
                kk_aj_search_Nothingtoshow_error.hide();
                                            
                kk_aj_btnHamtakontaktupg.removeClass('success').addClass('secondary');
                kk_aj_form_utovareuppgifter.removeClass('successborder').hide();

                if (epost.val() && postnr.val()) {
                    arrformAutocompleteHandler.getBefintligutovare(epost.val(), postnr.val(), function (data) {
                        if (!data == false) {

                            kk_aj_btnHamtakontaktupg.removeClass('secondary').addClass('success');

                            kk_aj_form_utovareuppgifter.addClass('successborder').show();
                            $('.kk_aj_befintlignotme').show();
                            kk_aj_verifystep2.show();                           
                        } else {
                            kk_aj_search_Nothingtoshow.show();
                            kk_aj_search_Nothingtoshow_error.show().attr("style", "display:block");
                            $('.kk_aj_befintlignotme').hide();
                            kk_aj_verifystep2.hide();
                        }                        
                    });

                } else {
                    kk_aj_search_utovarePostnr_error.show();
                    kk_aj_search_utovareEpost_error.show();
                    kk_aj_verifystep2.hide();
                }               
                return false;
            });



            // Verify steg 1
            $('.kk_aj_btn_next_step[rel=2]').on('click', function (e) {
                

                if (!$('#utovare_epost').val() || !$('#utovare_postnummer').val()) {
                    if (arrformValidator.formvalidator(1) == true && ret == true) {

                        if ($('#utovare_epost').hasClass('notYouTest')) {
                            if ($('#utovare_epost').val() == $('.kk_aj_search_utovareEpost').val()) {
                                isnotme();
                                ret = false;
                            }
                        }

                        if (ret) {
                            tabnavigator(2);
                        }


                        return ret;


                    } else {
                        tabnavigator(1);
                        return false;
                    }
                }
                
               arrformAutocompleteHandler.allreadyExistsutovare($('#utovare_epost').val(), $('#utovare_postnummer').val(), function (data) {
                   var ret = true
                   if(!$('#utovare_epost').hasClass('befintligutovare')){
                       if (data) {
                            utovareexeists();
                            ret= false;
                        }
                    }

                if (arrformValidator.formvalidator(1)== true && ret==true ) {
                    
                    if ($('#utovare_epost').hasClass('notYouTest')) {
                        if ($('#utovare_epost').val() == $('.kk_aj_search_utovareEpost').val()) {
                            isnotme();
                            ret = false;
                        }
                    }

                    if (ret) {
                        tabnavigator(2);
                    }
                    
                   
                    return ret;
                    
                   
                } else {
                    tabnavigator(1);
                    return false;
                }
              });
            });            
            
            // Verify steg 2
            $('.kk_aj_btn_next_step[rel=3]').on('click', function (e) {
                if (arrformValidator.formvalidator(2)) {

                    // FYll på inmatade värden i granskavyn!   
                    arrformjsonBuilder.getArrFormJsonData(_exempellistobject, function (callback) {
                        console.log(callback);
                        var jsonmainobject = callback;
                        arrGranskaVy.getArrFormJsonData(jsonmainobject);

                    });

                    

                    tabnavigator(3);                                     
                    return false;
                    
                } else {
                    tabnavigator(2);
                    return false;
                }
            });
            // Verify steg 2
            $('.kk_aj_btn_next_step[rel=4]').on('click', function (e) {               
                    tabnavigator(4);
                //spara in allt i jsonobject och lägg i localstoragae

                    console.log("finns:" + _exempellistobject);
                    return true;                
            });

            //show step
            $('.kk_aj_tab[rel=1]').on('click', function (e) {               
                tabnavigator(1);
                if (appsettings.arrtab.currenttab > 1) {
                    arrformValidator.formvalidator(1);
                }
                appsettings.arrtab.currenttab = 1;
                return true;
            });
            $('.kk_aj_tab[rel=2]').on('click', function (e) {                
                tabnavigator(2);
                if (appsettings.arrtab.currenttab > 1) {
                    
                    arrformValidator.formvalidator(2);
                }
                appsettings.arrtab.currenttab = 2;
                return true;
            });
            $('.kk_aj_tab[rel=3]').on('click', function (e) {
                tabnavigator(3);
                if (appsettings.arrtab.currenttab > 3) {
                    arrformValidator.formvalidator(3);
                }
                appsettings.arrtab.currenttab = 3;
                return true;
            });
            $('.kk_aj_tab[rel=4]').on('click', function (e) {
                $('.tab-title[rel=4]').addClass('active').removeClass('done');               ;
                tabnavigator(4);
                appsettings.arrtab.currenttab = 4;
                return true;
            });
            //back to steg 1
            $('.kk_aj_btn_to_step1').on('click', function (e) {
                tabnavigator(1);
                return true;                    
            });
            //back to steg 2
            $('.kk_aj_btn_to_step2').on('click', function (e) {
                tabnavigator(2);
                return true;
            });


            $('.kk_aj_btn_SendArr').on('click', function (e) {
                if (confirm('Är du säker på att du vill skicka in uppgifterna för arrangemanget?')) {
                    console.log(_exempellistobject);
                    arrformjsonBuilder.getArrFormJsonData( _exempellistobject, function (callback) {
                       console.log(callback);
                       var arrjson = callback;

                        arrformjsonBuilder.PostMainArrangemang(arrjson, function (callbackarrid) {
                            console.log(callbackarrid);                            
                            arrformjsonBuilder.tempuploadimage("uploadimg", callbackarrid, function (callback) {
                                console.log("sista" + callback);
                                alert("uppgifterna är nu inskickade!");
                                clearForm();
                                tabnavigator(1);
                                var jsondata = callback;
                                return true;
                            });
                        });
                                                
                    });
                    return false;

                } else {
                    return false;
                };
            })



            $('.kk_aj_AvbrytSteps').on('click', function (e) {
                if (confirm('Är du säker på att du vill radera alla ifyllda uppgifter för arrangemanget? Raderade uppgifter går inte att ångra!')) {
                    clearForm();
                    tabnavigator(1);
                    return true;
                } else {
                    return false;
                };
            });

            $('.kk_aj_btnnyttexemple').on('click', function (e) {                
                $('.arrExempel').slideToggle("slow");
                $(this).text(function (i, text) {
                    return text === "Lägg till exempel" ? "Avbryt lägg till exempel" : "Lägg till exempel";
                })
                
            });
            
            
            $('#kk_aj_addExempel').on('click', function (e) {               
                saveArrExempel();
                $('.arrExempel').slideToggle("slow");
                $('.kk_aj_btnnyttexemple').text("Lägg till exempel");
                
            });
            $('body').on('click','.kk_aj_tabortexempel', function (e) {
                var deletetitle = $(this).attr('rel');
                tabortexempelfromJson(deletetitle);
                return false;
            });

            $('#kk_aj_laddatmpimg').on('click', function () {
                var spinner = "http://kulturkatalog.kivdev.se/Portals/_default/Skins/kk_aj_Publik_Acklay/public/ajax-loader.gif";
                $('#kk_aj_tmpimg').attr('src', spinner);
                arrformjsonBuilder.tempuploadimage("tmpimg","0", function (callback) {
                    console.log(callback);
                    $('#kk_aj_tmpimg').attr('src', callback);
                });
                return false;
            });

            $('.kk_aj_befintlignotme').on('click', function () {
                isnotme();
                return false;
            });
            
        });
              

        var clearForm = function () {
            var addarrtab_1 = $('#addarrtab-1');
            var addarrtab_2 = $('#addarrtab-2');
            var addarrtab_3 = $('#addarrtab-3');
            var addarrtab_4 = $('#addarrtab-4');
            addarrtab_1.show();
            addarrtab_2.show();
            addarrtab_3.show();
            addarrtab_4.show();
            $('#mainarrformcontainer :input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').val('');
            $('#mainarrformcontainer :checkbox, #mainarrformcontainer :radio').prop('checked', false);
            addarrtab_1.hide();
            addarrtab_2.hide();
            addarrtab_3.hide();
            addarrtab_4;
            $('#kk_aj_tmpimg').attr('src', 'https://www2.visitumea.se/sv//Content/img/missingimage.jpg');
            $('.kk_aj_form_befintligutovare').hide();
            $('.kk_aj_form_utovareuppgifter').removeClass('successborder').show();           
            $('.kk_aj_verifystep2').show();
            $('.kk_aj_btnnyutovare').removeClass("secondary");
            $('.kk_aj_btnbefintligutovare').addClass("secondary");
            $('.kk_aj_form_befintligutovare').attr('rel','0');
        }

    }
};


var tabnavigator = function (tab) {
    var addarrtab_1 = $('#addarrtab-1');
    var addarrtab_2 = $('#addarrtab-2');
    var addarrtab_3 = $('#addarrtab-3');
    var addarrtab_4 = $('#addarrtab-4');

    addarrtab_1.hide();
    addarrtab_2.hide();
    addarrtab_3.hide();
    addarrtab_4.hide();

    switch (tab) {
        case 1:
            addarrtab_1.show();            
            break;
        case 2:
            addarrtab_2.show();            
            break;
        case 3:
            addarrtab_3.show();
            break;
        case 4:
            addarrtab_4.show();
            break;
        default:
            addarrtab_1.show();
    };
    changetabattr(tab)
}
var changetabattr = function (tab) {
    var curr = tab;
    var next = tab + 1;
    if (curr == 4) {
        next = curr;
    };


    if (curr == 4) {
        $('.tab-title[rel=' + curr + ']').addClass('active').removeClass('disabled');
        $('.tab-title[rel=3]').addClass('done').removeClass('active');
    } else {
        $('.tab-title[rel=' + tab + ']').addClass('active').removeClass('done').removeClass('disabled');
        for (next; next <= 4; next++) {
            $('.tab-title[rel=' + next + ']').addClass('disabled').removeClass('active').removeClass('done');
        }
        //$('.tab-title[rel=' + next + ']').addClass('disabled').removeClass('active');
    }

};


// Arrangemangs exempel START!
var saveArrExempel = function () {
    var val = $('#arr_ExempelRubrik').val()
    var index = _exempellistobject.exempelitemlist.findIndex(function (item, i) {
        return item.mediaTitle === val
    });
   
    if (index>= 0){
        alert("Exemplet finns redan!");
        return false;
    }
    _exempellistobject.exempelitemlist.push(
        {
            "MediaUrl": $('#arr_Exempelbild').val(),
            "MediaTyp": $('input[name=arr_ExempelTyp]:checked').val(),
            "mediaTitle": $('#arr_ExempelRubrik').val(),
            "mediaBeskrivning": $('#arr_Exempelbeskrivning').val(),
            "mediaLink": $('#arr_ExempelUrl').val()            
        }
    );
    handlebarTemplethandler.injecthtmltemplate(".arrExempellist", "kk_aj_arrformExempelList.txt", _exempellistobject);
    tomexempelform();
}

var tomexempelform = function () {
    $('#arr_Exempelbild').val("");       
    $('#arr_ExempelRubrik').val("");
    $('#arr_Exempelbeskrivning').val("");
    $('#arr_ExempelUrl').val("");
}

var tabortexempelfromJson = function (delval) {
    var index = _exempellistobject.exempelitemlist.findIndex(function (item, i) {
        return item.mediaTitle === delval
    });
    _exempellistobject.exempelitemlist.splice(index, 1);    
    handlebarTemplethandler.injecthtmltemplate(".arrExempellist", "kk_aj_arrformExempelList.txt", _exempellistobject);
}
// Arrangemangs exempel STOPP!
var isnotme = function () {
    $('#utovare_epost').val("").addClass('notYouTest');
    $('.kk_aj_form_befintligutovare').attr('rel', '0');
    $('.utovare_epost_errorNotYou').show();
}
var utovareexeists = function () {
   
    $('.utovare_epost_errorutovareexeists').show();
    $('#utovare_epost').val("")
}