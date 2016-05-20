(function () {
    "use strict";
    // SPRITE

    /**
     * Description Used to create the basic game object, useful for buttons, objects, and charicters.
     */
    HYPER.Sprite = function (e) {
        
        this.children = [];

        this.addChild = function (child) {
            this.children.push(child);
        };
        this.removeChild = function (child) {
            var i = this.children.indexOf(child);
            if (i !== -1) {
                this.children.splice(i, 1);
            }
            return this;
        };
        this.removeAllChildren = function (child) {
            this.children.splice(0, this.children.length);
            return this;
        };

        this._ShapeType = "rect";
        this._ID = Math.random() * Math.random();
        this.x = e.x || 0; //coalesce to 0 for falsy values 0, NaN, null, undefined
        this.y = e.y || 0;
        this.width = (typeof e.width === 'undefined') ? 32 : e.width;
        this.height = (typeof e.height === 'undefined') ? 32 : e.height;
        this.zIndex = e.zIndex || 0;
        this.degrees = e.degrees || 0;
        this.rotation = e.rotation || {};
        e.rotation = e.rotation || {};
        this.rotation.y = (typeof e.rotation.y === 'undefined') ? this.height / 2 : e.rotation.y;
        this.rotation.x = (typeof e.rotation.x === 'undefined') ? this.width / 2 : e.rotation.x;
        this.visable = (typeof e.visable === 'undefined') ? true : e.visable;
        this.style = new HYPER.Graphics.Style(e.style);
        e.size = e.size || {};
        this.size = e.size;
        this.size.autoAdjust = (typeof e.size.autoAdjust === 'undefined') ? true : e.size.autoAdjust;
        this.size.x = e.size.x || 0;
        this.size.y = e.size.y || 0;
        this.size.width = (typeof e.size.width === 'undefined') ? this.width : e.size.width;
        this.size.height = (typeof e.size.height === 'undefined') ? this.height : e.size.height;

        this.onclick = function () {};
        this.onhold = function () {};
        this.onup = function () {};
        this.ondown = function () {};
        this.onhover = function () {};
        this.ondblclick = function () {};

        this.events = {};
        this.events.onclick = [];
        this.events.onhold = [];
        this.events.onup = [];
        this.events.ondown = [];
        this.events.onhover = [];
        this.events.ondblclick = [];

        this.addEventListener = function (event, callback) {
            if (typeof this.events[event] === "undefined") {
                console.error(event + " is not a real event");
            } else {
                callback._ID = Math.random() * Math.random();
                this.events[event].push(callback);
                return callback._ID;
            };
        };
        this.removeEventListener = function (event, callback) {
            if (typeof this.events[event] === "undefined") {
                console.error(event + " is not a real event");
            } else {
                for (var i = 0; i < this.events[event].length; i++) {
                    if (this.events[event]._ID == callback || this.events[event]._ID == callback._ID) {
                        this.events[event].splice(i, 1);
                    };
                };
            };
        };
        this.removeAllEventListeners = function (event) {
            if (typeof this.events[event] === "undefined") {
                console.error(event + " is not a real event");
            } else {
                this.events[event] = [];
            };
        }
        this.physics = {};
        this.physics.update = function () {};

        this.render = e.render || function () {};
        this._render = function (o) {
            if (this.visable == true) {

                for (var i = 0; i < this.children.length; i++) {



                    this.children[i]._render({
                        camera: {
                            x: this.x + o.camera.x,
                            y: this.y + o.camera.y,
                            width: this.width,
                            height: this.height,
                        },
                        ctx: o.ctx,
                        offsetLeft: o.offsetLeft,
                        offsetTop: o.offsetTop,
                        view: o.view,
                        alpha: this.alpha,
                    });


                };
            }
            this.render(o);
        };
        this.update = e.update || function () {};
        this._update = function (o) {

            for (var i = 0; i < this.children.length; i++) {
                this.children[i]._update({
                    camera: {
                        x: this.x + o.camera.x,
                        y: this.y + o.camera.y,
                        width: this.width,
                        height: this.height,
                    },
                    offsetLeft: o.offsetLeft,
                    offsetTop: o.offsetTop,
                    view: o.view,
                });
            };

            this.update(o);
            this.physics.update();

            if (this.size.autoAdjust == true) {
                this.size.width = this.width;
                this.size.height = this.height;
            }

            if (this.degrees >= 360) {
                this.degrees -= 360;
            }

            for (var i = 0; i < 10; i++) {
                var pointer = HYPER.Input.Pointer.getPointer(i);
                this._pointerX = ((pointer.x - o.offsetLeft) * (o.camera.width / o.view.width)) - o.camera.x;
                this._pointerY = ((pointer.y - o.offsetTop) * (o.camera.height / o.view.height)) - o.camera.y;
                if (this._pointerX >= this.x + this.size.x &&
                    this._pointerX <= this.x + this.size.width &&
                    this._pointerY >= this.y + this.size.y &&
                    this._pointerY <= this.y + this.size.height) {
                    this._InputInfo = {
                        x: this._pointerX,
                        y: this._pointerY
                    }
                    for (var b = 0; b < this.events.onhover.length; b++) {
                        this.events.onhover[b](this._InputInfo);
                        this.onhover(this._InputInfo);
                    }
                    if (pointer.down) {
                        for (var b = 0; b < this.events.ondown.length; b++) {
                            this.events.ondown[b](this._InputInfo);
                            this.ondown(this._InputInfo);
                        }
                    }
                    if (pointer.up) {
                        for (var b = 0; b < this.events.onup.length; b++) {
                            this.events.onup[b](this._InputInfo);
                            this.onup(this._InputInfo);
                        }
                        for (var b = 0; b < this.events.onclick.length; b++) {
                            this.events.onclick[b](this._InputInfo);
                            this.onclick(this._InputInfo);
                        }
                    }
                    if (pointer.hold) {
                        for (var b = 0; b < this.events.onhold.length; b++) {
                            this.events.onhold[b](this._InputInfo);
                            this.onhold(this._InputInfo);
                        }
                    }
                    if (pointer.dblclick) {
                        for (var b = 0; b < this.events.ondblclick.length; b++) {
                            this.events.ondblclick[b](this._InputInfo);
                            this.ondblclick(this._InputInfo);
                        }
                    }
                };
            }
        }
    };
})();