(function () {
    "use strict";

    /**
     * Create a new State. Screens and states are necessary to render and update game code.
     * @class HYPER.State
     * @param {object} e Object to pass all State info.
     * @param {string} e.canvas Id of the canvas you want used as the game State.
     * @param {boolean} e.antiAliasing=false Whether or not the canvas should use canvas antiAliasing.
     * @param {boolean} e.autoClear=false Whether or not the canvas should clear itself before every frame.
     * @param {boolean} e.smartRendering=false Whether or not to render objects not shown on the State.
     * @param {boolean} e.motionBlur=false Whether or not motion blur is enabled.
     * @param {boolean} e.showFPS=false Whether or not to show the current FPS.
     * @param {function} e.render Custom rendering directions for the State.
     * @param {function} e.update Custom updating directions for the State.
     * @param {function} e.onClick What happens when someone clicks.
     * @param {function} e.onUp What happens when someone clicks up.
     * @param {function} e.onDown What happens when someone clicks down.
     * @param {function} e.onDblClick What happens when someone double clicks.
     * @param {function} e.onKeyUp What happens when a key is lifted.
     * @param {function} e.onKeyDown What happens when a key is pressed.
     * @param {function} e.onKeyHeld What happens when a key is held.
     * @param {number} e.fps fps the game will be rendered and updated at.
     * @param {object} e.camera The camera object, change the position and view to change what is shown.
     * @param {number} e.camera.x=0 X location of the camera.
     * @param {number} e.camera.y=0 Y location of the camera.
     * @param {number} e.camera.width=800 Width of the camera.
     * @param {number} e.camera.height=600 Height of the camera.
     * @param {object} e.view The view object, change the position and view of the State on the webpage.
     * @param {number} e.view.x=0 X location of the State.
     * @param {number} e.view.y=0 Y location of the State.
     * @param {number} e.view.width=800 Width of the State.
     * @param {number} e.view.height=600 Height of the State.
     */

    HYPER.State = function (e) {
        e = e || {};
        e.camera = e.camera || {};
        e.view = e.view || {};
        var that = this;

        /**
         * @property {string} _ID - The specific ID for this object.
         */

        this._ID = "state " + Math.random() + "" + Math.random();

        /**
         * @property {string} type - TheType of object this is.
         */

        this.type = "state";

        /**
         * @property {object} style - The style used for this object.
         */

        this.style = e.style || HYPER.Graphics.DEFAULT_STYLE;

        /**
         * @property {object} canvas - The canvas that all children are rendered directly to.
         */

        this.canvas = document.createElement("canvas");

        /**
         * @property {object} canvas - The ctx of the canvas that all children are rendered directly to.
         */

        this.ctx = this.canvas.getContext("2d");

        /**
         * @property {object} lastcanvas - The canvas that is used for motion blur.
         */

        this.lastcanvas = document.createElement("canvas");

        /**
         * @property {object} lastctx - The ctx that is used for motion blur.
         */

        this.lastctx = this.lastcanvas.getContext("2d");


        /**
         * @private
         * @property {function} _tick - stores all update speed settings.
         */

        this._tick = {
            FPS: e.tickFPS || e.tickfps || e.fps || 30,
            _now: 0,
            _then: HYPER.CURRENT_DATE,
            _interval: 1000 / 30,
            _delta: 0,
        };

        /**
         * @private
         * @property {function} _anime - stores all rendering speed settings.
         */

        this._anime = {
            FPS: e.animeFPS || e.animefps || e.fps || 60,
            _now: 0,
            _then: HYPER.CURRENT_DATE,
            _interval: 1000 / 60,
            _delta: 0,
        };

        /**
         * @property {string} backgroundColor - Background color of the state.
         */

        this.backgroundColor = e.backgroundColor || "#000000";

        /**
         * @property {string} backgroundColor - Background color of the state.
         */

        this.antiAliasing = e.antiAliasing || false;

        /**
         * @property {boolean} autoClear - Whether or not to clear the canvas before every frame.
         */

        this.autoClear = e.autoClear || false;

        /**
         * @property {boolean} smartRendering - Whether or not to render objects that are not on the screen.
         */

        this.smartRendering = e.smartRendering || false;

        /**
         * @property {boolean} motionBlur - Whether or not to render objects with a motion blur.
         */

        this.motionBlur = e.motionBlur || false;

        /**
         * @property {object} camera - The camera object, change the position and view to change what is shown.
         */

        this.camera = {
            /**
             * @property {number} camera.x - X location of the camera.
             */
            x: e.camera.x || 0,
            /**
             * @property {number} camera.y - Y location of the camera.
             */
            y: e.camera.y || 0,
            /**
             * @property {number} camera.width - Width of the camera.
             */
            width: e.camera.width || 800,
            /**
             * @property {number} camera.height - Height of the camera.
             */
            height: e.camera.height || 600,
        };


        /**
         * @property {object} view - The object on the screen.
         */

        this.view = {
            /**
             * @property {number} view.x - X location on the screen.
             */
            x: e.view.x || 0,
            /**
             * @property {number} view.y - Y location on the screen.
             */
            y: e.view.y || 0,
            /**
             * @property {number} view.width - Width on the screen.
             */
            width: e.view.width || 800,
            /**
             * @property {number} view.height - Height on the screen.
             */
            height: e.view.height || 600,
        };

        /**
         * @property {object} passedINFO - Info that is passed to children every loop.
         */

        this.passedINFO = {
            pointerDATA: [],
        };

        /**
         * @property {array} pointerDATA - pointer data that is passed to children every loop.
         */

        this.pointerDATA = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

        /**
         * @property {array} children - Array of all children in the screen.
         */

        this.children = [];

        /**
         * @property {array} children - Whether or not to use z-index when rendering.
         */

        this.enableZindex = e.enableZindex || false;

        /**
         * @property {function} render - user defined function that is called at the end of every frame.
         */

        this.render = e.render || no0p;

        /**
         * @property {function} update - user defined function that is called at the end of every tick.
         */

        this.update = e.update || no0p;

        /**
         * @property {function} update - user defined function that is called when the object is initalized.
         */

        this.init = e.init || no0p;

        /**
         * @property {function} onClick - Function that is called every time the screen is clicked.
         */

        this.onClick = e.onClick || no0p;

        /**
         * @property {function} onUp - Function that is called every time the screen is clicked up.
         */

        this.onUp = e.onUp || no0p;

        /**
         * @property {function} onDown - Function that is called every time the screen is clicked down.
         */

        this.onDown = e.onDown || no0p;

        /**
         * @property {function} onHold - Function that is called every tick the screen is being clicked by the mouse pointer.
         */

        this.onHold = e.onHold || no0p;

        /**
         * @property {function} onDblClick - Function that is called every time the screen is double clicked.
         */

        this.onDblClick = e.onDblClick || no0p;

        /**
         * @property {function} onKeyUp - Function that is called every time a key is lifted.
         */

        this.onKeyUp = e.onKeyUp || no0p;

        /**
         * @property {function} onKeyDown - Function that is called every time a key is pushed.
         */

        this.onKeyDown = e.onKeyDown || no0p;

        /**
         * @property {function} onKeyHeld - Function that is called every time a key is held down.
         */

        this.onKeyHeld = e.onKeyHeld || no0p;




    };

    HYPER.State.prototype = {

        /**
         * Sets the update FPS of the object. Note that this is the fastest all children can also update.
         * @method HYPER.State.setTickFPS
         * @param {number} fps - The desired FPS.
         */

        setTickFPS: function (fps) {
            this._tick.FPS = fps;
            this._tick._interval = 1000 / this._tick.FPS;
        },

        /**
         * Sets the update FPS of the screen. Note that this is the fastest all children can also render.
         * @method HYPER.State.setAnimeFPS
         * @param {number} fps - The desired FPS.
         */

        setAnimeFPS: function (fps) {
            this._anime.FPS = fps;
            this._anime._interval = 1000 / this._anime.FPS;
        },

        /**
         * Adds children to the object.
         * @method HYPER.State.addChild
         * @param {object} child - The child you want to add.
         */

        addChild: function (child) {
            this.children.push(child);
        },

        /**
         * Removes children from the object.
         * @method HYPER.State.removeChild
         * @param {object} child - The child you want to remove.
         */

        removeChild: function (child) {
            for (var c = 0; c < this.children.length; c++) {
                if (child._ID === this.children[c]._ID) {
                    this.children.splice(c, 1);
                };
            };
        },

        /**
         * Removes all children from the object.
         * @method HYPER.State.removeAllChildren
         */

        removeAllChildren: function () {
            this.children = [];
        },

        /**
         * updates the renderer.
         * @private
         * @method HYPER.State._updateRender
         * @param {object} a - Rendering info.
         */

        _updateRender: function (a) {
            if (this.backgroundColor === "clear" || this.autoClear) {

                HYPER.Graphics.Draw(this.ctx)
                    .clearRect(
                        0,
                        0,
                        this.canvas.width,
                        this.canvas.height);


            } else {

                HYPER.Graphics.Draw(this.ctx)
                    .setFillColor(this.backgroundColor)
                    .rect(
                        0,
                        0,
                        this.canvas.width,
                        this.canvas.height);

            }

        },

        /**
         * renders the children.
         * @private
         * @method HYPER.State._renderChildren
         * @param {object} a - Rendering info.
         */

        _renderChildren: function (a) {
            if (this.enableZindex === true) {
                // Loop through all z-indexes
                for (var z = 0; z < this.children.length; z++) {
                    // Loop through all children
                    for (var i = 0; i < this.children.length; i++) {
                        // Check to see if the z-index is correct.
                        if (Math.round(this.children[i].zIndex) === z) {
                            // Check to see if smart rendering is turned on.
                            if (this.smartRendering === true) {
                                // Check to see if the desplayed object overlaps the screen.
                                if (HYPER.Physics.checkAABBCollision(this.view, this.children[i])) {
                                    this.children[i]._render(this.passedINFO);
                                }
                            } else {
                                this.children[i]._render(this.passedINFO);
                            }
                        }
                    }
                }
            } else {
                // loop through all children
                for (var i = 0; i < this.children.length; i++) {
                    // Check to see if smart rendering is turned on.
                    if (this.smartRendering === true) {
                        // Check to see if the desplayed object overlaps the screen.
                        if (HYPER.Physics.checkAABBCollision(this.view, this.children[i])) {
                            // render child
                            this.children[i]._render(this.passedINFO);
                        }
                    } else {
                        // render child
                        this.children[i]._render(this.passedINFO);
                    }
                }
            }
        },

        /**
         * Updates the children.
         * @private
         * @method HYPER.State._updateChildren
         * @param {object} a - Updating info.
         */

        _updateChildren: function (a) {
            // loop through all children.
            for (var i = 0; i < this.children.length; i++) {
                //update child
                this.children[i]._update(this.passedINFO);


            }
        },

        /**
         * Updates the pointers.
         * @private
         * @method HYPER.State._updatePointerData
         * @param {object} a - Updating info.
         */

        _updatePointerData: function (a) {
            //console.log(this);
            for (var i = 0; i < 1; i++) {

                this.pointerDATA[i].trueX = a.pointerDATA[i].x - this.view.x + this.camera.x;
                this.pointerDATA[i].trueY = a.pointerDATA[i].y - this.view.y + this.camera.y;
                this.pointerDATA[i].scaleFactorX = this.camera.width / this.view.width;
                this.pointerDATA[i].scaleFactorY = this.camera.height / this.view.height;
                this.pointerDATA[i].x = this.pointerDATA[i].trueX * this.pointerDATA[i].scaleFactorX - this.camera.x;
                this.pointerDATA[i].y = this.pointerDATA[i].trueY * this.pointerDATA[i].scaleFactorY - this.camera.y;

                this.pointerDATA[i].down = HYPER.Input.Pointer.point[i].down;
                this.pointerDATA[i].up = HYPER.Input.Pointer.point[i].up;
                this.pointerDATA[i].dblclick = HYPER.Input.Pointer.point[i].dblclick;
                this.pointerDATA[i].hold = HYPER.Input.Pointer.point[i].hold;
                this.pointerDATA[i].click = HYPER.Input.Pointer.point[i].down;

            }
            this.passedINFO.pointerDATA = this.pointerDATA;
        },

        /**
         * Updates the pointers based on the id.
         * @private
         * @method HYPER.State.updatePointerDATA_ID
         * @param {object} a - Updating info.
         */

        updatePointerDATA_ID: function (DATA, i) {
            this.pointerDATA[i].trueX = DATA.x - this.view.x + this.camera.x;
            this.pointerDATA[i].trueY = DATA.y - this.view.y + this.camera.y;
            this.pointerDATA[i].scaleFactorX = this.camera.width / this.view.width;
            this.pointerDATA[i].scaleFactorY = this.camera.height / this.view.height;
            this.pointerDATA[i].x = this.pointerDATA[i].trueX * this.pointerDATA[i].scaleFactorX - this.camera.x;
            this.pointerDATA[i].y = this.pointerDATA[i].trueY * this.pointerDATA[i].scaleFactorY - this.camera.y;

            this.pointerDATA[i].down = HYPER.Input.Pointer.point[i].down;
            this.pointerDATA[i].up = HYPER.Input.Pointer.point[i].up;
            this.pointerDATA[i].dblclick = HYPER.Input.Pointer.point[i].dblclick;
            this.pointerDATA[i].hold = HYPER.Input.Pointer.point[i].hold;
            this.pointerDATA[i].click = HYPER.Input.Pointer.point[i].down;
        },

        /**
         * Updates the info that is passed to the children.
         * @private
         * @method HYPER.State._updatePassedInfo
         * @param {object} a - Updating info.
         */

        _updatePassedInfo: function (a) {
            this.passedINFO.canvas = this.canvas;
            this.passedINFO.ctx = this.ctx;
            this.passedINFO.view = this.view;
            this.passedINFO.camera = this.camera;

            this._updatePointerData(a);
        },

        /**
         * Updates the settings used for rendering.
         * @private
         * @method HYPER.State._updateRenderingSettings
         * @param {object} a - Updating info.
         */

        _updateRenderingSettings: function (a) {

            if (this.camera.width != this.canvas.width ||
                this.camera.height != this.canvas.height) {
                this.canvas.width = this.camera.width;
                this.canvas.height = this.camera.height;

            }
            if (this.camera.width != this.lastcanvas.width ||
                this.camera.height != this.lastcanvas.height) {
                this.lastcanvas.width = this.camera.width;
                this.lastcanvas.height = this.camera.height;

            }
            // Set smooth Pixels
            if (this.ctx.mozImageSmoothingEnabled != this.antiAliasing) {
                this.ctx.mozImageSmoothingEnabled = this.antiAliasing;
            }
            if (this.ctx.webkitImageSmoothingEnabled != this.antiAliasing) {
                this.ctx.webkitImageSmoothingEnabled = this.antiAliasing;
            }
            if (this.ctx.msImageSmoothingEnabled != this.antiAliasing) {
                this.ctx.msImageSmoothingEnabled = this.antiAliasing;
            }
            if (this.ctx.imageSmoothingEnabled != this.antiAliasing) {
                this.ctx.imageSmoothingEnabled = this.antiAliasing;
            }


            if (this.antiAliasing == false && this.canvas.style.imageRendering != "pixelated") {
                this.canvas.style.imageRendering = "pixelated";
            } else if (this.antiAliasing == true && this.canvas.style.imageRendering != "auto") {
                this.canvas.style.imageRendering = "auto";
            }
            this._updateRender(a);

        },

        /**
         * Called on the click event.
         * @private
         * @method HYPER.State._onClick
         */

        _onClick: function (data) {
            this.updatePointerDATA_ID(data, data._ID);
            for (var i = 0; i < this.children.length; i++) {
                if (this.children[i].alive) {
                    if (this.children[i]._onClick) {
                        this.children[i]._onClick(this.pointerDATA[data._ID]);
                    }
                }
            }
            this.onClick(this.pointerDATA[data._ID]);
        },

        /**
         * Called on the mouse up event.
         * @private
         * @method HYPER.State._onUp
         */

        _onUp: function (data) {
            this.updatePointerDATA_ID(data, data._ID);
            for (var i = 0; i < this.children.length; i++) {
                if (this.children[i].alive) {
                    if (this.children[i]._onUp) {
                        this.children[i]._onUp(this.pointerDATA[data._ID]);
                    }
                }
            }
            this.onUp(this.pointerDATA[data._ID]);
        },

        /**
         * Called on the mouse down event.
         * @private
         * @method HYPER.State._onDown
         */

        _onDown: function (data) {
            this.updatePointerDATA_ID(data, data._ID);
            for (var i = 0; i < this.children.length; i++) {
                if (this.children[i].alive) {
                    if (this.children[i]._onDown) {
                        this.children[i]._onDown(this.pointerDATA[data._ID]);
                    }
                }
            }
            this.onDown(this.pointerDATA[data._ID]);
        },

        /**
         * Called when the mouse pointer is held down.
         * @private
         * @method HYPER.State._onHold
         */

        _onHold: function (data) {
            this.updatePointerDATA_ID(data, data._ID);
            for (var i = 0; i < this.children.length; i++) {
                if (this.children[i].alive) {
                    if (this.children[i]._onHold) {
                        this.children[i]._onHold(this.pointerDATA[data._ID]);
                    }
                }
            }
            this.onHold(this.pointerDATA[data._ID]);
        },

        /**
         * Called when the user double clicks.
         * @private
         * @method HYPER.State._onDblClick
         */

        _onDblClick: function (data) {
            for (var i = 0; i < this.children.length; i++) {
                if (this.children[i].alive) {
                    if (this.children[i]._onDblClick) {
                        this.children[i]._onDblClick(this.pointerDATA[data._ID]);
                    }
                }
            }
            this.onDblClick(this.pointerDATA[data._ID]);
        },

        /**
         * Called on the key down.
         * @private
         * @method HYPER.State._onKeyDown
         */

        _onKeyDown: function (data) {
            for (var i = 0; i < this.children.length; i++) {
                if (this.children[i].alive) {
                    if (this.children[i]._onKeyDown) {
                        this.children[i]._onKeyDown(data);
                    }
                }
            }
            this.onKeyDown(data);
        },

        /**
         * Called when a key is held down.
         * @private
         * @method HYPER.State._onKeyHeld
         */

        _onKeyHeld: function (data) {
            for (var i = 0; i < this.children.length; i++) {
                if (this.children[i].alive) {
                    if (this.children[i]._onKeyHeld) {
                        this.children[i]._onKeyHeld(data);
                    }
                }
            }
            this.onKeyHeld(data);
        },

        /**
         * Called on the key up.
         * @private
         * @method HYPER.State._onKeyUp
         */

        _onKeyUp: function (data) {
            for (var i = 0; i < this.children.length; i++) {
                if (this.children[i].alive) {
                    if (this.children[i]._onKeyUp) {
                        this.children[i]._onKeyUp(data);
                    }
                }
            }
            this.onKeyUp(data);
        },

        /**
         * Called every frame.
         * @private
         * @method HYPER.State._render
         */

        _render: function (a) {
            this._anime._now = HYPER.CURRENT_DATE;
            this._anime._delta = this._anime._now - this._anime._then;

            if (this._anime._delta > this._anime._interval) {

                this._anime._then = this._anime._now - (this._anime._delta % this._anime._interval);



                if (this.backgroundColor === "clear" || this.autoClear) {


                    HYPER.Graphics.Draw(a.ctx)
                        .clearRect(
                            0,
                            0,
                            a.canvas.width,
                            a.canvas.height);


                }




                if (this.motionBlur) {

                    HYPER.Graphics.Draw(a.ctx, this.style)
                        .bitmap(
                            this.canvas,
                            0,
                            0,
                            this.camera.width,
                            this.camera.height,
                            this.view.x,
                            this.view.y,
                            this.view.width,
                            this.view.height);

                }

                this._updateRenderingSettings(a);
                this._updatePassedInfo(a);
                this._renderChildren(this.passedINFO);

                this.render(this.passedINFO);




                if (this.motionBlur) {

                    HYPER.Graphics.Draw(a.ctx, this.style)
                        .setAlpha(this.style.alpha / 2)
                        .bitmap(
                            this.canvas,
                            0,
                            0,
                            this.camera.width,
                            this.camera.height,
                            this.view.x,
                            this.view.y,
                            this.view.width,
                            this.view.height);


                } else {

                    HYPER.Graphics.Draw(a.ctx, this.style)
                        .bitmap(
                            this.canvas,
                            0,
                            0,
                            this.camera.width,
                            this.camera.height,
                            this.view.x,
                            this.view.y,
                            this.view.width,
                            this.view.height);
                };


            };
        },

        /**
         * Called every tick.
         * @private
         * @method HYPER.State._update
         */

        _update: function (a) {
            this._tick._now = HYPER.CURRENT_DATE;
            this._tick._delta = this._tick._now - this._tick._then;
            if (this._tick._delta > this._tick._interval) {
                this._tick._then = this._tick._now - (this._tick._delta % this._tick._interval);

                // Game Code
                this._updatePassedInfo(a);

                this._updateChildren(this.passedINFO);
                this.update(this.passedINFO);
                // End Game Code

            }
        },

        /**
         * Called when the state is initalized.
         * @method HYPER.State._init
         */

        _init: function () {
            this.init();
        },
    };


})();