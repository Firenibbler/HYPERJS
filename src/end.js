(function () {
    "use strict";
    /**
     * Initalize the HYPER library.
     * @method HYPER.init
     */
    HYPER.init = function () {
        HYPER.Timer.init();
        HYPER.Input.init();
        return HYPER;
    };
})();