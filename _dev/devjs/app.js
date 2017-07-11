var msg = require("./jsmoduler/main.js");
var $ = require("jquery");

$(function(){
    $("#mainapp").attr('style','background:#fff;')
        .html("funkar!");
    msg.testar("ja du det funkar tror jag det");
});
