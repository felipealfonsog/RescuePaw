//--------------MAP & DB & DIRECTIONS-----------


var format_addr;        
var locat;
var Lat;
var Long;
var yourStartLatLng;
var destLatLng;
$(document).on('pageshow', '#showMapPage',function() {
    $('#map_canvas').gmap('destroy');
    document.getElementById("panel").innerHTML = "<center>Directions Set Here</center>" ;
    Lat = document.getElementById("Lat").innerHTML;
    Long = document.getElementById("Long").innerHTML;
    if(Lat == "&nbsp;")
        yourStartLatLng = new google.maps.LatLng(33.2450,-95.9000);
    else
        yourStartLatLng = new google.maps.LatLng(Lat,Long);
    // Also works with: var yourStartLatLng = '59.3426606750, 18.0736160278';
    // var yourStartLatLng = new google.maps.LatLng(59.3426606750, 18.0736160278);
    $('#map_canvas').gmap({'center': yourStartLatLng , 'zoom': 16});
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'latLng': yourStartLatLng}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
                locat = results[1].address_components[0].long_name;
                format_addr = results[1].formatted_address;
            }
        }
        var db = window.sqlitePlugin.openDatabase({name: "Animal_Db", bgType: 1});
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM ani WHERE location LIKE ? ', [locat], function (tx, results) {
                var len = results.rows.length, i;
                var mark = [];
                var name = [];
                var setName = new Array();
                var marker;
                for (i = 0; i < len; i++){
                    var latit = results.rows.item(i).lat.toFixed(5);
                    var longit = results.rows.item(i).lon.toFixed(5);

                    mark[i] = new google.maps.LatLng(latit,longit);
                    name[i] = results.rows.item(i).name;

                    marker = $('#map_canvas').gmap('addMarker', {'position': mark[i], 'bounds': 'true','title': name[i] } ).click(function() { 
                        var directionsRenderer = $('#map').gmap('getService','DirectionsRenderer'); 
                                        if(typeof directionsRenderer.setMap == 'function') 
                        directionsRenderer.setMap(null); 
                        dispMap(this);
                    });
                    setName[i]=marker.get(0);
                }

            });
            function dispMap(mark){
                var title = mark.getTitle();
                $('#map_canvas').gmap('openInfoWindow', {'content': title },mark);
                $('#map_canvas').gmap('displayDirections', { 'origin': yourStartLatLng, 'destination': mark.getPosition(), 'travelMode': google.maps.DirectionsTravelMode.DRIVING }, { 'panel': document.getElementById('panel') }, function(result, status) {
                });
            }        
        }, null);
    });

});


//-----------SEND EMAIL-----------------------------

$(document).on('pageshow', '#showEmailPage',function() {

    var imageData = document.getElementById("smallImage").src;
    var textarea =  document.getElementById("textarea").innerHTML;
    $("#SendMail").click(function(){
        window.plugin.email.open({
            to:      ['dre.dvl@gmail.com'],
            //cc:      ['erika.mustermann@appplant.de'],
            //bcc:     ['john.doe@appplant.com', 'jane.doe@appplant.com'],
            attachments: [imageData],
            subject: 'Animal_Helper',
            body:    '<h2>Urgent Requirement</h2><br>We have information that an animal type of <b>' + firstText + '</b> has been found and seen <b>' + secondText + '</b> and need urgent attention. <br> ' +
            ' is at the following location ' + locat + ' and will be arriving soon.<br><br>The user also has some additional information for you <br>' + textarea  ,
            isHtml:  true
        });
    });
});

