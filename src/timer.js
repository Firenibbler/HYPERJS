(function () {
    "use strict";
    /**
     * Gloable object for all Timer functions.
     * @method Timer
     */
    HYPER.Timer = {};
    HYPER.Timer.tick = 0;
    HYPER.Timer.fps = 60;
    HYPER.Timer.now;
    HYPER.Timer.then = Date.now();
    HYPER.Timer.interval = 1000 / HYPER.Timer.fps;
    HYPER.Timer.delta;
    /**
     * Gloable object for all Timer functions.
     * @method setFPS
     * @param {number} fps The new FPS value.
     */
    HYPER.Timer.setFPS = function (fps) {
        HYPER.Timer.fps = fps;
        HYPER.Timer.interval = 1000 / HYPER.Timer.fps;
    }
    HYPER.Timer.children = [];
    HYPER.Timer.addOnTick = function (callback) {
        //callback._ID = "" + Math.random() + "" + Math.random();
        HYPER.Timer.children.push(callback);
    }
    HYPER.Timer.setTimer = function (seconds, callback) {


        var ticks = HYPER.Timer.fps * seconds;
        var timer = function () {

            if (HYPER.Timer.tick === timer.originTime + ticks) {
                timer.callback();
                HYPER.Timer.removeChild(this);
            }
        }
        timer._ID = "" + Math.random() + "" + Math.random();
        timer.originTime = HYPER.Timer.tick;
        timer.callback = callback;
        HYPER.Timer.children.push(timer);
    }
    HYPER.Timer.removeChild = function (child) {
        for (let i = 0; i < HYPER.Timer.children.length; i++) {
            if (child._ID = HYPER.Timer.children[i]._ID) {
                HYPER.Timer.children.splice(i, 1);
            }
        }
    }

    HYPER.Timer.Ticker = function () {

        requestAnimationFrame(HYPER.Timer.Ticker);

        HYPER.Timer.now = Date.now();
        HYPER.Timer.delta = HYPER.Timer.now - HYPER.Timer.then;

        if (HYPER.Timer.delta > HYPER.Timer.interval) {
            // update time stuffs

            // Just `then = now` is not enough.
            // Lets say we set fps at 10 which means
            // each frame must take 100ms
            // Now frame executes in 16ms (60fps) so
            // the loop iterates 7 times (16*7 = 112ms) until
            // delta > interval === true
            // Eventually this lowers down the FPS as
            // 112*10 = 1120ms (NOT 1000ms).
            // So we have to get rid of that extra 12ms
            // by subtracting delta (112) % interval (100).
            // Hope that makes sense.

            HYPER.Timer.then = HYPER.Timer.now - (HYPER.Timer.delta % HYPER.Timer.interval);

            for (let i = 0; i < HYPER.Timer.children.length; i++) {
                HYPER.Timer.children[i](HYPER.Timer.tick);
            }
            HYPER.Timer.tick++;

        }
    }
    HYPER.Timer.init = function () {
        HYPER.Timer.Ticker();
    };
})();