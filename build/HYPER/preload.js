(function () {
    "use strict";
    // PRELOAD

    /**
     * Description Gloable object for all Preload functions.
     */
    HYPER.Preload = {};

    /**
     * Description object for all asset information.
     */
    HYPER.Preload.assets = {
        /**
         * Description varaible for number of loaded assets.
         */
        loaded: 0,
        /**
         * Description varaible for number of assets needed to load.
         */
        load: 0,
        /**
         * Description get the amount of assets loaded so far.
         */
        getLoadedAmount: function () {
            return HYPER.Preload.assets.loaded;
        },
        /**
         * Description varaible weather or not all assets are loaded.
         */
        getLoaded: function () {
            if (HYPER.Preload.assets.loaded >= HYPER.Preload.assets.load) {
                return true;
            } else {
                return false;
            }
        },
        /**
         * Description varaible weather or not all assets are loaded.
         */
        resetLoaded: function () {
            HYPER.Preload.loaded = 0;
            HYPER.Preload.load = 0;
        },
    };

    /**
     * Description Used to preload an image.
     */
    HYPER.Preload.Bitmap = function (srcImage) {
        this._viewType = "bitmap";
        this.image = document.createElement("canvas");
        this.ctx = this.image.getContext("2d");


        this.img = new Image();
        this.img.src = srcImage;

        this.onload = function () {};
        var that = this;

        HYPER.Preload.assets.load++;

        this.img.onload = function () {
            that.image.width = that.img.width;
            that.image.height = that.img.height;
            that.ctx.drawImage(that.img, 0, 0);
            HYPER.Preload.assets.loaded++;

            that.onload();

        };
    };

    /**
     * Description Used to preload a spritesheet.
     */
    HYPER.Preload.SpriteSheet = function (e) {
        this._viewType = "bitmap";
        this.frame = {};
        e.frame = e.frame || {};
        this.frame.width = (typeof e.frame.width === 'undefined') ? 0 : e.frame.width;
        this.frame.height = (typeof e.frame.height === 'undefined') ? 0 : e.frame.height;


        this.image = document.createElement("canvas");
        this.ctx = this.image.getContext("2d");

        this.img = new Image();
        this.img.src = e.src;

        this.onload = function () {};
        var that = this;

        HYPER.Preload.assets.load++;

        this.img.onload = function () {
            that.image.width = that.img.width;
            that.image.height = that.img.height;
            that.ctx.drawImage(that.img, 0, 0);
            HYPER.Preload.assets.loaded++;
            that.framesWide = Math.floor(that.image.width / that.frame.width);
            that.framesTall = Math.floor(that.image.height / that.frame.height);

            that.onload();

        };
    };

    /**
     * Description Used to preload an Audio file, use howler API.
     */
    HYPER.Preload.Audio = Howl;
})();