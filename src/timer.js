(function () {
    "use strict";
    /**
     * Gloable object for all Timer functions.
     * @method Timer
     */
    HYPER.Timer = {};
    
    HYPER.Timer.children = [];
    HYPER.Timer.addOnTick = function (callback) {
        //callback._ID = "" + Math.random() + "" + Math.random();
        HYPER.Timer.children.push(callback);
    }
    HYPER.Timer.setTimer = function (seconds, callback) {
        var found = false;
        for (var i = 0; i < HYPER.Timer.children.length; i++) {
            if (!HYPER.Timer.children[i].alive && HYPER.Timer.children[i].type === "timer") {
                found = true;
                var ticks = HYPER.Timer.fps * seconds;

                HYPER.Timer.children[i]._ID = "" + Math.random() + "" + Math.random();
                HYPER.Timer.children[i].originTime = HYPER.Timer.tick;
                HYPER.Timer.children[i].callback = callback;
                HYPER.Timer.children[i].alive = true;
            }
        }
        if (!found) {
            var ticks = HYPER.Timer.fps * seconds;
            var timer = function () {

                if (HYPER.Timer.tick === timer.originTime + ticks) {
                    timer.callback();
                    timer.alive = false;
                }
            }
            timer.type = "timer";
            timer._ID = "timer" + Math.random() + "" + Math.random();
            timer.originTime = HYPER.Timer.tick;
            timer.callback = callback;
            timer.alive = true;
            HYPER.Timer.children.push(timer);
        }


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

        for (var i = 0; i < HYPER.Timer.children.length; i++) {
            HYPER.Timer.children[i](HYPER.Timer.tick);
        }
        HYPER.Timer.tick++;

    };

    HYPER.Timer._Looper = function () {
        HYPER.Timer.Ticker();
        requestAnimationFrame(HYPER.Timer._Looper);
    }


    HYPER.Timer.init = function () {
        HYPER.Timer._Looper();
        //setInterval(HYPER.Timer._Looper, 1000 / 60);
    };
})();