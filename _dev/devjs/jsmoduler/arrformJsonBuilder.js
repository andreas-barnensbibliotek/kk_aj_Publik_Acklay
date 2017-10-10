//här sätts alla pluggin och jquery.ready starters 
var $ = require("jquery");
var appsettingsobject = require("./appSettings.js");
var _appsetting = appsettingsobject.config;
//var jsJquerySteps = require("./externaljs/jquerySteps.js");
var _arrjsondata ={
    "Rubrik": "",
    "UnderRubrik": "",
    "Innehall": "",
    "Arrangemangtyp": "",
    "Konstform": "",
    "Faktalist": [],
    "MediaList": [],
    "Username": "",
    "MainImage": {
        "MediaID": 0,
        "MediaUrl": "",
        "MediaFilename": "",
        "MediaSize": "",
        "MediaAlt": "",
        "MediaFoto": "",
        "MediaTyp": "",
        "MediaVald": "nej",
        "mediaTitle": "",
        "mediaBeskrivning": "",
        "mediaLink": "",
        "sortering": "0"
    },
    "Utovare": "0",
    "UtovareData": {
        "UtovarID": "0",
        "Organisation": "",
        "Fornamn": "",
        "Efternamn": "",
        "Telefon": "",
        "Adress": "",
        "Postnr": "",
        "Ort": "",
        "Epost": "",
        "Kommun": "",
        "Weburl": ""
    }
}
module.exports = {
    getArrFormJsonData: function (mediaExempledata, callback) {
        
        $(function () {

            var arrformjsondata = _arrjsondata;

            arrformjsondata.Rubrik = $('#arr_rubrik').val();
            arrformjsondata.UnderRubrik = $('#arr_underrubrik').val();
            arrformjsondata.Innehall = $('#arr_presentation').val();
            arrformjsondata.Arrangemangtyp = $('input[name=arr_radioValArrtyp]:checked').val();
            arrformjsondata.Konstform = $('input[name=arr_radioValkontstform]:checked').val();

            var arr_antalmedverkande = $('#arr_antalmedverkande')
            arrformjsondata.Faktalist = [];
            if (arr_antalmedverkande.val()) {
                arrformjsondata.Faktalist.push({
                    "Faktaid": "1",
                    "FaktaTypID": arr_antalmedverkande.attr('rel'),
                    "Faktarubrik": "Antal medverkande",
                    "FaktaValue": arr_antalmedverkande.val(),
                });
            }
            if ($('input[name=arr_laromedel]:checked').val()) {
                arrformjsondata.Faktalist.push({
                    "Faktaid": "1",
                    "FaktaTypID": $('input[name=arr_laromedel]:checked').attr('rel'),
                    "Faktarubrik": "Lärarmaterial ingår",
                    "FaktaValue": $('input[name=arr_laromedel]:checked').val(),
                });
            }
            var formBuildTimeId = $('#formBuildTimeId')
            if (formBuildTimeId.val()) {
                arrformjsondata.Faktalist.push({
                    "Faktaid": "2",
                    "FaktaTypID": formBuildTimeId.attr('rel'),
                    "Faktarubrik": "Byggtid",
                    "FaktaValue": formBuildTimeId.val(),
                });
            }
            var formDemolishTimeId = $('#formDemolishTimeId');
            if (formDemolishTimeId.val()) {
                arrformjsondata.Faktalist.push({
                    "Faktaid": "2",
                    "FaktaTypID": $('#formDemolishTimeId').attr('rel'),
                    "Faktarubrik": "Rivtid",
                    "FaktaValue": $('#formDemolishTimeId').val(),
                });
            };
            var formVenueWidthId = $('#formVenueWidthId');
            if (formVenueWidthId.val()) {
                arrformjsondata.Faktalist.push({
                    "Faktaid": "2",
                    "FaktaTypID": formVenueWidthId.attr('rel'),
                    "Faktarubrik": "Bredd på scen",
                    "FaktaValue": formVenueWidthId.val(),
                });
            };
            var formVenueDepthId = $('#formVenueDepthId');
            if (formVenueDepthId.val()) {
                arrformjsondata.Faktalist.push({
                    "Faktaid": "2",
                    "FaktaTypID": formVenueDepthId.attr('rel'),
                    "Faktarubrik": "Djup på scen",
                    "FaktaValue": formVenueDepthId.val(),
                });
            }
            var formVenueHeightId = $('#formVenueHeightId');
            if (formVenueHeightId.val()) {
                arrformjsondata.Faktalist.push({
                    "Faktaid": "2",
                    "FaktaTypID": formVenueHeightId.attr('rel'),
                    "Faktarubrik": "Takhöjd över scen",
                    "FaktaValue": formVenueHeightId.val(),
                });
            };            
            if ($('input[name=arr_ljud]:checked').val()) {
                arrformjsondata.Faktalist.push({
                    "Faktaid": "2",
                    "FaktaTypID": $('input[name=arr_ljud]:checked').attr('rel'),
                    "Faktarubrik": "Ljud",
                    "FaktaValue": $('input[name=arr_ljud]:checked').val(),
                });
            };            
            if ($('input[name=arr_ljus]:checked').val()) {
                arrformjsondata.Faktalist.push({
                    "Faktaid": "2",
                    "FaktaTypID": $('input[name=arr_ljus]:checked').attr('rel'),
                    "Faktarubrik": "Ljus",
                    "FaktaValue": $('input[name=arr_ljus]:checked').val(),
                });
            };
            if ($('input[name=arr_morklaggning]:checked').val()) {
                arrformjsondata.Faktalist.push({
                    "Faktaid": "2",
                    "FaktaTypID": $('input[name=arr_morklaggning]:checked').attr('rel'),
                    "Faktarubrik": "Mörkläggning krävs",
                    "FaktaValue": $('input[name=arr_morklaggning]:checked').val(),
                });
            };
            var formCarriersId = $('#formCarriersId');
            if (formCarriersId.val()) {
                arrformjsondata.Faktalist.push({
                    "Faktaid": "2",
                    "FaktaTypID": formCarriersId.attr('rel'),
                    "Faktarubrik": "Bärhjälp behövs",
                    "FaktaValue": formCarriersId.val(),
                });
            };
            var formElectricityId = $('#formElectricityId');
            if (formElectricityId.val()) {
                arrformjsondata.Faktalist.push({
                    "Faktaid": "2",
                    "FaktaTypID": formElectricityId.attr('rel'),
                    "Faktarubrik": "El",
                    "FaktaValue": formElectricityId.val(),
                });
            };
            var formVenueRequiermentsId = $('#formVenueRequiermentsId');
            if (formVenueRequiermentsId.val()) {
                arrformjsondata.Faktalist.push({
                    "Faktaid": "2",
                    "FaktaTypID": formVenueRequiermentsId.attr('rel'),
                    "Faktarubrik": "Övriga lokalkrav",
                    "FaktaValue": formVenueRequiermentsId.val(),
                });
            };
            var formMaxAudienceId = $('#formMaxAudienceId');
            if (formMaxAudienceId.val()) {
                arrformjsondata.Faktalist.push({
                    "Faktaid": "3",
                    "FaktaTypID": formMaxAudienceId.attr('rel'),
                    "Faktarubrik": "Max publik",
                    "FaktaValue": formMaxAudienceId.val(),
                }); 
            };
            var formMaxParticipantsId = $('#formMaxParticipantsId');
            if (formMaxParticipantsId.val()) {
                arrformjsondata.Faktalist.push({
                    "Faktaid": "3",
                    "FaktaTypID": formMaxParticipantsId.attr('rel'),
                    "Faktarubrik": "Max antal deltagare",
                    "FaktaValue": formMaxParticipantsId.val(),
                });
            };
           

            var kk_aj_yearspan = $('#kk_aj_yearspan');
            if (kk_aj_yearspan.html()) {
                arrformjsondata.Faktalist.push({
                    "Faktaid": "3",
                    "FaktaTypID": kk_aj_yearspan.attr('rel'),
                    "Faktarubrik": "Ålder högst",
                    "FaktaValue": kk_aj_yearspan.html().replace(/år/g, '').split(" ").join("").split("-")[0]
                });
                arrformjsondata.Faktalist.push({
                    "Faktaid": "3",
                    "FaktaTypID": kk_aj_yearspan.attr('rev'),
                    "Faktarubrik": "Ålder lägst",
                    "FaktaValue": kk_aj_yearspan.html().replace(/år/g, '').split(" ").join("").split("-")[1]
                });
            };
            var formMaxShowsId = $('#formMaxShowsId');
            if (formMaxShowsId.val()) {
                arrformjsondata.Faktalist.push({
                    "Faktaid": "3",
                    "FaktaTypID": formMaxShowsId.attr('rel'),
                    "Faktarubrik": "Föreställningar per dag",
                    "FaktaValue": formMaxShowsId.val(),
                });
            };
            var kk_aj_speltid = $('#kk_aj_speltid');
            if (kk_aj_speltid.val()) {
                arrformjsondata.Faktalist.push({
                    "Faktaid": "3",
                    "FaktaTypID": kk_aj_speltid.attr('rel'),
                    "Faktarubrik": "Speltid",
                    "FaktaValue": kk_aj_speltid.html().replace(/min/g, ''),
                });
            };
            var arr_ekonomikostnad = $('#arr_ekonomikostnad');
            if (arr_ekonomikostnad.val()) {
                arrformjsondata.Faktalist.push({
                    "Faktaid": "4",
                    "FaktaTypID": arr_ekonomikostnad.attr('rel'),
                    "Faktarubrik": "Kostnad",
                    "FaktaValue": arr_ekonomikostnad.val(),
                });
            };            
            if ($('input[name=arr_resor]:checked').val()) {
                arrformjsondata.Faktalist.push({
                    "Faktaid": "4",
                    "FaktaTypID": $('input[name=arr_resor]:checked').attr('rel'),
                    "Faktarubrik": "Resor",
                    "FaktaValue": $('input[name=arr_resor]:checked').val(),
                });
            };
            if ($('input[name=arr_logi]:checked').val()) {
                arrformjsondata.Faktalist.push({
                    "Faktaid": "4",
                    "FaktaTypID": $('input[name=arr_logi]:checked').attr('rel'),
                    "Faktarubrik": "Logi",
                    "FaktaValue": $('input[name=arr_logi]:checked').val(),
                }); 
            };
            if ($('input[name=arr_Traktamente]:checked').val()) {
                arrformjsondata.Faktalist.push({
                    "Faktaid": "4",
                    "FaktaTypID": $('input[name=arr_Traktamente]:checked').attr('rel'),
                    "Faktarubrik": "Traktamente",
                    "FaktaValue": $('input[name=arr_Traktamente]:checked').val(),
                }); 
            };
            var arr_ekonomikostnad = $('#arr_ekonomikostnad');
            if (arr_ekonomikostnad.val()) {
                arrformjsondata.Faktalist.push({
                    "Faktaid": "4",
                    "FaktaTypID": $('#arr_resorovrigt').attr('rel'),
                    "Faktarubrik": "Övrigt",
                    "FaktaValue": $('#arr_resorovrigt').html(),
                });
            };
            if (mediaExempledata.exempelitemlist) {
                if (mediaExempledata.exempelitemlist.length >= 0) {
                    arrformjsondata.MediaList = mediaExempledata.exempelitemlist;
                }
            };
                           

            //arrformjsondata.MediaList.MediaUrl = $('#arr_Exempelbild').val();
            //arrformjsondata.MediaList.MediaFilename = $('#arr_antalmedverkande').val();
            //arrformjsondata.MediaList.MediaSize = $('#arr_antalmedverkande').val();
            //arrformjsondata.MediaList.MediaTyp= $('input[name=arr_ExempelTyp]:checked').val();
    
            //arrformjsondata.MediaList.mediaTitle = $('#arr_ExempelRubrik').val();
            //arrformjsondata.MediaList.mediaBeskrivning = $('#arr_Exempelbeskrivning').val();
            //arrformjsondata.MediaList.mediaLink= $('#arr_ExempelUrl').val();
            var filen = $("#arr_presentationsbild").get(0).files;
            arrformjsondata.MainImage.MediaUrl = filen[0].name;
            arrformjsondata.MainImage.MediaSize = $('#arr_sizefoto').val();
            arrformjsondata.MainImage.MediaAlt = $('#arr_altfoto').val();
            arrformjsondata.MainImage.MediaFoto = $('#arr_fotograf').val();

            var isbefintligutovare = $('.kk_aj_form_befintligutovare').attr('rel');
            
            if (isbefintligutovare > 0) {
                arrformjsondata.Utovare = isbefintligutovare;
                arrformjsondata.UtovareData.UtovarID = isbefintligutovare;
            } else {           
                arrformjsondata.Utovare = "0";
                arrformjsondata.UtovareData.UtovarID = "0";
                arrformjsondata.UtovareData.Organisation = $('#utovare_aktor_grupp').val();
                arrformjsondata.UtovareData.Fornamn = $('#utovare_fornamn').val();
                arrformjsondata.UtovareData.Efternamn = $('#utovare_efternamn').val();
                arrformjsondata.UtovareData.Telefon = $('#utovare_telefonnr').val();
                arrformjsondata.UtovareData.Adress = $('#utovare_adress').val();
                arrformjsondata.UtovareData.Postnr = $('#utovare_postnummer').val();
                arrformjsondata.UtovareData.Ort = $('#utovare_ort').val();
                arrformjsondata.UtovareData.Epost = $('#utovare_epost').val();
                arrformjsondata.UtovareData.Kommun = $('#utovare_kommun').val();
                arrformjsondata.UtovareData.Weburl = $('#utovare_orghemsida').val();
            }

            callback(arrformjsondata);


        });
    },
    tempuploadimage: function (cmd, nyttarrid, callback) {
       
                var data = new FormData();

                var files = $("#arr_presentationsbild").get(0).files;
                data.append("cmd", cmd);

                if (nyttarrid != "0") {
                    data.append("arrid", nyttarrid);
                };
               
                // Add the uploaded image content to the form data collection
                if (files.length > 0) {
                    data.append("UploadedImage", files[0]);
        
                    // Make Ajax request with the contentType = false, and procesDate = false

                    var ajaxRequest = $.ajax({
                        type: "POST",
                        url: _appsetting.globalconfig.apiserver + "/Api/uploadmedia/devkey/alf",
                        contentType: false,
                        processData: false,
                        data: data
                    });

                    ajaxRequest.done(function (xhr, textStatus) {
                        var retfileurl = _appsetting.globalconfig.arrtmpimgurl + '_' + files[0].name;
                        callback(retfileurl)
                    });
       
                } else {
                    callback("Nofile");
                }
        

    },
    PostMainArrangemang: function (Arrjson, callback) {

        var currurl = _appsetting.globalconfig.apiserver + "/Api_v2/arrangemang/add/devkey/alf";

        console.log("2. servicen POSTAR data");
        $.ajax({
            async: true,
            type: "POST",
            url: currurl,
            data: Arrjson,
            success: function (data) {
                console.log("Parameter updaterad: ");
                callback(data.kk_aj_admin.ansokningarlista.ansokningar[0].ansokningid);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                //console.log(xhr + ":: " + ajaxOptions + ":: " + thrownError);
                alert("Nått blev fel vid uppdatering av parametrarna!");
            }
        });

    }
};