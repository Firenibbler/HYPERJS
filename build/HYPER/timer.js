(function () {
    "use strict";

    var v = 0;
    var i = 0;
    // TIMER

    /**
     * Description Gloable object for all Timer functions.
     */
    HYPER.Timer = {
        _events: {
            tick: [],
            animate: [],
        },
        addEventListener: function (type, event) {
            if (type == "tick") {
                this._events.tick.push(event);
            } else if (type == "animate") {
                this._events.animate.push(event);
            }
        },
    };

    /**
     * Description Gloable object for all Tick functions.
     */
    HYPER.Timer.Tick = {
        /**
         * Description FPS for the update  
         */
        FPS: 30,
        /**
         * Description Set the FPS for the update  
         */
        setFPS: function (fps) {
            this.FPS = fps;
        },
        _loop: function () {
            for (v = 0; v < HYPER.Timer._events.tick.length; v++) {
                HYPER.Timer._events.tick[v]();
            };
            setTimeout(HYPER.Timer.Tick._loop, 1000 / HYPER.Timer.Tick.FPS);
        },

    };

    window.requestAnimFrame = (function () {

        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            _animecallbackFunc;

    })();
    /**
     * Description Gloable object for all Animate functions.
     */
    HYPER.Timer.Animate = {
        /**
         * Description FPS for the render  
         */
        FPS: 60,

        _interval: 0,
        _now: 0,
        _then: 0,
        _delta: 0,

        /**
         * Description Set the FPS for the render  
         */
        setFPS: function (fps) {
            this.FPS = fps;
        },
        _loop: function () {



            HYPER.Timer.Animate._interval = Math.floor(1000 / HYPER.Timer.Animate.FPS);


            HYPER.Timer.Animate._now = Date.now();
            HYPER.Timer.Animate._delta = HYPER.Timer.Animate._now - HYPER.Timer.Animate._then;

            if (HYPER.Timer.Animate._delta >= HYPER.Timer.Animate._interval) {

                HYPER.Timer.Animate._then = HYPER.Timer.Animate._now - (HYPER.Timer.Animate._delta % HYPER.Timer.Animate._interval);

                // ... Code for Drawing the Frame ...
                for (var i = 0; i < HYPER.Timer._events.animate.length; i++) {
                    HYPER.Timer._events.animate[i]();
                };

            }


            requestAnimFrame(HYPER.Timer.Animate._loop);
        },
    };
})();