(function () {
    "use strict";
    /**
     * Gloable object for all Graphics functions.
     * @namespace HYPER.Graphics
     */
    HYPER.Graphics = {};

    /**
     * Cut a hex color code.
     * @method HYPER.Graphics.cutHex
     * @param {string} h Hex color code string to cut.
     */

    HYPER.Graphics.cutHex = function (h) {
        return (h.charAt(0) == "#") ? h.substring(1, 7) : h
    }

    /**
     * Convert hex color code to red value.
     * @method HYPER.Graphics.hexToRed
     * @param {string} h Hex color code string to red value.
     */

    HYPER.Graphics.hexToRed = function (h) {
        return parseInt((HYPER.Graphics.cutHex(h)).substring(0, 2), 16)
    }

    /**
     * Convert hex color code to green value.
     * @method HYPER.Graphics.hexToGreen
     * @param {string} h Hex color code string to green value.
     */

    HYPER.Graphics.hexToGreen = function (h) {
        return parseInt((HYPER.Graphics.cutHex(h)).substring(2, 4), 16)
    }

    /**
     * Convert hex color code to blue value.
     * @method HYPER.Graphics.hexToBlue
     * @param {string} h Hex color code string to blue value.
     */

    HYPER.Graphics.hexToBlue = function (h) {
        return parseInt((HYPER.Graphics.cutHex(h)).substring(4, 6), 16)
    }


})();