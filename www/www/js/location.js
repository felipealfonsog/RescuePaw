    var deviceReady = false;

    //-------------------------------------------------------------------------
    // Location
    //-------------------------------------------------------------------------
    var watchLocationId = null;

    /**
     * Start watching location
     */
    var watchLocation = function(geo) {
        console.log("watchLocation()");

        // Success callback
        var success = function(p){
              console.log('watch location success');
              setLocationDetails(p);
        };

        // Fail callback
        var fail = function(e){
            console.log("watchLocation fail callback with error code "+e);
            stopLocation(geo);
        };

        // Get location
        watchLocationId = geo.watchPosition(success, fail, {enableHighAccuracy: true});
        setLocationStatus("Running");
    };

    /**
     * Stop watching the location
     */
    var stopLocation = function(geo) {
        setLocationStatus("Stopped");
        if (watchLocationId) {
            geo.clearWatch(watchLocationId);
            watchLocationId = null;
        }
    };

    /**
     * Get current location
     */
    var getLocation = function(geo, opts) {
        console.log("getLocation()");

        // Stop location if running
        stopLocation(geo);

        // Success callback
        var success = function(p){
            console.log('get location success');
            setLocationDetails(p);
            setLocationStatus("Done");
        };

        // Fail callback
        var fail = function(e){
            console.log("getLocation fail callback with error code "+e.code);
            setLocationStatus("Error: "+e.code);
        };

        // Get location
        geo.getCurrentPosition(success, fail, opts || {enableHighAccuracy: true}); //, {timeout: 10000});
        setLocationStatus("Retrieving location...");

    };

    /**
     * Set location status
     */
    var setLocationStatus = function(status) {
        document.getElementById('location_status').innerHTML = status;
    };
var setLocationDetails = function(p) {
var date = (new Date(p.timestamp));
            document.getElementById('Lat').innerHTML = p.coords.latitude;
            document.getElementById('Long').innerHTML = p.coords.longitude;
           // document.getElementById('altitude').innerHTML = p.coords.altitude;
            //document.getElementById('accuracy').innerHTML = p.coords.accuracy;
            //document.getElementById('heading').innerHTML = p.coords.heading;
            //document.getElementById('speed').innerHTML = p.coords.speed;
            //document.getElementById('altitude_accuracy').innerHTML = p.coords.altitudeAccuracy;
            //document.getElementById('timestamp').innerHTML =  date.toDateString() + " " + date.toTimeString();
    }
    
    /**
     * Function called when page has finished loading.
     */
    function init() {
        document.addEventListener("deviceready", function() {
                deviceReady = true;
                console.log("Device="+device.platform+" "+device.version);
            }, false);
        window.setTimeout(function() {
        	if (!deviceReady) {
        		alert("Error: Apache Cordova did not initialize.  Demo will not run correctly.");
        	}
        },1000);
    }