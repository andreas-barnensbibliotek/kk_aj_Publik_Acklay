//här sätts alla pluggin och jquery.ready starters 
var $ = require("jquery");
var appsettingsobject = require("./appSettings.js");
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
        var appsetting = appsettingsobject.config;
        $(function () {

            var arrformjsondata = _arrjsondata;

            arrformjsondata.Rubrik = $('#arr_rubrik').val();
            arrformjsondata.UnderRubrik = $('#arr_underrubrik').val();
            arrformjsondata.Innehall = $('#arr_presentation').val();
            arrformjsondata.Arrangemangtyp = $('input[name=arr_radioValArrtyp]:checked').val();
            arrformjsondata.Konstform = $('input[name=arr_radioValkontstform]:checked').val();
            arrformjsondata.Faktalist.push({
                    "Faktaid": 0,
                    "FaktaTypID": $('#arr_antalmedverkande').attr('rel'),
                    "Faktarubrik": "" ,
                    "FaktaValue": $('#arr_antalmedverkande').val(),
            });
            arrformjsondata.Faktalist.push({
                    "Faktaid": 0,
                    "FaktaTypID": $('input[name=arr_laromedel]:checked').attr('rel'),
                    "Faktarubrik": "" ,
                    "FaktaValue": $('input[name=arr_laromedel]:checked').val(),
            }); 
            arrformjsondata.Faktalist.push({
                    "Faktaid": 0,
                    "FaktaTypID": $('#formBuildTimeId').attr('rel'),
                    "Faktarubrik": "" ,
                    "FaktaValue": $('#formBuildTimeId').val(),
            }); 
            arrformjsondata.Faktalist.push({
                    "Faktaid": 0,
                    "FaktaTypID": $('#formDemolishTimeId').attr('rel'),
                    "Faktarubrik": "" ,
                    "FaktaValue": $('#formDemolishTimeId').val(),
            }); 
            arrformjsondata.Faktalist.push({
                    "Faktaid": 0,
                    "FaktaTypID": $('#formVenueWidthId').attr('rel'),
                    "Faktarubrik": "" ,
                    "FaktaValue": $('#formVenueWidthId').val(),
            }); 
            arrformjsondata.Faktalist.push({
                    "Faktaid": 0,
                    "FaktaTypID": $('#formVenueDepthId').attr('rel'),
                    "Faktarubrik": "" ,
                    "FaktaValue": $('#formVenueDepthId').val(),
            }); 
            arrformjsondata.Faktalist.push({
                    "Faktaid": 0,
                    "FaktaTypID": $('#formVenueHeightId').attr('rel'),
                    "Faktarubrik": "" ,
                    "FaktaValue": $('#formVenueHeightId').val(),
            }); 
            arrformjsondata.Faktalist.push({
                    "Faktaid": 0,
                    "FaktaTypID": $('input[name=arr_ljud]:checked').attr('rel'),
                    "Faktarubrik": "" ,
                    "FaktaValue": $('input[name=arr_ljud]:checked').val(),
            }); 
            arrformjsondata.Faktalist.push({
                    "Faktaid": 0,
                    "FaktaTypID": $('input[name=arr_ljus]:checked').attr('rel'),
                    "Faktarubrik": "" ,
                    "FaktaValue": $('input[name=arr_ljus]:checked').val(),
            }); 
            arrformjsondata.Faktalist.push({
                    "Faktaid": 0,
                    "FaktaTypID": $('input[name=arr_morklaggning]:checked').attr('rel'),
                    "Faktarubrik": "" ,
                    "FaktaValue": $('input[name=arr_morklaggning]:checked').val(),
            }); 
            arrformjsondata.Faktalist.push({
                    "Faktaid": 0,
                    "FaktaTypID": $('#formCarriersId').attr('rel'),
                    "Faktarubrik": "" ,
                    "FaktaValue": $('#formCarriersId').val(),
            }); 
            arrformjsondata.Faktalist.push({
                    "Faktaid": 0,
                    "FaktaTypID": $('#formElectricityId').attr('rel'),
                    "Faktarubrik": "" ,
                    "FaktaValue": $('#formElectricityId').val(),
            }); 
            arrformjsondata.Faktalist.push({
                    "Faktaid": 0,
                    "FaktaTypID": $('#formVenueRequiermentsId').attr('rel'),
                    "Faktarubrik": "" ,
                    "FaktaValue": $('#formVenueRequiermentsId').val(),
            }); 
            arrformjsondata.Faktalist.push({
                    "Faktaid": 0,
                    "FaktaTypID": $('#formMaxAudienceId').attr('rel'),
                    "Faktarubrik": "" ,
                    "FaktaValue": $('#formMaxAudienceId').val(),
            }); 
            arrformjsondata.Faktalist.push({
                    "Faktaid": 0,
                    "FaktaTypID": $('#formMaxParticipantsId').attr('rel'),
                    "Faktarubrik": "" ,
                    "FaktaValue": $('#formMaxParticipantsId').val(),
            }); 
            arrformjsondata.Faktalist.push({
                    "Faktaid": 0,
                    "FaktaTypID": $('#kk_aj_yearspan').attr('rel'),
                    "Faktarubrik": "" ,
                    "FaktaValue": $('#kk_aj_yearspan').html().replace(/år/g,'').split(" ").join("").split("-")[0]
            }); 
            arrformjsondata.Faktalist.push({
                "Faktaid": 0,
                "FaktaTypID": $('#kk_aj_yearspan').attr('rev'),
                "Faktarubrik": "" ,
                "FaktaValue": $('#kk_aj_yearspan').html().replace(/år/g,'').split(" ").join("").split("-")[1]
            }); 
            arrformjsondata.Faktalist.push({
	            "Faktaid": 0,
                "FaktaTypID": $('#formMaxShowsId').attr('rel'),
                "Faktarubrik": "" ,
                "FaktaValue": $('#formMaxShowsId').val(),
            }); 
            arrformjsondata.Faktalist.push({
                "Faktaid": 0,
                "FaktaTypID": $('#kk_aj_speltid').attr('rel'),
                "Faktarubrik": "" ,
                "FaktaValue": $('#kk_aj_speltid').html().replace(/min/g,''),
            }); 
            arrformjsondata.Faktalist.push({
                "Faktaid": 0,
                "FaktaTypID": $('#arr_ekonomikostnad').attr('rel'),
                "Faktarubrik": "" ,
                "FaktaValue": $('#arr_ekonomikostnad').val(),
            }); 
            arrformjsondata.Faktalist.push({
                "Faktaid": 0,
                "FaktaTypID": $('input[name=arr_resor]:checked').attr('rel'),
                "Faktarubrik": "" ,
                "FaktaValue": $('input[name=arr_resor]:checked').val(),
            }); 
            arrformjsondata.Faktalist.push({
                "Faktaid": 0,
                "FaktaTypID": $('input[name=arr_logi]:checked').attr('rel'),
                "Faktarubrik": "" ,
                "FaktaValue": $('input[name=arr_logi]:checked').val(),
            }); 
            arrformjsondata.Faktalist.push({
                "Faktaid": 0,
                "FaktaTypID": $('input[name=arr_Traktamente]:checked').attr('rel'),
                "Faktarubrik": "" ,
                "FaktaValue": $('input[name=arr_Traktamente]:checked').val(),
            }); 
            arrformjsondata.Faktalist.push({
                "Faktaid": 0,
                "FaktaTypID": $('#arr_resorovrigt').attr('rel'),
                "Faktarubrik": "" ,
                "FaktaValue": $('#arr_resorovrigt').val(),
            });

            if (mediaExempledata.exempelitemlist.length() >= 0) {
                arrformjsondata.MediaList = mediaExempledata.exempelitemlist;
            }

                
            

            //arrformjsondata.MediaList.MediaUrl = $('#arr_Exempelbild').val();
            //arrformjsondata.MediaList.MediaFilename = $('#arr_antalmedverkande').val();
            //arrformjsondata.MediaList.MediaSize = $('#arr_antalmedverkande').val();
            //arrformjsondata.MediaList.MediaTyp= $('input[name=arr_ExempelTyp]:checked').val();
    
            //arrformjsondata.MediaList.mediaTitle = $('#arr_ExempelRubrik').val();
            //arrformjsondata.MediaList.mediaBeskrivning = $('#arr_Exempelbeskrivning').val();
            //arrformjsondata.MediaList.mediaLink= $('#arr_ExempelUrl').val();
    
            arrformjsondata.MainImage.MediaUrl = $('#arr_presentationsbild').val();
            arrformjsondata.MainImage.MediaSize = $('#arr_sizefoto').val();
            arrformjsondata.MainImage.MediaAlt = $('#arr_altfoto').val();
            arrformjsondata.MainImage.MediaFoto = $('#arr_fotograf').val();
    
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
	

            callback(arrformjsondata);


        });
    },
    tempuploadimage: function (callback) {
        var appsetting = appsettingsobject.config;
                var data = new FormData();

                var files = $("#arr_presentationsbild").get(0).files;
                data.append("cmd", "tmpimg");
                // Add the uploaded image content to the form data collection
                if (files.length > 0) {
                    data.append("UploadedImage", files[0]);
                }

                // Make Ajax request with the contentType = false, and procesDate = false
                var ajaxRequest = $.ajax({
                    type: "POST",
                    url: appsetting.globalconfig.apiserver + "/Api/uploadmedia/devkey/alf",
                    contentType: false,
                    processData: false,
                    data: data
                });

                ajaxRequest.done(function (xhr, textStatus) {
                    var retfileurl = appsetting.globalconfig.arrtmpimgurl + '_' + files[0].name;
                    callback(retfileurl)
                });
       
       
    }
};