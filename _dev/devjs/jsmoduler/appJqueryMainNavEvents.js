var $ = require("jquery");
var appsettings = require("./appSettings.js");

module.exports = {
    init: function () {

        $(function () {
            var btn_ny_utovareBlock = $('.kk_aj_form_befintligutovare');
            var btn_befintlig_utovareBlock = $('.kk_aj_form_utovareuppgifter');           
            
            // Nav Event
            $('body').on('click', '.kk_aj_btnbefintligutovare', function () {
                btn_befintlig_utovareBlock.hide();
                btn_ny_utovareBlock.show();
                $(this).removeClass("secondary");
                $('.kk_aj_btnnyutovare').addClass("secondary");
                return false;
            });
            $('body').on('click', '.kk_aj_btnnyutovare', function () {
                btn_befintlig_utovareBlock.show();
                btn_ny_utovareBlock.hide();
                $(this).removeClass("secondary");
                $('.kk_aj_btnbefintligutovare').addClass("secondary");
                return false;
            });


            // function event
            
            $('body').on('click', '.kk_aj_btnHamtakontaktupg', function () {
                alert("söker...");
                return false;
            });


            // function Verify then next
           
            
        });
    }
}