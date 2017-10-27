var $ = require("jquery");
var jplists = require("./externaljs/jplist_moduleexport.js");
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
        //var appsettings = appsettingsobject.config;       
    },
    init: function (val) {
        var appsettings = appsettingsobject.config;
        jplists.init();
        //$(function () {
            
        var initlist = function () {

            arrdataservice("", searchdataContainer, function (data) {
                handlebartempletService(".kk_aj_productlist", "kk_aj_mainarrangemangList.txt", data, function (returtext) {

                    return(returtext)

                });
            });

        }
        initlist();
        
        publiksearchEvents()
    }
}

var handlebartempletService = function(targetClass, usetemplateName, currentdata, callback){
    
        var appsetting = appsettingsobject.config;

        var test = appsettingsobject.config.globalconfig.htmltemplateURL + "/" + usetemplateName;

        $.get(appsettingsobject.config.globalconfig.htmltemplateURL + "/" + usetemplateName, function (data) {
            var temptpl = Handlebars.compile(data);           
            var test = "ska funka";            
            $('#kk_aj_productlist').html(temptpl(currentdata));
            
            $('#kk_aj_mainproductlistblock').jplist({
                command: 'empty'
            });

            $('#kk_aj_mainproductlistblock').jplist({
                itemsBox: ' #kk_aj_productlist ',
                itemPath: '.kk_aj_arritem',
                panelPath: '.jplist-panel',

            });
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

// EVENTS
var publiksearchEvents = function () {

    $('.kk_aj_searchformbutton').on('click', function (e) {

        var tempsearchformcollector = searchformcollector();
        
        arrdataservice("mainsearch", tempsearchformcollector, function (data) {
            handlebartempletService(".kk_aj_productlist", "kk_aj_mainarrangemangList.txt", data, function (returtext) {

                return false;

            });
        });

        return false;
    });

    $('.kk_aj_searchRensaformbutton').on('click', function (e) {
        return resetsearchform();
        

    })

}


//HELPER
var searchformcollector = function () {
    var tmparrtypid = $('input[name=arr_radioValArrangemang]:checked').val();
    var tmpkonstartid = $('input[name=arr_radioValkontstform]:checked').val();
    var tmpstartyear= $("#kk_aj_yearspan").attr("rel");
    var tmpstopyear =$("#kk_aj_yearspan").attr("rev");

    searchdataContainer.arrtypid = "0";
    searchdataContainer.konstartid = "0";
    searchdataContainer.startyear = "0";
    searchdataContainer.stopyear="0";

    if (tmparrtypid !== undefined) {
        searchdataContainer.arrtypid = tmparrtypid;
    }
    if (tmpkonstartid !== undefined) {
        searchdataContainer.konstartid = tmpkonstartid;
    }
    if (tmpstartyear !== undefined) {
        searchdataContainer.startyear = tmpstartyear;
    }
    if (tmpstopyear !== undefined) {
        searchdataContainer.stopyear = tmpstopyear;
    }

    return searchdataContainer;
    
}

var resetsearchform = function () {
    $(':input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').val('');
    $(':checkbox, :radio').prop('checked', false);
    $("#kk_aj_yearspan").attr("rel", "0");
    $("#kk_aj_yearspan").attr("rev", "0");
    return false;
}