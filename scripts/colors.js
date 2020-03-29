$(document).ready(function() {
    setTimeout(function() {
        $(".container").show();
    }, 1000);

    $("#hide").click(function() {
        $(".overlay").hide();
    });

});

$(function() {

    var randomColor = [
        "rgb(227, 227, 106)",
        "rgb(185, 205, 218)",
        "rgb(255, 172, 129)",
        "rgb(242, 246, 208)",
        "rgb(197, 239, 203)",
        "rgb(242, 243, 174)",
        "rgb(205, 232, 171)",
        "rgb(229, 159, 113)",
        "rgb(206, 215, 242)"
    ];


    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    function mixColors() {

        var nrs = Array.from(Array(9).keys());
        nrs = shuffle(nrs);

        var color = randomColor[nrs[0]];
        $("header").css({
            "background-color": color,
            "-webkit-transition": "background-color 500ms linear",
            "-ms-transition": "background-color 500ms linear",
            "transition": "background-color 500ms linear"
        });

        for (i = 1; i < 10; i++) {
            color = randomColor[nrs[i]];
            $(".half:nth-child(" + i + ")").css({
                "background-color": color,
                "-webkit-transition": "background-color 500ms linear",
                "-ms-transition": "background-color 500ms linear",
                "transition": "background-color 500ms linear"
            });
            $(".overlay").css({
                "background-color": color,
                "-webkit-transition": "background-color 500ms linear",
                "-ms-transition": "background-color 500ms linear",
                "transition": "background-color 500ms linear"
            });
            $("#follower").css({
                "background-color": color,
                "-webkit-transition": "background-color 500ms linear",
                "-ms-transition": "background-color 500ms linear",
                "transition": "background-color 500ms linear"
            });
        }
    }

    mixColors();

    var images = new Array();
    for (var i = 0; i < 100; i++) {
        images.push("img/anim/" + i + ".png");
    }

    var y = 1;

    function changeImage() {
        for (var i = 1; i < 9; i++) {
            document.getElementById('anim' + i).src = images[y * 10 * i + i];
        }
        if (y < 1) {
            y += 1;
        } else {
            y = 0;
        }
    }

    setInterval(function() {
        changeImage();
        mixColors()
    }, 2000);

});