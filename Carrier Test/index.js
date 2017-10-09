/* jshint browser: true */
/*global alert*/
/*global console*/
/*global device*/
/*global carrier*/

window.onerror = function(msg, url, line) {
    var idx = url.lastIndexOf("/");
    if (idx > -1) {
        url = url.substring(idx + 1);
    }
    //Build the message string we'll display to the user
    var errStr = "ERROR in " + url + " (line #" + line + "): " + msg;
    //Write the error to the console
    console.error(errStr);
    //Tell the user what happened
    alert(errStr);
    return false;
};

function onBodyLoad() {
    console.log("Entering onBodyLoad");
    document.addEventListener("deviceready", onDeviceReady);
    console.log("Leaving onBodyLoad");
}

function onDeviceReady() {
    console.log("Entering onDeviceReady");
    console.log("Cordova: " + device.cordova);
    console.log("Leaving onDeviceReady");
}

function doGetCarrier() {
    console.log("Entering doGetCarrier");
    carrier.getCarrierName(onSuccess, onError);
    console.log("Leaving doGetCarrier");
}

function doGetCountryCode() {
    console.log("Entering doGetCountryCode");
    carrier.getCountryCode(onSuccess, onError);
    console.log("Leaving doGetCountryCode");
}

function onSuccess(res) {
    console.log("Entering onSuccess");
    var msg = "Result: " + JSON.stringify(res);
    console.log(msg);
    navigator.notification.alert(msg, null, "Carrier Information", "Continue");
    console.log("Leaving onSuccess");
}

function onError(err) {
    console.log("Entering onError");
    var msg = `Error: ${err.code} - ${err.msg}`;
    console.log(msg);
    navigator.notification.alert(msg, null, "Carrier Error", "Oops");
    console.log("Leaving onError");
}