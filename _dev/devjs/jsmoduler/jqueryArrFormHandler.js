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


            // Verify steg 1
            $('.kk_aj_btn_next_step[rel=2]').on('click', function (e) {
                if (formvalidator(1)) {
                    return true
                }else{                
                    return false;
                }
            });
            // Verify steg 2
            $('.kk_aj_btn_next_step[rel=3]').on('click', function (e) {
                if (formvalidator(2)) {
                    return true
                } else {                   
                    return false;
                }
            });

            //back to steg 1
            $('.kk_aj_btn_before_step1').on('click', function (e) {
                $('.tab-title[rel=1]').addClass('active').removeClass('done');
                $('.tab-title[rel=2]').addClass('disabled').removeClass('active');
                return true;                    
            });
            //back to steg 2
            $('.kk_aj_btn_before_step2').on('click', function (e) {
                $('.tab-title[rel=2]').addClass('active').removeClass('done');
                $('.tab-title[rel=3]').addClass('disabled').removeClass('active');
                return true;
            });
            
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
    var next = step + 1;

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
       var organisation = $("#utovare_organisation");
       var organisation_error = $(".utovare_organisation_error");
       if (organisation.val() != "") {
           ret = true;           
           $('.tab-title[rel=' + next + ']').addClass('active').removeClass('done').removeClass('disabled');
           $('.kk_aj_verifystep' + next + '').removeClass('disabled');
       } else {
           organisation_error.css('display', 'block');
           ret = false;
       }
               
       
   }
   if (step == 2) {
       var ArrRubrik = $("#arr_rubrik");
       var ArrRubrik_error = $(".arr_rubrik_error");
       if (ArrRubrik.val() != "") {
           ret = true;
           var next = step + 1;
           $('.tab-title[rel=' + next + ']').addClass('active').removeClass('done').removeClass('disabled');
       } else {
           ArrRubrik_error.css('display', 'block');
           ret = false;
       }
   }
   if (step == 3) {
       ret = true;
   }
     if (step == 4) {
       ret = true;
     }
     if (ret == false) {
         $('.kk_aj_btn_next_step[rel=' + next + ']').addClass('error').removeClass('success');
         $('.tab-title[rel=' + step + ']').addClass('error').removeClass('done');
         
     } else {
         $('#panel2-' + step + ' small').hide();
         $('.kk_aj_btn_next_step[rel=' + next + ']').addClass('success').removeClass('error');
         $('.tab-title[rel=' + step + ']').addClass('done').removeClass('error').removeClass('active');
     }
   return ret;
}