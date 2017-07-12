var msg = require("./jsmoduler/main.js");

//  ANDREAS EGEN!!!!
$(function () {
    $('body').foundation();
    $("#mainapp").attr('style','background:#fff;')
        .html("funkar! eller");    
    alert('Foundation Core Version: ' + Foundation.version);
    
    msg.testar("ja du det funkar tror jag det eller JORÅ");
});
