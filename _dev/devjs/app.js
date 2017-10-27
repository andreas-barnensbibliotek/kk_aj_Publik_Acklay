
var appsettingsobject = require("./jsmoduler/appSettings.js");
var msg = require("./jsmoduler/main.js");
var pagehandler = require("./jsmoduler/pageloadhandler.js");
var publiksearch = require("./jsmoduler/publiksearch.js");

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
    //////// History handler
    //// ta hand om querystring parametrar och lagra dom i ett jsonobject urlparam.
    var urlParams = {};
    var checkparamsinurl = function () {
        var match,
            pl = /\+/g,  // Regex for replacing addition symbol with a space
            search = /([^&=]+)=?([^&]*)/g,
            decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
            query = window.location.search.substring(1);

        urlParams = {};
        while (match = search.exec(query))
            urlParams[decode(match[1])] = decode(match[2]);

        if (!urlParams.tab) {
            var sPageURL = window.location.href.split('/');
            var index = sPageURL.indexOf("addarrtab");
            if (index > 0) {
                urlParams.tab = sPageURL[index + 1];
            };
            var index = sPageURL.indexOf("addarrtab");
            if (index > 0) {
                urlParams.id = sPageURL[index + 1];
            };
        }
    };

    //////////////////////////
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
            $("#kk_aj_yearspan").attr("rel", ui.values[0]);
            $("#kk_aj_yearspan").attr("rev",ui.values[1]);
        }
    });
    $("#kk_aj_yearspan").html($("#kk_aj_slider-range").slider("values", 0) +
       unescape("%E5") + "r -" + $("#kk_aj_slider-range").slider("values", 1) + unescape("%E5") + "r");


    // rangeslider för arrangemangformuläret för speltid
    var kk_aj_speltid_range = $("#kk_aj_speltid_range");
    var kk_aj_speltidLabel = $("#kk_aj_speltid");

    kk_aj_speltid_range.slider({
        create: function () {
            kk_aj_speltidLabel.html($(this).slider("value") + "min");
        },
        range: "max",
        min: 1,
        max: 180,
        value: 10,
        slide: function (event, ui) {
            kk_aj_speltidLabel.html(ui.value + "min");
        }
    });

    

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // STOPP rangesliders för arrangemangformuläret-----------------------------------------------------------------------------
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    publiksearch.search();
   
   // $("#mainapp").attr('style','background:#fff;').html("funkar! eller");    
    //alert('Foundation Core Version: ' + appsettings.config.globalconfig.dnnURL);
   
    //msg.testar("ja du det funkar tror jag det " + appsettings.config.templatedata);

    appsetting.userinfo.userid = $('.kk_aj_CurrentUserid').html();
    appsetting.userinfo.rollid = $('.kk_aj_CurrentRollid').html();
    appsetting.currentpage = $('.kk_aj_CurrentPageType').html();

    ////----------------------------------------------------------------------------
    ////----------------------------------------------------------------------------
    ////----------------------------------------------------------------------------
    //var listatemp = function (vad) {

    //    var temp = ""
    //    $.get(vad, function (data) {
    //        var temptpl = Handlebars.compile(data);
    //        $('#kk_aj_productlist').html(temptpl);
    //        //callback(htmltemplate)
    //        $('#kk_aj_mainproductlistblock').jplist({
    //            command: 'empty'
    //        });

    //        $('#kk_aj_mainproductlistblock').jplist({
    //            itemsBox: ' #kk_aj_productlist ',
    //            itemPath: '.kk_aj_arritem',
    //            panelPath: '.jplist-panel',

    //        });

    //    }, 'html');

    //}
    ////----------------------------------------------------------------------------
    ////----------------------------------------------------------------------------
    ////----------------------------------------------------------------------------


    var init = function (val, callback) {

        
        
        console.log('STORE: ' + localStorage.getItem('kk_aj_storage'));

        pagehandler.pageloader(appsetting.currentpage, appsetting.arrtab.currenttab);
       
       
    }

    
    init()

    
});
 

