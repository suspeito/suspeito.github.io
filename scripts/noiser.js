/*jslint browser*/
/*https://www.sitepoint.com/community/t/how-would-i-fix-these-jslint-errors/309077/4*/
function noise() {
    "use strict";
    const canvas = document.getElementById("noise");
    const ctx = canvas.getContext("2d");
    const wWidth = window.innerWidth;
    const wHeight = window.innerHeight;

    function createNoise() {
        const idata = ctx.createImageData(wWidth, wHeight);
        const buffer32 = new Uint32Array(idata.data.buffer);
        buffer32.forEach(function (ignore, i, buffer) {
            if (Math.random() < 0.5) {
                buffer[i] = 0xff000000;
            }
        });
        return idata;
    }

    const noiseData = new Array(10).fill(0).map(createNoise);
    let frame = 0;
    let loopTimeout;

    function paintNoise() {
        frame = (frame + 1) % noiseData.length;
        ctx.putImageData(noiseData[frame], 0, 0);
    }

    function loop() {
        const frameLoop = () => window.requestAnimationFrame(loop);
        loopTimeout = window.setTimeout(frameLoop, (1000 / 25));
        paintNoise(frame);
    }

    function setup() {
        canvas.width = wWidth;
        canvas.height = wHeight;
        loop();
    }

    function reset() {
        let resizeThrottle;
        function resizeHandler() {
            window.clearTimeout(resizeThrottle);
            resizeThrottle = window.setTimeout(function () {
                window.clearTimeout(loopTimeout);
                setup();
            }, 200);
        }
        window.addEventListener("resize", resizeHandler, false);
    }

    function init() {
        reset();
        setup();
    }
    init();
}
noise();