//här sätts alla pluggin och jquery.ready starters 
var $ = require("jquery");
var appsettingsobject = require("./appSettings.js");
var arrformjsonBuilder = require("./arrformJsonBuilder.js");
var handlebarTemplethandler = require("./HandlebarTemplethandler.js");
var arrformValidator = require("./arrFormValidator.js");
var arrGranskaVy = require("./arrGranskaVy.js");
var arrformAutocompleteHandler = require("./arrformAutocompleteHandler.js");
//var tinyeditorHandler = require("./externaljs/tinyeditor.js");
var _exempellistobject = { "exempelitemlist": [] };

module.exports = {
    start: function (tab) {
        var appsettings = appsettingsobject.config;
        
        $(function () {
            arrformValidator.arrShowforminputs("0");
           // tinyeditorHandler.init();
            //var storage = Storages.localStorage
            //storage.set('foo', 'Detta funkar bra detta!');
            //var storage = Storages.localStorage
            //console.log("localstorage: " + storage.get('foo'))

            var btn_ny_utovareBlock = $('.kk_aj_form_befintligutovare');
            var btn_befintlig_utovareBlock = $('.kk_aj_form_utovareuppgifter');
            var btn_befintlig_utovartxtBlock = $('.kk_aj_form_visa_utovarinfo');
            var btn_kontaktupg_arrangemangBlock = $('.kk_aj_form_kontaktuppgifterarr');
            var visagetTidigareArrBlock = $('.kk_aj_visagetTidigareArrBlock');
                       
            $('.ArrangemangtypBlock input').on('change', function () {
                var vald = $('input[name=arr_radioValArrtyp]:checked', '.ArrangemangtypBlock').val();
                $('small.error').hide();
                $('.kontformBlock').removeClass("radioError");
                arrformValidator.arrShowforminputs(vald);
                    arrformValidator.arrtypimg(vald);                    
                });
            $('.kontformBlock input').on('change', function () {
                var vald = $('input[name=arr_radioValkontstform]:checked', '.kontformBlock').val();
                arrformValidator.konsttypimg(vald);                
            });
            // Nav Event
            $('body').on('click', '.kk_aj_btnbefintligutovare', function () {
                //tidigareutovaredisable(true);
                $('.kk_aj_form_utovareuppgifter :input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').val('');
                btn_befintlig_utovareBlock.hide();
                btn_befintlig_utovartxtBlock.hide();
                btn_kontaktupg_arrangemangBlock.hide();
                btn_ny_utovareBlock.show();
                $('.kk_aj_verifystep2').hide();                
                $('small.error').hide();
                $('#arr_presentationsbild').removeClass('novalidate');
                $(this).removeClass("secondary");
                $('.kk_aj_btnnyutovare').addClass("secondary");
                $('#utovare_epost').addClass('befintligutovare')
                
                return false;
            });
            $('body').on('click', '.kk_aj_btnnyutovare', function () {
                //tidigareutovaredisable(false);
                clearForm();
                arrformAutocompleteHandler.emptyutovareform();               
                btn_befintlig_utovareBlock.show();
                btn_ny_utovareBlock.hide();
                visagetTidigareArrBlock.hide();
                btn_kontaktupg_arrangemangBlock.show();
                $('#arr_presentationsbild').removeClass('novalidate');
                btn_befintlig_utovartxtBlock.hide();
                $('.kk_aj_verifystep2').show();
                $(this).removeClass("secondary");
                $('.kk_aj_btnbefintligutovare').addClass("secondary");
                $('#utovare_epost').removeClass('befintligutovare')
                $('.utovare_epost_errorutovareexeists').hide();
                return false;
            });

            // Get befintlig arrangör
            $('body').on('click', '.kk_aj_btnHamtakontaktupg', function () {
                //tidigareutovaredisable(true);
                var epost = $('.kk_aj_search_utovareEpost');
                var postnr = $('.kk_aj_search_utovarePostnr');
                var kk_aj_search_utovarePostnr_error = $('.kk_aj_search_utovarePostnr_error');
                var kk_aj_search_utovareEpost_error = $('.kk_aj_search_utovareEpost_error');                
                var kk_aj_search_Nothingtoshow_error = $('.kk_aj_search_Nothingtoshow_error').hide();

                var kk_aj_search_Nothingtoshow = $('.kk_aj_search_Nothingtoshow');
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
                        btn_kontaktupg_arrangemangBlock.show();


                        if (!data == false) {
                            let currentutovareid = $('.kk_aj_form_befintligutovare').attr('rel');
                            $('#arr_presentationsbild').addClass('novalidate');
                            arrformAutocompleteHandler.getutovareArrlist(currentutovareid);
                            btn_befintlig_utovartxtBlock.show();
                            kk_aj_form_utovareuppgifter.hide()
                            kk_aj_btnHamtakontaktupg.removeClass('secondary').addClass('success');
                            visagetTidigareArrBlock.show();
                            //kk_aj_form_utovareuppgifter.addClass('successborder').show();
                            //$('.kk_aj_befintlignotme').show();
                            kk_aj_verifystep2.show();                           
                        } else {
                            $('#arr_presentationsbild').removeClass('novalidate');
                            visagetTidigareArrBlock.hide();
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

            $('#arr_getTidigareArrangemang_Get').on('click', function (e) {

                let utovareid = $('#arr_getTidigareArrangemang').val();
                arrformAutocompleteHandler.getTidigareArrDetail(utovareid);

                return false;
            });            

            $('#ChangeUppgifterKontakt').on('click', function (e) {
                btn_befintlig_utovartxtBlock.hide();
                btn_befintlig_utovareBlock.show();
                $('.SparaUppgifterKontaktBlock').show();
                return false;
            });

            $('#SparaUppgifterKontakt').on('click', function (e) {
                arrformAutocompleteHandler.savekontaktuppgifter();
                btn_befintlig_utovartxtBlock.show();
                btn_befintlig_utovareBlock.hide();
                $('.SparaUppgifterKontaktBlock').hide();
                return false;
            });

            $('.kk_aj_sammakontaktpers').on('click', function (e) {
                arrformAutocompleteHandler.kopierakontaktuppgifter();
                
                return false;
            })            

            // Verify steg 1
            $('.kk_aj_btn_next_step[rel=2]').on('click', function (e) {                
                var ret = true;
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
                   var ret = true;
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
                    console.log("_exempellistobject " +_exempellistobject);
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
                $('.tab-title[rel=4]').addClass('active').removeClass('done'); 
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
                if ($('#chkApproved').is(':checked')) {
                    if (confirm('Är du säker på att du vill skicka in uppgifterna för arrangemanget?')) {
                        console.log(_exempellistobject);
                        arrformjsonBuilder.getArrFormJsonData(_exempellistobject, function (callback) {
                            console.log(callback);
                            var arrjson = callback;
                            // if utovareid>0 och arrid>0 och väljfil == 0 då behöver man inte ladda upp utan använder samma som tidigare
                            arrformjsonBuilder.PostMainArrangemang(arrjson, function (callbackarrid) {
                                console.log(callbackarrid);
                                var isbefintligutovare = $('.kk_aj_form_befintligutovare').attr('rel');

                                let bildfil = $("#arr_presentationsbild").get(0).files;
                                //if (bildfil.length > 0) {
                                    arrformjsonBuilder.tempuploadimage("uploadimg", bildfil, callbackarrid, function (callback) { return callback });
                                //}

                                let arr_cvmedverkande = $('#arr_cvmedverkande_file').get(0).files;
                                if (arr_cvmedverkande.length > 0) {
                                    arrformjsonBuilder.tempuploadimage("uploadimg", arr_cvmedverkande, callbackarrid, function (callback) {

                                        alert("Uppgifterna är nu inskickade!");
                                        clearForm();
                                        tabnavigator(1);
                                        return true;
                                    });
                                } else {
                                    alert("Uppgifterna är nu inskickade!");
                                    clearForm();
                                    tabnavigator(1);
                                    return true;
                                };

                            });
                        });
                        return false;

                    } else {
                        return false;
                    };
                } else {
                    alert("Du måste godkänna avtalet för att göra ansökan!")
                    return false
                }
            });

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
                return false;
            });            
            
            $('#kk_aj_addExempel').on('click', function (e) {               
                saveArrExempel();
                $('.arrExempel').slideToggle("slow");
                $('.kk_aj_btnnyttexemple').text("Lägg till exempel");
                return false;
            });
            $('#kk_aj_addfilmExempel').on('click', function (e) {
                saveArrfilmExempel();
                $('.arrExempel').slideToggle("slow");
                $('.kk_aj_btnnyttexemple').text("Lägg till exempel");
                return false;
            });

            $('body').on('click','.kk_aj_tabortexempel', function (e) {
                var deletetitle = $(this).attr('rel');
                tabortexempelfromJson(deletetitle);
                return false;
            });

            $('#kk_aj_laddatmpimg').on('click', function () {
                var spinner = "http://kulturkatalog.kivdev.se/Portals/_default/Skins/kk_aj_Publik_Acklay/public/ajax-loader.gif";
                let spinnerobj = $('#kk_aj_tmpimg');
                spinnerobj.attr('src', spinner);
                let files = $("#arr_presentationsbild").get(0).files;
                arrformjsonBuilder.tempuploadimage("tmpimg",files,"0", function (callback) {
                    console.log(callback);
                    spinnerobj.attr('src', callback);
                });
                return false;
            });            
           
            $('.kk_aj_befintlignotme').on('click', function () {
                tidigareutovaredisable(false);
                isnotme();
                return false;
            });
            $('.info').on('click', function (e) {
               
                var classen = $(this).attr('rel');
                $('.' + classen +'text').toggle();
                return false;
            });
        });
              

        var clearForm = function () {
            let addarrtab_1 = $('#addarrtab-1');
            let addarrtab_2 = $('#addarrtab-2');
            let addarrtab_3 = $('#addarrtab-3');
            let addarrtab_4 = $('#addarrtab-4');
            addarrtab_1.show();
            addarrtab_2.show();
            addarrtab_3.show();
            addarrtab_4.show();
            $('#mainarrformcontainer :input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').val('');
            $('#mainarrformcontainer :checkbox, #mainarrformcontainer :radio').prop('checked', false);
            //addarrtab_1.hide();
            addarrtab_2.hide();
            addarrtab_3.hide();
            addarrtab_4.hide();
            
            let btn_ny_utovareBlock = $('.kk_aj_form_befintligutovare');
            let btn_befintlig_utovareBlock = $('.kk_aj_form_utovareuppgifter');
            let btn_befintlig_utovartxtBlock = $('.kk_aj_form_visa_utovarinfo');
            let btn_kontaktupg_arrangemangBlock = $('.kk_aj_form_kontaktuppgifterarr');
            let visagetTidigareArrBlock = $('.kk_aj_visagetTidigareArrBlock');
            $('#kk_aj_tmpimg').attr('src', 'http://kulturkatalog.kivdev.se/DesktopModules/kk_aj_Publik_ArrangemangForm/images/missingimage.jpg');
            btn_ny_utovareBlock.hide();
            btn_befintlig_utovareBlock.removeClass('successborder').show();           
            $('.kk_aj_verifystep2').show();
            $('.kk_aj_btnnyutovare').removeClass("secondary");
            $('.kk_aj_btnbefintligutovare').addClass("secondary");
            $('.kk_aj_form_befintligutovare').attr('rel', '0');
            $('.kk_aj_befintlignotme').hide();
            let securetext = "Datalagringsavtal";
            securetext += "Genom att skicka in din ansökan godkänner du att Kulturkatalogen behandlar och lagrar användardata. och... Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.";
            
            $('#ApproveText').html(securetext);
            
            btn_ny_utovareBlock.hide();
            visagetTidigareArrBlock.hide();
            btn_kontaktupg_arrangemangBlock.show();           
            btn_befintlig_utovartxtBlock.hide();
                        
            $('#visa_utovareNamn2').html("");
            $('#visa_utovareHemsida2').html("");            
            $('#visa_utovareAdress2').html("");
            $('#visa_utovarePostnr2').html("");
            $('#visa_utovareOrt2').html("");
            $('#visa_utovareKommun2').html("");
            $('#visa_utovareForamn2').html("");
            $('#visa_utovareEfternamn2').html("");
            $('#visa_utovareTelenr2').html("");
            $('#visa_utovareEpost2').html("");

            $('#utovare_aktor_grupp').val('');
            $('#utovare_orghemsida').val("");
            $('#utovare_adress').val("");
            $('#utovare_postnummer').val("");
            $('#utovare_ort').val("");
            $('#utovare_kommun').val("");
            $('#utovare_fornamn').val("");
            $('#utovare_efternamn').val("");
            $('#utovare_telefonnr').val("");
            $('#utovare_epost').val("");
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
    scrollup();
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
    let val = $('#arr_ExempelRubrik').val()
    let bild_film_url = $('#arr_Exempelbild').val();       
    let index = _exempellistobject.exempelitemlist.findIndex(function (item, i) {
        return item.mediaTitle === val
    });
    if (index >= 0) {
        alert("Exemplet finns redan!");
        return false;
    }
    _exempellistobject.exempelitemlist.push(
        {
            "MediaUrl": bild_film_url,
            "MediaTyp": "1",
            "mediaTitle": $('#arr_ExempelRubrik').val(),
            "mediaBeskrivning": $('#arr_Exempelbeskrivning').val(),
            "mediaLink": $('#arr_ExempelUrl').val()
        }
    );
    handlebarTemplethandler.injecthtmltemplate(".arrExempellist", "kk_aj_arrformExempelList.txt", _exempellistobject);
    tomexempelform();
};

// Arrangemangs exempel START!
var saveArrfilmExempel = function () {
    let val = $('#arr_ExempelfilmRubrik').val();
    let bild_film_url = $('#arr_Exempelfilm').val();

    let urltest = bild_film_url.indexOf("https://youtu.be/");
    if (urltest < 0) {
        alert("Du måste ange en korrekt youtubelänk (ex: https://youtu.be/######)");
        return false;
    };
    let fixurl = bild_film_url.replace("https://youtu.be/", "");
    bild_film_url = fixurl;

    let index = _exempellistobject.exempelitemlist.findIndex(function (item, i) {
        return item.mediaTitle === val
    });

    if (index >= 0) {
        alert("Exemplet finns redan!");
        return false;
    }
    _exempellistobject.exempelitemlist.push(
        {
            "MediaUrl": bild_film_url,
            "MediaTyp": "2",
            "mediaTitle": $('#arr_ExempelfilmRubrik').val(),
            "mediaBeskrivning": $('#arr_Exempelfilmbeskrivning').val(),
            "mediaLink": $('#arr_ExempelfilmUrl').val()
        }
    );
    handlebarTemplethandler.injecthtmltemplate(".arrExempellist", "kk_aj_arrformExempelList.txt", _exempellistobject);
    tomexempelform();
};


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
var tidigareutovaredisable = function (dodisable) {
    if (dodisable == true) {
        $('#utovare_aktor_grupp').attr('disabled', 'disabled');
        $('#utovare_orghemsida').attr('disabled', 'disabled');
        $('#utovare_adress').attr('disabled', 'disabled');
        $('#utovare_postnummer').attr('disabled', 'disabled');
        $('#utovare_ort').attr('disabled', 'disabled');
        $('#utovare_kommun').attr('disabled', 'disabled');
        $('#utovare_fornamn').attr('disabled', 'disabled');
        $('#utovare_efternamn').attr('disabled', 'disabled');
        $('#utovare_telefonnr').attr('disabled', 'disabled');
        $('#utovare_epost').attr('disabled', 'disabled');
    } else {
        $('#utovare_aktor_grupp').removeAttr('disabled');       
        $('#utovare_orghemsida').removeAttr('disabled');
        $('#utovare_adress').removeAttr('disabled');
        $('#utovare_postnummer').removeAttr('disabled');
        $('#utovare_ort').removeAttr('disabled');
        $('#utovare_kommun').removeAttr('disabled');
        $('#utovare_fornamn').removeAttr('disabled');
        $('#utovare_efternamn').removeAttr('disabled');
        $('#utovare_telefonnr').removeAttr('disabled');
        $('#utovare_epost').removeAttr('disabled');
    }
    
}
let scrollup = function () {
    $("html, body").animate({ scrollTop: 100 }, 500);
    return false;
};