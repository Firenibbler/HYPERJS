(function () {
    "use strict";
    
    /**
     * A set of math functions that are useful for game development.
     * @namespace HYPER.Math
     */

    HYPER.Math = {

        /**
         * Executes a function on all objects of an array
         * @method HYPER.Math.getAllArray
         * @param {array} array - The array to execute on.
         * @param {function} todo - Function to execute on the array.
         */

        getAllArray: function (array, todo) {
            for (var i = 0; i < array.length; i++) {
                todo(i, array[i]);
            }
        },

        /**
         * Converts radians to degees.
         * @method HYPER.Math.RadiansToDegrees
         * @param {number} radians - The value to convert to degrees.
         */

        RadiansToDegrees: function (radians) {
            return radians * (180 / Math.PI)
        },

        /**
         * Converts degrees to radians.
         * @method HYPER.Math.degreesToRadians
         * @param {number} degrees - The value to convert to radians.
         */

        degreesToRadians: function (degrees) {
            return degrees * (Math.PI / 180)
        },

        /**
         * Returns a random number between the two given numbers.
         * @method HYPER.Math.random
         * @param {number} s=0 - The smallest value possible for the random number.
         * @param {number} e=1 - The largest value possible for the random number.
         * @param {number} float=false - Whether or not to give a floating point number.
         */

        random: function (s, e, float) {
            float = float || false;
            e = e || 0;
            s = s || 1;
            if (float) {
                return (Math.random() * (s - e)) + e
            } else {
                return Math.round((Math.random() * (s - e)) + e);
            }

        }
    };
})();