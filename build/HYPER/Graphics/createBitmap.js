(function () {
    "use strict";

    HYPER.Graphics.CreateBitmap = function (e) {
        this._viewType = "bitmap";
        this.image = document.createElement("canvas");
        this.ctx = this.image.getContext();
        this.image.width = e.width || 32;
        this.image.height = e.height || 32;
        this.drawTo = function (d) {
            d._render({
                camera: {
                    x: 0,
                    y: 0,
                    width: this.image.width,
                    height: this.image.height
                },
                ctx: this.ctx,
                offsetLeft: 0,
                offsetTop: 0,
                view: {
                    width: this.width,
                    height: this.height
                },
                alpha: 1,
            });
        };
        this.clear = function () {
            ctx.clearRect(0, 0, this.image.width, this.image.height);
        };
    };
})();