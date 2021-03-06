(function () {
    "use strict";
    /**
     * Create a sprite sheet
     * @class HYPER.Preload.SpriteSheet
     * @param {object} e Info used to create the spritesheet.
     * @param {string} e.src The sourse of the image file for the spritesheet.
     * @param {number} [e.wide = 1] The number of frames wide the image is.
     * @param {number} [e.tall = 1] The number of frames tall the image is.
     */
    HYPER.Preload.SpriteSheet = function (e) {
        e.frames = e.frames || {
            wide: e.wide || 1,
            tall: e.tall || 1,
        };
        /**
         * @property {string} _ID - The specific ID for this object.
         */

        this._ID = "spritesheet " + Math.random() + "" + Math.random();

        /**
         * @property {string} type - The type of object this is.
         */

        this.type = "spritesheet";

        /**
         * @property {function} onload - Called when the spritesheet loads.
         */

        this.onload = e.onload || no0p;

        /**
         * @property {function} image - Image object.
         */

        this.image = new Image();

        // set the source of the image object
        this.image.src = e.src;

        /**
         * @property {object} bitmap - The canvas that the new bitmap uses.
         */

        this.bitmap = document.createElement("canvas");

        /**
         * @property {object} ctx - The context that the new bitmap uses.
         */

        this.ctx = this.bitmap.getContext("2d");

        /**
         * @private
         * @property {object} flippedX - The info for a horazontly flipped sprite.
         */

        this.flippedX = {};

        /**
         * @private
         * @property {object} flippedY - The info for a verticaly flipped sprite.
         */

        this.flippedY = {};

        /**
         * @private
         * @property {object} flippedXY - The info for a verticaly and horazontly flipped sprite.
         */

        this.flippedXY = {};

        /**
         * @private
         * @property {object} flippedX.bitmap - The canvas for a horazontly flipped sprite.
         */

        this.flippedX.bitmap = document.createElement("canvas");

        /**
         * @private
         * @property {object} flippedX.ctx - The context for a horazontly flipped sprite.
         */

        this.flippedX.ctx = this.flippedX.bitmap.getContext("2d");

        /**
         * @private
         * @property {object} flippedY.bitmap - The canvas for a verticaly flipped sprite.
         */

        this.flippedY.bitmap = document.createElement("canvas");

        /**
         * @private
         * @property {object} flippedY.ctx - The context for a verticaly flipped sprite.
         */

        this.flippedY.ctx = this.flippedY.bitmap.getContext("2d");

        /**
         * @private
         * @property {object} flippedXY.bitmap - The canvas for a verticaly and horazontly flipped sprite.
         */

        this.flippedXY.bitmap = document.createElement("canvas");

        /**
         * @private
         * @property {object} flippedXY.ctx - The context for a verticaly and horazontly flipped sprite.
         */

        this.flippedXY.ctx = this.flippedXY.bitmap.getContext("2d");

        /**
         * @property {object} frames - Data on frame sizes.
         */

        this.frames = e.frames || {};

        /**
         * @property {number} frames.wide=1 - How many frames wide your spritesheet is.
         */

        this.frames.wide = e.frames.wide || 1;

        /**
         * @property {number} frames.tall=1 - How many frames tall your spritesheet is.
         */

        this.frames.tall = e.frames.tall || 1;

        /**
         * @property {array} frameINFO - Array of frame data.
         */

        this.frameINFO = e.frameINFO || [];

        /**
         * @property {number} width - How wide the sprite is.
         */

        this.width = 0;

        /**
         * @property {number} height - How tall the sprite is.
         */

        this.height = 0;



        /**
          Contains all animation objects.
         */
        this.animations = {};



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
            // draw the image onto the bitmap
            that.ctx.drawImage(that.image, 0, 0, that.image.width, that.image.height, 0, 0, that.bitmap.width, that.bitmap.height);

            // Set the frames.
            that.setFramesOBJ(that.frames);

            that.width = that.width || that.frames.wide / that.bitmap.width;
            that.height = that.height || that.frames.tall / that.bitmap.height;
            // STILL NEED TO SET THE FLIPPED IMAGES WIDTH AND HEIGHTS!!!

            that.flippedX.ctx.translate(that.image.width / 2, that.image.height / 2);
            that.flippedX.ctx.scale(-1, 1);
            that.flippedX.ctx.drawImage(that.image, 0, 0, that.image.width, that.image.height, -that.image.width / 2, -that.image.height / 2, that.flippedX.bitmap.width, that.flippedX.bitmap.height);
            that.flippedX.ctx.scale(-1, 1);
            that.flippedX.ctx.translate(-that.image.width / 2, -that.image.height / 2);

            that.flippedY.ctx.translate(that.image.width / 2, that.image.height / 2);
            that.flippedY.ctx.scale(1, -1);
            that.flippedY.ctx.drawImage(that.image, 0, 0, that.image.width, that.image.height, -that.image.width / 2, -that.image.height / 2, that.flippedY.bitmap.width, that.flippedY.bitmap.height);
            that.flippedY.ctx.scale(1, -1);
            that.flippedY.ctx.translate(-that.image.width / 2, -that.image.height / 2);

            that.flippedXY.ctx.translate(that.image.width / 2, that.image.height / 2);
            that.flippedXY.ctx.scale(-1, -1);
            that.flippedXY.ctx.drawImage(that.image, 0, 0, that.image.width, that.image.height, -that.image.width / 2, -that.image.height / 2, that.flippedXY.bitmap.width, that.flippedXY.bitmap.height);
            that.flippedXY.ctx.scale(-1, -1);
            that.flippedXY.ctx.translate(-that.image.width / 2, -that.image.height / 2);

            // mark this image as loaded
            HYPER.Preload.info.loaded++;
            // run user specified onload function.
            that.onload();
        };

    };

    HYPER.Preload.SpriteSheet.prototype = {
        /**
         * Draws to the bitmap, uses same methods that HYPER.Graphics.Draw uses. 
         * @method HYPER.Preload.SpriteSheet.draw
         * @param {HYPER.Graphics.Style} style - the style used to draw.
         */

        draw: function (style) {

            return HYPER.Graphics.Draw(this.ctx, style);

        },

        /**
         * Clears the bitmap.
         * @method HYPER.Preload.SpriteSheet.clear
         */

        clear: function () {

            HYPER.Graphics.Draw(this.ctx)
                .clearRect(
                    0,
                    0,
                    this.bitmap.width,
                    this.bitmap.height);

        },



        /**
         * Used to create and edit animations.
         * @method HYPER.Preload.SpriteSheet.setAnimation
         * @param {object} animeDATA - Object of info to set.
         * @param {string} animeDATA.name - Name of the animation.
         * @param {array} animeDATA.frames - Array of the frame numbers to make up this animation.
         * @param {string} animeDATA.next - Name of the next animation to play.
         * @param {string} animeDATA.fps=30 - Speed the animation will play.
         * @param {string} animeDATA.loop=false - Should the animation loop its self?
         * @param {string} animeDATA.onLoop - What to do when the animation loops?
         * @param {string} animeDATA.onFrame - What to do when the animation changes frames?
         */

        setAnimation: function (animeDATA) {
            for (var i = 0; i < arguments.length; i++) {
                arguments[i].name = arguments[i].name || "animation" + Math.random() + "" + Math.random();
                this.animations[animeDATA.name] = {};
                this.animations[animeDATA.name].name = arguments[i].name;
                this.animations[animeDATA.name].frames = animeDATA.frames || [0];
                this.animations[animeDATA.name].next = animeDATA.next || animeDATA.name;
                this.animations[animeDATA.name].fps = animeDATA.fps || 30;
                this.animations[animeDATA.name].loop = animeDATA.loop || false;
                this.animations[animeDATA.name].onLoop = animeDATA.onLoop || no0p;
                this.animations[animeDATA.name].onFrame = animeDATA.onFrame || no0p;
            }
        },

        /**
         * Used to define custome frames.
         * @method HYPER.Preload.SpriteSheet.setFrames
         * @param {Object[]} a All information used to define custome frames.
         * @param {number} a[].x The X location for the frame.
         * @param {number} a[].y The Y location for the frame.
         * @param {number} a[].width The width of the frame.
         * @param {number} a[].height The height of the frame.
         * @param {number} [a[].regX=0] The X value the frame will be offset by.
         * @param {number} [a[].regY=0] The Y value the frame will be offset by.
         */

        setFrames: function (a) {
            // if a is an array.
            if (Array.isArray(a)) {
                // loop through all a objects
                for (var i = 0; i < a.length; i++) {
                    // set the frameInfo equal to a, so user can define additional information if needed.
                    this.frameINFO[i] = a[i];

                    // This function is executed every time the frame is shown. Makes it possible to play sounds on diffrent frames. 
                    this.frameINFO[i].onFrame = a[i].onFrame || no0p;
                    this.frameINFO[i].x = a[i].x;
                    this.frameINFO[i].y = a[i].y;
                    this.frameINFO[i].width = a[i].width;
                    this.frameINFO[i].height = a[i].height;
                    this.frameINFO[i].regX = a[i].regX || 0;
                    this.frameINFO[i].regY = a[i].regY || 0;
                }
            }
        },
        /**
         * Used to create entire spriteSheet frame selection.
         * @method HYPER.Preload.SpriteSheet.setFramesOBJ
         * @param {object} a - Information used to set the frames.
         * @param {object} a.wide - How many frames wide the spritesheet is.
         * @param {object} a.tall - How many frames tall the spritesheet is.
         * @param {boolean} a.override=true - Override the pre-existing data.
         */

        setFramesOBJ: function (a, override) {
            // If a is defined.
            if (a) {
                override = override || true;
                // The X and Y position of each frame.
                var posX = 0,
                    posY = 0;
                // If you want previous data to be overwritten.
                if (override) {
                    // Loop through all frames.
                    for (var i = 0; i < a.wide * a.tall; i++) {
                        // Calculate the X and Y position of each frame
                        posX = (i % a.wide) * (this.bitmap.width / a.wide);
                        posY = Math.floor(i / a.wide) * (this.bitmap.height / a.tall);
                        // If the current frame info is NOT defined.
                        if (!this.frameINFO[i]) {
                            this.frameINFO[i] = {};
                        }

                        this.frameINFO[i].onFrame = no0p;
                        this.frameINFO[i].x = posX;
                        this.frameINFO[i].y = posY;
                        this.frameINFO[i].width = this.bitmap.width / a.wide;
                        this.frameINFO[i].height = this.bitmap.height / a.tall;
                        this.frameINFO[i].regX = a.regX || this.frameINFO[i].regX || 0;
                        this.frameINFO[i].regY = a.regY || this.frameINFO[i].regY || 0;
                    }
                } else {
                    // Loop through all possible frames.
                    for (var i = 0; i < a.wide * a.tall; i++) {
                        // Calculate the X and Y position of each frame
                        posX = (i % a.wide) * (this.bitmap.width / a.wide);
                        posY = Math.Floor(i / a.wide) * (this.bitmap.height / a.tall);
                        // If the current frame info is NOT defined.
                        if (!this.frameINFO[i]) {
                            this.frameINFO[i] = {};
                        }

                        this.frameINFO[i].x = this.frameINFO[i].x || posX;
                        this.frameINFO[i].y = this.frameINFO[i].y || posY;
                        this.frameINFO[i].width = this.frameINFO[i].width || this.bitmap.width / a.wide;
                        this.frameINFO[i].height = this.frameINFO[i].height || this.bitmap.height / a.tall;
                        this.frameINFO[i].regX = this.frameINFO[i].regX || a.regX || 0;
                        this.frameINFO[i].regY = this.frameINFO[i].regY || a.regY || 0;
                    }
                }




            }
        },

        /**
         * Used to edit individuale frames.
         * @method HYPER.Preload.SpriteSheet.editFrame
         * @param {number} frame - The frame ID that you want edited.
         * @param {object} newFrameINFO - The info you want to change.
         * @param {function} newFrameINFO.onFrame - What to do when the frame is played.
         * @param {function} newFrameINFO.x - X location of frame on spritesheet.
         * @param {function} newFrameINFO.y - Y location of frame on spritesheet.
         * @param {function} newFrameINFO.width - Width of the frame on spritesheet.
         * @param {function} newFrameINFO.height - Height of the frame on spritesheet.
         */

        editFrame: function (frame, newFrameINFO) {
            this.frameINFO[frame].onFrame = newFrameINFO.onFrame || this.frameINFO[frame].onFrame || no0p;
            this.frameINFO[frame].x = newFrameINFO.x || this.frameINFO[frame].x || 0;
            this.frameINFO[frame].y = newFrameINFO.y || this.frameINFO[frame].y || 0;
            this.frameINFO[frame].width = newFrameINFO.width || this.frameINFO[frame].width || 0;
            this.frameINFO[frame].height = newFrameINFO.height || this.frameINFO[frame].height || 0;
            this.frameINFO[frame].regX = newFrameINFO.regX || this.frameINFO[frame].regX || 0;
            this.frameINFO[frame].regY = newFrameINFO.regY || this.frameINFO[frame].regY || 0;
        },
    };
})();