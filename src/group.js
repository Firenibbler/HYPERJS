(function () {
    "use strict";

    /**
     * Create a group object, useful for making and keeping track of lots of very simelar sprites.
     * @class HYPER.Group
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

    HYPER.Group = function (e) {
        e = e || {};

        /**
         * @property {string} _ID - The specific ID for this object.
         */

        this._ID = "group " + Math.random() + "" + Math.random();


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

        this.texture.frames = this.texture.frames || {};
        this.texture.bitmap = this.texture.bitmap || {};

        /**
         * @property {string} type - Internal type identifier for the object.
         */

        this.type = "group";

        /**
         * @property {number} zIndexMax - The max z index allowed.
         */

        this.zIndexMax = e.zIndexMax || 100;

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

        /**
         * @property {array} group - array of all objects in the group.
         */

        this.group = [];


    };

    HYPER.Group.prototype = {

        /**
         * Create a new sprite in the object.
         * @method HYPER.Group.create
         * @param {object} a Object to pass all sprite info.
         * @param {object} a.texture bitmap or spritesheet to be rendered as the sprite.
         * @param {object} a.style Style info of this sprite.
         * @param {number} a.x=0 X location of the sprite.
         * @param {number} a.y=0 Y location of the sprite.
         * @param {number} a.width=32 Width of the sprite.
         * @param {number} a.height=32 Height of the sprite.
         * @param {number} a.angle=0 angle the sprite is rotated.
         * @param {number} a.rotX=0 X location of the point the sprite is rotated around.
         * @param {number} a.rotY=0 Y location of the point the sprite is rotated around.
         */

        create: function (a) {
            a = a || {};
            var found = false;
            for (var i = 0; i < this.group.length; i++) {
                if (!this.group[i].alive) {
                    found = true;
                    /*
                                        if (this.texture.type === "spritesheet") {
                                            this.group[i].texture = new HYPER.Graphics.Animation({
                                                spriteSheet: this.texture,
                                            });
                                        };
                    */
                    //this.group[i].texture = a.texture || this.texture;
                    this.group[i].style = a.style || this.style;
                    this.group[i].zIndex = a.zIndex || this.zIndex;
                    this.group[i].x = a.x || this.x;
                    this.group[i].y = a.y || this.x;
                    this.group[i].width = a.width || this.width;
                    this.group[i].height = a.height || this.height;
                    this.group[i].angle = a.angle || this.angle;
                    this.group[i].rotX = a.rotX || this.rotX;
                    this.group[i].rotY = a.rotY || this.rotY;
                    this.group[i].visible = true;
                    this.group[i].active = true;
                    this.group[i].alive = true;
                    this.group[i].lifeTime = a.lifeTime || this.lifeTime;
                    this.group[i].health = a.health || this.health;
                    this.group[i].maxHealth = a.health || this.maxHealth;
                    this.group[i].scaleX = a.scaleX || this.scaleX;
                    this.group[i].scaleY = a.scaleY || this.scaleY;
                    this.group[i].flippedX = a.flippedX || this.flippedX;
                    this.group[i].flippedY = a.flippedY || this.flippedY;
                    this.group[i].autoCull = a.autoCull || this.autoCull;
                    this.group[i].render = a.render || this.render;
                    this.group[i].update = a.update || this.update;
                    this.group[i].onDeath = a.onDeath || this.onDeath;
                    this.group[i].onClick = a.onClick || this.onClick;
                    this.group[i].onUp = a.onUp || this.onUp;
                    this.group[i].onDown = a.onDown || this.onDown;
                    this.group[i].onHold = a.onHold || this.onHold;
                    this.group[i].onDblClick = a.onDblClick || this.onDblClick;
                    this.group[i].onHover = a.onHover || this.onHover;
                    this.group[i].revive();
                    return this.group[i];
                    break;
                }
            }
            if (!found) {
                var object = this.group.push(new HYPER.Sprite({
                    texture: a.texture || this.texture,
                    style: a.style || this.style,
                    zIndex: a.zIndex || this.zIndex,
                    x: a.x || this.x,
                    y: a.y || this.y,
                    width: a.width || this.width,
                    height: a.height || this.height,
                    angle: a.angle || this.angle,
                    rotX: a.rotX || this.rotX,
                    rotY: a.rotY || this.rotY,
                    lifeTime: a.lifeTime || this.lifeTime,
                    health: a.health || this.health,
                    maxHealth: a.health || this.maxHealth,
                    scaleX: a.scaleX || this.scaleX,
                    scaleY: a.scaleY || this.scaleY,
                    flippedX: a.flippedX || this.flippedX,
                    flippedY: a.flippedY || this.flippedY,
                    autoCull: a.autoCull || this.autoCull,
                    render: a.render || this.render,
                    update: a.update || this.update,
                    onDeath: a.onDeath || this.onDeath,
                }));

                if (this.physics === "BoxAABB") {

                    HYPER.Physics.BoxJS.enable(this.group[object - 1]);
                    this.world.addBody(this.group[object - 1]);
                }
                return this.group[object - 1];
            }
        },

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._update
         * @param {number} a - Information to be known about parent object.
         */

        _update: function (g) {
            for (var i = 0; i < this.group.length; i++) {
                if (this.group[i].alive) {
                    this.group[i]._update(g);
                }
            }
        },

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._render
         * @param {number} a - Information to be known about parent object.
         */

        _render: function (g) {
            for (var z = 0; z <= this.zIndexMax; z++) {
                for (var i = 0; i < this.group.length; i++) {
                    if (this.group[i].alive) {
                        if (Math.round(this.group[i].zIndex) === z) {
                            this.group[i]._render(g);
                        }
                    }
                }
            }
        },

    };

})();