(function () {
    "use strict";
    HYPER.update = function () {
        HYPER.Stage.current.update();
    };

    HYPER.render = function () {
        HYPER.Stage.current.render();
    };

    /**
     * Description Run this function to initilize HYPER.
     */
    HYPER.init = function () {
        HYPER.Input.init();
        HYPER.Timer.Tick._loop();
        HYPER.Timer.Animate._loop();


        HYPER.Timer.addEventListener("tick", HYPER.update);
        HYPER.Timer.addEventListener("animate", HYPER.render);

    };
})();