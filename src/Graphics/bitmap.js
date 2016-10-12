(function () {
    "use strict";

    /**
     * Create new bitmap images.
     * @class HYPER.Graphics.Bitmap
     * @param {object} e Object to pass all button info.
     * @param {number} e.width=300 Width of the new bitmap.
     * @param {number} e.height=150 Height of the new bitmap.
     */

    HYPER.Graphics.Bitmap = function (e) {

        /**
         * @property {string} _ID - The specific ID for this object.
         */

        this._ID = "bitmap " + Math.random() + "" + Math.random();

        /**
         * @property {string} type - The type of object this is.
         */

        this.type = "bitmap";

        /**
         * @property {number} width=300 - The width of the new image.
         */

        this.width = e.width || 300;

        /**
         * @property {number} height=150 - The height of the new image.
         */

        this.height = e.height || 150;

        /**
         * @property {object} bitmap - The canvas that the new bitmap draws to.
         */

        this.bitmap = document.createElement("canvas");

        /**
         * @property {object} ctx - The ctx that the new bitmap uses.
         */

        this.ctx = this.bitmap.getContext("2d");
        this.bitmap.width = this.width;
        this.bitmap.height = this.height;

    }

    HYPER.Graphics.Bitmap.prototype = {

        /**
         * Draws to the bitmap, uses same methods that HYPER.Graphics.Draw uses. 
         * @method HYPER.Graphics.Bitmap.draw
         * @param {HYPER.Graphics.Style} style - the style used to draw.
         */

        draw: function (style) {

            return HYPER.Graphics.Draw(this.ctx, style);

        },

        /**
         * Clears the bitmap.
         * @method HYPER.Graphics.Bitmap.clear
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