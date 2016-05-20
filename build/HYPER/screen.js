(function () {
    "use strict";
    // SCREEN

    HYPER.Screen = function (e) {
        this.autoSize = e.autoSize || false;
        this.autoSizeResoloution = e.autoSizeResoloution || false;

        if (typeof e.autoClear === 'undefined') {
            e.autoClear = true;
        }
        this.autoClear = e.autoClear;
        this.autoSize = e.autoSize;
        if (typeof e.autoSize === 'undefined') {
            e.autoSize = true;
        }
        this.autoSize = e.autoClear;

        if (typeof e.smoothPixels === 'undefined') {
            e.smoothPixels = true;
        }
        this.smoothPixels = e.smoothPixels;

        this.width = e.width || 1366;
        this.height = e.height || 768;
        e.camera = e.camera || {};
        this.camera = {
            width: e.camera.width || e.width || 1366,
            height: e.camera.height || e.height || 768,
        };
        this._ID = Math.random() * Math.random();
        this.canvas = e.canvas;
        this.ctx = this.canvas.getContext("2d");

        this.aspectRatio = {};
        e.aspectRatio = e.aspectRatio || {};
        this.aspectRatio.width = e.aspectRatio.width || this.width;
        this.aspectRatio.height = e.aspectRatio.height || this.height;

        this.layers = [];
        this.actualToggleFullScreen = function () {
            if (!document.fullscreenElement &&
                !document.mozFullScreenElement &&
                !document.webkitFullscreenElement &&
                !document.msFullscreenElement) { // current working methods
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }

            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }
        };
        var that = this;
        this.toggleFullScreen = function () {
            if (!document.fullscreenElement &&
                !document.mozFullScreenElement &&
                !document.webkitFullscreenElement &&
                !document.msFullscreenElement) {
                that.canvas.onclick = function () {
                    that.actualToggleFullScreen();
                    that.canvas.onclick = function () {};
                };
            } else if (document.fullscreenElement ||
                document.mozFullScreenElement ||
                document.webkitFullscreenElement ||
                document.msFullscreenElement) {
                that.actualToggleFullScreen();
            };
        };
        this.addLayer = function (layer) {
            this.layers.push(layer);
        };
        this.removeLayer = function (layer) {
            for (i = 0; i < this.layers.length; i++) {
                if (this.layers[i]._ID = layer._ID) {
                    this.layers.splice(i, 1);
                }
            }
        };
        this.removeAllLayers = function () {
            this.layers = [];
        };
        this.render = function () {

            this.ctx.imageSmoothingEnabled = this.smoothPixels;

            if (this.smoothPixels == false && this.canvas.style.imageRendering != "pixelated") {
                this.canvas.style.imageRendering = "pixelated";
            } else if (this.smoothPixels == true && this.canvas.style.imageRendering != "") {
                this.canvas.style.imageRendering = "";
            }

            if (this.autoSize == true) {
                if (window.innerWidth / window.innerHeight <= this.aspectRatio.width / this.aspectRatio.height) {
                    this.width = window.innerWidth;
                    this.height = window.innerWidth * (this.aspectRatio.height / this.aspectRatio.width);
                } else {
                    this.width = window.innerHeight * (this.aspectRatio.width / this.aspectRatio.height);
                    this.height = window.innerHeight;
                }
            }
            if (this.autoClear == true) {
                this.ctx.clearRect(0, 0, this.camera.width, this.camera.height);
            };
            for (var i = 0; i < this.layers.length; i++) {
                for (var z = 0; z <= this.layers.length; z++) {
                    if (this.layers[i].zIndex == z && this.layers[i].visable == true) {
                        this.ctx.drawImage(this.layers[i].canvas, 0, 0, this.layers[i].camera.width, this.layers[i].camera.height, 0, 0, this.canvas.width, this.canvas.height);
                    }
                }
            }

        };
        this.update = function () {
            if (this.camera.width != this.canvas.width || this.camera.height != this.canvas.height) {
                this.camera.width = Math.floor(this.camera.width);
                this.camera.height = Math.floor(this.camera.height);
                this.canvas.width = this.camera.width;
                this.canvas.height = this.camera.height;
            };
            if (this.autoSize == true || this.autoSizeResoloution == true) {
                if (this.canvas.style.width != this.width + "px" || this.canvas.style.height != this.height + "px") {
                    this.width = Math.floor(this.width);
                    this.height = Math.floor(this.height);
                    this.canvas.style.width = this.width;
                    this.canvas.style.height = this.height;
                };
                if (this.autoSizeResoloution == true) {
                    this.camera.width = this.width;
                    this.camera.height = this.height;
                };
            };
            for (var i = 0; i < this.layers.length; i++) {
                this.layers[i].offsetLeft = this.canvas.offsetLeft;
                this.layers[i].offsetTop = this.canvas.offsetTop;
                this.layers[i].view.width = this.width;
                this.layers[i].view.height = this.height;
            }
        };
    };

})();