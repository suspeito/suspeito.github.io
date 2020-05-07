var loadingVideoTest = document.getElementById("controlVideo");
var loaded = false;

$(document).ready(function() {
    /*loadingVideoTest.onloadeddata = function() {
		console.log("Video ready.");
		$('#loading').fadeOut('fast');
		$('#ready').fadeIn('slow');
		loaded = true;
	}*/

    $("#hide").click(function() {
        if (loaded == true) {$(".overlay").hide();}
    });
});