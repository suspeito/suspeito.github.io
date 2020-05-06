var myVid = document.getElementById("loadTest");
var loaded = false;
myVid.onloadeddata = function() {
	console.log("Browser has loaded the current frame");
    loaded = true;
}

$(document).ready(function() {
    $("#hide").click(function() {
        if (loaded == true) {$(".overlay").hide();}
    });
});