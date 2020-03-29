var mouseX = 30,
    mouseY = 30,
    limitX = 150,
    limitY = 150;

var mouseX2 = 55,
    mouseY2 = 55,
    limitX2 = 150,
    limitY2 = 150;

var centerX = limitX / 2,
    centerY = limitY / 2;
var centerX2 = limitX2 / 2,
    centerY2 = limitY2 / 2;
var radius = centerX - 60;
var radius2 = centerX2 - 45;

$(window).mousemove(function(e) {

    var wmax = window.innerWidth;
    var hmax = window.innerHeight;

    var diffX = (e.pageX * limitX) / wmax - centerX;
    var diffY = (e.pageY * limitY) / hmax - centerY;
    var diffX2 = (e.pageX * limitX2) / wmax - centerX2;
    var diffY2 = (e.pageY * limitY2) / hmax - centerY2;

    var r = Math.sqrt(diffX * diffX + diffY * diffY);
    var r2 = Math.sqrt(diffX2 * diffX2 + diffY2 * diffY2);

    if (r > radius) {
        diffX /= r;
        diffY /= r;
        diffX *= radius;
        diffY *= radius;
    }

    mouseX = centerX + diffX - 52.5;
    mouseY = centerY + diffY - 52.5;

    if (r2 > radius2) {
        diffX2 /= r2;
        diffY2 /= r2;
        diffX2 *= radius2;
        diffY2 *= radius2;
    }

    mouseX2 = centerX2 + diffX2 - 52.5 + 21;
    mouseY2 = centerY2 + diffY2 - 52.5 + 21;

});

var follower = $("#follower");
var follower2 = $("#follower2");
var xp = 30,
    yp = 30;
var xp2 = 55,
    yp2 = 55;
var loop = setInterval(function() {
    // change 12 to alter damping higher is slower
    xp += (mouseX - xp) / 24;
    yp += (mouseY - yp) / 24;
    xp2 += (mouseX2 - xp2) / 24;
    yp2 += (mouseY2 - yp2) / 24;
    follower.css({
        left: xp,
        top: yp
    });
    follower2.css({
        left: xp2,
        top: yp2
    });
}, 30);