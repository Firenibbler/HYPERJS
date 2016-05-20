(function () {
    "use strict";

    HYPER.Graphics.Circle = function (e) {
        this._ShapeType = "circle";
        this._ID = Math.random() * Math.random();
        this.x = (typeof e.x === 'undefined') ? 0 : e.x;
        this.y = (typeof e.y === 'undefined') ? 0 : e.y;
        this.radius = (typeof e.radius === 'undefined') ? 32 : e.radius;
        this.zIndex = (typeof e.zIndex === 'undefined') ? 0 : e.zIndex;
        this.degrees = (typeof e.degrees === 'undefined') ? 0 : e.degrees;
        this.startAngle = (typeof e.startAngle === 'undefined') ? 0 : e.startAngle;
        this.endAngle = (typeof e.endAngle === 'undefined') ? 360 : e.endAngle;
        this.rotation = e.rotation || {};
        e.rotation = e.rotation || {};
        this.rotation.y = (typeof e.rotation.y === 'undefined') ? 0 : e.rotation.y;
        this.rotation.x = (typeof e.rotation.x === 'undefined') ? 0 : e.rotation.x;
        this.visable = (typeof e.visable === 'undefined') ? true : e.visable;
        this.style = new HYPER.Graphics.Style(e.style);
        e.size = e.size || {};
        this.size = e.size;
        this.size.autoAdjust = (typeof e.size.autoAdjust === 'undefined') ? true : e.size.autoAdjust;
        this.size.x = (typeof e.size.x === 'undefined') ? 0 : e.size.x;
        this.size.y = (typeof e.size.y === 'undefined') ? 0 : e.size.y;
        this.size.radius = (typeof e.size.radius === 'undefined') ? this.radius : e.size.radius;

        this.onclick=function(){};
        this.onhold=function(){};
        this.onup=function(){};
        this.ondown=function(){};
        this.onhover=function(){};
        this.ondblclick=function(){};
        
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
                for (i = 0; i < this.events[event].length; i++) {
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
                this.x = Math.floor(this.x);
                this.y = Math.floor(this.y);
                this.radius = Math.floor(this.radius);
                this.degrees = Math.floor(this.degrees);

                HYPER.Graphics.setStyle(o.ctx, this.style);

                o.ctx.beginPath();
                if (this.degrees != 0) {

                    o.ctx.translate((this.x - o.camera.x + this.rotation.x), (this.y - o.camera.y + this.rotation.y));
                    o.ctx.rotate((this.degrees * Math.PI) / 180);
                    o.ctx.arc(-this.rotation.x, -this.rotation.y, this.radius, (this.startAngle * Math.PI) / 180, (this.endAngle * Math.PI) / 180, false);

                    if (this.style.fill == true) {
                        o.ctx.fill();
                    }
                    if (this.style.stroke == true) {
                        o.ctx.stroke();
                    }

                    o.ctx.rotate(-((this.degrees * Math.PI) / 180));
                    o.ctx.translate(-(this.x - o.camera.x + this.rotation.x), -(this.y - o.camera.y + this.rotation.y));
                } else {
                    o.ctx.arc(this.x, this.y, this.radius, (this.startAngle * Math.PI) / 180, (this.endAngle * Math.PI) / 180, false);

                    if (this.style.fill == true) {
                        o.ctx.fill();
                    }
                    if (this.style.stroke == true) {
                        o.ctx.stroke();
                    }
                }


                o.ctx.closePath();
            }
            this.render(o);
        };
        this.update = e.update || function () {};
        this._update = function (o) {
            this.update(o);
            this.physics.update();

            if (this.degrees >= 360) {
                this.degrees -= 360;
            }

            if (this.size.autoAdjust == true) {
                this.size.radius = this.radius;
            }

            for (var i = 0; i < 10; i++) {
                this._pointerX = ((HYPER.Input.Pointer.getPointer(i).x - o.offsetLeft) * (o.camera.width / o.view.width)) - o.camera.x;
                this._pointerY = ((HYPER.Input.Pointer.getPointer(i).y - o.offsetTop) * (o.camera.height / o.view.height)) - o.camera.y;

                if (Math.sqrt(((this.x - this._pointerX) * (this.x - this._pointerX)) + ((this.y - this._pointerY) * (this.y - this._pointerY))) < this.radius) {
                    this._InputInfo = {
                        x: this._pointerX,
                        y: this._pointerY
                    }
                    for (var b = 0; b < this.events.onhover.length; b++) {
                        this.events.onhover[b](this._InputInfo);
                        this.onhover(this._InputInfo);
                    }
                    if (HYPER.Input.Pointer.getPointer(i).down == true) {
                        for (var b = 0; b < this.events.ondown.length; b++) {
                            this.events.ondown[b](this._InputInfo);
                            this.ondown(this._InputInfo);
                        }
                    }
                    if (HYPER.Input.Pointer.getPointer(i).up == true) {
                        for (var b = 0; b < this.events.onup.length; b++) {
                            this.events.onup[b](this._InputInfo);
                            this.onup(this._InputInfo);
                        }
                        for (var b = 0; b < this.events.onclick.length; b++) {
                            this.events.onclick[b](this._InputInfo);
                            this.onclick(this._InputInfo);
                        }
                    }
                    if (HYPER.Input.Pointer.getPointer(i).hold == true) {
                        for (var b = 0; b < this.events.onhold.length; b++) {
                            this.events.onhold[b](this._InputInfo);
                            this.onhold(this._InputInfo);
                        }
                    }
                    if (HYPER.Input.Pointer.getPointer(i).dblclick == true) {
                        for (var b = 0; b < this.events.ondblclick.length; b++) {
                            this.events.ondblclick[b](this._InputInfo);
                            this.ondblclick(this._InputInfo);
                        }
                    }
                };
            }
        }
    }
})();