(function () {
    "use strict";


    /**
     * Create a new style object.
     * @class HYPER.Graphics.Style
     * @param {object} e Object to pass all style info.
     * @param {object} e.alpha=1 The alpha value to be rendered.
     * @param {object} e.color="#000000" The fill color value to be rendered.
     * @param {number} e.linecap="butt" The line cap type to be rendered.
     * @param {number} e.linejoin="miter" The line join type to be rendered.
     * @param {number} e.miterLimit=10 The miter limit to be rendered.
     * @param {number} e.strokeColor="#000000" Stroke color to be rendered.
     * @param {number} e.lineWidth=1  Line width of the line to be rendered.
     * @param {number} e.fill=true Should the graphicl objects be filled?
     * @param {number} e.stroke=false Should the graphicl objects be stroked?
     * @param {number} e.lineDashOffset=0 What should the dashed offset be?
     * @param {number} e.fontSize=12 What should the font size be?
     * @param {number} e.fontFamily="Arial" What should the font family be?
     * @param {number} e.globalCompositeOperation="source-over" Set the global compisit opperation.
     * @param {number} e.shadow Set the shadow properties.
     * @param {number} e.shadow.color="#000000" Set the shadow color.
     * @param {number} e.shadow.blur=0 Set the shadow blur.
     * @param {number} e.shadow.offsetX=0 Set the shadow offset x.
     * @param {number} e.shadow.offsetY=0 Set the shadow offset y.
     */
    HYPER.Graphics.Style = function (e) {
        e = (typeof e === 'undefined') ? {} : e;
        e.shadow = e.shadow || {};

        /**
         * @property {string} _ID - The specific ID for this object.
         */

        this._ID = "style " + Math.random() + "" + Math.random();

        /**
         * @property {string} type - What type of object this is.
         */

        this.type = "style";

        /**
         * @property {number} alpha=1 - The alpha value to be rendered.
         */

        this.alpha = (typeof e.alpha === 'undefined') ? 1 : e.alpha;

        /**
         * @property {string} color="#000000" - The fill color value to be rendered.
         */

        this.color = (typeof e.color === 'undefined') ? "#000000" : e.color;

        /**
         * @property {string} linecap="butt" - The line cap type to be rendered.
         */

        this.linecap = (typeof e.linecap === 'undefined') ? "butt" : e.linecap;

        /**
         * @property {string} linejoin="miter" - The line join type to be rendered.
         */

        this.linejoin = (typeof e.linejoin === 'undefined') ? "miter" : e.linejoin;

        /**
         * @property {number} miterLimit=10 - The miter limit to be rendered.
         */

        this.miterLimit = (typeof e.miterLimit === 'undefined') ? 10 : e.miterLimit;

        /**
         * @property {number} strokeColor="#000000" - Stroke color to be rendered.
         */

        this.strokeColor = (typeof e.strokeColor === 'undefined') ? "#000000" : e.strokeColor;

        /**
         * @property {number} lineWidth=1 - Line width of the line to be rendered.
         */

        this.lineWidth = (typeof e.lineWidth === 'undefined') ? 1 : e.lineWidth;

        /**
         * @property {boolean} fill=true - Should the graphicl objects be filled?
         */

        this.fill = (typeof e.fill === 'undefined') ? true : e.fill;

        /**
         * @property {boolean} stroke=false - Should the graphicl objects be stroked?
         */

        this.stroke = (typeof e.stroke === 'undefined') ? false : e.stroke;

        /**
         * @property {number} lineDashOffset=0 - What should the dashed offset be?
         */

        this.lineDashOffset = (typeof e.lineDashOffset === 'undefined') ? 0 : e.lineDashOffset;

        /**
         * @property {number} fontSize=12 - What should the font size be?
         */

        this.fontSize = (typeof e.fontSize === 'undefined') ? 12 : e.fontSize;

        /**
         * @property {string} fontSize="Arial" - What should the font family be?
         */

        this.fontFamily = (typeof e.fontFamily === 'undefined') ? "Arial" : e.fontFamily;

        /**
         * @property {string} globalCompositeOperation="source-over" - Set the global compisit opperation.
         */

        this.globalCompositeOperation = (typeof e.globalCompositeOperation === 'undefined') ? "source-over" : e.globalCompositeOperation;

        /**
         * @property {object} shadow - Set the shadow properties.
         */

        this.shadow = e.shadow;

        /**
         * @property {string} shadow.color="#000000" - Set the shadow color.
         */

        this.shadow.color = (typeof e.shadow.color === 'undefined') ? "#000000" : e.shadow.color;

        /**
         * @property {string} shadow.blur=0 - Set the shadow blur.
         */

        this.shadow.blur = (typeof e.shadow.blur === 'undefined') ? 0 : e.shadow.blur;

        /**
         * @property {string} shadow.offsetX=0 - Set the shadow offset x.
         */

        this.shadow.offsetX = (typeof e.shadow.offsetX === 'undefined') ? 0 : e.shadow.offsetX;

        /**
         * @property {string} shadow.offsetY=0 - Set the shadow offset y.
         */

        this.shadow.offsetY = (typeof e.shadow.offsetY === 'undefined') ? 0 : e.shadow.offsetY;

    };
    
    HYPER.Graphics.Style.prototype = {
        /**
         * Apply this style to any context.
         * @method HYPER.Graphics.Style.applyTo
         * @param {object} ctx Context for the style.
         */
        applyTo: function (ctx) {
            HYPER.Graphics.styleToCTX(this, ctx);
        },
    };
    /**
     * Apply a style to any context.
     * @method HYPER.Graphics.styleToCTX
     * @param {HYPER.Graphics.Style} style Style to apply.
     * @param {object} ctx Context for the style.
     */
    HYPER.Graphics.styleToCTX = function (style, ctx) {
        ctx.globalAlpha = style.alpha || 1;
        ctx.fillStyle = style.color || "#000000";
        ctx.lineCap = style.lineCap || "butt";
        ctx.linejoin = style.linejoin || "miter";
        ctx.miterLimit = style.miterLimit || 10;
        ctx.strokeStyle = style.strokeColor || "#000000";
        ctx.lineWidth = style.lineWidth || 1;
        ctx.lineDashOffset = style.lineDashOffset || 0;
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.font = style.fontSize || 12 + "px " + style.fontFamily || "Arial";
        ctx.globalCompositeOperation = style.globalCompositeOperation || "source-over";
        ctx.shadowColor = style.shadow.color || "#000000";
        ctx.shadowBlur = style.shadow.blur || 0;
        ctx.shadowOffsetX = style.shadow.offsetX || 0;
        ctx.shadowOffsetY = style.shadow.offsetY || 0;
    };
    HYPER.Graphics.DEFAULT_STYLE = new HYPER.Graphics.Style();
})();