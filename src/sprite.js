(function () {
    "use strict";
    /**
     * Create sprites with the 'new' keyword.
     * @class HYPER.Sprite
     * @param {object} e Object to pass all sprite info.
     * @param {object} e.texture bitmap or spritesheet to be rendered as the sprite.
     * @param {object} e.style Style info of this sprite.
     * @param {number} e.x=0 X location of the sprite.
     * @param {number} e.y=0 Y location of the sprite.
     * @param {number} e.width=32 Width of the sprite.
     * @param {number} e.height=32 Height of the sprite.
     * @param {number} e.angle=0 angle the sprite is rotated.
     * @param {number} e.rotX=0 X location of the point the sprite is rotated around.
     * @param {number} e.rotY=0 Y location of the point the sprite is rotated around.
     */
    HYPER.Sprite = function (e) {
        e = e || {};

        /**
         * @property {string} _ID - The specific ID for this object.
         */

        this._ID = "sprite " + Math.random() + "" + Math.random();

        /**
         * @property {object} body - The object that will store all physics info if physics is enabled.
         */

        this.body = {};
        
        /**
         * @property {string} shape - The shape of the sprite.
         */
        
        this.shape = "rect";


        /**
         * @property {object} texture - The texture of the object to be rendered.
         */

        this.texture = e.texture || {
            _render: no0p,
            _update: no0p,
            frames: {},
            bitmap: {},
            type: "",
        };

        if (this.texture.type === "animation") {

        }

        

        if (this.texture.type === "spritesheet") {
            this.texture = new HYPER.Graphics.Animation({
                spriteSheet: this.texture,
            });
        }

        this.texture.frames = this.texture.frames || {};
        this.texture.bitmap = this.texture.bitmap || {};
        
        /**
         * @property {boolean} locked - the object that this object is locked to.
         */
        
        this.locked = false;
        
        /**
         * @property {object} lockedOffset - the X and Y offset that the object will be locked to.
         */

        this.lockedOffset = {
            x: 0,
            y: 0
        };

        /**
         * @property {string} type - Internal type identifier for the object.
         */

        this.type = "sprite";

        /**
         * @property {object} style - the style this object will be rendered with.
         */

        this.style = e.style || HYPER.Graphics.DEFAULT_STYLE;


        /**
         * @property {number} zIndex - The z-index this will be rendered as.
         */

        this.zIndex = e.zIndex || 0;

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

        this.width = e.width || this.texture.width || 32;

        /**
         * @property {number} height - The height of the object.
         */

        this.height = e.height || this.texture.height || 32;

        /**
         * @property {number} angle - The angle of the object.
         */

        this.angle = e.angle || 0;

        /**
         * @property {number} rotX - The X rotation point of the object.
         */

        this.rotX = e.rotX || this.width / 2;

        /**
         * @property {number} rotY - The Y rotation point of the object.
         */

        this.rotY = e.rotY || this.height / 2;


        /**
         * @property {boolean} visable - If the object should be rendered or not.
         */

        this.visible = true;

        /**
         * @property {boolean} active - If the object should be updated or not.
         */

        this.active = true;

        /**
         * @property {boolean} active - If the object should be updated and rendered or not.
         */

        this.alive = true;

        /**
         * @property {number} lifeTime - How long the object should be alive.
         */

        this.lifeTime = e.lifeTime || 0;

        /**
         * @property {number} health - The health of the object.
         */

        this.health = e.health || 1;

        /**
         * @property {number} heamaxHealthlth - The maxium health of the object.
         */

        this.maxHealth = e.health || 1;

        /**
         * @property {number} scaleX - The scale X of the object.
         */

        this.scaleX = e.scaleX || 1;

        /**
         * @property {number} scaleY - The scale Y of the object.
         */

        this.scaleY = e.scaleY || 1;

        /**
         * @property {number} scaleX - Should the object be drawn backwards?
         */

        this.flippedX = e.flippedX || false;

        /**
         * @property {number} scaleY - Should the object be drawn up-side-down?
         */

        this.flippedY = e.flippedY || false;

        /**
         * @property {boolean} autoCull - Should the object be drawn if not visable on the screen?
         */

        this.autoCull = e.autoCull || false;

        /**
         * @property {function} render - User defined rendering, good for little extra things you want rendered.
         */

        this.render = e.render || no0p;

        /**
         * @property {function} update - User defined updating, good for little extra things you want updated.
         */

        this.update = e.update || no0p;

        /**
         * @property {function} onDeath - User defined updating, called on objects death.
         */

        this.onDeath = e.onDeath || no0p;

        /**
         * @property {function} onClick - What should happen if the object is clicked?
         */

        this.onClick = e.onClick || no0p;

        /**
         * @property {function} onUp - What should happen if the mouse is lifted on the object?
         */

        this.onUp = e.onUp || no0p;

        /**
         * @property {function} onDown - What should happen if the mouse is dropped on the object?
         */

        this.onDown = e.onDown || no0p;

        /**
         * @property {function} onHold - What should happen if the object is held down by the mouse?
         */

        this.onHold = e.onHold || no0p;

        /**
         * @property {function} onDblClick - What should happen if the object is double clicked?
         */

        this.onDblClick = e.onDblClick || no0p;

        /**
         * @property {function} onHover - What should happen if the object is hovered over?
         */

        this.onHover = e.onHover || no0p;

    };

    HYPER.Sprite.prototype = {

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

                if (this.body) {
                    if (this.body.type === "boxJSAABB") {
                        this.body.fixed = true;
                    }
                }

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
            if (this.body) {
                if (this.body.type === "boxJSAABB") {
                    this.body.fixed = false;
                }
            }
        },

        /**
         * Subtracts health from the health property.
         * @method HYPER.Sprite.damage
         * @param {number} value - The amount the object will be damaged.
         */

        damage: function (value) {
            this.health -= value;
        },

        /**
         * Adds health to the health property.
         * @method HYPER.Sprite.heal
         * @param {number} value - The amount the object will be healed.
         */

        heal: function (value) {
            this.health += value;
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
         * Kills the sprite.
         * @method HYPER.Sprite.kill
         */

        kill: function () {
            this.visible = false;
            this.active = false;
            this.alive = false;
            if (this.body.type === "boxJSAABB") {
                this.body.active = false;
            }
        },

        /**
         * Revives the sprite.
         * @method HYPER.Sprite.revive
         * @param {number} health - The health the object will have.
         */

        revive: function (health) {
            this.health = health || this.maxHealth || 1;
            this.visible = true;
            this.active = true;
            this.alive = true;
            if (this.body.type === "boxJSAABB") {
                this.body.active = true;
            }
        },

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._onClick
         * @param {number} data - pointer data of the click.
         */

        _onClick: function (data) {
            if (this.x < data.x && this.y < data.y && this.x + this.width > data.x && this.y + this.height > data.y) {
                this.onClick(data);
            }
        },

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._onUp
         * @param {number} data - pointer data of the click.
         */

        _onUp: function (data) {
            if (this.x < data.x && this.y < data.y && this.x + this.width > data.x && this.y + this.height > data.y) {
                this.onUp(data);
            }
        },

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._onDown
         * @param {number} data - pointer data of the click.
         */

        _onDown: function (data) {
            if (this.x < data.x && this.y < data.y && this.x + this.width > data.x && this.y + this.height > data.y) {
                this.onDown(data);
            }
        },

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._onHold
         * @param {number} data - pointer data of the click.
         */

        _onHold: function (data) {
            if (this.x < data.x && this.y < data.y && this.x + this.width > data.x && this.y + this.height > data.y) {
                this.onHold(data);
            }
        },

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._onDblClick
         * @param {number} data - pointer data of the click.
         */

        _onDblClick: function (data) {
            if (this.x < data.x && this.y < data.y && this.x + this.width > data.x && this.y + this.height > data.y) {
                this.onDblClick(data);
            }
        },

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._render
         * @param {number} a - Information to be known about parent object.
         */

        _render: function (a) {
            var shown = true;
            if (this.autoCull === true) {
                if (HYPER.Physics.checkAABBCollision(this, a.camera)) {
                    shown = true;
                } else {
                    shown = false;
                }
            }
            if (this.visible && this.alive && shown) {
                var Xflip = 1,
                    Yflip = 1;
                if (this.flippedX) {
                    Xflip = -1;
                }
                if (this.flippedY) {
                    Yflip = -1;
                }
                if (this.texture.type === "animation") {

                    this.texture._render(a, this.x - a.camera.x, this.y - a.camera.y, this.width, this.height, this.angle, this.rotX, this.rotY, this.scaleX * Xflip, this.scaleY * Yflip);

                } else if (this.texture.type === "bitmap") {
                    if (this.flippedX && !this.flippedY) {
                        HYPER.Graphics.Draw(a.ctx).bitmap(this.texture.flippedX.bitmap, this.x - a.camera.x, this.y - a.camera.y, this.width, this.height, 0, 0, this.texture.width, this.texture.height, this.angle, this.rotX, this.rotY, this.scaleX, this.scaleY);
                    } else if (this.flippedX && this.flippedY) {
                        HYPER.Graphics.Draw(a.ctx).bitmap(this.texture.flippedY.bitmap, this.x - a.camera.x, this.y - a.camera.y, this.width, this.height, 0, 0, this.texture.width, this.texture.height, this.angle, this.rotX, this.rotY, this.scaleX, this.scaleY);
                    } else if (!this.flippedX && this.flippedY) {
                        HYPER.Graphics.Draw(a.ctx).bitmap(this.texture.flippedXY.bitmap, this.x - a.camera.x, this.y - a.camera.y, this.width, this.height, 0, 0, this.texture.width, this.texture.height, this.angle, this.rotX, this.rotY, this.scaleX, this.scaleY);
                    } else {
                        HYPER.Graphics.Draw(a.ctx).bitmap(this.texture.bitmap, this.x - a.camera.x, this.y - a.camera.y, this.width, this.height, 0, 0, this.texture.width, this.texture.height, this.angle, this.rotX, this.rotY, this.scaleX, this.scaleY);
                    }

                }
                this.render(a, this);
            }

        },

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._update
         * @param {number} a - Information to be known about parent object.
         */

        _update: function (a) {
            if (this.active && this.alive) {

                for (var i = 0; i < a.pointerDATA.length; i++) {
                    if (this.x < a.pointerDATA[i].x && this.y < a.pointerDATA[i].y && this.x + this.width > a.pointerDATA[i].x && this.y + this.height > a.pointerDATA[i].y) {
                        this.onHover(a.pointerDATA[i]);
                    }
                }

                if (this.body.type === "boxJSAABB") {
                    this.x = this.body.pos.x;
                    this.y = this.body.pos.y;
                    this.width = this.body.size.width;
                    this.height = this.body.size.height;
                    this.angle = this.body.angularPos;
                    this.rotX = this.body.center.x;
                    this.rotY = this.body.center.y;
                }
                if (this.locked) {
                    //this.x = this.locked.x + this.lockedOffset.x;
                    //this.y = this.locked.y + this.lockedOffset.y;
                    this.setPos(this.locked.x + this.lockedOffset.x, this.locked.y + this.lockedOffset.y);
                    if (this.body) {
                        if (this.body.type === "boxJSAABB") {
                            this.body.fixed = true;
                        }
                    }
                }
                if (this.texture._update) {
                    this.texture._update(a, this.x, this.y, this.width, this.height, this.angle, this.rotX, this.rotY, this.scaleX, this.scaleY);

                }
                if (this.health <= 0) {
                    this.kill();
                }
                if (this.health > this.maxHealth) {
                    this.health = this.maxHealth;
                }



                this.update(a, this);




            }
            if (this.lifeTime > 0) {
                this.lifeTime--;
                if (this.lifeTime <= 0) {
                    this.kill();
                    console.log("dead")
                }
            }



        },
    };

})();