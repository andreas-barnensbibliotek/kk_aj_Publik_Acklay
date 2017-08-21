//här sätts alla pluggin och jquery.ready starters 
var $ = require("jquery");
var appsettings = require("./appSettings.js");
//var jsJquerySteps = require("./externaljs/jquerySteps.js");

module.exports = {
    start: function () {
        
        $(function () {

            var storage = Storages.localStorage
            storage.set('foo', 'Detta funkar bra detta!');
            var storage = Storages.localStorage
            console.log("localstorage: " + storage.get('foo'))

        });



//jsJquerySteps.init();
//        $(function () {
          
//            $("#mainarrformcontainer").steps({
//                headerTag: "h3",
//                bodyTag: "section",
//                transitionEffect: "slideLeft",
//                onStepChanging: function (event, currentIndex, newIndex) {
//                    alert("inne i steps1" + formvalidator(currentIndex));

//                    return formvalidator(currentIndex)
//                },
//                onFinishing: function (event, currentIndex) {
//                    alert("inne i steps2" + formvalidator(currentIndex));
//                    return formvalidator(currentIndex);
//                },
//                onFinished: function (event, currentIndex) {
//                    alert("inne i steps3" + formvalidator(currentIndex));
//                },
//                saveState:true
//            });

//        });
    }
};

var formvalidator = function (step) {
    var ret = false;
    console.log(step);

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
       ret = true;
   }
   if (step == 2) {
       ret = true;
   }
   if (step == 3) {
       ret = true;
   }
    
   return ret;
}