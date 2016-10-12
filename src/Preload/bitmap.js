(function () {
    "use strict";

    /**
     * Create a sprite sheet
     * @class HYPER.Preload.Bitmap
     * @param {object} e Info used to create the Bitmap.
     * @param {string} e.src The sourse of the image file for the Bitmap.
     * @param {function} e.onload What to do when the image loads.
     */
    HYPER.Preload.Bitmap = function (e) {

        /**
         * @property {string} _ID - The specific ID for this object.
         */

        this._ID = "bitmap " + Math.random() + "" + Math.random();

        /**
         * @property {string} type - The type of object this is.
         */

        this.type = "bitmap";

        /**
         * @property {object} image - The image object to be loaded.
         */

        this.image = new Image();
        this.image.src = e.src;

        /**
         * @property {object} bitmap - The canvas that the image draws to.
         */

        this.bitmap = document.createElement("canvas");

        /**
         * @property {object} ctx - The context that the image draws to.
         */

        this.ctx = this.bitmap.getContext("2d");

        /**
         * @private
         * @property {object} flippedX - The info for a horazontly flipped image.
         */

        this.flippedX = {};

        /**
         * @private
         * @property {object} flippedY - The info for a verticaly flipped image.
         */

        this.flippedY = {};

        /**
         * @private
         * @property {object} flippedXY - The info for a verticaly and horazontly flipped image.
         */

        this.flippedXY = {};

        /**
         * @private
         * @property {object} flippedX.bitmap - The canvas for a horazontly flipped image.
         */

        this.flippedX.bitmap = document.createElement("canvas");

        /**
         * @private
         * @property {object} flippedX.ctx - The context for a horazontly flipped image.
         */

        this.flippedX.ctx = this.flippedX.bitmap.getContext("2d");

        /**
         * @private
         * @property {object} flippedY.bitmap - The canvas for a verticaly flipped image.
         */

        this.flippedY.bitmap = document.createElement("canvas");

        /**
         * @private
         * @property {object} flippedY.ctx - The context for a verticaly flipped image.
         */

        this.flippedY.ctx = this.flippedY.bitmap.getContext("2d");

        /**
         * @private
         * @property {object} flippedXY.bitmap - The canvas for a verticaly and horazontly flipped image.
         */

        this.flippedXY.bitmap = document.createElement("canvas");

        /**
         * @private
         * @property {object} flippedXY.ctx - The context for a verticaly and horazontly flipped image.
         */

        this.flippedXY.ctx = this.flippedXY.bitmap.getContext("2d");

        /**
         * @property {function} onload - What to do when the image loads.
         */

        this.onload = e.onload || no0p;

        // add to total amount of assets.
        HYPER.Preload.info.load++;

        // Set that to this.
        var that = this;

        // when the image loads
        this.image.onload = function () {
            // set the bitmap width to the images width
            that.bitmap.width = that.image.width;
            that.flippedX.bitmap.width = that.image.width;
            that.flippedY.bitmap.width = that.image.width;
            that.flippedXY.bitmap.width = that.image.width;
            // set the bitmap height to the images height
            that.bitmap.height = that.image.height;
            that.flippedX.bitmap.height = that.image.height;
            that.flippedY.bitmap.height = that.image.height;
            that.flippedXY.bitmap.height = that.image.height;
            // set the width to the images width
            that.width = that.image.width;
            // set the height to the images height
            that.height = that.image.height;
            // draw the image onto the bitmap
            that.ctx.drawImage(that.image, 0, 0, that.image.width, that.image.height, 0, 0, that.bitmap.width, that.bitmap.height);

            that.flippedX.ctx.translate(that.width / 2, that.height / 2);
            that.flippedX.ctx.scale(-1, 1);
            that.flippedX.ctx.drawImage(that.image, 0, 0, that.image.width, that.image.height, -that.width / 2, -that.height / 2, that.flippedX.bitmap.width, that.flippedX.bitmap.height);
            that.flippedX.ctx.scale(-1, 1);
            that.flippedX.ctx.translate(-that.width / 2, -that.height / 2);

            that.flippedY.ctx.translate(that.width / 2, that.height / 2);
            that.flippedY.ctx.scale(1, -1);
            that.flippedY.ctx.drawImage(that.image, 0, 0, that.image.width, that.image.height, -that.width / 2, -that.height / 2, that.flippedY.bitmap.width, that.flippedY.bitmap.height);
            that.flippedY.ctx.scale(1, -1);
            that.flippedY.ctx.translate(-that.width / 2, -that.height / 2);

            that.flippedXY.ctx.translate(that.width / 2, that.height / 2);
            that.flippedXY.ctx.scale(-1, -1);
            that.flippedXY.ctx.drawImage(that.image, 0, 0, that.image.width, that.image.height, -that.width / 2, -that.height / 2, that.flippedXY.bitmap.width, that.flippedXY.bitmap.height);
            that.flippedXY.ctx.scale(-1, -1);
            that.flippedXY.ctx.translate(-that.width / 2, -that.height / 2);

            // mark this image as loaded
            HYPER.Preload.info.loaded++;
            // run user specified onload function.
            that.onload();
        };
    };

    HYPER.Preload.Bitmap.prototype = {
        /**
         * Draws to the bitmap, uses same methods that HYPER.Graphics.Draw uses. 
         * @method HYPER.Preload.Bitmap.draw
         * @param {HYPER.Graphics.Style} style - the style used to draw.
         */

        draw: function (style) {

            return HYPER.Graphics.Draw(this.ctx, style);

        },

        /**
         * Clears the bitmap.
         * @method HYPER.Preload.Bitmap.clear
         */

        clear: function () {

            HYPER.Graphics.Draw(this.ctx)
                .clearRect(
                    0,
                    0,
                    this.bitmap.width,
                    this.bitmap.height);

        },
    };

})();