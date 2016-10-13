(function () {
    "use strict";

    /**
     * Create a new screen. Screens and states are necessary to render and update game code.
     * @class HYPER.Screen
     * @param {object} e Object to pass all screen info.
     * @param {string} e.canvas Id of the canvas you want used as the game screen.
     * @param {boolean} e.antiAliasing=false Whether or not the canvas should use canvas antiAliasing.
     * @param {boolean} e.autoClear=false Whether or not the canvas should clear itself before every frame.
     * @param {boolean} e.smartRendering=false Whether or not to render objects not shown on the screen.
     * @param {boolean} e.motionBlur=false Whether or not motion blur is enabled.
     * @param {boolean} e.showFPS=false Whether or not to show the current FPS.
     * @param {function} e.render Custom rendering directions for the screen.
     * @param {function} e.update Custom updating directions for the screen.
     * @param {HYPER.State} e.currentState The current state to be used.
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
     * @param {object} e.view The view object, change the position and view of the screen on the webpage.
     * @param {number} e.view.x=0 X location of the screen.
     * @param {number} e.view.y=0 Y location of the screen.
     * @param {number} e.view.width=800 Width of the screen.
     * @param {number} e.view.height=600 Height of the screen.
     */

    HYPER.Screen = function (e) {
        if (!e) {
            console.error("No settings defined.");
            return;
        }
        e.view = e.view || {};
        e.camera = e.camera || {};

        var that = this;



        /**
         * @property {string} _ID - The specific ID for this object.
         */

        this._ID = "screen " + Math.random() + "" + Math.random();

        /**
         * @property {string} type - Internal type identifier for the object.
         */

        this.type = "screen";

        /**
         * @property {object} canvas - The canvas that all children are rendered directly to.
         */

        this.canvas = document.getElementById(e.canvas);

        /**
         * @property {object} canvas - The ctx of the canvas that all children are rendered directly to.
         */

        this.ctx = this.canvas.getContext("2d");

        /**
         * @property {boolean} antiAliasing - Whether or not the canvas should use canvas antiAliasing.
         */

        this.antiAliasing = e.antiAliasing || false;

        /**
         * @property {boolean} autoClear - Whether or not the canvas should clear itself before every frame.
         */

        this.autoClear = e.autoClear || false;

        /**
         * @property {boolean} autoClear - Whether or not to render objects not shown on the screen.
         */

        this.smartRendering = e.smartRendering || false;

        /**
         * @property {boolean} motionBlur - Whether or not motion blur is enabled.
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
         * @property {object} view - The view and position that the screen is on the webpage.
         */

        this.view = {
            /**
             * @property {number} view.x - X location of the screen.
             */
            x: e.view.x || 0,
            /**
             * @property {number} view.y - Y location of the screen.
             */
            y: e.view.y || 0,
            /**
             * @property {number} view.width - Width of the screen.
             */
            width: e.view.width || 800,
            /**
             * @property {number} view.height - Height of the screen.
             */
            height: e.view.height || 600,
        };

        /**
         * @property {object} passedINFO - Info that is passed to children every loop.
         */

        this.passedINFO = {};
        /**
         * @property {array} pointerDATA - pointer data that is passed to children every loop.
         */
        this.pointerDATA = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

        /**
         * @property {function} render - user defined function that is called at the end of every frame.
         */

        this.render = e.render || no0p;

        /**
         * @property {function} update - user defined function that is called at the end of every tick.
         */

        this.update = e.update || no0p;

        /**
         * @property {object} currentState - The state that is currently active.
         */

        this.currentState = e.currentState || {
            _init: no0p,
            _render: no0p,
            _update: no0p,
        };

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

        /**
         * @property {function} showFPS - Show the current FPS.
         */

        this.showFPS = e.showFPS || false;

        /**
         * @private
         * @property {function} _tick - stores all update speed settings.
         */

        this._tick = {
            FPS: e.tickFPS || e.tickfps || e.fps || 30,
            _now: 0,
            _then: HYPER.CURRENT_DATE,
            _interval: 33.33333333,
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
            _interval: 16.66666666666666,
            _delta: 0,
        };

        /**
         * @private
         * @property {function} _looper - function that loops the render and update functions.
         */

        this._looper = function () {
            that._update();
            that._render();
        };

        // Add this screen to the input module.
        HYPER.Input.addScreen(this);
    };

    HYPER.Screen.prototype = {

        /**
         * Sets the update FPS of the screen. Note that this is the fastest all children can also update.
         * @method HYPER.Screen.setTickFPS
         * @param {number} fps - The desired FPS.
         */

        setTickFPS: function (fps) {
            this._tick.FPS = fps;
            this._tick._interval = 1000 / this._tick.FPS;
        },

        /**
         * Sets the update FPS of the screen. Note that this is the fastest all children can also render.
         * @method HYPER.Screen.setAnimeFPS
         * @param {number} fps - The desired FPS.
         */

        setAnimeFPS: function (fps) {
            this._anime.FPS = fps;
            this._anime._interval = 1000 / this._anime.FPS;
        },

        /**
         * Sets the current state to the specified state.
         * @method HYPER.Screen.setCurrentState
         * @param {HYPER.State} state - The desired state.
         */

        setCurrentState: function (state) {
            if (state.type === "state") {
                this.currentState = state;
                this.currentState._init();
            } else {
                console.error(state + "is not a state.");
            }
        },

        /**
         * Updates the screen view to match the view and camera varaibles.
         * @private
         * @method HYPER.Screen._updateScreenView
         */

        _updateScreenView: function () {
            this.view.x = this.canvas.offsetLeft;
            this.view.y = this.canvas.offsetTop;
            this.camera.x = 0;
            this.camera.y = 0;
            if (this.view.width + "px" != this.canvas.style.width || this.view.height + "px" != this.canvas.style.height) {
                this.canvas.style.width = this.view.width + "px";
                this.canvas.style.height = this.view.height + "px";
                //console.log(this.canvas.style.width, this.canvas.style.height)
            }
            if (this.camera.width != this.canvas.width ||
                this.camera.height != this.canvas.height) {

                this.canvas.width = this.camera.width;
                this.canvas.height = this.camera.height;

            }

        },

        /**
         * Updates the pointer data that is passed to the children.
         * @private
         * @method HYPER.Screen._updatePointerData
         */

        _updatePointerData: function () {
            for (var i = 0; i < 10; i++) {
                this.pointerDATA[i]._ID = i;
                this.pointerDATA[i].trueX = HYPER.Input.Pointer.point[i].x - this.canvas.offsetLeft;
                this.pointerDATA[i].trueY = HYPER.Input.Pointer.point[i].y - this.canvas.offsetTop;
                this.pointerDATA[i].scaleFactorX = this.camera.width / this.view.width;
                this.pointerDATA[i].scaleFactorY = this.camera.height / this.view.height;
                this.pointerDATA[i].x = this.pointerDATA[i].trueX * this.pointerDATA[i].scaleFactorX;
                this.pointerDATA[i].y = this.pointerDATA[i].trueY * this.pointerDATA[i].scaleFactorY;

                this.pointerDATA[i].down = HYPER.Input.Pointer.point[i].down;
                this.pointerDATA[i].up = HYPER.Input.Pointer.point[i].up;
                this.pointerDATA[i].dblclick = HYPER.Input.Pointer.point[i].dblclick;
                this.pointerDATA[i].hold = HYPER.Input.Pointer.point[i].hold;
                this.pointerDATA[i].click = HYPER.Input.Pointer.point[i].click;
            }
            this.passedINFO.pointerDATA = this.pointerDATA;
        },

        /**
         * Updates the info that is passed to the children.
         * @private
         * @method HYPER.Screen._updatePassedInfo
         */

        _updatePassedInfo: function () {
            this.passedINFO.canvas = this.canvas;
            this.passedINFO.ctx = this.ctx;
            this.passedINFO.view = this.view;
            this.passedINFO.camera = this.camera;

            this._updatePointerData();
        },

        /**
         * Updates the rendering settings used to desplay the screen.
         * @private
         * @method HYPER.Screen._updateRenderingSettings
         */

        _updateRenderingSettings: function () {
            // Set auto clear

            if (this.autoClear === true) {

                HYPER.Graphics.Draw(this.ctx)
                    .clearRect(
                        0,
                        0,
                        this.canvas.width,
                        this.canvas.height);

            }

            // Set smooth Pixels
            this.ctx.mozImageSmoothingEnabled = this.antiAliasing;
            this.ctx.webkitImageSmoothingEnabled = this.antiAliasing;
            this.ctx.msImageSmoothingEnabled = this.antiAliasing;
            this.ctx.imageSmoothingEnabled = this.antiAliasing;


            if (this.antiAliasing == false && this.canvas.style.imageRendering != "pixelated") {
                this.canvas.style.imageRendering = "pixelated";
            } else if (this.antiAliasing == true && this.canvas.style.imageRendering != "auto") {
                this.canvas.style.imageRendering = "auto";
            }

        },

        /**
         * Called on the click event.
         * @private
         * @method HYPER.Screen._onClick
         */

        _onClick: function (id) {
            this._updatePointerData();
            this.currentState._onClick(this.pointerDATA[id]);
            this.onClick(this.pointerDATA[id]);
        },

        /**
         * Called on the mouse up event.
         * @private
         * @method HYPER.Screen._onUp
         */

        _onUp: function (id) {
            this._updatePointerData();
            this.currentState._onUp(this.pointerDATA[id]);
            this.onUp(this.pointerDATA[id]);
        },

        /**
         * Called on the mouse down event.
         * @private
         * @method HYPER.Screen._onDown
         */

        _onDown: function (id) {
            this._updatePointerData();
            this.currentState._onDown(this.pointerDATA[id]);
            this.onDown(this.pointerDATA[id]);
        },

        /**
         * Called when the mouse pointer is held down.
         * @private
         * @method HYPER.Screen._onHold
         */

        _onHold: function (id) {
            this._updatePointerData();
            this.currentState._onHold(this.pointerDATA[id]);
            this.onHold(this.pointerDATA[id]);
        },

        /**
         * Called when the user double clicks.
         * @private
         * @method HYPER.Screen._onDblClick
         */

        _onDblClick: function (id) {
            this._updatePointerData();
            this.currentState._onDblClick(this.pointerDATA[id]);
            this.onDblClick(this.pointerDATA[id]);
        },

        /**
         * Called on the key up.
         * @private
         * @method HYPER.Screen._onKeyUp
         */

        _onKeyUp: function (id) {
            this.currentState._onKeyUp(id);
            this.onKeyUp(id);
        },

        /**
         * Called on the key down.
         * @private
         * @method HYPER.Screen._onKeyDown
         */

        _onKeyDown: function (id) {
            this.currentState._onKeyDown(id);
            this.onKeyDown(id);
        },

        /**
         * Called when a key is held down.
         * @private
         * @method HYPER.Screen._onKeyHeld
         */

        _onKeyHeld: function (id) {
            this.currentState._onKeyHeld(id);
            this.onKeyHeld(id);
        },

        /**
         * Called every frame.
         * @private
         * @method HYPER.Screen._render
         */

        _render: function () {
            this._anime._now = HYPER.CURRENT_DATE;
            this._anime._delta = this._anime._now - this._anime._then;

            if (this._anime._delta > this._anime._interval) {

                this._anime._then = this._anime._now - (this._anime._delta % this._anime._interval);

                // Game Code



                this._updateRenderingSettings();

                this._updatePassedInfo();




                this.currentState._render(this.passedINFO);
                this.render(this.passedINFO);




                if (this.showFPS) {

                    HYPER.Graphics.Draw(this.ctx).setFillColor("#FF0000").text("FPS: " + Math.round(1000 / this._anime._delta), 10, 10);

                }

            }
        },

        /**
         * Called every tick.
         * @private
         * @method HYPER.Screen._update
         */

        _update: function () {
            this._tick._now = HYPER.CURRENT_DATE;
            this._tick._delta = this._tick._now - this._tick._then;
            if (this._tick._delta > this._tick._interval) {
                this._tick._then = this._tick._now - (this._tick._delta % this._tick._interval);

                // Game Code

                this._updateScreenView();

                this._updatePassedInfo();

                this.currentState._update(this.passedINFO);
                this.update(this.passedINFO);
                // End Game Code

            }
        },

        /**
         * Call to initalize the screen.
         * @method HYPER.Screen.init
         */

        init: function () {
            this.currentState._init();
            HYPER.Timer.addOnTick(this._looper);
        },
    };

})();