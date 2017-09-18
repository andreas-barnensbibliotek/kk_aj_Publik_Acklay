﻿//här sätts alla pluggin och jquery.ready starters 
var $ = require("jquery");
var appsettingsobject = require("./appSettings.js");
var arrformjsonBuilder = require("./arrformJsonBuilder.js");
var handlebarTemplethandler = require("./HandlebarTemplethandler.js");
var _exempellistobject = { "exempelitemlist": [] };

module.exports = {
    start: function (tab) {
        var appsetting = appsettingsobject.config;
        $(function () {

            var storage = Storages.localStorage
            storage.set('foo', 'Detta funkar bra detta!');
            var storage = Storages.localStorage
            console.log("localstorage: " + storage.get('foo'))

            
            // Verify steg 1
            $('.kk_aj_btn_next_step[rel=2]').on('click', function (e) {
                if (formvalidator(1)) {
                    tabnavigator(2);
                    return true;
                } else {
                    tabnavigator(1);
                    return false;
                }
            });            
            
            // Verify steg 2
            $('.kk_aj_btn_next_step[rel=3]').on('click', function (e) {
                if (formvalidator(2)) {
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
                    return true;                
            });

            //show step
            $('.kk_aj_tab[rel=1]').on('click', function (e) {               
                tabnavigator(1);
                if (appsettings.arrtab.currenttab > 1) {
                    formvalidator(1);
                }
                appsettings.arrtab.currenttab = 1;
                return true;
            });
            $('.kk_aj_tab[rel=2]').on('click', function (e) {                
                tabnavigator(2);
                if (appsettings.arrtab.currenttab > 1) {
                    formvalidator(2);
                }
                appsettings.arrtab.currenttab = 2;
                return true;
            });
            $('.kk_aj_tab[rel=3]').on('click', function (e) {
                tabnavigator(3);
                if (appsettings.arrtab.currenttab > 3) {
                    formvalidator(3);
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
                saveexempeltolocalstorage();
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
            addarrtab_4.hide();
        }

    }
};

var formvalidator = function (step) {
    var ret = false;
    var next = step + 1;

   if (step == 0) {
    var pass = $("#password");
        var passconfirm = $("#confirm");
        console.log("pass: " + pass);
        if (pass.val() != "" && pass.val() === passconfirm.val()) {
            pass.removeClass("formerror");
            ret= true;
        } else {        
            pass.addClass("formerror");
            ret= false;
        }   
   }
  

   if (step == 1) {
       var organisation = $("#utovare_organisation");
       var organisation_error = $(".utovare_organisation_error");
       if (organisation.val() != "") {
           ret = true;           
           $('.tab-title[rel=' + next + ']').addClass('active').removeClass('done').removeClass('disabled');
           $('.kk_aj_verifystep' + next + '').removeClass('disabled');
       } else {
           organisation_error.css('display', 'block');
           ret = false;
       }
               
       
   }
   if (step == 2) {
       var ArrRubrik = $("#arr_rubrik");
       var ArrRubrik_error = $(".arr_rubrik_error");
       if (ArrRubrik.val() != "") {
           ret = true;
           var next = step + 1;
           $('.tab-title[rel=' + next + ']').addClass('active').removeClass('done').removeClass('disabled');
       } else {
           ArrRubrik_error.css('display', 'block');
           ret = false;
       }
   }
   if (step == 3) {
       ret = true;
   }
     if (step == 4) {
       ret = true;
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
        $('.tab-title[rel=' + tab + ']').addClass('active').removeClass('done');
        for (next; next <= 4; next++) {
            $('.tab-title[rel=' + next + ']').addClass('disabled').removeClass('active').removeClass('done');
        }
        //$('.tab-title[rel=' + next + ']').addClass('disabled').removeClass('active');
    }

};


// Arrangemangs exempel START!
var saveexempeltolocalstorage = function () {
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
