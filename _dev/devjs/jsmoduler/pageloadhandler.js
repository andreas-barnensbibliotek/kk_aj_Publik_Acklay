var $ = require("jquery");
var appsettings = require("./appSettings.js");
var arrformhandler = require("./jqueryArrFormHandler.js");
module.exports = {    
    pageloader: function (pagetoload, val) {
       
        switch(pagetoload) {
            case "kk_aj_Publik_ArrangemangForm":
                arrformhandler.start(val);
                break;    
            default:               
                loadtemplateTypes(appsettings.topnavtemplate, appsettings.currentUserid);
                
                break;
        }        
    }
};

var loadtemplateTypes = function (pagetemplate, userid, sortera, val) {
  
    $.each(pagetemplate, function( obj, value ) {   
        ServiceHandler.injecttemplateDebug(value.templatedata, userid, val, function (data) {         
            loadpagetemplates(value, data, function (data) {
                if (data == "ja") {
                   // console.log("KLART");                    
                }
            });
        });     
    });
   
}


var loadpagetemplates = function (template, currentdata,callback) {
    
    $.get(appsettings.htmltemplateURL + "/" + template.filename, function (data) {
        var temptpl = Handlebars.compile(data);

        updatecountmenybox(currentdata);
        $(template.targetdiv).html(temptpl(currentdata));
        callback("ja");
    }, 'html');

}




