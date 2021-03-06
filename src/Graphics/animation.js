(function () {
    "use strict";
    /**
     * Used to desplay animations with spritesheets.
     * @class HYPER.Graphics.Animation
     * @param {object} e Object of passed info.
     * @param {object} e.spriteSheet Sprite sheet to be animated.
     * @param {number} e.currentFrame=0 The current frame number of the animation.
     * @param {function} e.onLoopEnd Function to call when the animation finishes, called every loop.
     * @param {function} e.onFrame Function called every frame change.
     */
    HYPER.Graphics.Animation = function (e) {

        /**
         * @property {object} spriteSheet - The spritesheet to be used for the animation.
         */

        this.spriteSheet = e.spriteSheet || {};

        /**
         * @property {string} _ID - The specific ID for this object.
         */

        this._ID = "animation " + Math.random() + "" + Math.random();

        /**
         * @property {string} type - The type of object it is.
         */

        this.type = "animation";

        /**
         * @property {number} width - The width of the animation.
         */

        this.width = e.width || this.spriteSheet.width || 0;

        /**
         * @property {number} height - The height of the animation.
         */

        this.height = e.height || this.spriteSheet.height || 0;

        /**
         * @property {number} currentFrame - The current frame of the animation.
         */

        this.currentFrame = e.currentFrame || 0;

        /**
         * @property {boolean} paused - If the animation is paused or not.
         */

        this.paused = true;

        /**
         * @property {object} currentAnimation - The current animation to play.
         */

        this.currentAnimation = false;

        /**
         * @property {function} onLoopEnd - What to do at the end of every loop.
         */

        this.onLoopEnd = e.onLoopEnd || no0p;

        /**
         * @property {function} onLoopEnd - What to do at the end of every frame. First parameter is the frame ID.
         */

        this.onFrame = e.onFrame || no0p;

        /**
         * @property {number} FPS - The FPS of the animation.
         */

        this.FPS = 30;

        /**
         * @private
         * @property {number} _now - Current time.
         */

        this._now;

        /**
         * @private
         * @property {number} _then - Previous time.
         */

        this._then = HYPER.CURRENT_DATE;

        /**
         * @private
         * @property {number} _interval - How much time you want to pass between loops.
         */

        this._interval = 1000 / this.FPS;

        /**
         * @private
         * @property {number} _delta - Diffrence in time between loops.
         */

        this._delta;

        /**
         * @property {function} update - Called every tick.
         */

        this.update = e.update || no0p;

        /**
         * @property {function} update - Called every frame.
         */

        this.render = e.render || no0p;

    };

    HYPER.Graphics.Animation.prototype = {

        /**
         * Function to play animations.
         * @method HYPER.Graphics.Animation.play
         * @param {string} animationName the name of the animation you want to play.
         * @param {number} frameNumber The frame that you want to start playing at.
         */

        play: function (animationName, frameNumber) {
            this.currentAnimation = this.spriteSheet.animations[animationName];
            this.FPS = this.spriteSheet.animations[animationName].fps;
            this._interval = 1000 / this.FPS;
            this.currentFrame = frameNumber || this.currentFrame || 0;
            this.paused = false;
        },

        /**
         * Function to pause animations.
         * @method HYPER.Graphics.Animation.pause
         */

        pause: function () {
            this.paused = true;
        },

        /**
         * Function to start animations. It always re-starts the animation.
         * @param {string} animationName the name of the animation you want to play.
         * @param {number} frameNumber The frame that you want to start playing at.
         * @method HYPER.Graphics.Animation.start
         */

        start: function (animationName, frameNumber) {
            this.currentFrame = frameNumber || 0;
            this.currentAnimation = this.spriteSheet.animations[animationName];
            this.FPS = this.spriteSheet.animations[animationName].fps;
            this._interval = 1000 / this.FPS;
            this.paused = false;
        },

        /**
         * Function to stop animations. This function re-sets the animation frame.
         * @method HYPER.Graphics.Animation.stop
         */

        stop: function () {
            this.paused = true;
            this.currentFrame = 0;
        },

        /**
         * Function called every tick.
         * @method HYPER.Graphics.Animation._update
         */

        _update: function (a) {
            this._now = HYPER.CURRENT_DATE;
            this._delta = this._now - this._then;
            if (this._delta > this._interval) {
                this._then = this._now - (this._delta % this._interval);

                // Game Code

                if (!this.paused && this.currentAnimation) {


                    this.currentFrame += 1;

                    this.onFrame(this.currentFrame);

                    this.currentAnimation.onFrame(this.currentFrame);

                    if (this.currentFrame >= this.currentAnimation.frames.length) {
                        this.currentAnimation.onLoop();
                        this.currentFrame = 0;
                        if (!this.currentAnimation.loop) {
                            this.paused = true;
                        }
                        if (this.currentAnimation.next != this.currentAnimation.name) {
                            this.start(this.currentAnimation.next);

                        }
                    }

                } else {

                }


                // End Game Code

            }
        },

        /**
         * Function called every frame.
         * @method HYPER.Graphics.Animation._render
         */

        _render: function (a, x, y, width, height, angle, rotX, rotY, scaleX, scaleY) {
            if (this.currentAnimation) {
                x = x || 0;
                y = y || 0;
                width = width || 0;
                height = height || 0;
                angle = angle || 0;
                rotX = rotX || 0;
                rotY = rotY || 0;
                scaleX = scaleX || 1;
                scaleY = scaleY || 1;
                var flipped = "";
                if (scaleX < 0) {
                    flipped = "x";
                }
                if (scaleY < 0) {
                    flipped = "y";
                }
                if (scaleX < 0 && scaleY < 0) {
                    flipped = "xy";
                }
                scaleX = Math.abs(scaleX);
                scaleY = Math.abs(scaleY);
                if (flipped === "x") {
                    HYPER.Graphics.Draw(a.ctx).bitmap(this.spriteSheet.flippedX.bitmap,
                        x,
                        y,
                        width,
                        height, -this.spriteSheet.frameINFO[this.currentAnimation.frames[this.currentFrame]].x + this.spriteSheet.flippedX.bitmap.width,
                        this.spriteSheet.frameINFO[this.currentAnimation.frames[this.currentFrame]].y, -this.spriteSheet.frameINFO[this.currentAnimation.frames[this.currentFrame]].width,
                        this.spriteSheet.frameINFO[this.currentAnimation.frames[this.currentFrame]].height,
                        angle,
                        rotX,
                        rotY,
                        scaleX,
                        scaleY);
                } else if (flipped === "xy") {
                    HYPER.Graphics.Draw(a.ctx).bitmap(this.spriteSheet.flippedXY.bitmap,
                        x,
                        y,
                        width,
                        height, -this.spriteSheet.frameINFO[this.currentAnimation.frames[this.currentFrame]].x + this.spriteSheet.flippedX.bitmap.width, -this.spriteSheet.frameINFO[this.currentAnimation.frames[this.currentFrame]].y + this.spriteSheet.flippedX.bitmap.height, -this.spriteSheet.frameINFO[this.currentAnimation.frames[this.currentFrame]].width, -this.spriteSheet.frameINFO[this.currentAnimation.frames[this.currentFrame]].height,
                        angle,
                        rotX,
                        rotY,
                        scaleX,
                        scaleY);
                } else if (flipped === "y") {
                    HYPER.Graphics.Draw(a.ctx).bitmap(this.spriteSheet.flippedY.bitmap,
                        x,
                        y,
                        width,
                        height,
                        this.spriteSheet.frameINFO[this.currentAnimation.frames[this.currentFrame]].x, -this.spriteSheet.frameINFO[this.currentAnimation.frames[this.currentFrame]].y + this.spriteSheet.flippedX.bitmap.height,
                        this.spriteSheet.frameINFO[this.currentAnimation.frames[this.currentFrame]].width, -this.spriteSheet.frameINFO[this.currentAnimation.frames[this.currentFrame]].height,
                        angle,
                        rotX,
                        rotY,
                        scaleX,
                        scaleY);
                } else {
                    HYPER.Graphics.Draw(a.ctx).bitmap(this.spriteSheet.bitmap,
                        x,
                        y,
                        width,
                        height,
                        this.spriteSheet.frameINFO[this.currentAnimation.frames[this.currentFrame]].x,
                        this.spriteSheet.frameINFO[this.currentAnimation.frames[this.currentFrame]].y,
                        this.spriteSheet.frameINFO[this.currentAnimation.frames[this.currentFrame]].width,
                        this.spriteSheet.frameINFO[this.currentAnimation.frames[this.currentFrame]].height,
                        angle,
                        rotX,
                        rotY,
                        scaleX,
                        scaleY);
                };
            }


        },
    };
})();