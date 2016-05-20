(function () {
    "use strict";
    // LAYER

    HYPER.Layer = function (e) {

        this._ID = Math.random() * Math.random();
        this._ShapeType = "rect";

        this.canvas = document.createElement("canvas");

        this.ctx = this.canvas.getContext("2d");

        this.size = {};
        this.size.width = this.canvas.width + 50;
        this.size.height = this.canvas.height + 50;
        this.size.x = -50;
        this.size.y = -50;

        if (typeof e.visable === 'undefined') {
            e.visable = true;
        }
        this.visable = e.visable;

        this.paused = e.paused || false;
        this.play = function () {
            this.paused = false;
        };
        this.pause = function () {
            this.paused = true;
        };

        if (typeof e.smoothPixels === 'undefined') {
            e.smoothPixels = true;
        }
        this.smoothPixels = e.smoothPixels;

        if (typeof e.autoClear === 'undefined') {
            e.autoClear = true;
        }
        this.autoClear = e.autoClear;
        this.smartRendering = (typeof e.smartRendering === 'undefined') ? true : e.smartRendering;
        if (typeof e.alpha === 'undefined') {
            e.alpha = 1;
        }
        this.alpha = e.alpha;

        this.useZindex = e.useZindex || false;

        if (typeof e.globalCompositeOperation === 'undefined') {
            e.globalCompositeOperation = "source-over";
        }

        this.globalCompositeOperation = e.globalCompositeOperation;

        this.view = {};

        this.zIndex = e.zIndex || 0;

        e.camera = e.camera || {};
        this.camera = {
            x: e.camera.x || 0,
            y: e.camera.y || 0,
            width: e.camera.width || e.width || 1366,
            height: e.camera.height || e.height || 768,
        };

        this.canvas.width = this.camera.width;
        this.canvas.height = this.camera.height;

        this.children = [];

        this.addChild = function (child) {
            this.children.push(child);
        };
        this.removeChild = function (child) {
            for (i = 0; i < this.children.length; i++) {
                if (this.children[i]._ID == child._ID) {
                    this.children.splice(i, 1);
                };
            };
        };
        this.removeAllChildren = function (child) {
            this.children = [];
        };

        this.render = function () {
            if (this.paused == false) {

                this.camera.x = Math.floor(this.camera.x);
                this.camera.y = Math.floor(this.camera.y);

                this.ctx.imageSmoothingEnabled = this.smoothPixels;

                if (this.smoothPixels == false && this.canvas.style.imageRendering != "pixelated") {
                    this.canvas.style.imageRendering = "pixelated";
                } else if (this.smoothPixels == true && this.canvas.style.imageRendering != "") {
                    this.canvas.style.imageRendering = "";
                }

                this.ctx.globalAlpha = this.alpha;
                this.ctx.globalCompositeOperation = this.globalCompositeOperation;

                this.ctx.translate(-this.camera.x, -this.camera.y);

                if (this.autoClear == true) {
                    this.ctx.clearRect(this.camera.x, this.camera.y, this.camera.width, this.camera.height);
                }

                if (this.useZindex == true) {
                    for (i = 0; i < this.children.length; i++) {
                        for (var z = 0; z <= this.children.length; z++) {
                            if (this.children.zIndex == z) {

                                if (this.smartRendering == true) {
                                    if (HYPER.Physics.checkSimpleCollision(this, this.children[i]) == true) {
                                        this.children[i]._render({
                                            camera: this.camera,
                                            ctx: this.ctx,
                                            offsetLeft: this.offsetLeft,
                                            offsetTop: this.offsetTop,
                                            view: this.view,
                                            alpha: this.alpha,
                                        });
                                    }
                                } else {
                                    this.children[i]._render({
                                        camera: this.camera,
                                        ctx: this.ctx,
                                        offsetLeft: this.offsetLeft,
                                        offsetTop: this.offsetTop,
                                        view: this.view,
                                        alpha: this.alpha,
                                    });
                                }
                                if (i >= this.children.length - 1) {
                                    this.ctx.translate(this.camera.x, this.camera.y);
                                }

                            };
                        };
                    };
                } else {
                    for (var i = 0; i < this.children.length; i++) {

                        if (this.smartRendering == true) {
                            if (HYPER.Physics.checkSimpleCollision(this, this.children[i]) == true) {
                                this.children[i]._render({
                                    camera: this.camera,
                                    ctx: this.ctx,
                                    offsetLeft: this.offsetLeft,
                                    offsetTop: this.offsetTop,
                                    view: this.view,
                                    alpha: this.alpha,
                                });
                            }
                        } else {
                            this.children[i]._render({
                                camera: this.camera,
                                ctx: this.ctx,
                                offsetLeft: this.offsetLeft,
                                offsetTop: this.offsetTop,
                                view: this.view,
                                alpha: this.alpha,
                            });
                        }
                        if (i >= this.children.length - 1) {
                            this.ctx.translate(this.camera.x, this.camera.y);
                        }
                    };
                };



            };
        };
        this.update = function () {

            if (this.paused == false) {
                if (this.canvas.width != this.camera.width || this.canvas.height != this.camera.height) {
                    this.canvas.width = this.camera.width;
                    this.canvas.height = this.camera.height;
                }
                for (var i = 0; i < this.children.length; i++) {
                    this.children[i]._update({
                        camera: this.camera,
                        offsetLeft: this.offsetLeft,
                        offsetTop: this.offsetTop,
                        view: this.view,
                    });
                };
            };
            this.size.width = this.canvas.width + 50;
            this.size.height = this.canvas.height + 50;
            this.size.x = -50;
            this.size.y = -50;
            this.x = this.camera.x;
            this.y = this.camera.y;
        };
    };
})();