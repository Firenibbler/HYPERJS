(function () {
    "use strict";

    HYPER.Graphics.Animation = function (e) {
            this._viewType = "animation";
            this._ShapeType = "rect";
            this._ID = Math.random() * Math.random();

            this.spriteSheet = e.spriteSheet || console.error("Define spriteSheet");

            this.frames = e.frames || [];
            this.loop = e.loop || false;
            this.currentFrame = e.currentFrame || 0;
            this.paused = e.paused || false;
            this.FPS = e.FPS || 30;
            this._InfoAnimate = {};
            this.play = function () {
                this.paused = false;
            };
            this.pause = function () {
                this.paused = true;
            };
            this.stop = function () {
                this.paused = true;
                this.currentFrame = 0;
            };
            this.setFPS = function (FPS) {
                this.FPS = FPS;
            };
            this._animeCounter = 0;
            this._previousAnimeCounter = 0;
            var that;

            this.x = (typeof e.x === 'undefined') ? 0 : e.x;
            this.y = (typeof e.y === 'undefined') ? 0 : e.y;
            this.width = (typeof e.width === 'undefined') ? this.spriteSheet.frame.width : e.width;
            this.height = (typeof e.height === 'undefined') ? this.spriteSheet.frame.height : e.height;
            this.zIndex = (typeof e.zIndex === 'undefined') ? 0 : e.zIndex;
            this.degrees = (typeof e.degrees === 'undefined') ? 0 : e.degrees;
            this.rotation = e.rotation || {};
            e.rotation = e.rotation || {};
            this.rotation.y = (typeof e.rotation.y === 'undefined') ? this.height / 2 : e.rotation.y;
            this.rotation.x = (typeof e.rotation.x === 'undefined') ? this.width / 2 : e.rotation.x;
            this.visable = (typeof e.visable === 'undefined') ? true : e.visable;
            this.style = new HYPER.Graphics.Style(e.style);
            e.size = e.size || {};
            this.size = e.size;
            this.size.autoAdjust = (typeof e.size.autoAdjust === 'undefined') ? true : e.size.autoAdjust;
            this.size.x = (typeof e.size.x === 'undefined') ? 0 : e.size.x;
            this.size.y = (typeof e.size.y === 'undefined') ? 0 : e.size.y;
            this.size.width = (typeof e.size.width === 'undefined') ? this.width : e.size.width;
            this.size.height = (typeof e.size.height === 'undefined') ? this.height : e.size.height;

            this.onend = function () {};
            this.onclick = function () {};
            this.onhold = function () {};
            this.onup = function () {};
            this.ondown = function () {};
            this.onhover = function () {};
            this.ondblclick = function () {};

            this.events = {};
            this.events.onend = [];
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

                    this.x = Math.floor(this.x);
                    this.y = Math.floor(this.y);
                    this.width = Math.floor(this.width);
                    this.height = Math.floor(this.height);
                    this.degrees = Math.floor(this.degrees);

                    HYPER.Graphics.setStyle(o.ctx, this.style);

                    if (this.degrees != 0) {

                        o.ctx.translate((this.x - o.camera.x + this.rotation.x), (this.y - o.camera.y + this.rotation.y));
                        o.ctx.rotate((this.degrees * Math.PI) / 180);


                        this._InfoAnimate.currentFrame = 0;
                        for (var y = 0; y < this.spriteSheet.framesTall; y++) {
                            for (var x = 0; x < this.spriteSheet.framesWide; x++) {
                                this._InfoAnimate.currentFrame++;
                                if (this.frames[this.currentFrame] + 1 == this._InfoAnimate.currentFrame) {
                                    o.ctx.drawImage(this.spriteSheet.image,
                                        x * this.spriteSheet.frame.width,
                                        y * this.spriteSheet.frame.height,
                                        this.spriteSheet.frame.width,
                                        this.spriteSheet.frame.height, -this.rotation.x, -this.rotation.y, this.width, this.height);
                                }
                            }

                        }

                        o.ctx.rotate(-((this.degrees * Math.PI) / 180));
                        o.ctx.translate(-(this.x - o.camera.x + this.rotation.x), -(this.y - o.camera.y + this.rotation.y));
                    } else {
                        this._InfoAnimate.currentFrame = 0;
                        for (var y = 0; y < this.spriteSheet.framesTall; y++) {
                            for (var x = 0; x < this.spriteSheet.framesWide; x++) {
                                this._InfoAnimate.currentFrame++;
                                if (this.frames[this.currentFrame] + 1 == this._InfoAnimate.currentFrame) {
                                    o.ctx.drawImage(this.spriteSheet.image,
                                        x * this.spriteSheet.frame.width,
                                        y * this.spriteSheet.frame.height,
                                        this.spriteSheet.frame.width,
                                        this.spriteSheet.frame.height,
                                        this.x,
                                        this.y,
                                        this.width,
                                        this.height);
                                }
                            }

                        }


                    }


                }
                this.render(o);
            };
            this.update = e.update || function () {};
            this._update = function (o) {
                if (this.paused == false) {
                    this._animeCounter += this.FPS / HYPER.Timer.Tick.FPS;
                    if (this.FPS == HYPER.Timer.Tick.FPS) {

                        this.currentFrame++;

                        if (this.currentFrame >= this.frames.length) {

                            this.currentFrame = 0;
                            if (this.loop == false) {
                                this.paused = true;
                            }
                            this.onend();
                            for (var i = 0; i < this.events.onend.length; i++) {
                                this.events.onend[i]();
                            }


                        }
                    } else {

                        if (this.FPS / HYPER.Timer.Tick.FPS > 1) {
                            for (var i = 0; i < this._animeCounter; i++) {
                                this.currentFrame++;

                                if (this.currentFrame >= this.frames.length) {

                                    this.currentFrame = 0;
                                    if (this.loop == false) {
                                        this.paused = true;
                                    }
                                    this.onend();
                                    for (var i = 0; i < this.events.onend.length; i++) {
                                        this.events.onend[i]();
                                    }
                                }
                            }
                            this._animeCounter -= Math.floor(this._animeCounter + 1);
                        } else {
                            if (this._animeCounter >= 1) {
                                this._animeCounter - 1;
                                this.currentFrame++;

                                if (this.currentFrame >= this.frames.length) {

                                    this.currentFrame = 0;
                                    if (this.loop == false) {
                                        this.paused = true;
                                    }
                                    this.onend();
                                    for (var i = 0; i < this.events.onend.length; i++) {
                                        this.events.onend[i]();
                                    }
                                }
                            }
                        }

                        if (this._animeCounter % 1 == 0) {
                            this._animeCounter = 0;
                        }
                    }
                    /*if (this._animeCounter > 1) {
                        this._previousAnimeCounter = this._animeCounter;
                        
                    }*/

                }

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
                    this._pointerX = ((HYPER.Input.Pointer.getPointer(i).x - o.offsetLeft) * (o.camera.width / o.view.width)) - o.camera.x;
                    this._pointerY = ((HYPER.Input.Pointer.getPointer(i).y - o.offsetTop) * (o.camera.height / o.view.height)) - o.camera.y;
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



            /*this.updateAnimation = function () {
                if (this.paused == false) {
                    this.currentFrame++;

                    if (this.currentFrame >= that.frames.length) {

                        this.currentFrame = 0;
                        if (this.loop == false) {
                            this.paused = true;
                        }
                        this.onend();
                        for (var i = 0; i < that.events.onend.length; i++) {
                            that.events.onend[i]();
                        }
                    }

                }

            };
            that = this;
            this._animationUpdateReg = function () {
                that.updateAnimation();
                setTimeout(that._animationUpdateReg, 1000 / that.FPS);
            };
            setTimeout(this._animationUpdateReg, 1000 / that.FPS);*/



            //this.updateAnimation();

        }
        /*
            HYPER.Graphics.CreateAnimation = function (e) {
                this._viewType = "animation";
                this.spriteSheet = e.spriteSheet;
                this.x = 0;
                this.y = 0;
                this.width = e.spriteSheet.frame.width;
                this.height = e.spriteSheet.frame.height;
                this.currentAnimation = 0;
                this.currentFrame = 0;
                this.paused = true;
                this.animation = [];
                for (var i = 0; i < e.animation.length; i++) {
                    this.animation[i].loop = e.animation[i].loop || false;
                    this.animation[i].frames = e.animation[i].frames || [0];
                    this.animation[i].FPS = e.animation[i].FPS || 30;
                    this.animation[i].name = e.animation[i].name || "animation " + i;
                }
                this.play = function (name) {
                    this.paused = false;
                    for (var i = 0; i < this.animation.length; i++) {
                        if (this.animation[i].name == name) {
                            this.currentAnimation = this.animation[i];
                        }
                    }
                };
                this.pause = function (name) {
                    this.paused = true;
                };
                this.start = function (name) {
                    this.paused = false;
                    this.currentFrame = 0;
                    for (var i = 0; i < this.animation.length; i++) {
                        if (this.animation[i].name == name) {
                            this.currentAnimation = this.animation[i];
                        }
                    }
                };
                this.stop = function () {
                    this.paused = true;
                    this.currentFrame = 0;
                };
                this._InfoAnimate = {};
                _render = function (o) {


                    this.x = Math.floor(this.x);
                    this.y = Math.floor(this.y);
                    this.width = Math.floor(this.width);
                    this.height = Math.floor(this.height);


                    this._InfoAnimate.currentFrame = 0;
                    for (var y = 0; y < this.spriteSheet.framesTall; y++) {
                        for (var x = 0; x < this.spriteSheet.framesWide; x++) {
                            this._InfoAnimate.currentFrame++;
                            if (this.animation[i].frames[this.currentFrame] + 1 == this._InfoAnimate.currentFrame) {
                                o.ctx.drawImage(this.spriteSheet.image,
                                    x * this.spriteSheet.frame.width,
                                    y * this.spriteSheet.frame.height,
                                    this.spriteSheet.frame.width,
                                    this.spriteSheet.frame.height,
                                    this.x,
                                    this.y,
                                    this.width,
                                    this.height);
                            }
                        }
                    }
                };
            }
            */
})();