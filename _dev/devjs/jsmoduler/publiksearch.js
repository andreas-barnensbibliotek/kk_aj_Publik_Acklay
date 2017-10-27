var $ = require("jquery");
//var jplists = require("./externaljs/jplist_moduleexport.js");
var handlebarTemplethandler = require("./HandlebarTemplethandler.js");
var appsettingsobject = require("./appSettings.js");


var searchdataContainer = {
	"arrtypid": "",
	"cmdtyp": "",
	"konstartid": "",
	"publiceradJaNej": "",
	"searchstr": "",
	"startyear": "",
	"stopyear": ""	
}


module.exports = {
    search: function () {
        var appsettings = appsettingsobject.config;
        $(function () {

            

        });
    },
    init: function (val) {
        var appsettings = appsettingsobject.config;
        //jplists.init();
        $(function () {
            
            //jQuery.fn.jplist.settings = {

            //    /**
            //    * LIKES: jquery ui range slider
            //    */
            //    likesSlider: function ($slider, $prev, $next) {
            //        $slider.slider({
            //            min: 0
            //           , max: 30
            //           , range: true
            //           , values: [0, 10]
            //           , slide: function (event, ui) {
            //               $prev.text(ui.values[0] + unescape("%E5") + "r");
            //               $next.text(ui.values[1] + unescape("%E5") + "r");
            //           }
            //        });
            //    }

            //    /**
            //    * LIKES: jquery ui set values
            //    */
            // , likesValues: function ($slider, $prev, $next) {
            //     $prev.text($slider.slider('values', 0) + unescape("%E5") + "r");
            //     $next.text($slider.slider('values', 1) + unescape("%E5") + "r");
            // }
            //};

            //$('.kk_aj_superProductListBlock').jplist({
            //    itemsBox: '.kk_aj_productlist',
            //    itemPath: '.kk_aj_arritem',
            //    panelPath: '.jplist-panel',
            //    storage: 'localstorage',
            //    storageName: 'kk_aj_storage',
                
            //});



            //var initlist = function () {

            //    arrdataservice("", searchdataContainer, function (data) {
            //        handlebartempletService(".kk_aj_productlist", "kk_aj_mainarrangemangList.txt", data, function (returtext) {

            //            return(returtext)

            //        });
            //    });
                
            //}
            //initlist();

        });
    }
}

var handlebartempletService = function(targetClass, usetemplateName, currentdata, callback){
    
        var appsetting = appsettingsobject.config;

        var test = appsettingsobject.config.globalconfig.htmltemplateURL + "/" + usetemplateName;

        $.get(appsettingsobject.config.globalconfig.htmltemplateURL + "/" + usetemplateName, function (data) {
            var temptpl = Handlebars.compile(data);
            $(targetClass).html(temptpl(currentdata));
            var test = "ska funka";
            callback(test);
        }, 'html');
    

}


var arrdataservice = function (callTyp, searchdata, callback) {
    var appsettings = appsettingsobject.config;
    var currurl = "";
    switch (callTyp) {
        case "mainsearch":
            currurl = appsettings.globalconfig.apiserver + "/Api_v2/search/mainsearch/devkey/alf?type=json&callback=testar";
            break;
        case "freesearch":
            currurl = appsettings.globalconfig.apiserver + "/Api_v2/search/freesearch/devkey/alf?type=json&callback=testar";
            break;
        default:
            currurl = appsettings.globalconfig.apiserver + "/Api_v2/search/mainsearch/devkey/alf?type=json&callback=testar";
            // list all arrangemang
            searchdata.arrtypid = "0";
            searchdata.konstartid = "0";
            searchdata.startyear = "0";
            break;
    }

    //console.log("Searchservicen hämtar Arrangemangdata");
    $.ajax({
        async: true,
        type: "POST",
        url: currurl,
        data: searchdata,
        success: function (data) {
            console.log("Search arrangemang hämtat: ");
            callback(data);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert("Nått blev fel vid hämtning av arrangemang!");
        }
    });
};
