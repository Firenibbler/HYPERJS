(function () {
    "use strict";
    HYPER.Graphics = {};
    HYPER.Graphics.Style = function (e) {
        e = (typeof e === 'undefined') ? {} : e;
        this.alpha = (typeof e.alpha === 'undefined') ? 1 : e.alpha;
        this.color = (typeof e.color === 'undefined') ? "#000000" : e.color;
        this.linecap = (typeof e.linecap === 'undefined') ? "butt" : e.linecap;
        this.linejoin = (typeof e.linejoin === 'undefined') ? "miter" : e.linejoin;
        this.miterLimit = (typeof e.miterLimit === 'undefined') ? 10 : e.miterLimit;
        this.strokeColor = (typeof e.strokeColor === 'undefined') ? "#000000" : e.strokeColor;
        this.lineWidth = (typeof e.lineWidth === 'undefined') ? 1 : e.lineWidth;
        this.fill = (typeof e.fill === 'undefined') ? true : e.fill;
        this.stroke = (typeof e.stroke === 'undefined') ? false : e.stroke;
        this.lineDashOffset = (typeof e.lineDashOffset === 'undefined') ? 0 : e.lineDashOffset;
        this.fontSize = (typeof e.fontSize === 'undefined') ? 10 : e.fontSize;
        this.fontFamily = (typeof e.fontFamily === 'undefined') ? "Arial" : e.fontFamily;
        this.globalCompositeOperation = (typeof e.globalCompositeOperation === 'undefined') ? "source-over" : e.globalCompositeOperation;
        e.shadow = e.shadow || {};
        this.shadow = e.shadow;
        this.shadow.color = (typeof e.shadow.color === 'undefined') ? "#000000" : e.shadow.color;
        this.shadow.blur = (typeof e.shadow.blur === 'undefined') ? 0 : e.shadow.blur;
        this.shadow.offsetX = (typeof e.shadow.offsetX === 'undefined') ? 0 : e.shadow.offsetX;
        this.shadow.offsetY = (typeof e.shadow.offsetY === 'undefined') ? 0 : e.shadow.offsetY;
    };
})();