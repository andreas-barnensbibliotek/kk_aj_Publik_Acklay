var $ = require("jquery");
var appsettingsobject = require("./appSettings.js");

module.exports = {
    start: function (tab) {

    },
    injecthtmltemplate: function (targetClass, usetemplateName, currentdata) {

        var appsetting = appsettingsobject.config;

        var test = appsettingsobject.config.globalconfig.htmltemplateURL + "/" + usetemplateName;

        $.get(appsettingsobject.config.globalconfig.htmltemplateURL + "/" + usetemplateName, function (data) {
            var temptpl = Handlebars.compile(data);
            $(targetClass).html(temptpl(currentdata));
            //callback(htmltemplate)
        }, 'html');
    }
}

// kollar om ansökningar är lästa eller ej
Handlebars.registerHelper('iffilm', function (object, url) {
    if (object === "1") {
        return '<img src="' + url + '" />';
    } else {
        return '<iframe width="auto" height="auto" src="' + url + '" frameborder="0" allowfullscreen="true" style="max-width:100%;"></iframe>';
    }
});