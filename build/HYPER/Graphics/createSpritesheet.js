(function () {
    "use strict";

    HYPER.Graphics.CreateSpriteSheet = function (e) {
        this.image = e.img.image
        this.ctx = e.img.ctx;
        this.image.width = e.img.image.width || 32;
        this.image.height = e.img.image.height || 32;
        this.frame = {};
        e.frame = e.frame || {};
        this.frame.width = (typeof e.frame.width === 'undefined') ? 0 : e.frame.width;
        this.frame.height = (typeof e.frame.height === 'undefined') ? 0 : e.frame.height;

        this.framesWide = Math.floor(this.image.width / this.frame.width);
        this.framesTall = Math.floor(this.image.height / this.frame.height);
    };
})();