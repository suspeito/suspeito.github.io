var loadingVideoTest = document.getElementById("controlVideo");
var loaded = false;
console.log("Debug: Begin hide js.");
$(document).ready(function() {
    loadingVideoTest.load();

    loadingVideoTest.onloadeddata = function() {
		console.log("Video loaded.");
		$('#loading').fadeOut('fast');
		$('#ready').fadeIn('slow');
		loaded = true;
	}

    $("#hide").click(function() {
        if (loaded == true) {$(".overlay").hide();}
    });
});

// Altura da viewport multiplicada por 1% para obter um valor para vh
let vh = window.innerHeight * 0.01;
 
// Configura o valor em --vh na raiz do documento
document.documentElement.style.setProperty('--vh', `${vh}px`);