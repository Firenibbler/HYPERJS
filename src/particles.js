(function () {
    "use strict";

    /**
     * Create particles and emitters for your games.
     * @namespace HYPER.Particle
     */

    HYPER.Particle = {};


    /**
     * Create a new particle. 
     * @class HYPER.Particle.Particle
     * @param {object} e Object to pass all particle info.
     * @param {object} e.texture bitmap to be rendered as the particles.
     * @param {object} e.style Style info of this particle.
     * @param {number} e.x=0 X location of the particle.
     * @param {number} e.y=0 Y location of the particle.
     * @param {number} e.lifeTime=100 life time of the particle.
     * @param {number} e.startSize=10 The size the particle will start out as.
     * @param {number} e.endSize=10 The size the particle will end up as.
     * @param {color} e.startColor The color the particle will start out as.
     * @param {color} e.endColor The color the particle will end up as.
     * @param {number} e.startAlpha The alpha the particle will start out as.
     * @param {number} e.endAlpha The alpha the particle will end up as.
     */

    HYPER.Particle.Particle = function (e) {

        if (typeof e.startColor === "string") {
            var color = e.startColor;
            e.startColor = [
                    HYPER.Graphics.hexToRed(color),
                    HYPER.Graphics.hexToGreen(color),
                    HYPER.Graphics.hexToBlue(color),
                    e.startAlpha || 1
                ];

        }
        if (typeof e.endColor === "string") {
            var color = e.endColor;
            e.endColor = [
                    HYPER.Graphics.hexToRed(color),
                    HYPER.Graphics.hexToGreen(color),
                    HYPER.Graphics.hexToBlue(color),
                    e.endAlpha || 1
                ];

        }

        this.texture = e.texture || {};


        if (this.texture.type === "spritesheet") {
            this.texture = new HYPER.Graphics.Animation({
                spriteSheet: this.texture,
            });
        }

        this.texture.frames = this.texture.frames || {};
        this.texture.bitmap = this.texture.bitmap || {};



        /**
         * @property {string} _ID - The specific ID for this object.
         */

        this._ID = "particle " + Math.random() + "" + Math.random();

        /**
         * @property {object} style - Graphics style for the particles.
         */

        this.style = e.style || HYPER.Graphics.DEFAULT_STYLE;

        /**
         * @property {number} x - The X location of the object.
         */

        this.x = e.x || 0;

        /**
         * @property {number} y - The Y location of the object.
         */

        this.y = e.y || 0;

        /**
         * @property {number} startSize - The size the particles start out as.
         */

        this.startSize = e.startSize || e.size || 10;

        /**
         * @property {number} endSize - The size the particles end up as.
         */

        this.endSize = e.endSize || e.size || 0;

        /**
         * @property {number} startAlpha - The alpha the particles start out as.
         */

        this.startAlpha = e.startAlpha || 0;

        /**
         * @property {number} endAlpha - The alpha the particles end up as.
         */

        this.endAlpha = e.endAlpha || 0;

        /**
         * @property {object} startColor - The color the particles start out as.
         */

        this.startColor = e.startColor || [
                255, 69, 0, this.startAlpha
            ];

        /**
         * @property {object} endColor - The color the particles end up as.
         */

        this.endColor = e.endColor || [
                70, 70, 70, this.endAlpha
            ];

        /**
         * @property {number} angle - The angle the particle will be rendered as.
         */

        this.angle = 0;

        /**
         * @property {object} vel - The velocity of the object.
         */

        this.vel = {
            x: 0,
            y: 0,
            angle: 0,
        };

        /**
         * @property {boolean} alive - if the object is alive.
         */

        this.alive = e.alive || false;

        /**
         * @property {number} lifeTime - How long the object should be alive.
         */

        this.lifeTime = e.lifeTime || 100;

        /**
         * @property {number} lifeTimeTotal - Total time of how long the object should be alive.
         */

        this.lifeTimeTotal = e.lifeTimeTotal || e.lifeTime || 100;

        this._color = [];

    };

    HYPER.Particle.Particle.prototype = {

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._update
         * @param {number} a - Information to be known about parent object.
         */

        _update: function (a) {
            if (this.alive) {





                this.percentGone = this.lifeTime / this.lifeTimeTotal;
                this.size = ((this.startSize - this.endSize) * this.percentGone) + this.endSize;
                this._color = [
                        Math.floor(((this.startColor[0] - this.endColor[0]) * this.percentGone) + this.endColor[0]),
                        Math.floor(((this.startColor[1] - this.endColor[1]) * this.percentGone) + this.endColor[1]),
                        Math.floor(((this.startColor[2] - this.endColor[2]) * this.percentGone) + this.endColor[2]),
                    ((this.startColor[3] - this.endColor[3]) * this.percentGone) + this.endColor[3],
                ];

                this.RBGcolor = "rgb(" + this._color[0] + ", " + this._color[1] + ", " + this._color[2] + ")"
                this._alpha = this._color[3] * this.style.alpha;

                this.x += this.vel.x;
                this.y += this.vel.y;
                this.angle += this.vel.angle;
                if (this.lifeTime > 0) {
                    this.lifeTime--;
                }

                if (this.lifeTime <= 0) {
                    this.alive = false;
                }
            }
            if (this.lifeTime > 0) {
                this.lifeTime--;
            }

            if (this.lifeTime <= 0) {
                this.alive = false;
            }


        },

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._render
         * @param {number} a - Information to be known about parent object.
         */

        _render: function (a, image, style) {
            if (this.alive) {

                this.style = style || this.style;
                if (this.x - this.size > a.camera.x + a.camera.width ||
                    this.y - this.size > a.camera.y + a.camera.height ||
                    this.x + this.size < a.camera.x ||
                    this.y + this.size < a.camera.y) {

                } else {


                    if (this.texture.type === "bitmap") {

                        HYPER.Graphics.Draw(a.ctx, this.style).setAlpha(this._alpha).bitmap(
                            this.texture,
                            this.x - (this.texture.width / 2) - a.camera.x,
                            this.y - (this.texture.height / 2) - a.camera.y,
                            this.size,
                            this.size,
                            0,
                            0,
                            this.texture.width,
                            this.texture.height,
                            this.angle,
                            this.texture.width / 2,
                            this.texture.height / 2);
                    } else {
                        HYPER.Graphics.Draw(a.ctx, this.style).setFillColor(this.RBGcolor).setStrokeColor(this.RBGcolor).setAlpha(this._alpha).circle(this.x - a.camera.x, this.y - a.camera.y, this.size);
                    }
                }
            }
        },
    };


    /**
     * Create particle emitters with the 'new' keyword.
     * @class HYPER.Particle.Emitter
     * @param {object} e Object to pass all sprite info.
     * @param {object} e.texture bitmap to be rendered as the particles.
     * @param {object} e.style Style info of this particles.
     * @param {number} e.x=0 X location of the emitter.
     * @param {number} e.y=0 Y location of the emitter.
     * @param {number} e.width=32 Width of the emitter.
     * @param {number} e.height=32 Height of the emitter.
     * @param {number} e.lifeTime=100 life time of particles emitted.
     * @param {number} e.startSize=10 The size the particles start out as.
     * @param {number} e.endSize=10 The size the particles end up as.
     * @param {color} e.startColor The color the particles start out as.
     * @param {color} e.endColor The color the particles end up as.
     * @param {number} e.startAlpha The alpha the particles start out as.
     * @param {number} e.endAlpha The alpha the particles end up as.
     */

    HYPER.Particle.Emitter = function (e) {
        e = e || {};

        /**
         * @property {string} _ID - The specific ID for this object.
         */

        this._ID = "emitter " + Math.random() + "" + Math.random();

        /**
         * @property {array} particles - The array that stores all particles in this object.
         */

        this.particles = [];

        /**
         * @property {object} lifeTimeTotal - Image data for the particles.
         */

        this.texture = e.texture || {};

        /**
         * @property {number} x - The X location of the object.
         */

        this.x = e.x || 0;

        /**
         * @property {number} y - The Y location of the object.
         */

        this.y = e.y || 0;

        /**
         * @property {number} width - The width of the object.
         */

        this.width = e.width || this.texture.width || 0;

        /**
         * @property {number} height - The height of the object.
         */

        this.height = e.height || this.texture.height || 0;
        
        /**
         * @property {number} zIndex - The z index of the emmitter
         */

        this.zIndex = e.zIndex || 0;

        /**
         * @property {number} lifeTime - How long the object should be alive.
         */

        this.lifeTime = e.lifeTime || 100;

        /**
         * @property {number} lifeTimeTotal - Total time of how long the object should be alive.
         */

        this.lifeTimeTotal = e.lifeTimeTotal || e.lifeTime || 100;

        /**
         * @property {object} style - Graphics style for the particles.
         */

        this.style = e.style || HYPER.Graphics.DEFAULT_STYLE;

        /**
         * @property {boolean} fadeOut - If the particles should fade out.
         */

        this.fadeOut = e.fadeout || false;

        /**
         * @property {number} maxParticles - Maxium number of particles.
         */

        this.maxParticles = e.maxParticles || 1000;

        /**
         * @property {number} startSize - The size the particles start out as.
         */

        this.startSize = e.startSize || e.size || 10;

        /**
         * @property {number} endSize - The size the particles end up as.
         */

        this.endSize = e.endSize || e.size || 0;

        /**
         * @property {number} startAlpha - The alpha the particles start out as.
         */

        this.startAlpha = e.startAlpha || e.alpha || this.style.alpha || 0;

        /**
         * @property {number} endAlpha - The alpha the particles end up as.
         */

        this.endAlpha = e.endAlpha || e.alpha || this.style.alpha || 0;

        /**
         * @property {function} render - User defined rendering, good for little extra things you want rendered.
         */

        this.render = e.render || no0p;

        /**
         * @property {function} update - User defined updating, good for little extra things you want updated.
         */

        this.update = e.update || no0p;

        /**
         * @property {boolean} locked - the object that this object is locked to.
         */

        this.locked = false;

        /**
         * @property {object} texture - The image to show as the particle.
         */

        this.texture = e.texture || {};

        /**
         * @property {object} lockedOffset - the X and Y offset that the object will be locked to.
         */

        this.lockedOffset = {
            x: 0,
            y: 0
        };


        if (typeof e.startColor === "string") {
            var color = e.startColor;
            e.startColor = [
                    HYPER.Graphics.hexToRed(color),
                    HYPER.Graphics.hexToGreen(color),
                    HYPER.Graphics.hexToBlue(color),
                    this.startAlpha
                ];

        }
        if (typeof e.endColor === "string") {
            var color = e.endColor;
            e.endColor = [
                    HYPER.Graphics.hexToRed(color),
                    HYPER.Graphics.hexToGreen(color),
                    HYPER.Graphics.hexToBlue(color),
                    this.endAlpha
                ];

        }

        /**
         * @property {object} startColor - The color the particles start out as.
         */

        this.startColor = e.startColor || [
                255, 69, 0, 1
            ];

        /**
         * @property {object} endColor - The color the particles end up as.
         */

        this.endColor = e.endColor || [
                70, 70, 70, 0
            ];

        /**
         * @property {object} gravity - The gravity to be applied to the particles.
         */

        this.gravity = e.gravity || {
            x: 0,
            y: 0
        };

        this.particleRender = e.particleRender || no0p;
        this.particleUpdate = e.particleUpdate || no0p;



        for (var i = 0; i < this.maxParticles; i++) {
            this.particles[i] = new HYPER.Particle.Particle({
                x: this.x,
                y: this.y,
                startSize: this.startSize,
                endSize: this.endSize,
                startColor: this.startColor,
                endColor: this.endColor,
                startAlpha: this.startAlpha,
                endAlpha: this.endAlpha,
                style: this.style,
                lifeTime: this.lifeTime,
                lifeTimeTotal: this.lifeTimeTotal,
                texture: this.texture,
                render: this.particleRender,
                update: this.particleUpdate,
            });
        }



    };

    HYPER.Particle.Emitter.prototype = {
        /**
         * Spawn particles from the emmiter.
         * @method HYPER.Particle.Emitter.emit
         * @param {number} startAngle - The first angle you want particles emmited at. Particles may be emmited anywhere between the start angle and the angle.
         * @param {number} endAngle - The last angle you want particles emmited at. Particles may be emmited anywhere between the start angle and the angle.
         * @param {number} speed - The speed you want particles emmited at.
         * @param {number} number - The number of particles you want emmited.
         */
        emit: function (startAngle, endAngle, speed, number) {
            number = number || 1;
            for (var i = 0; i < this.particles.length; i++) {
                if (!this.particles[i].alive) {

                    var random = HYPER.Math.degreesToRadians(HYPER.Math.random(startAngle, endAngle, true));
                    this.particles[i].alive = true;

                    this.particles[i].x = HYPER.Math.random(this.x, this.x + this.width);
                    this.particles[i].y = HYPER.Math.random(this.y, this.y + this.height);
                    this.particles[i].vel.x = Math.cos(random) * speed;
                    this.particles[i].vel.y = Math.sin(random) * speed;
                    this.particles[i].startSize = this.startSize;
                    this.particles[i].endSize = this.endSize;
                    this.particles[i].startColor = this.startColor;
                    this.particles[i].endColor = this.endColor;
                    this.particles[i].startAlpha = this.startAlpha;
                    this.particles[i].endAlpha = this.endAlpha;
                    this.particles[i].style = this.style;
                    this.particles[i].lifeTime = this.lifeTime;
                    this.particles[i].lifeTimeTotal = this.lifeTimeTotal;

                    number--;
                    if (number <= 0) {
                        break;
                    }
                }
            }
        },

        /**
         * Sets the position of the sprite.
         * @method HYPER.Sprite.setPos
         * @param {number} x - The new X position of the sprite.
         * @param {number} y - The new Y position of the sprite.
         */

        setPos: function (x, y) {
            this.x = x;
            this.y = y;
            if (this.body.type === "boxJSAABB") {
                this.body.pos.x = x;
                this.body.pos.y = y;
            }
        },

        /**
         * Locks the object to any other object that has a X and Y property.
         * @method HYPER.Sprite.lockTo
         * @param {object} to - the object this object is locked to.
         * @param {number} x - The X offset that the object will be locked at.
         * @param {number} y - The Y offset that the object will be locked at.
         */

        lockTo: function (to, x, y) {
            if (to) {
                this.locked = to;
                this.lockedOffset.x = x || 0;
                this.lockedOffset.y = y || 0;

            }
        },

        /**
         * Unlocks the object.
         * @method HYPER.Sprite.unlock
         */

        unlock: function () {
            this.locked = false;
            this.lockedOffset.x = 0;
            this.lockedOffset.y = 0;
        },

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._update
         * @param {number} a - Information to be known about parent object.
         */

        _update: function (a) {
            for (var i = 0; i < this.particles.length; i++) {
                if (this.particles[i].alive) {
                    this.particles[i].vel.x += this.gravity.x;
                    this.particles[i].vel.y += this.gravity.y;
                    this.particles[i]._update(a);
                }
            }
            if (this.locked) {
                this.setPos(this.locked.x + this.lockedOffset.x, this.locked.y + this.lockedOffset.y);
                if (this.body) {
                    if (this.body.type === "boxJSAABB") {
                        this.body.fixed = true;
                    }
                }
            }
        },

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._render
         * @param {number} a - Information to be known about parent object.
         */

        _render: function (a) {
            for (var i = 0; i < this.particles.length; i++) {
                if (this.particles[i].alive) {
                    this.particles[i]._render(a, this.texture, this.style);
                }
            }
            a.ctx.globalAlpha = 1;
            HYPER.Graphics.Draw(a.ctx).setAlpha(1);
        },

    };


})();