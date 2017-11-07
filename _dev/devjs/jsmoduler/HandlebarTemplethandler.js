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
    
    var rettext = "";
    switch (object) {
        case "1":
            rettext = '<img src="' + url + '" />';
            break;
        case "2":
            rettext = '<iframe width="auto" height="auto" src="https://www.youtube.com/embed/' + url + '" frameborder="0" allowfullscreen="true" style="max-width:100%;"></iframe>';;
            break;
        case "3":
            //rettext = '<audio name="ljudspelare" src="' + url + '" preload />';
            rettext = '<audio preload id="audio1" src="' + url + '" controls="controls">Your browser does not support HTML5 Audio!</audio>'
            break;
    }

    return rettext;
});


Handlebars.registerHelper('faktatyp', function (Faktaid, Faktarubrik, FaktaValue) {
    var ret = "";
    if (Faktaid === "1") {
        ret+= "<div class='row'><div class='small-12 medium-6 columns faktalabel'>";
        ret += Faktarubrik;
        ret += "</div><div class='small-12 medium-6 columns'>";
        ret += FaktaValue + "</div></div>";
        
    }
    return ret;
});

Handlebars.registerHelper('lokaltyp', function (Faktaid, Faktarubrik, FaktaValue) {
    var ret = "";
    if (Faktaid === "2") {
        
        ret += "<div class='row'><div class='small-12 medium-6 columns faktalabel'>";
        ret += Faktarubrik;
        ret += "</div><div class='small-12 medium-6 columns'>";
        ret += FaktaValue
        if (!isNaN(FaktaValue)) {
            ret += faktavalueextention(Faktarubrik);
        };
        ret += "</div></div>";

    }
    return ret;
});
Handlebars.registerHelper('publiktyp', function (Faktaid, Faktarubrik, FaktaValue) {
    var ret = "";
    if (Faktaid === "3") {
        ret += "<div class='row'><div class='small-12 medium-6 columns faktalabel'>";
        ret += Faktarubrik
        ret += "</div><div class='small-12 medium-6 columns'>"
        ret += FaktaValue + "</div></div>";
    }
    return ret;
});
Handlebars.registerHelper('ekonomityp', function (Faktaid, Faktarubrik, FaktaValue) {
    var ret = "";
    if (Faktaid === "4") {
        ret += "<div class='row'><div class='small-12 medium-6 columns faktalabel'>";
        ret += Faktarubrik
        ret += "</div><div class='small-12 medium-6 columns'>"
        ret += FaktaValue;
        if (!isNaN(FaktaValue)) {
            ret += faktavalueextention(Faktarubrik);
        };
        ret += "</div></div>";
    }
    return ret;
});

Handlebars.registerHelper('faktatypvisas', function (faktalist, val, opts) {
    var ret = false;
    var langd = faktalist.filter(function (lista) { return lista.Faktaid == val }).length;
    if (langd) {
        return opts.fn(this);
    }
    
});

Handlebars.registerHelper('ovrigttyp', function (Faktaid, Faktarubrik, FaktaValue) {
    var ret = "";
    if (Faktaid === "5") {

        ret += "<div class='row'><div class='small-12 medium-6 columns faktalabel'>";
        ret += Faktarubrik;
        ret += "</div><div class='small-12 medium-6 columns'>";
        ret += FaktaValue
        if (!isNaN(FaktaValue)) {
            ret += faktavalueextention(Faktarubrik);
        };
        ret += "</div></div>";

    }
    return ret;
});

var faktavalueextention =function(typ){
   
    switch(typ){
        case "Takhöjd över scen":
            return " m";
            break;
        case "Bredd på scen":
            return " m";
            break;
        case "Djup på scen":
            return " m";
            break;
        case "Byggtid":
            return " min";
            break;
        case "Rivtid":
            return " min";
            break;
        case "Kostnad":
            return " kr";
            break;
        default:
            return " min";
    }
}