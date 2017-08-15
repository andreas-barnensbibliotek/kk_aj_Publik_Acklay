//här sätts alla pluggin och jquery.ready starters 
var $ = require("jquery");
var appsettings = require("./appSettings.js");
var jsJquerySteps = require("./externaljs/jquerySteps.js");

module.exports = {
    start: function () {
 jsJquerySteps.init();
        $(function () {
            alert("inne i steps");
           


            
            //form.validate({
            //    errorPlacement: function errorPlacement(error, element) { element.before(error); },
            //    rules: {
            //        confirm: {
            //            equalTo: "#password"
            //        }
            //    }
            //});
            $("#mainarrformcontainer").steps({
                headerTag: "h3",
                bodyTag: "section",
                transitionEffect: "slideLeft",
                onStepChanging: function (event, currentIndex, newIndex) {
                    form.validate().settings.ignore = ":disabled,:hidden";
                    return form.valid();
                },
                onFinishing: function (event, currentIndex) {
                    form.validate().settings.ignore = ":disabled";
                    return form.valid();
                },
                onFinished: function (event, currentIndex) {
                    alert("Submitted!");
                }
            });

        });
    }
};