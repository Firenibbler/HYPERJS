(function () {
    "use strict";
    /**
     * Preload images, spritesheets, and sounds.
     * @namespace HYPER.Preload
     */

    HYPER.Preload = {

        /**
         * @property {object} info - Stores how many files have loaded and how many files need to be loaded.
         */

        info: {

            /**
             * @property {object} info.load - Total amount of assets that need to be loaded.
             */

            load: 0,

            /**
             * @property {object} info.load - Total amount of assets that are loaded so far.
             */

            loaded: 0,
        },

        /**
         * Returns the amount of assets that have been loaded so far.
         * @method HYPER.Preload.getNumberLoaded
         */

        getNumberLoaded: function () {
            // return the amount of loaded assets
            return HYPER.Preload.info.loaded;
        },

        /**
         * Returns the amount of assets that need to be loaded.
         * @method HYPER.Preload.getNeededLoaded
         */

        getNeededLoaded: function () {
            // return amount of total assets.
            return HYPER.Preload.info.load;
        },
        /**
         * Returns the amount of assets that have been loaded as a decimal.
         * @method HYPER.Preload.getLoaded
         */

        getLoaded: function () {
            // returns decemal of assets loaded out of all assets.
            return HYPER.Preload.info.loaded / HYPER.Preload.info.load;
        },




    };
})();