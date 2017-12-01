module.exports = {
    init: function () {
        //tinyMCE.init({
        //    mode: "textareas",
        //    theme: "simple",
        //    content_css: "http://www.barnensbibliotek.se/DesktopModules/AJBarnensKrypin/css/editorStyle.css"
        //})
        tinymce.init({
            selector: '#arr_presentation'
        });

        //tinymce.get('arr_presentation').getContent()
          }//end init
} //end moduleexport