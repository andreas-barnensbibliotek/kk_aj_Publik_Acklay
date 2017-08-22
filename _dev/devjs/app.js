
var appsettingsobject = require("./jsmoduler/appSettings.js");
var msg = require("./jsmoduler/main.js");
var pagehandler = require("./jsmoduler/pageloadhandler.js");
var jqueryNavEvents = require("./jsmoduler/appJqueryMainNavEvents.js");

var appsetting = appsettingsobject.config;
//  kulturkatalogen publik start
$(function () {
    $('body').foundation({
        tab: {
            callback: function (tab) {
                console.log(tab.context.rel);
                
            }
        }



    });

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // START rangesliders för arrangemangformuläret-----------------------------------------------------------------------------
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $("#kk_aj_slider-range").slider({
        range: true,
        min: 0,
        max: 30,
        values: [6, 12],
        slide: function (event, ui) {
            $("#kk_aj_yearspan").html(ui.values[0] + unescape("%E5") + "r  - " + ui.values[1] + unescape("%E5") + "r");
        }
    });
    $("#kk_aj_yearspan").html($("#kk_aj_slider-range").slider("values", 0) +
       unescape("%E5") + "r -" + $("#kk_aj_slider-range").slider("values", 1) + unescape("%E5") + "r");


    // rangeslider för arrangemangformuläret för speltid
    var kk_aj_speltid_range = $("#kk_aj_speltid_range");
    var kk_aj_speltidLabel = $("#kk_aj_speltid");

    kk_aj_speltid_range.slider({
        create: function() {
            kk_aj_speltidLabel.html($(this).slider("value") + "min");
        },
        range: "max",
        min: 1,
        max: 180,
        value: 10,
        slide: function( event, ui ) {
            kk_aj_speltidLabel.html(ui.value + "min");
        }
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // STOPP rangesliders för arrangemangformuläret-----------------------------------------------------------------------------
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    jqueryNavEvents.init();
   
   // $("#mainapp").attr('style','background:#fff;').html("funkar! eller");    
    //alert('Foundation Core Version: ' + appsettings.config.globalconfig.dnnURL);
   
    //msg.testar("ja du det funkar tror jag det " + appsettings.config.templatedata);

    appsetting.userinfo.userid = $('.kk_aj_CurrentUserid').html();
    appsetting.userinfo.rollid = $('.kk_aj_CurrentRollid').html();
    appsetting.currentpage = $('.kk_aj_CurrentPageType').html();

    var init = function () {

        

        


        pagehandler.pageloader(appsetting.currentpage);

    }

    init();
});
