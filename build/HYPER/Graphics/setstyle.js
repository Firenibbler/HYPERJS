(function () {
    "use strict";
    HYPER.Graphics.setStyle = function (ctx, style) {
        ctx.globalAlpha = style.alpha;
        ctx.fillStyle = style.color;
        ctx.lineCap = style.lineCap;
        ctx.linejoin = style.linejoin;
        ctx.miterLimit = style.miterLimit;
        ctx.strokeStyle = style.strokeColor;
        ctx.lineWidth = style.lineWidth;
        ctx.lineDashOffset = style.lineDashOffset;
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.font = style.fontSize + "px " + style.fontFamily;
        ctx.globalCompositeOperation = style.globalCompositeOperation;
        ctx.shadowColor = style.shadow.color;
        ctx.shadowBlur = style.shadow.blur;
        ctx.shadowOffsetX = style.shadow.offsetX;
        ctx.shadowOffsetY = style.shadow.offsetY;
    };
})();