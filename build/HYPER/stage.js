(function () {
    "use strict";
    // STAGE

    /**
     * Description Used to facalite the creation new stages or 'scenes'.
     */
    HYPER.Stage = {
        current: {
            init: function () {},
            update: function () {},
            render: function () {},
            end: function () {},
        },
    };

    /**
     * Description Used to create new stages or 'scenes'.
     */
    HYPER.Stage.Scene = function (e) {
        this.init = e.init || function () {};
        this.update = e.update || function () {};
        this.render = e.render || function () {};
        this.end = e.end || function () {};
    };

    /**
     * Description Used to switch between stages.
     */
    HYPER.Stage.change = function (stage) {
        HYPER.Stage.current.end();
        stage.init();
        HYPER.Stage.current = stage;
    };

})();