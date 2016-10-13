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
    HYPER.Timer.then = HYPER.CURRENT_DATE;
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
        for (var i = 0; i < HYPER.Timer.children.length; i++) {
            if (child._ID = HYPER.Timer.children[i]._ID) {
                HYPER.Timer.children.splice(i, 1);
            }
        }
    };

    HYPER.Timer.Ticker = function () {



        HYPER.CURRENT_DATE = Date.now();


        HYPER.Timer.now = HYPER.CURRENT_DATE;
        HYPER.Timer.delta = HYPER.Timer.now - HYPER.Timer.then;

        if (HYPER.Timer.delta > HYPER.Timer.interval) {

            HYPER.Timer.then = HYPER.Timer.now - (HYPER.Timer.delta % HYPER.Timer.interval);

            for (var i = 0; i < HYPER.Timer.children.length; i++) {
                HYPER.Timer.children[i](HYPER.Timer.tick);
            }
            HYPER.Timer.tick++;

        }
        //
    };

    HYPER.Timer._Looper = function () {
        HYPER.Timer.Ticker();
        //requestAnimationFrame(HYPER.Timer._Looper);
    }


    HYPER.Timer.init = function () {
        HYPER.Timer._Looper();
        setInterval(HYPER.Timer._Looper, 1000 / 60);
    };
})();