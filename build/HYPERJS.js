/**
 * @author       Andrew Stavast <firenibbler@gmail.com>
 * @copyright    2016 Firenibbler Studios
 * @license      {@link http://www.apache.org/licenses/LICENSE-2.0|Apache License Version 2.0}<br>
 * Licensed under the Apache License, Version 2.0 (the "License");<br>
 * you may not use this file except in compliance with the License.<br>
 * You may obtain a copy of the License at<br>
 * <br>
 *     http://www.apache.org/licenses/LICENSE-2.0<br>
 * <br>
 * Unless required by applicable law or agreed to in writing, software<br>
 * distributed under the License is distributed on an "AS IS" BASIS,<br>
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.<br>
 * See the License for the specific language governing permissions and<br>
 * limitations under the License.<br>
 *
 * @overview
 *
 * HYPERJS
 *
 * v0.0.3 <br><br>
 * By: Andrew Stavast http://firenibbler.com/ @firenibbler <br><br>
 * 
 * HYPERJS is a free, open source game library fur building and publishing HTML5 games that work well on all platforms including both mobile and desktop browsers.<br><br>
 * 
 * HYPERJS uses HowlerJS for all its audio requirments. https://howlerjs.com/<br><br>
 * 
 * Check out http://firenibbler.com for the latest development updates and subscribe to our newsletter for the latest features.
 */


(function () {
    "use strict";
    /**
     * A blank function used to fill other functions.
     * @method no0p
     */
    window.no0p = function () {};
    /**
     * Gloable object for all HYPER functions.
     * @namespace HYPER
     */
    window.HYPER = {};

    /**
     * Returns true if the user is using a mobile operating system.
     * @method mobileAndTabletcheck
     */

    window.mobileAndTabletcheck = function () {
        var check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };
})();


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
            for (let i = 0; i < array.length; i++) {
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


(function () {
    "use strict";
    /**
     * Gloable object for all Timer functions.
     * @method Timer
     */
    HYPER.Timer = {};
    HYPER.Timer.tick = 0;
    HYPER.Timer.fps = 60;
    HYPER.Timer.now;
    HYPER.Timer.then = Date.now();
    HYPER.Timer.interval = 1000 / HYPER.Timer.fps;
    HYPER.Timer.delta;
    /**
     * Gloable object for all Timer functions.
     * @method setFPS
     * @param {number} fps The new FPS value.
     */
    HYPER.Timer.setFPS = function (fps) {
        HYPER.Timer.fps = fps;
        HYPER.Timer.interval = 1000 / HYPER.Timer.fps;
    }
    HYPER.Timer.children = [];
    HYPER.Timer.addOnTick = function (callback) {
        //callback._ID = "" + Math.random() + "" + Math.random();
        HYPER.Timer.children.push(callback);
    }
    HYPER.Timer.setTimer = function (seconds, callback) {


        var ticks = HYPER.Timer.fps * seconds;
        var timer = function () {

            if (HYPER.Timer.tick === timer.originTime + ticks) {
                timer.callback();
                HYPER.Timer.removeChild(this);
            }
        }
        timer._ID = "" + Math.random() + "" + Math.random();
        timer.originTime = HYPER.Timer.tick;
        timer.callback = callback;
        HYPER.Timer.children.push(timer);
    }
    HYPER.Timer.removeChild = function (child) {
        for (let i = 0; i < HYPER.Timer.children.length; i++) {
            if (child._ID = HYPER.Timer.children[i]._ID) {
                HYPER.Timer.children.splice(i, 1);
            }
        }
    }

    HYPER.Timer.Ticker = function () {

        requestAnimationFrame(HYPER.Timer.Ticker);

        HYPER.Timer.now = Date.now();
        HYPER.Timer.delta = HYPER.Timer.now - HYPER.Timer.then;

        if (HYPER.Timer.delta > HYPER.Timer.interval) {
            // update time stuffs

            // Just `then = now` is not enough.
            // Lets say we set fps at 10 which means
            // each frame must take 100ms
            // Now frame executes in 16ms (60fps) so
            // the loop iterates 7 times (16*7 = 112ms) until
            // delta > interval === true
            // Eventually this lowers down the FPS as
            // 112*10 = 1120ms (NOT 1000ms).
            // So we have to get rid of that extra 12ms
            // by subtracting delta (112) % interval (100).
            // Hope that makes sense.

            HYPER.Timer.then = HYPER.Timer.now - (HYPER.Timer.delta % HYPER.Timer.interval);

            for (let i = 0; i < HYPER.Timer.children.length; i++) {
                HYPER.Timer.children[i](HYPER.Timer.tick);
            }
            HYPER.Timer.tick++;

        }
    }
    HYPER.Timer.init = function () {
        HYPER.Timer.Ticker();
    };
})();


(function () {
    "use strict";
    /**
     * Keep track of all pointers and keys.
     * @namespace HYPER.Input
     */
    HYPER.Input = {};

    /**
     * Keep track of all pointers.
     * @namespace HYPER.Input.Pointer
     */

    HYPER.Input.Pointer = {

        /**
         * @property {array} point - Array for all ten pointer objects. 
         */

        point: [],



        /**
         * Returns a pointer object, leave blank for a basic mouse.
         * @method HYPER.Input.Pointer.getPointer
         * @param {number} ID - The ID of the pointer you want.
         */

        getPointer: function (ID) {
            ID = ID || 0;
            return this.point[ID];
        },

        /**
         * Returns if a pointer is being clicked.
         * @method HYPER.Input.Pointer.getClick
         * @param {number} ID - The ID of the pointer you want.
         */

        getClick: function (ID) {
            ID = ID || 0;
            return this.point[ID].click;
        },

        /**
         * Returns if a pointer is being held.
         * @method HYPER.Input.Pointer.getHold
         * @param {number} ID - The ID of the pointer you want.
         */

        getHold: function (ID) {
            ID = ID || 0;
            return this.point[ID].click;
        },

        /**
         * Returns if a pointer is clicked Up.
         * @method HYPER.Input.Pointer.getUp
         * @param {number} ID - The ID of the pointer you want.
         */

        getUp: function (ID) {
            ID = ID || 0;
            return this.point[ID].click;
        },

        /**
         * Returns if a pointer is clicked Down.
         * @method HYPER.Input.Pointer.getDown
         * @param {number} ID - The ID of the pointer you want.
         */

        getDown: function (ID) {
            ID = ID || 0;
            return this.point[ID].click;
        },

        /**
         * Returns the position of the pointer on the page.
         * @method HYPER.Input.Pointer.getPosition
         * @param {number} ID - The ID of the pointer you want.
         */

        getPosition: function (ID) {
            ID = ID || 0;
            return {
                x: this.point[ID].x,
                y: this.point[ID].y,
            };
        },

        /**
         * @property {object} _listeners - The event listeners for pointers.
         */

        _listeners: {

            /**
             * Function to be called on the mouse move event.
             * @method HYPER.Input.Pointer._listeners.mousemove
             * @param {object} e - The info to be passed from the event.
             */

            mousemove: function (e) {
                // Prevent the default action from occurring.
                e.preventDefault();
                // Set the X coordinate of the click
                HYPER.Input.Pointer.point[0]._x = e.pageX;
                // Set the Y coordinate of the click
                HYPER.Input.Pointer.point[0]._y = e.pageY;
            },

            /**
             * Function to be called on the mouse down event.
             * @method HYPER.Input.Pointer._listeners.mousedown
             * @param {object} e - The info to be passed from the event.
             */

            mousedown: function (e) {
                // Prevent the default action from occurring.
                e.preventDefault();
                // Set the X coordinate of the click
                HYPER.Input.Pointer.point[0]._x = e.pageX;
                // Set the Y coordinate of the click
                HYPER.Input.Pointer.point[0]._y = e.pageY;
                // record that the click is being pressed down
                HYPER.Input.Pointer.point[0]._down = true;
                // record that the click is being held down
                HYPER.Input.Pointer.point[0]._hold = true;

            },

            /**
             * Function to be called on the mouse up event.
             * @method HYPER.Input.Pointer._listeners.mouseup
             * @param {object} e - The info to be passed from the event.
             */

            mouseup: function (e) {
                // Prevent the default action from occurring.
                e.preventDefault();
                // Set the X coordinate of the click
                HYPER.Input.Pointer.point[0]._x = e.pageX;
                // Set the Y coordinate of the click
                HYPER.Input.Pointer.point[0]._y = e.pageY;
                // record that the click is being pressed up
                HYPER.Input.Pointer.point[0]._up = true;
                // record that the click is no longer being pressed down
                HYPER.Input.Pointer.point[0]._hold = false;
            },

            /**
             * Function to be called on the touchmove event.
             * @method HYPER.Input.Pointer._listeners.touchmove
             * @param {object} e - The info to be passed from the event.
             */

            touchmove: function (e) {
                // Prevent the default action from occurring.
                e.preventDefault();
                // Set the X coordinate of the touchpoint
                HYPER.Input.Pointer.point[e.which]._x = e.changedTouches[e.which].pageX;
                // Set the Y coordinate of the touchpoint
                HYPER.Input.Pointer.point[e.which]._y = e.changedTouches[e.which].pageY;
            },

            /**
             * Function to be called on the touch start event.
             * @method HYPER.Input.Pointer._listeners.touchstart
             * @param {object} e - The info to be passed from the event.
             */

            touchstart: function (e) {
                // Prevent the default action from occurring.
                e.preventDefault();
                // Set the X coordinate of the touchpoint
                HYPER.Input.Pointer.point[e.which]._x = e.changedTouches[e.which].pageX;
                // Set the Y coordinate of the touchpoint
                HYPER.Input.Pointer.point[e.which]._y = e.changedTouches[e.which].pageY;
                // record that the touchpoint is being pressed down
                HYPER.Input.Pointer.point[e.which]._down = true;
                // record that the touchpoint is being held down
                HYPER.Input.Pointer.point[e.which]._hold = true;

            },

            /**
             * Function to be called on the touch end event.
             * @method HYPER.Input.Pointer._listeners.touchend
             * @param {object} e - The info to be passed from the event.
             */

            touchend: function (e) {
                // Prevent the default action from occurring.
                e.preventDefault();
                // Set the X coordinate of the touchpoint
                HYPER.Input.Pointer.point[e.which]._x = e.changedTouches[e.which].pageX;
                // Set the Y coordinate of the touchpoint
                HYPER.Input.Pointer.point[e.which]._y = e.changedTouches[e.which].pageY;
                // record that the touchpoint is being pressed up
                HYPER.Input.Pointer.point[e.which]._up = true;
                // record that the touchpoint is no longer being held down
                HYPER.Input.Pointer.point[e.which]._hold = false;

            },

            /**
             * Function to be called on any listerners you dont want to do anything.
             * @method HYPER.Input.Pointer._listeners.preventDefault
             * @param {object} e - The info to be passed from the event.
             */

            preventDefault: function (e) {
                e.preventDefault();
            },

        },

    };

    /**
     * Keep track of all keys.
     * @namespace HYPER.Input.Keys
     */
    HYPER.Input.Keys = {

        /**
         * @property {array} key - Array of all key according to JavaScript Key Codes.
         */

        key: [],

        /**
         * Returns a key object.
         * @method HYPER.Input.Keys.getKey
         * @param {string} letter - The key you are checking for.
         */

        getKey: function (letter) {
            letter = letter.toLocaleLowerCase();
            if (letter === "backspace") {
                return HYPER.Input.Keys.key[8];
            }
            if (letter === "tab") {
                return HYPER.Input.Keys.key[9];
            }
            if (letter === "enter") {
                return HYPER.Input.Keys.key[13];
            }
            if (letter === "shift") {
                return HYPER.Input.Keys.key[16];
            }
            if (letter === "ctrl") {
                return HYPER.Input.Keys.key[17];
            }
            if (letter === "alt") {
                return HYPER.Input.Keys.key[18];
            }
            if (letter === "pause/break") {
                return HYPER.Input.Keys.key[19];
            }
            if (letter === "caps lock") {
                return HYPER.Input.Keys.key[20];
            }
            if (letter === "escape") {
                return HYPER.Input.Keys.key[27];
            }
            if (letter === "page up") {
                return HYPER.Input.Keys.key[33];
            }
            if (letter === "page down") {
                return HYPER.Input.Keys.key[34];
            }
            if (letter === "end") {
                return HYPER.Input.Keys.key[35];
            }
            if (letter === "home") {
                return HYPER.Input.Keys.key[36];
            }
            if (letter === "left arrow") {
                return HYPER.Input.Keys.key[37];
            }
            if (letter === "up arrow") {
                return HYPER.Input.Keys.key[38];
            }
            if (letter === "right arrow") {
                return HYPER.Input.Keys.key[39];
            }
            if (letter === "down arrow") {
                return HYPER.Input.Keys.key[40];
            }
            if (letter === "space") {
                return HYPER.Input.Keys.key[32];
            }
            if (letter === "insert") {
                return HYPER.Input.Keys.key[45];
            }
            if (letter === "delete") {
                return HYPER.Input.Keys.key[46];
            }
            if (letter === "0") {
                return HYPER.Input.Keys.key[48];
            }
            if (letter === "1") {
                return HYPER.Input.Keys.key[49];
            }
            if (letter === "2") {
                return HYPER.Input.Keys.key[50];
            }
            if (letter === "3") {
                return HYPER.Input.Keys.key[51];
            }
            if (letter === "4") {
                return HYPER.Input.Keys.key[52];
            }
            if (letter === "5") {
                return HYPER.Input.Keys.key[53];
            }
            if (letter === "6") {
                return HYPER.Input.Keys.key[54];
            }
            if (letter === "7") {
                return HYPER.Input.Keys.key[55];
            }
            if (letter === "8") {
                return HYPER.Input.Keys.key[56];
            }
            if (letter === "9") {
                return HYPER.Input.Keys.key[57];
            }
            if (letter === "a") {
                return HYPER.Input.Keys.key[65];
            }
            if (letter === "b") {
                return HYPER.Input.Keys.key[66];
            }
            if (letter === "c") {
                return HYPER.Input.Keys.key[67];
            }
            if (letter === "d") {
                return HYPER.Input.Keys.key[68];
            }
            if (letter === "e") {
                return HYPER.Input.Keys.key[69];
            }
            if (letter === "f") {
                return HYPER.Input.Keys.key[70];
            }
            if (letter === "g") {
                return HYPER.Input.Keys.key[71];
            }
            if (letter === "h") {
                return HYPER.Input.Keys.key[72];
            }
            if (letter === "i") {
                return HYPER.Input.Keys.key[73];
            }
            if (letter === "j") {
                return HYPER.Input.Keys.key[74];
            }
            if (letter === "k") {
                return HYPER.Input.Keys.key[75];
            }
            if (letter === "l") {
                return HYPER.Input.Keys.key[76];
            }
            if (letter === "m") {
                return HYPER.Input.Keys.key[77];
            }
            if (letter === "n") {
                return HYPER.Input.Keys.key[78];
            }
            if (letter === "o") {
                return HYPER.Input.Keys.key[79];
            }
            if (letter === "p") {
                return HYPER.Input.Keys.key[80];
            }
            if (letter === "q") {
                return HYPER.Input.Keys.key[81];
            }
            if (letter === "r") {
                return HYPER.Input.Keys.key[82];
            }
            if (letter === "s") {
                return HYPER.Input.Keys.key[83];
            }
            if (letter === "t") {
                return HYPER.Input.Keys.key[84];
            }
            if (letter === "u") {
                return HYPER.Input.Keys.key[85];
            }
            if (letter === "v") {
                return HYPER.Input.Keys.key[86];
            }
            if (letter === "w") {
                return HYPER.Input.Keys.key[87];
            }
            if (letter === "x") {
                return HYPER.Input.Keys.key[88];
            }
            if (letter === "y") {
                return HYPER.Input.Keys.key[89];
            }
            if (letter === "z") {
                return HYPER.Input.Keys.key[90];
            }
            if (letter === "left window key") {
                return HYPER.Input.Keys.key[91];
            }
            if (letter === "right window key") {
                return HYPER.Input.Keys.key[92];
            }
            if (letter === "select key") {
                return HYPER.Input.Keys.key[93];
            }
            if (letter === "numpad 0") {
                return HYPER.Input.Keys.key[96];
            }
            if (letter === "numpad 1") {
                return HYPER.Input.Keys.key[97];
            }
            if (letter === "numpad 2") {
                return HYPER.Input.Keys.key[98];
            }
            if (letter === "numpad 3") {
                return HYPER.Input.Keys.key[99];
            }
            if (letter === "numpad 4") {
                return HYPER.Input.Keys.key[100];
            }
            if (letter === "numpad 5") {
                return HYPER.Input.Keys.key[101];
            }
            if (letter === "numpad 6") {
                return HYPER.Input.Keys.key[102];
            }
            if (letter === "numpad 7") {
                return HYPER.Input.Keys.key[103];
            }
            if (letter === "numpad 8") {
                return HYPER.Input.Keys.key[104];
            }
            if (letter === "numpad 9") {
                return HYPER.Input.Keys.key[105];
            }
            if (letter === "multiply") {
                return HYPER.Input.Keys.key[106];
            }
            if (letter === "add") {
                return HYPER.Input.Keys.key[107];
            }
            if (letter === "subtract") {
                return HYPER.Input.Keys.key[109];
            }
            if (letter === "decimal point") {
                return HYPER.Input.Keys.key[110];
            }
            if (letter === "divide") {
                return HYPER.Input.Keys.key[111];
            }
            if (letter === "f1") {
                return HYPER.Input.Keys.key[112];
            }
            if (letter === "f2") {
                return HYPER.Input.Keys.key[113];
            }
            if (letter === "f3") {
                return HYPER.Input.Keys.key[114];
            }
            if (letter === "f4") {
                return HYPER.Input.Keys.key[115];
            }
            if (letter === "f5") {
                return HYPER.Input.Keys.key[116];
            }
            if (letter === "f6") {
                return HYPER.Input.Keys.key[117];
            }
            if (letter === "f7") {
                return HYPER.Input.Keys.key[118];
            }
            if (letter === "f8") {
                return HYPER.Input.Keys.key[119];
            }
            if (letter === "f9") {
                return HYPER.Input.Keys.key[120];
            }
            if (letter === "f10") {
                return HYPER.Input.Keys.key[121];
            }
            if (letter === "f11") {
                return HYPER.Input.Keys.key[122];
            }
            if (letter === "f12") {
                return HYPER.Input.Keys.key[123];
            }
            if (letter === "num lock") {
                return HYPER.Input.Keys.key[144];
            }
            if (letter === "scroll lock") {
                return HYPER.Input.Keys.key[145];
            }
            if (letter === "semi-colon") {
                return HYPER.Input.Keys.key[186];
            }
            if (letter === "equal sign") {
                return HYPER.Input.Keys.key[187];
            }
            if (letter === "comma") {
                return HYPER.Input.Keys.key[188];
            }
            if (letter === "dash") {
                return HYPER.Input.Keys.key[189];
            }
            if (letter === "period") {
                return HYPER.Input.Keys.key[190];
            }
            if (letter === "forward slash") {
                return HYPER.Input.Keys.key[191];
            }
            if (letter === "grave accent") {
                return HYPER.Input.Keys.key[192];
            }
            if (letter === "open bracket") {
                return HYPER.Input.Keys.key[219];
            }
            if (letter === "back slash") {
                return HYPER.Input.Keys.key[220];
            }
            if (letter === "close braket") {
                return HYPER.Input.Keys.key[221];
            }
            if (letter === "single quote") {
                return HYPER.Input.Keys.key[222];
            }
        },

        getKeyFromID: function (ID) {
            if (ID === 8) {
                return "backspace";
            }
            if (ID === 9) {
                return "tab";
            }
            if (ID === 13) {
                return "enter";
            }
            if (ID === 16) {
                return "shift";
            }
            if (ID === 17) {
                return "ctrl";
            }
            if (ID === 18) {
                return "alt";
            }
            if (ID === 19) {
                return "pause/break";
            }
            if (ID === 20) {
                return "caps lock";
            }
            if (ID === 27) {
                return "escape";
            }
            if (ID === 33) {
                return "page up";
            }
            if (ID === 34) {
                return "page down";
            }
            if (ID === 35) {
                return "end";
            }
            if (ID === 36) {
                return "home";
            }
            if (ID === 37) {
                return "left arrow";
            }
            if (ID === 38) {
                return "up arrow";
            }
            if (ID === 39) {
                return "right arrow";
            }
            if (ID === 40) {
                return "down arrow";
            }
            if (ID === 32) {
                return "space";
            }
            if (ID === 45) {
                return "insert";
            }
            if (ID === 46) {
                return "delete";
            }
            if (ID === 48) {
                return "0";
            }
            if (ID === 49) {
                return "1";
            }
            if (ID === 50) {
                return "2";
            }
            if (ID === 51) {
                return "3";
            }
            if (ID === 52) {
                return "4";
            }
            if (ID === 53) {
                return "5";
            }
            if (ID === 54) {
                return "6";
            }
            if (ID === 55) {
                return "7";
            }
            if (ID === 56) {
                return "8";
            }
            if (ID === 57) {
                return "9";
            }
            if (ID === 65) {
                return "a";
            }
            if (ID === 66) {
                return "b";
            }
            if (ID === 67) {
                return "c";
            }
            if (ID === 68) {
                return "d";
            }
            if (ID === 69) {
                return "e";
            }
            if (ID === 70) {
                return "f";
            }
            if (ID === 71) {
                return "g";
            }
            if (ID === 72) {
                return "h";
            }
            if (ID === 73) {
                return "i";
            }
            if (ID === 74) {
                return "j";
            }
            if (ID === 75) {
                return "k";
            }
            if (ID === 76) {
                return "l";
            }
            if (ID === 77) {
                return "m";
            }
            if (ID === 78) {
                return "n";
            }
            if (ID === 79) {
                return "o";
            }
            if (ID === 80) {
                return "p";
            }
            if (ID === 81) {
                return "q";
            }
            if (ID === 82) {
                return "r";
            }
            if (ID === 83) {
                return "s";
            }
            if (ID === 84) {
                return "t";
            }
            if (ID === 85) {
                return "u";
            }
            if (ID === 86) {
                return "v";
            }
            if (ID === 87) {
                return "w";
            }
            if (ID === 88) {
                return "x";
            }
            if (ID === 89) {
                return "y";
            }
            if (ID === 90) {
                return "z";
            }
            if (ID === 91) {
                return "left window key";
            }
            if (ID === 92) {
                return "right window key";
            }
            if (ID === 93) {
                return "select key";
            }
            if (ID === 96) {
                return "numpad 0";
            }
            if (ID === 97) {
                return "numpad 1";
            }
            if (ID === 98) {
                return "numpad 2";
            }
            if (ID === 99) {
                return "numpad 3";
            }
            if (ID === 100) {
                return "numpad 4";
            }
            if (ID === 101) {
                return "numpad 5";
            }
            if (ID === 102) {
                return "numpad 6";
            }
            if (ID === 103) {
                return "numpad 7";
            }
            if (ID === 104) {
                return "numpad 8";
            }
            if (ID === 105) {
                return "numpad 9";
            }
            if (ID === 106) {
                return "multiply";
            }
            if (ID === 107) {
                return "add";
            }
            if (ID === 109) {
                return "subtract";
            }
            if (ID === 110) {
                return "decimal point";
            }
            if (ID === 111) {
                return "divide";
            }
            if (ID === 112) {
                return "f1";
            }
            if (ID === 113) {
                return "f2";
            }
            if (ID === 114) {
                return "f3";
            }
            if (ID === 115) {
                return "f4";
            }
            if (ID === 116) {
                return "f5";
            }
            if (ID === 117) {
                return "f6";
            }
            if (ID === 118) {
                return "f7";
            }
            if (ID === 119) {
                return "f8";
            }
            if (ID === 120) {
                return "f9";
            }
            if (ID === 121) {
                return "f10";
            }
            if (ID === 122) {
                return "f11";
            }
            if (ID === 123) {
                return "f12";
            }
            if (ID === 144) {
                return "num lock";
            }
            if (ID === 145) {
                return "scroll lock";
            }
            if (ID === 186) {
                return "semi-colon";
            }
            if (ID === 187) {
                return "equal sign";
            }
            if (ID === 188) {
                return "comma";
            }
            if (ID === 189) {
                return "dash";
            }
            if (ID === 190) {
                return "period";
            }
            if (ID === 191) {
                return "forward slash";
            }
            if (ID === 192) {
                return "grave accent";
            }
            if (ID === 219) {
                return "open bracket";
            }
            if (ID === 220) {
                return "back slash";
            }
            if (ID === 221) {
                return "close braket";
            }
            if (ID === 222) {
                return "single quote";
            }
        },

        /**
         * @private
         * @property {object} _listeners - The event listeners for keys.
         */

        _listeners: {

            /**
             * Event listener function that fires when a key is lifted.
             * @method HYPER.Input.Keys._listeners.onkeyup
             * @param {number}data - pointer data of the click.
             */

            onkeyup: function (e) {
                // record that you are lifting up.
                HYPER.Input.Keys.key[e.which]._up = true;
                // sets the hold value to false
                HYPER.Input.Keys.key[e.which]._hold = false;
            },

            /**
             * Event listener function that fires when a key is pushed.
             * @method HYPER.Input.Keys._listeners.onkeydown
             * @param {number}data - pointer data of the click.
             */

            onkeydown: function (e) {
                // record that you are pressing down
                HYPER.Input.Keys.key[e.which]._down = true;
                // sets the hold value to true
                HYPER.Input.Keys.key[e.which]._hold = true;
            },
        },
    };


    /**
      Initilize all the event listeners that will be used
     */
    HYPER.Input._addEventListeners = function () {

        // check to see if mobile.
        if (mobileAndTabletcheck()) {
            // Init the touchmove listener
            document.addEventListener("touchmove", HYPER.Input.Pointer._listeners.touchmove);
            // Init the touchstart listener
            document.addEventListener("touchstart", HYPER.Input.Pointer._listeners.touchstart);
            // Init the touchend listener
            document.addEventListener("touchend", HYPER.Input.Pointer._listeners.touchend);
            // Init the touchcancel listener
            document.addEventListener("touchcancel", HYPER.Input.Pointer._listeners.touchend);
        } else {
            // Init the mousemove listener
            document.addEventListener("mousemove", HYPER.Input.Pointer._listeners.mousemove);
            // Init the mousedown listener
            document.addEventListener("mousedown", HYPER.Input.Pointer._listeners.mousedown);
            // Init the mouseup listener
            document.addEventListener("mouseup", HYPER.Input.Pointer._listeners.mouseup);
        }


        // Init the keydown listener
        window.addEventListener("keydown", HYPER.Input.Keys._listeners.onkeydown);
        // Init the keyup listener
        window.addEventListener("keyup", HYPER.Input.Keys._listeners.onkeyup);
        // set drag to prevent default to smooth out game.
        window.addEventListener("drag", HYPER.Input.Pointer._listeners.preventDefault);

    };


    HYPER.Input.screens = [];
    HYPER.Input.addScreen = function (screen) {
        HYPER.Input.screens.push(screen);
    };
    /**
      Initilize the Input module. 
     */
    HYPER.Input.init = function () {
        for (let i = 0; i < 10; i++) {
            HYPER.Input.Pointer.point[i] = {
                x: 0,
                y: 0,
                up: false,
                down: false,
                hold: false,
                dblclick: false,

                _x: 0,
                _y: 0,
                _up: false,
                _down: false,
                _hold: false,
                _dblclick: false,
            };
        };
        for (let i = 0; i < 300; i++) {
            if (!HYPER.Input.Keys.key[i]) {
                HYPER.Input.Keys.key[i] = {
                    _up: false,
                    _down: false,
                    _hold: false,
                    up: false,
                    down: false,
                    hold: false,
                    _ID: i,
                };
            }

            HYPER.Input.Keys.key[i].up = HYPER.Input.Keys.key[i]._up;
            HYPER.Input.Keys.key[i].down = HYPER.Input.Keys.key[i]._down;
            HYPER.Input.Keys.key[i].hold = HYPER.Input.Keys.key[i]._hold;
            HYPER.Input.Keys.key[i]._up = false;
            HYPER.Input.Keys.key[i]._down = false;

        };
        HYPER.Input._addEventListeners();

        function updateInput() {
            for (let i = 0; i < 10; i++) {
                HYPER.Input.Pointer.point[i].x = HYPER.Input.Pointer.point[i]._x;
                HYPER.Input.Pointer.point[i].y = HYPER.Input.Pointer.point[i]._y;
                HYPER.Input.Pointer.point[i].up = HYPER.Input.Pointer.point[i]._up;
                HYPER.Input.Pointer.point[i].down = HYPER.Input.Pointer.point[i]._down;
                HYPER.Input.Pointer.point[i].hold = HYPER.Input.Pointer.point[i]._hold;
                HYPER.Input.Pointer.point[i].dblclick = HYPER.Input.Pointer.point[i]._dblclick;
                HYPER.Input.Pointer.point[i].click = HYPER.Input.Pointer.point[i]._up;


                HYPER.Input.Pointer.point[i]._up = false;
                HYPER.Input.Pointer.point[i]._down = false;
                HYPER.Input.Pointer.point[i]._dblclick = false;

                for (let s = 0; s < HYPER.Input.screens.length; s++) {
                    if (HYPER.Input.Pointer.point[i].click) {
                        HYPER.Input.screens[s]._onClick(i);
                    }
                    if (HYPER.Input.Pointer.point[i].up) {
                        HYPER.Input.screens[s]._onUp(i);
                    }
                    if (HYPER.Input.Pointer.point[i].down) {

                        HYPER.Input.screens[s]._onDown(i);

                    }
                    if (HYPER.Input.Pointer.point[i].hold) {
                        HYPER.Input.screens[s]._onHold(i);
                    }
                    if (HYPER.Input.Pointer.point[i].dblclick) {
                        HYPER.Input.screens[s]._onDblClick(i);
                    }
                }

            };
            for (let i = 0; i < 300; i++) {
                HYPER.Input.Keys.key[i].up = HYPER.Input.Keys.key[i]._up;
                HYPER.Input.Keys.key[i].down = HYPER.Input.Keys.key[i]._down;
                HYPER.Input.Keys.key[i].hold = HYPER.Input.Keys.key[i]._hold;

                HYPER.Input.Keys.key[i]._up = false;
                HYPER.Input.Keys.key[i]._down = false;


                for (let s = 0; s < HYPER.Input.screens.length; s++) {
                    if (HYPER.Input.Keys.key[i].up) {
                        HYPER.Input.screens[s]._onKeyUp(HYPER.Input.Keys.getKeyFromID(i));
                    }
                    if (HYPER.Input.Keys.key[i].down) {
                        HYPER.Input.screens[s]._onKeyDown(HYPER.Input.Keys.getKeyFromID(i));
                    }
                    if (HYPER.Input.Keys.key[i].hold) { HYPER.Input.screens[s]._onKeyHeld(HYPER.Input.Keys.getKeyFromID(i));
                    }
                }

            };

        };

        HYPER.Timer.addOnTick(updateInput);

    };
})();


(function () {
    "use strict";
    /**
     * Preload images, spritesheets, and sounds.
     * @namespace HYPER.Preload
     */

    HYPER.Preload = {

        /**
         * @property {object} info - Stores how many files have loaded and how many files need to be loaded.
         */

        info: {

            /**
             * @property {object} info.load - Total amount of assets that need to be loaded.
             */

            load: 0,

            /**
             * @property {object} info.load - Total amount of assets that are loaded so far.
             */

            loaded: 0,
        },

        /**
         * Returns the amount of assets that have been loaded so far.
         * @method HYPER.Preload.getNumberLoaded
         */

        getNumberLoaded: function () {
            // return the amount of loaded assets
            return HYPER.Preload.info.loaded;
        },

        /**
         * Returns the amount of assets that need to be loaded.
         * @method HYPER.Preload.getNeededLoaded
         */

        getNeededLoaded: function () {
            // return amount of total assets.
            return HYPER.Preload.info.load;
        },
        /**
         * Returns the amount of assets that have been loaded as a decimal.
         * @method HYPER.Preload.getLoaded
         */

        getLoaded: function () {
            // returns decemal of assets loaded out of all assets.
            return HYPER.Preload.info.loaded / HYPER.Preload.info.load;
        },




    };
})();


(function () {
    "use strict";

    /**
     * Create a sprite sheet
     * @class HYPER.Preload.Bitmap
     * @param {object} e Info used to create the Bitmap.
     * @param {string} e.src The sourse of the image file for the Bitmap.
     * @param {function} e.onload What to do when the image loads.
     */
    HYPER.Preload.Bitmap = function (e) {

        /**
         * @property {string} _ID - The specific ID for this object.
         */

        this._ID = "bitmap " + Math.random() + "" + Math.random();

        /**
         * @property {string} type - The type of object this is.
         */

        this.type = "bitmap";

        /**
         * @property {object} image - The image object to be loaded.
         */

        this.image = new Image();
        this.image.src = e.src;

        /**
         * @property {object} bitmap - The canvas that the image draws to.
         */

        this.bitmap = document.createElement("canvas");

        /**
         * @property {object} ctx - The context that the image draws to.
         */

        this.ctx = this.bitmap.getContext("2d");

        /**
         * @private
         * @property {object} flippedX - The info for a horazontly flipped image.
         */

        this.flippedX = {};

        /**
         * @private
         * @property {object} flippedY - The info for a verticaly flipped image.
         */

        this.flippedY = {};

        /**
         * @private
         * @property {object} flippedXY - The info for a verticaly and horazontly flipped image.
         */

        this.flippedXY = {};

        /**
         * @private
         * @property {object} flippedX.bitmap - The canvas for a horazontly flipped image.
         */

        this.flippedX.bitmap = document.createElement("canvas");

        /**
         * @private
         * @property {object} flippedX.ctx - The context for a horazontly flipped image.
         */

        this.flippedX.ctx = this.flippedX.bitmap.getContext("2d");

        /**
         * @private
         * @property {object} flippedY.bitmap - The canvas for a verticaly flipped image.
         */

        this.flippedY.bitmap = document.createElement("canvas");

        /**
         * @private
         * @property {object} flippedY.ctx - The context for a verticaly flipped image.
         */

        this.flippedY.ctx = this.flippedY.bitmap.getContext("2d");

        /**
         * @private
         * @property {object} flippedXY.bitmap - The canvas for a verticaly and horazontly flipped image.
         */

        this.flippedXY.bitmap = document.createElement("canvas");

        /**
         * @private
         * @property {object} flippedXY.ctx - The context for a verticaly and horazontly flipped image.
         */

        this.flippedXY.ctx = this.flippedXY.bitmap.getContext("2d");

        /**
         * @property {function} onload - What to do when the image loads.
         */

        this.onload = e.onload || no0p;

        // add to total amount of assets.
        HYPER.Preload.info.load++;

        // Set that to this.
        var that = this;

        // when the image loads
        this.image.onload = function () {
            // set the bitmap width to the images width
            that.bitmap.width = that.image.width;
            that.flippedX.bitmap.width = that.image.width;
            that.flippedY.bitmap.width = that.image.width;
            that.flippedXY.bitmap.width = that.image.width;
            // set the bitmap height to the images height
            that.bitmap.height = that.image.height;
            that.flippedX.bitmap.height = that.image.height;
            that.flippedY.bitmap.height = that.image.height;
            that.flippedXY.bitmap.height = that.image.height;
            // set the width to the images width
            that.width = that.image.width;
            // set the height to the images height
            that.height = that.image.height;
            // draw the image onto the bitmap
            that.ctx.drawImage(that.image, 0, 0, that.image.width, that.image.height, 0, 0, that.bitmap.width, that.bitmap.height);

            that.flippedX.ctx.translate(that.width / 2, that.height / 2);
            that.flippedX.ctx.scale(-1, 1);
            that.flippedX.ctx.drawImage(that.image, 0, 0, that.image.width, that.image.height, -that.width / 2, -that.height / 2, that.flippedX.bitmap.width, that.flippedX.bitmap.height);
            that.flippedX.ctx.scale(-1, 1);
            that.flippedX.ctx.translate(-that.width / 2, -that.height / 2);

            that.flippedY.ctx.translate(that.width / 2, that.height / 2);
            that.flippedY.ctx.scale(1, -1);
            that.flippedY.ctx.drawImage(that.image, 0, 0, that.image.width, that.image.height, -that.width / 2, -that.height / 2, that.flippedY.bitmap.width, that.flippedY.bitmap.height);
            that.flippedY.ctx.scale(1, -1);
            that.flippedY.ctx.translate(-that.width / 2, -that.height / 2);

            that.flippedXY.ctx.translate(that.width / 2, that.height / 2);
            that.flippedXY.ctx.scale(-1, -1);
            that.flippedXY.ctx.drawImage(that.image, 0, 0, that.image.width, that.image.height, -that.width / 2, -that.height / 2, that.flippedXY.bitmap.width, that.flippedXY.bitmap.height);
            that.flippedXY.ctx.scale(-1, -1);
            that.flippedXY.ctx.translate(-that.width / 2, -that.height / 2);

            // mark this image as loaded
            HYPER.Preload.info.loaded++;
            // run user specified onload function.
            that.onload();
        };
    };

    HYPER.Preload.Bitmap.prototype = {
        /**
         * Draws to the bitmap, uses same methods that HYPER.Graphics.Draw uses. 
         * @method HYPER.Preload.Bitmap.draw
         * @param {HYPER.Graphics.Style} style - the style used to draw.
         */

        draw: function (style) {

            return HYPER.Graphics.Draw(this.ctx, style);

        },

        /**
         * Clears the bitmap.
         * @method HYPER.Preload.Bitmap.clear
         */

        clear: function () {

            HYPER.Graphics.Draw(this.ctx)
                .clearRect(
                    0,
                    0,
                    this.bitmap.width,
                    this.bitmap.height);

        },
    };

})();


(function () {
    "use strict";
    /**
     * Create a sprite sheet
     * @class HYPER.Preload.SpriteSheet
     * @param {object} e Info used to create the spritesheet.
     * @param {string} e.src The sourse of the image file for the spritesheet.
     * @param {number} [e.wide = 1] The number of frames wide the image is.
     * @param {number} [e.tall = 1] The number of frames tall the image is.
     */
    HYPER.Preload.SpriteSheet = function (e) {
        /**
         * @property {string} _ID - The specific ID for this object.
         */

        this._ID = "spritesheet " + Math.random() + "" + Math.random();

        /**
         * @property {string} type - The type of object this is.
         */

        this.type = "spritesheet";

        /**
         * @property {function} onload - Called when the spritesheet loads.
         */

        this.onload = e.onload || no0p;

        /**
         * @property {function} image - Image object.
         */

        this.image = new Image();

        // set the source of the image object
        this.image.src = e.src;

        /**
         * @property {object} bitmap - The canvas that the new bitmap uses.
         */

        this.bitmap = document.createElement("canvas");

        /**
         * @property {object} ctx - The context that the new bitmap uses.
         */

        this.ctx = this.bitmap.getContext("2d");

        /**
         * @private
         * @property {object} flippedX - The info for a horazontly flipped sprite.
         */

        this.flippedX = {};

        /**
         * @private
         * @property {object} flippedY - The info for a verticaly flipped sprite.
         */

        this.flippedY = {};

        /**
         * @private
         * @property {object} flippedXY - The info for a verticaly and horazontly flipped sprite.
         */

        this.flippedXY = {};

        /**
         * @private
         * @property {object} flippedX.bitmap - The canvas for a horazontly flipped sprite.
         */

        this.flippedX.bitmap = document.createElement("canvas");

        /**
         * @private
         * @property {object} flippedX.ctx - The context for a horazontly flipped sprite.
         */

        this.flippedX.ctx = this.flippedX.bitmap.getContext("2d");

        /**
         * @private
         * @property {object} flippedY.bitmap - The canvas for a verticaly flipped sprite.
         */

        this.flippedY.bitmap = document.createElement("canvas");

        /**
         * @private
         * @property {object} flippedY.ctx - The context for a verticaly flipped sprite.
         */

        this.flippedY.ctx = this.flippedY.bitmap.getContext("2d");

        /**
         * @private
         * @property {object} flippedXY.bitmap - The canvas for a verticaly and horazontly flipped sprite.
         */

        this.flippedXY.bitmap = document.createElement("canvas");

        /**
         * @private
         * @property {object} flippedXY.ctx - The context for a verticaly and horazontly flipped sprite.
         */

        this.flippedXY.ctx = this.flippedXY.bitmap.getContext("2d");

        /**
         * @property {object} frames - Data on frame sizes.
         */

        this.frames = e.frames || {};

        /**
         * @property {number} frames.wide=1 - How many frames wide your spritesheet is.
         */

        this.frames.wide = e.frames.wide || 1;

        /**
         * @property {number} frames.tall=1 - How many frames tall your spritesheet is.
         */

        this.frames.tall = e.frames.tall || 1;

        /**
         * @property {array} frameINFO - Array of frame data.
         */

        this.frameINFO = e.frameINFO || [];

        /**
         * @property {number} width - How wide the sprite is.
         */

        this.width = 0;

        /**
         * @property {number} height - How tall the sprite is.
         */

        this.height = 0;



        /**
          Contains all animation objects.
         */
        this.animations = {};



        // Set that to this.
        var that = this;
        // when the image loads
        this.image.onload = function () {
            // set the bitmap width to the images width
            that.bitmap.width = that.image.width;
            that.flippedX.bitmap.width = that.image.width;
            that.flippedY.bitmap.width = that.image.width;
            that.flippedXY.bitmap.width = that.image.width;
            // set the bitmap height to the images height
            that.bitmap.height = that.image.height;
            that.flippedX.bitmap.height = that.image.height;
            that.flippedY.bitmap.height = that.image.height;
            that.flippedXY.bitmap.height = that.image.height;
            // draw the image onto the bitmap
            that.ctx.drawImage(that.image, 0, 0, that.image.width, that.image.height, 0, 0, that.bitmap.width, that.bitmap.height);

            // Set the frames.
            that.setFramesOBJ(that.frames);

            that.width = that.width || that.frames.wide / that.bitmap.width;
            that.height = that.height || that.frames.tall / that.bitmap.height;
            // STILL NEED TO SET THE FLIPPED IMAGES WIDTH AND HEIGHTS!!!

            that.flippedX.ctx.translate(that.image.width / 2, that.image.height / 2);
            that.flippedX.ctx.scale(-1, 1);
            that.flippedX.ctx.drawImage(that.image, 0, 0, that.image.width, that.image.height, -that.image.width / 2, -that.image.height / 2, that.flippedX.bitmap.width, that.flippedX.bitmap.height);
            that.flippedX.ctx.scale(-1, 1);
            that.flippedX.ctx.translate(-that.image.width / 2, -that.image.height / 2);

            that.flippedY.ctx.translate(that.image.width / 2, that.image.height / 2);
            that.flippedY.ctx.scale(1, -1);
            that.flippedY.ctx.drawImage(that.image, 0, 0, that.image.width, that.image.height, -that.image.width / 2, -that.image.height / 2, that.flippedY.bitmap.width, that.flippedY.bitmap.height);
            that.flippedY.ctx.scale(1, -1);
            that.flippedY.ctx.translate(-that.image.width / 2, -that.image.height / 2);

            that.flippedXY.ctx.translate(that.image.width / 2, that.image.height / 2);
            that.flippedXY.ctx.scale(-1, -1);
            that.flippedXY.ctx.drawImage(that.image, 0, 0, that.image.width, that.image.height, -that.image.width / 2, -that.image.height / 2, that.flippedXY.bitmap.width, that.flippedXY.bitmap.height);
            that.flippedXY.ctx.scale(-1, -1);
            that.flippedXY.ctx.translate(-that.image.width / 2, -that.image.height / 2);

            // mark this image as loaded
            HYPER.Preload.info.loaded++;
            // run user specified onload function.
            that.onload();
        };

    };

    HYPER.Preload.SpriteSheet.prototype = {
        /**
         * Draws to the bitmap, uses same methods that HYPER.Graphics.Draw uses. 
         * @method HYPER.Preload.SpriteSheet.draw
         * @param {HYPER.Graphics.Style} style - the style used to draw.
         */

        draw: function (style) {

            return HYPER.Graphics.Draw(this.ctx, style);

        },

        /**
         * Clears the bitmap.
         * @method HYPER.Preload.SpriteSheet.clear
         */

        clear: function () {

            HYPER.Graphics.Draw(this.ctx)
                .clearRect(
                    0,
                    0,
                    this.bitmap.width,
                    this.bitmap.height);

        },



        /**
         * Used to create and edit animations.
         * @method HYPER.Preload.SpriteSheet.setAnimation
         * @param {object} animeDATA - Object of info to set.
         * @param {string} animeDATA.name - Name of the animation.
         * @param {array} animeDATA.frames - Array of the frame numbers to make up this animation.
         * @param {string} animeDATA.next - Name of the next animation to play.
         * @param {string} animeDATA.fps=30 - Speed the animation will play.
         * @param {string} animeDATA.loop=false - Should the animation loop its self?
         * @param {string} animeDATA.onLoop - What to do when the animation loops?
         * @param {string} animeDATA.onFrame - What to do when the animation changes frames?
         */

        setAnimation: function (animeDATA) {
            for (let i = 0; i < arguments.length; i++) {
                arguments[i].name = arguments[i].name || "animation" + Math.random() + "" + Math.random();
                this.animations[animeDATA.name] = {};
                this.animations[animeDATA.name].frames = animeDATA.frames || [0];
                this.animations[animeDATA.name].next = animeDATA.next || animeDATA.name;
                this.animations[animeDATA.name].fps = animeDATA.fps || 30;
                this.animations[animeDATA.name].loop = animeDATA.loop || false;
                this.animations[animeDATA.name].onLoop = animeDATA.onLoop || no0p;
                this.animations[animeDATA.name].onFrame = animeDATA.onFrame || no0p;
            }
        },

        /**
         * Used to define custome frames.
         * @method HYPER.Preload.SpriteSheet.setFrames
         * @param {Object[]} a All information used to define custome frames.
         * @param {number} a[].x The X location for the frame.
         * @param {number} a[].y The Y location for the frame.
         * @param {number} a[].width The width of the frame.
         * @param {number} a[].height The height of the frame.
         * @param {number} [a[].regX=0] The X value the frame will be offset by.
         * @param {number} [a[].regY=0] The Y value the frame will be offset by.
         */

        setFrames: function (a) {
            // if a is an array.
            if (Array.isArray(a)) {
                // loop through all a objects
                for (let i = 0; i < a.length; i++) {
                    // set the frameInfo equal to a, so user can define additional information if needed.
                    this.frameINFO[i] = a[i];

                    // This function is executed every time the frame is shown. Makes it possible to play sounds on diffrent frames. 
                    this.frameINFO[i].onFrame = a[i].onFrame || no0p;
                    this.frameINFO[i].x = a[i].x;
                    this.frameINFO[i].y = a[i].y;
                    this.frameINFO[i].width = a[i].width;
                    this.frameINFO[i].height = a[i].height;
                    this.frameINFO[i].regX = a[i].regX || 0;
                    this.frameINFO[i].regY = a[i].regY || 0;
                }
            }
        },
        /**
         * Used to create entire spriteSheet frame selection.
         * @method HYPER.Preload.SpriteSheet.setFramesOBJ
         * @param {object} a - Information used to set the frames.
         * @param {object} a.wide - How many frames wide the spritesheet is.
         * @param {object} a.tall - How many frames tall the spritesheet is.
         * @param {boolean} a.override=true - Override the pre-existing data.
         */

        setFramesOBJ: function (a, override) {
            // If a is defined.
            if (a) {
                override = override || true;
                // The X and Y position of each frame.
                var posX = 0,
                    posY = 0;
                // If you want previous data to be overwritten.
                if (override) {
                    // Loop through all frames.
                    for (let i = 0; i < a.wide * a.tall; i++) {
                        // Calculate the X and Y position of each frame
                        posX = (i % a.wide) * (this.bitmap.width / a.wide);
                        posY = Math.floor(i / a.wide) * (this.bitmap.height / a.tall);
                        // If the current frame info is NOT defined.
                        if (!this.frameINFO[i]) {
                            this.frameINFO[i] = {};
                        }

                        this.frameINFO[i].onFrame = no0p;
                        this.frameINFO[i].x = posX;
                        this.frameINFO[i].y = posY;
                        this.frameINFO[i].width = this.bitmap.width / a.wide;
                        this.frameINFO[i].height = this.bitmap.height / a.tall;
                        this.frameINFO[i].regX = a.regX || this.frameINFO[i].regX || 0;
                        this.frameINFO[i].regY = a.regY || this.frameINFO[i].regY || 0;
                    }
                } else {
                    // Loop through all possible frames.
                    for (let i = 0; i < a.wide * a.tall; i++) {
                        // Calculate the X and Y position of each frame
                        posX = (i % a.wide) * (this.bitmap.width / a.wide);
                        posY = Math.Floor(i / a.wide) * (this.bitmap.height / a.tall);
                        // If the current frame info is NOT defined.
                        if (!this.frameINFO[i]) {
                            this.frameINFO[i] = {};
                        }

                        this.frameINFO[i].x = this.frameINFO[i].x || posX;
                        this.frameINFO[i].y = this.frameINFO[i].y || posY;
                        this.frameINFO[i].width = this.frameINFO[i].width || this.bitmap.width / a.wide;
                        this.frameINFO[i].height = this.frameINFO[i].height || this.bitmap.height / a.tall;
                        this.frameINFO[i].regX = this.frameINFO[i].regX || a.regX || 0;
                        this.frameINFO[i].regY = this.frameINFO[i].regY || a.regY || 0;
                    }
                }




            }
        },

        /**
         * Used to edit individuale frames.
         * @method HYPER.Preload.SpriteSheet.editFrame
         * @param {number} frame - The frame ID that you want edited.
         * @param {object} newFrameINFO - The info you want to change.
         * @param {function} newFrameINFO.onFrame - What to do when the frame is played.
         * @param {function} newFrameINFO.x - X location of frame on spritesheet.
         * @param {function} newFrameINFO.y - Y location of frame on spritesheet.
         * @param {function} newFrameINFO.width - Width of the frame on spritesheet.
         * @param {function} newFrameINFO.height - Height of the frame on spritesheet.
         */

        editFrame: function (frame, newFrameINFO) {
            this.frameINFO[frame].onFrame = newFrameINFO.onFrame || this.frameINFO[frame].onFrame || no0p;
            this.frameINFO[frame].x = newFrameINFO.x || this.frameINFO[frame].x || 0;
            this.frameINFO[frame].y = newFrameINFO.y || this.frameINFO[frame].y || 0;
            this.frameINFO[frame].width = newFrameINFO.width || this.frameINFO[frame].width || 0;
            this.frameINFO[frame].height = newFrameINFO.height || this.frameINFO[frame].height || 0;
            this.frameINFO[frame].regX = newFrameINFO.regX || this.frameINFO[frame].regX || 0;
            this.frameINFO[frame].regY = newFrameINFO.regY || this.frameINFO[frame].regY || 0;
        },
    };
})();


/*!
 *  howler.js v2.0.0
 *  howlerjs.com
 *
 *  (c) 2013-2016, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function () {

    'use strict';

    /** Global Methods **/
    /***************************************************************************/

    /**
     * Create the global controller. All contained methods and properties apply
     * to all sounds that are currently playing or will be in the future.
     */
    var HowlerGlobal = function () {
        this.init();
    };
    HowlerGlobal.prototype = {
        /**
         * Initialize the global Howler object.
         * @return {Howler}
         */
        init: function () {
            var self = this || Howler;

            // Internal properties.
            self._codecs = {};
            self._howls = [];
            self._muted = false;
            self._volume = 1;
            self._canPlayEvent = 'canplaythrough';
            self._navigator = (typeof window !== 'undefined' && window.navigator) ? window.navigator : null;

            // Public properties.
            self.masterGain = null;
            self.noAudio = false;
            self.usingWebAudio = true;
            self.autoSuspend = true;
            self.ctx = null;

            // Set to false to disable the auto iOS enabler.
            self.mobileAutoEnable = true;

            // Setup the various state values for global tracking.
            self._setup();

            return self;
        },

        /**
         * Get/set the global volume for all sounds.
         * @param  {Float} vol Volume from 0.0 to 1.0.
         * @return {Howler/Float}     Returns self or current volume.
         */
        volume: function (vol) {
            var self = this || Howler;
            vol = parseFloat(vol);

            // If we don't have an AudioContext created yet, run the setup.
            if (!self.ctx) {
                setupAudioContext();
            }

            if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
                self._volume = vol;

                // Don't update any of the nodes if we are muted.
                if (self._muted) {
                    return self;
                }

                // When using Web Audio, we just need to adjust the master gain.
                if (self.usingWebAudio) {
                    self.masterGain.gain.value = vol;
                }

                // Loop through and change volume for all HTML5 audio nodes.
                for (var i = 0; i < self._howls.length; i++) {
                    if (!self._howls[i]._webAudio) {
                        // Get all of the sounds in this Howl group.
                        var ids = self._howls[i]._getSoundIds();

                        // Loop through all sounds and change the volumes.
                        for (var j = 0; j < ids.length; j++) {
                            var sound = self._howls[i]._soundById(ids[j]);

                            if (sound && sound._node) {
                                sound._node.volume = sound._volume * vol;
                            }
                        }
                    }
                }

                return self;
            }

            return self._volume;
        },

        /**
         * Handle muting and unmuting globally.
         * @param  {Boolean} muted Is muted or not.
         */
        mute: function (muted) {
            var self = this || Howler;

            // If we don't have an AudioContext created yet, run the setup.
            if (!self.ctx) {
                setupAudioContext();
            }

            self._muted = muted;

            // With Web Audio, we just need to mute the master gain.
            if (self.usingWebAudio) {
                self.masterGain.gain.value = muted ? 0 : self._volume;
            }

            // Loop through and mute all HTML5 Audio nodes.
            for (var i = 0; i < self._howls.length; i++) {
                if (!self._howls[i]._webAudio) {
                    // Get all of the sounds in this Howl group.
                    var ids = self._howls[i]._getSoundIds();

                    // Loop through all sounds and mark the audio node as muted.
                    for (var j = 0; j < ids.length; j++) {
                        var sound = self._howls[i]._soundById(ids[j]);

                        if (sound && sound._node) {
                            sound._node.muted = (muted) ? true : sound._muted;
                        }
                    }
                }
            }

            return self;
        },

        /**
         * Unload and destroy all currently loaded Howl objects.
         * @return {Howler}
         */
        unload: function () {
            var self = this || Howler;

            for (var i = self._howls.length - 1; i >= 0; i--) {
                self._howls[i].unload();
            }

            // Create a new AudioContext to make sure it is fully reset.
            if (self.usingWebAudio && typeof self.ctx.close !== 'undefined') {
                self.ctx.close();
                self.ctx = null;
                setupAudioContext();
            }

            return self;
        },

        /**
         * Check for codec support of specific extension.
         * @param  {String} ext Audio file extention.
         * @return {Boolean}
         */
        codecs: function (ext) {
            return (this || Howler)._codecs[ext.replace(/^x-/, '')];
        },

        /**
         * Setup various state values for global tracking.
         * @return {Howler}
         */
        _setup: function () {
            var self = this || Howler;

            // Keeps track of the suspend/resume state of the AudioContext.
            self.state = self.ctx ? self.ctx.state || 'running' : 'running';

            // Automatically begin the 30-second suspend process
            self._autoSuspend();

            // Check for supported codecs.
            if (!self.noAudio) {
                self._setupCodecs();
            }

            return self;
        },

        /**
         * Check for browser support for various codecs and cache the results.
         * @return {Howler}
         */
        _setupCodecs: function () {
            var self = this || Howler;
            var audioTest = (typeof Audio !== 'undefined') ? new Audio() : null;

            if (!audioTest || typeof audioTest.canPlayType !== 'function') {
                return self;
            }

            var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');

            // Opera version <33 has mixed MP3 support, so we need to check for and block it.
            var checkOpera = self._navigator && self._navigator.userAgent.match(/OPR\/([0-6].)/g);
            var isOldOpera = (checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33);

            self._codecs = {
                mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
                mpeg: !!mpegTest,
                opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
                ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
                oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
                wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
                aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
                caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
                m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
                mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
                weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
                webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
                dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
                flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
            };

            return self;
        },

        /**
         * Mobile browsers will only allow audio to be played after a user interaction.
         * Attempt to automatically unlock audio on the first user interaction.
         * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
         * @return {Howler}
         */
        _enableMobileAudio: function () {
            var self = this || Howler;

            // Only run this on mobile devices if audio isn't already eanbled.
            var isMobile = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(self._navigator && self._navigator.userAgent);
            var isTouch = !!(('ontouchend' in window) || (self._navigator && self._navigator.maxTouchPoints > 0) || (self._navigator && self._navigator.msMaxTouchPoints > 0));
            if (self._mobileEnabled || !self.ctx || (!isMobile && !isTouch)) {
                return;
            }

            self._mobileEnabled = false;

            // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
            // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
            // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
            if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
                self._mobileUnloaded = true;
                self.unload();
            }

            // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
            // http://stackoverflow.com/questions/24119684
            self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);

            // Call this method on touch start to create and play a buffer,
            // then check if the audio actually played to determine if
            // audio has now been unlocked on iOS, Android, etc.
            var unlock = function () {
                // Create an empty buffer.
                var source = self.ctx.createBufferSource();
                source.buffer = self._scratchBuffer;
                source.connect(self.ctx.destination);

                // Play the empty buffer.
                if (typeof source.start === 'undefined') {
                    source.noteOn(0);
                } else {
                    source.start(0);
                }

                // Setup a timeout to check that we are unlocked on the next event loop.
                source.onended = function () {
                    source.disconnect(0);

                    // Update the unlocked state and prevent this check from happening again.
                    self._mobileEnabled = true;
                    self.mobileAutoEnable = false;

                    // Remove the touch start listener.
                    document.removeEventListener('touchend', unlock, true);
                };
            };

            // Setup a touch start listener to attempt an unlock in.
            document.addEventListener('touchend', unlock, true);

            return self;
        },

        /**
         * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
         * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
         * @return {Howler}
         */
        _autoSuspend: function () {
            var self = this;

            if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
                return;
            }

            // Check if any sounds are playing.
            for (var i = 0; i < self._howls.length; i++) {
                if (self._howls[i]._webAudio) {
                    for (var j = 0; j < self._howls[i]._sounds.length; j++) {
                        if (!self._howls[i]._sounds[j]._paused) {
                            return self;
                        }
                    }
                }
            }

            if (self._suspendTimer) {
                clearTimeout(self._suspendTimer);
            }

            // If no sound has played after 30 seconds, suspend the context.
            self._suspendTimer = setTimeout(function () {
                if (!self.autoSuspend) {
                    return;
                }

                self._suspendTimer = null;
                self.state = 'suspending';
                self.ctx.suspend().then(function () {
                    self.state = 'suspended';

                    if (self._resumeAfterSuspend) {
                        delete self._resumeAfterSuspend;
                        self._autoResume();
                    }
                });
            }, 30000);

            return self;
        },

        /**
         * Automatically resume the Web Audio AudioContext when a new sound is played.
         * @return {Howler}
         */
        _autoResume: function () {
            var self = this;

            if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
                return;
            }

            if (self.state === 'running' && self._suspendTimer) {
                clearTimeout(self._suspendTimer);
                self._suspendTimer = null;
            } else if (self.state === 'suspended') {
                self.state = 'resuming';
                self.ctx.resume().then(function () {
                    self.state = 'running';
                });

                if (self._suspendTimer) {
                    clearTimeout(self._suspendTimer);
                    self._suspendTimer = null;
                }
            } else if (self.state === 'suspending') {
                self._resumeAfterSuspend = true;
            }

            return self;
        }
    };

    // Setup the global audio controller.
    var Howler = new HowlerGlobal();

    /** Group Methods **/
    /***************************************************************************/

    /**
     * Create an audio group controller.
     * @param {Object} o Passed in properties for this group.
     */
    var Howl = function (o) {
        var self = this;

        // Throw an error if no source is provided.
        if (!o.src || o.src.length === 0) {
            console.error('An array of source files must be passed with any new Howl.');
            return;
        }

        self.init(o);
    };
    Howl.prototype = {
        /**
         * Initialize a new Howl group object.
         * @param  {Object} o Passed in properties for this group.
         * @return {Howl}
         */
        init: function (o) {
            var self = this;

            // If we don't have an AudioContext created yet, run the setup.
            if (!Howler.ctx) {
                setupAudioContext();
            }

            // Setup user-defined default properties.
            self._autoplay = o.autoplay || false;
            self._format = (typeof o.format !== 'string') ? o.format : [o.format];
            self._html5 = o.html5 || false;
            self._muted = o.mute || false;
            self._loop = o.loop || false;
            self._pool = o.pool || 5;
            self._preload = (typeof o.preload === 'boolean') ? o.preload : true;
            self._rate = o.rate || 1;
            self._sprite = o.sprite || {};
            self._src = (typeof o.src !== 'string') ? o.src : [o.src];
            self._volume = o.volume !== undefined ? o.volume : 1;

            // Setup all other default properties.
            self._duration = 0;
            self._state = 'unloaded';
            self._sounds = [];
            self._endTimers = {};
            self._queue = [];

            HYPER.Preload.load++;

            self.onloadTry = function () {
                HYPER.Preload.loaded++;
                if (o.onload) {
                    o.onload();
                }
            }

            // Setup event listeners.
            self._onend = o.onend ? [{
                fn: o.onend
            }] : [];
            self._onfade = o.onfade ? [{
                fn: o.onfade
            }] : [];
            self._onload = self.onloadTry;
            self._onloaderror = o.onloaderror ? [{
                fn: o.onloaderror
            }] : [];
            self._onpause = o.onpause ? [{
                fn: o.onpause
            }] : [];
            self._onplay = o.onplay ? [{
                fn: o.onplay
            }] : [];
            self._onstop = o.onstop ? [{
                fn: o.onstop
            }] : [];
            self._onmute = o.onmute ? [{
                fn: o.onmute
            }] : [];
            self._onvolume = o.onvolume ? [{
                fn: o.onvolume
            }] : [];
            self._onrate = o.onrate ? [{
                fn: o.onrate
            }] : [];
            self._onseek = o.onseek ? [{
                fn: o.onseek
            }] : [];

            // Web Audio or HTML5 Audio?
            self._webAudio = Howler.usingWebAudio && !self._html5;

            // Automatically try to enable audio on iOS.
            if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.mobileAutoEnable) {
                Howler._enableMobileAudio();
            }

            // Keep track of this Howl group in the global controller.
            Howler._howls.push(self);

            // Load the source file unless otherwise specified.
            if (self._preload) {
                self.load();
            }

            return self;
        },

        /**
         * Load the audio file.
         * @return {Howler}
         */
        load: function () {
            var self = this;
            var url = null;

            // If no audio is available, quit immediately.
            if (Howler.noAudio) {
                self._emit('loaderror', null, 'No audio support.');
                return;
            }

            // Make sure our source is in an array.
            if (typeof self._src === 'string') {
                self._src = [self._src];
            }

            // Loop through the sources and pick the first one that is compatible.
            for (var i = 0; i < self._src.length; i++) {
                var ext, str;

                if (self._format && self._format[i]) {
                    // If an extension was specified, use that instead.
                    ext = self._format[i];
                } else {
                    // Make sure the source is a string.
                    str = self._src[i];
                    if (typeof str !== 'string') {
                        self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
                        continue;
                    }

                    // Extract the file extension from the URL or base64 data URI.
                    ext = /^data:audio\/([^;,]+);/i.exec(str);
                    if (!ext) {
                        ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
                    }

                    if (ext) {
                        ext = ext[1].toLowerCase();
                    }
                }

                // Check if this extension is available.
                if (Howler.codecs(ext)) {
                    url = self._src[i];
                    break;
                }
            }

            if (!url) {
                self._emit('loaderror', null, 'No codec support for selected audio sources.');
                return;
            }

            self._src = url;
            self._state = 'loading';

            // If the hosting page is HTTPS and the source isn't,
            // drop down to HTML5 Audio to avoid Mixed Content errors.
            if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
                self._html5 = true;
                self._webAudio = false;
            }

            // Create a new sound object and add it to the pool.
            new Sound(self);

            // Load and decode the audio data for playback.
            if (self._webAudio) {
                loadBuffer(self);
            }

            return self;
        },

        /**
         * Play a sound or resume previous playback.
         * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
         * @param  {Boolean} internal Internal Use: true prevents event firing.
         * @return {Number}          Sound ID.
         */
        play: function (sprite, internal) {
            var self = this;
            var id = null;

            // Determine if a sprite, sound id or nothing was passed
            if (typeof sprite === 'number') {
                id = sprite;
                sprite = null;
            } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
                // If the passed sprite doesn't exist, do nothing.
                return null;
            } else if (typeof sprite === 'undefined') {
                // Use the default sound sprite (plays the full audio length).
                sprite = '__default';

                // Check if there is a single paused sound that isn't ended.
                // If there is, play that sound. If not, continue as usual.
                var num = 0;
                for (var i = 0; i < self._sounds.length; i++) {
                    if (self._sounds[i]._paused && !self._sounds[i]._ended) {
                        num++;
                        id = self._sounds[i]._id;
                    }
                }

                if (num === 1) {
                    sprite = null;
                } else {
                    id = null;
                }
            }

            // Get the selected node, or get one from the pool.
            var sound = id ? self._soundById(id) : self._inactiveSound();

            // If the sound doesn't exist, do nothing.
            if (!sound) {
                return null;
            }

            // Select the sprite definition.
            if (id && !sprite) {
                sprite = sound._sprite || '__default';
            }

            // If we have no sprite and the sound hasn't loaded, we must wait
            // for the sound to load to get our audio's duration.
            if (self._state !== 'loaded' && !self._sprite[sprite]) {
                self._queue.push({
                    event: 'play',
                    action: function () {
                        self.play(self._soundById(sound._id) ? sound._id : undefined);
                    }
                });

                return sound._id;
            }

            // Don't play the sound if an id was passed and it is already playing.
            if (id && !sound._paused) {
                // Trigger the play event, in order to keep iterating through queue.
                if (!internal) {
                    setTimeout(function () {
                        self._emit('play', sound._id);
                    }, 0);
                }

                return sound._id;
            }

            // Make sure the AudioContext isn't suspended, and resume it if it is.
            if (self._webAudio) {
                Howler._autoResume();
            }

            // Determine how long to play for and where to start playing.
            var seek = sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000;
            var duration = ((self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000) - seek;
            var timeout = (duration * 1000) / Math.abs(sound._rate);

            // Update the parameters of the sound
            sound._paused = false;
            sound._ended = false;
            sound._sprite = sprite;
            sound._seek = seek;
            sound._start = self._sprite[sprite][0] / 1000;
            sound._stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
            sound._loop = !!(sound._loop || self._sprite[sprite][2]);

            // Begin the actual playback.
            var node = sound._node;
            if (self._webAudio) {
                // Fire this when the sound is ready to play to begin Web Audio playback.
                var playWebAudio = function () {
                    self._refreshBuffer(sound);

                    // Setup the playback params.
                    var vol = (sound._muted || self._muted) ? 0 : sound._volume;
                    node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
                    sound._playStart = Howler.ctx.currentTime;

                    // Play the sound using the supported method.
                    if (typeof node.bufferSource.start === 'undefined') {
                        sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
                    } else {
                        sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
                    }

                    // Start a new timer if none is present.
                    if (timeout !== Infinity) {
                        self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
                    }

                    if (!internal) {
                        setTimeout(function () {
                            self._emit('play', sound._id);
                        }, 0);
                    }
                };

                if (self._state === 'loaded') {
                    playWebAudio();
                } else {
                    // Wait for the audio to load and then begin playback.
                    self.once('load', playWebAudio, sound._id);

                    // Cancel the end timer.
                    self._clearTimer(sound._id);
                }
            } else {
                // Fire this when the sound is ready to play to begin HTML5 Audio playback.
                var playHtml5 = function () {
                    node.currentTime = seek;
                    node.muted = sound._muted || self._muted || Howler._muted || node.muted;
                    node.volume = sound._volume * Howler.volume();
                    node.playbackRate = sound._rate;

                    setTimeout(function () {
                        node.play();

                        // Setup the new end timer.
                        if (timeout !== Infinity) {
                            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
                        }

                        if (!internal) {
                            self._emit('play', sound._id);
                        }
                    }, 0);
                };

                // Play immediately if ready, or wait for the 'canplaythrough'e vent.
                var loadedNoReadyState = (self._state === 'loaded' && (window && window.ejecta || !node.readyState && Howler._navigator.isCocoonJS));
                if (node.readyState === 4 || loadedNoReadyState) {
                    playHtml5();
                } else {
                    var listener = function () {
                        // Begin playback.
                        playHtml5();

                        // Clear this listener.
                        node.removeEventListener(Howler._canPlayEvent, listener, false);
                    };
                    node.addEventListener(Howler._canPlayEvent, listener, false);

                    // Cancel the end timer.
                    self._clearTimer(sound._id);
                }
            }

            return sound._id;
        },

        /**
         * Pause playback and save current position.
         * @param  {Number} id The sound ID (empty to pause all in group).
         * @return {Howl}
         */
        pause: function (id) {
            var self = this;

            // If the sound hasn't loaded, add it to the load queue to pause when capable.
            if (self._state !== 'loaded') {
                self._queue.push({
                    event: 'pause',
                    action: function () {
                        self.pause(id);
                    }
                });

                return self;
            }

            // If no id is passed, get all ID's to be paused.
            var ids = self._getSoundIds(id);

            for (var i = 0; i < ids.length; i++) {
                // Clear the end timer.
                self._clearTimer(ids[i]);

                // Get the sound.
                var sound = self._soundById(ids[i]);

                if (sound && !sound._paused) {
                    // Reset the seek position.
                    sound._seek = self.seek(ids[i]);
                    sound._rateSeek = 0;
                    sound._paused = true;

                    // Stop currently running fades.
                    self._stopFade(ids[i]);

                    if (sound._node) {
                        if (self._webAudio) {
                            // make sure the sound has been created
                            if (!sound._node.bufferSource) {
                                return self;
                            }

                            if (typeof sound._node.bufferSource.stop === 'undefined') {
                                sound._node.bufferSource.noteOff(0);
                            } else {
                                sound._node.bufferSource.stop(0);
                            }

                            // Clean up the buffer source.
                            self._cleanBuffer(sound._node);
                        } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                            sound._node.pause();
                        }
                    }

                    // Fire the pause event, unless `true` is passed as the 2nd argument.
                    if (!arguments[1]) {
                        self._emit('pause', sound._id);
                    }
                }
            }

            return self;
        },

        /**
         * Stop playback and reset to start.
         * @param  {Number} id The sound ID (empty to stop all in group).
         * @param  {Boolean} internal Internal Use: true prevents event firing.
         * @return {Howl}
         */
        stop: function (id, internal) {
            var self = this;

            // If the sound hasn't loaded, add it to the load queue to stop when capable.
            if (self._state !== 'loaded') {
                self._queue.push({
                    event: 'stop',
                    action: function () {
                        self.stop(id);
                    }
                });

                return self;
            }

            // If no id is passed, get all ID's to be stopped.
            var ids = self._getSoundIds(id);

            for (var i = 0; i < ids.length; i++) {
                // Clear the end timer.
                self._clearTimer(ids[i]);

                // Get the sound.
                var sound = self._soundById(ids[i]);

                if (sound) {
                    // Reset the seek position.
                    sound._seek = sound._start || 0;
                    sound._rateSeek = 0;
                    sound._paused = true;
                    sound._ended = true;

                    // Stop currently running fades.
                    self._stopFade(ids[i]);

                    if (sound._node) {
                        if (self._webAudio) {
                            // make sure the sound has been created
                            if (!sound._node.bufferSource) {
                                if (!internal) {
                                    self._emit('stop', sound._id);
                                }

                                return self;
                            }

                            if (typeof sound._node.bufferSource.stop === 'undefined') {
                                sound._node.bufferSource.noteOff(0);
                            } else {
                                sound._node.bufferSource.stop(0);
                            }

                            // Clean up the buffer source.
                            self._cleanBuffer(sound._node);
                        } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                            sound._node.currentTime = sound._start || 0;
                            sound._node.pause();
                        }
                    }
                }

                if (sound && !internal) {
                    self._emit('stop', sound._id);
                }
            }

            return self;
        },

        /**
         * Mute/unmute a single sound or all sounds in this Howl group.
         * @param  {Boolean} muted Set to true to mute and false to unmute.
         * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
         * @return {Howl}
         */
        mute: function (muted, id) {
            var self = this;

            // If the sound hasn't loaded, add it to the load queue to mute when capable.
            if (self._state !== 'loaded') {
                self._queue.push({
                    event: 'mute',
                    action: function () {
                        self.mute(muted, id);
                    }
                });

                return self;
            }

            // If applying mute/unmute to all sounds, update the group's value.
            if (typeof id === 'undefined') {
                if (typeof muted === 'boolean') {
                    self._muted = muted;
                } else {
                    return self._muted;
                }
            }

            // If no id is passed, get all ID's to be muted.
            var ids = self._getSoundIds(id);

            for (var i = 0; i < ids.length; i++) {
                // Get the sound.
                var sound = self._soundById(ids[i]);

                if (sound) {
                    sound._muted = muted;

                    if (self._webAudio && sound._node) {
                        sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
                    } else if (sound._node) {
                        sound._node.muted = Howler._muted ? true : muted;
                    }

                    self._emit('mute', sound._id);
                }
            }

            return self;
        },

        /**
         * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
         *   volume() -> Returns the group's volume value.
         *   volume(id) -> Returns the sound id's current volume.
         *   volume(vol) -> Sets the volume of all sounds in this Howl group.
         *   volume(vol, id) -> Sets the volume of passed sound id.
         * @return {Howl/Number} Returns self or current volume.
         */
        volume: function () {
            var self = this;
            var args = arguments;
            var vol, id;

            // Determine the values based on arguments.
            if (args.length === 0) {
                // Return the value of the groups' volume.
                return self._volume;
            } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
                // First check if this is an ID, and if not, assume it is a new volume.
                var ids = self._getSoundIds();
                var index = ids.indexOf(args[0]);
                if (index >= 0) {
                    id = parseInt(args[0], 10);
                } else {
                    vol = parseFloat(args[0]);
                }
            } else if (args.length >= 2) {
                vol = parseFloat(args[0]);
                id = parseInt(args[1], 10);
            }

            // Update the volume or return the current volume.
            var sound;
            if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
                // If the sound hasn't loaded, add it to the load queue to change volume when capable.
                if (self._state !== 'loaded') {
                    self._queue.push({
                        event: 'volume',
                        action: function () {
                            self.volume.apply(self, args);
                        }
                    });

                    return self;
                }

                // Set the group volume.
                if (typeof id === 'undefined') {
                    self._volume = vol;
                }

                // Update one or all volumes.
                id = self._getSoundIds(id);
                for (var i = 0; i < id.length; i++) {
                    // Get the sound.
                    sound = self._soundById(id[i]);

                    if (sound) {
                        sound._volume = vol;

                        // Stop currently running fades.
                        if (!args[2]) {
                            self._stopFade(id[i]);
                        }

                        if (self._webAudio && sound._node && !sound._muted) {
                            sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
                        } else if (sound._node && !sound._muted) {
                            sound._node.volume = vol * Howler.volume();
                        }

                        self._emit('volume', sound._id);
                    }
                }
            } else {
                sound = id ? self._soundById(id) : self._sounds[0];
                return sound ? sound._volume : 0;
            }

            return self;
        },

        /**
         * Fade a currently playing sound between two volumes (if no id is passsed, all sounds will fade).
         * @param  {Number} from The value to fade from (0.0 to 1.0).
         * @param  {Number} to   The volume to fade to (0.0 to 1.0).
         * @param  {Number} len  Time in milliseconds to fade.
         * @param  {Number} id   The sound id (omit to fade all sounds).
         * @return {Howl}
         */
        fade: function (from, to, len, id) {
            var self = this;
            var diff = Math.abs(from - to);
            var dir = from > to ? 'out' : 'in';
            var steps = diff / 0.01;
            var stepLen = (steps > 0) ? len / steps : len;

            // If the sound hasn't loaded, add it to the load queue to fade when capable.
            if (self._state !== 'loaded') {
                self._queue.push({
                    event: 'fade',
                    action: function () {
                        self.fade(from, to, len, id);
                    }
                });

                return self;
            }

            // Set the volume to the start position.
            self.volume(from, id);

            // Fade the volume of one or all sounds.
            var ids = self._getSoundIds(id);
            for (var i = 0; i < ids.length; i++) {
                // Get the sound.
                var sound = self._soundById(ids[i]);

                // Create a linear fade or fall back to timeouts with HTML5 Audio.
                if (sound) {
                    // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
                    if (!id) {
                        self._stopFade(ids[i]);
                    }

                    // If we are using Web Audio, let the native methods do the actual fade.
                    if (self._webAudio && !sound._muted) {
                        var currentTime = Howler.ctx.currentTime;
                        var end = currentTime + (len / 1000);
                        sound._volume = from;
                        sound._node.gain.setValueAtTime(from, currentTime);
                        sound._node.gain.linearRampToValueAtTime(to, end);
                    }

                    var vol = from;
                    sound._interval = setInterval(function (soundId, sound) {
                        // Update the volume amount, but only if the volume should change.
                        if (steps > 0) {
                            vol += (dir === 'in' ? 0.01 : -0.01);
                        }

                        // Make sure the volume is in the right bounds.
                        vol = Math.max(0, vol);
                        vol = Math.min(1, vol);

                        // Round to within 2 decimal points.
                        vol = Math.round(vol * 100) / 100;

                        // Change the volume.
                        if (self._webAudio) {
                            if (typeof id === 'undefined') {
                                self._volume = vol;
                            }

                            sound._volume = vol;
                        } else {
                            self.volume(vol, soundId, true);
                        }

                        // When the fade is complete, stop it and fire event.
                        if (vol === to) {
                            clearInterval(sound._interval);
                            sound._interval = null;
                            self.volume(vol, soundId);
                            self._emit('fade', soundId);
                        }
                    }.bind(self, ids[i], sound), stepLen);
                }
            }

            return self;
        },

        /**
         * Internal method that stops the currently playing fade when
         * a new fade starts, volume is changed or the sound is stopped.
         * @param  {Number} id The sound id.
         * @return {Howl}
         */
        _stopFade: function (id) {
            var self = this;
            var sound = self._soundById(id);

            if (sound && sound._interval) {
                if (self._webAudio) {
                    sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
                }

                clearInterval(sound._interval);
                sound._interval = null;
                self._emit('fade', id);
            }

            return self;
        },

        /**
         * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
         *   loop() -> Returns the group's loop value.
         *   loop(id) -> Returns the sound id's loop value.
         *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
         *   loop(loop, id) -> Sets the loop value of passed sound id.
         * @return {Howl/Boolean} Returns self or current loop value.
         */
        loop: function () {
            var self = this;
            var args = arguments;
            var loop, id, sound;

            // Determine the values for loop and id.
            if (args.length === 0) {
                // Return the grou's loop value.
                return self._loop;
            } else if (args.length === 1) {
                if (typeof args[0] === 'boolean') {
                    loop = args[0];
                    self._loop = loop;
                } else {
                    // Return this sound's loop value.
                    sound = self._soundById(parseInt(args[0], 10));
                    return sound ? sound._loop : false;
                }
            } else if (args.length === 2) {
                loop = args[0];
                id = parseInt(args[1], 10);
            }

            // If no id is passed, get all ID's to be looped.
            var ids = self._getSoundIds(id);
            for (var i = 0; i < ids.length; i++) {
                sound = self._soundById(ids[i]);

                if (sound) {
                    sound._loop = loop;
                    if (self._webAudio && sound._node && sound._node.bufferSource) {
                        sound._node.bufferSource.loop = loop;
                    }
                }
            }

            return self;
        },

        /**
         * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
         *   rate() -> Returns the first sound node's current playback rate.
         *   rate(id) -> Returns the sound id's current playback rate.
         *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
         *   rate(rate, id) -> Sets the playback rate of passed sound id.
         * @return {Howl/Number} Returns self or the current playback rate.
         */
        rate: function () {
            var self = this;
            var args = arguments;
            var rate, id;

            // Determine the values based on arguments.
            if (args.length === 0) {
                // We will simply return the current rate of the first node.
                id = self._sounds[0]._id;
            } else if (args.length === 1) {
                // First check if this is an ID, and if not, assume it is a new rate value.
                var ids = self._getSoundIds();
                var index = ids.indexOf(args[0]);
                if (index >= 0) {
                    id = parseInt(args[0], 10);
                } else {
                    rate = parseFloat(args[0]);
                }
            } else if (args.length === 2) {
                rate = parseFloat(args[0]);
                id = parseInt(args[1], 10);
            }

            // Update the playback rate or return the current value.
            var sound;
            if (typeof rate === 'number') {
                // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
                if (self._state !== 'loaded') {
                    self._queue.push({
                        event: 'rate',
                        action: function () {
                            self.rate.apply(self, args);
                        }
                    });

                    return self;
                }

                // Set the group rate.
                if (typeof id === 'undefined') {
                    self._rate = rate;
                }

                // Update one or all volumes.
                id = self._getSoundIds(id);
                for (var i = 0; i < id.length; i++) {
                    // Get the sound.
                    sound = self._soundById(id[i]);

                    if (sound) {
                        // Keep track of our position when the rate changed and update the playback
                        // start position so we can properly adjust the seek position for time elapsed.
                        sound._rateSeek = self.seek(id[i]);
                        sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
                        sound._rate = rate;

                        // Change the playback rate.
                        if (self._webAudio && sound._node && sound._node.bufferSource) {
                            sound._node.bufferSource.playbackRate.value = rate;
                        } else if (sound._node) {
                            sound._node.playbackRate = rate;
                        }

                        // Reset the timers.
                        var seek = self.seek(id[i]);
                        var duration = ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000) - seek;
                        var timeout = (duration * 1000) / Math.abs(sound._rate);

                        // Start a new end timer if sound is already playing.
                        if (self._endTimers[id[i]] || !sound._paused) {
                            self._clearTimer(id[i]);
                            self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
                        }

                        self._emit('rate', sound._id);
                    }
                }
            } else {
                sound = self._soundById(id);
                return sound ? sound._rate : self._rate;
            }

            return self;
        },

        /**
         * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
         *   seek() -> Returns the first sound node's current seek position.
         *   seek(id) -> Returns the sound id's current seek position.
         *   seek(seek) -> Sets the seek position of the first sound node.
         *   seek(seek, id) -> Sets the seek position of passed sound id.
         * @return {Howl/Number} Returns self or the current seek position.
         */
        seek: function () {
            var self = this;
            var args = arguments;
            var seek, id;

            // Determine the values based on arguments.
            if (args.length === 0) {
                // We will simply return the current position of the first node.
                id = self._sounds[0]._id;
            } else if (args.length === 1) {
                // First check if this is an ID, and if not, assume it is a new seek position.
                var ids = self._getSoundIds();
                var index = ids.indexOf(args[0]);
                if (index >= 0) {
                    id = parseInt(args[0], 10);
                } else {
                    id = self._sounds[0]._id;
                    seek = parseFloat(args[0]);
                }
            } else if (args.length === 2) {
                seek = parseFloat(args[0]);
                id = parseInt(args[1], 10);
            }

            // If there is no ID, bail out.
            if (typeof id === 'undefined') {
                return self;
            }

            // If the sound hasn't loaded, add it to the load queue to seek when capable.
            if (self._state !== 'loaded') {
                self._queue.push({
                    event: 'seek',
                    action: function () {
                        self.seek.apply(self, args);
                    }
                });

                return self;
            }

            // Get the sound.
            var sound = self._soundById(id);

            if (sound) {
                if (typeof seek === 'number' && seek >= 0) {
                    // Pause the sound and update position for restarting playback.
                    var playing = self.playing(id);
                    if (playing) {
                        self.pause(id, true);
                    }

                    // Move the position of the track and cancel timer.
                    sound._seek = seek;
                    sound._ended = false;
                    self._clearTimer(id);

                    // Restart the playback if the sound was playing.
                    if (playing) {
                        self.play(id, true);
                    }

                    // Update the seek position for HTML5 Audio.
                    if (!self._webAudio && sound._node) {
                        sound._node.currentTime = seek;
                    }

                    self._emit('seek', id);
                } else {
                    if (self._webAudio) {
                        var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
                        var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
                        return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
                    } else {
                        return sound._node.currentTime;
                    }
                }
            }

            return self;
        },

        /**
         * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
         * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
         * @return {Boolean} True if playing and false if not.
         */
        playing: function (id) {
            var self = this;

            // Check the passed sound ID (if any).
            if (typeof id === 'number') {
                var sound = self._soundById(id);
                return sound ? !sound._paused : false;
            }

            // Otherwise, loop through all sounds and check if any are playing.
            for (var i = 0; i < self._sounds.length; i++) {
                if (!self._sounds[i]._paused) {
                    return true;
                }
            }

            return false;
        },

        /**
         * Get the duration of this sound. Passing a sound id will return the sprite duration.
         * @param  {Number} id The sound id to check. If none is passed, return full source duration.
         * @return {Number} Audio duration in seconds.
         */
        duration: function (id) {
            var self = this;
            var duration = self._duration;

            // If we pass an ID, get the sound and return the sprite length.
            var sound = self._soundById(id);
            if (sound) {
                duration = self._sprite[sound._sprite][1] / 1000;
            }

            return duration;
        },

        /**
         * Returns the current loaded state of this Howl.
         * @return {String} 'unloaded', 'loading', 'loaded'
         */
        state: function () {
            return this._state;
        },

        /**
         * Unload and destroy the current Howl object.
         * This will immediately stop all sound instances attached to this group.
         */
        unload: function () {
            var self = this;

            // Stop playing any active sounds.
            var sounds = self._sounds;
            for (var i = 0; i < sounds.length; i++) {
                // Stop the sound if it is currently playing.
                if (!sounds[i]._paused) {
                    self.stop(sounds[i]._id);
                    self._emit('end', sounds[i]._id);
                }

                // Remove the source or disconnect.
                if (!self._webAudio) {
                    // Set the source to 0-second silence to stop any downloading.
                    sounds[i]._node.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=';

                    // Remove any event listeners.
                    sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
                    sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);
                }

                // Empty out all of the nodes.
                delete sounds[i]._node;

                // Make sure all timers are cleared out.
                self._clearTimer(sounds[i]._id);

                // Remove the references in the global Howler object.
                var index = Howler._howls.indexOf(self);
                if (index >= 0) {
                    Howler._howls.splice(index, 1);
                }
            }

            // Delete this sound from the cache (if no other Howl is using it).
            var remCache = true;
            for (i = 0; i < Howler._howls.length; i++) {
                if (Howler._howls[i]._src === self._src) {
                    remCache = false;
                    break;
                }
            }

            if (cache && remCache) {
                delete cache[self._src];
            }

            // Clear out `self`.
            self._state = 'unloaded';
            self._sounds = [];
            self = null;

            return null;
        },

        /**
         * Listen to a custom event.
         * @param  {String}   event Event name.
         * @param  {Function} fn    Listener to call.
         * @param  {Number}   id    (optional) Only listen to events for this sound.
         * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
         * @return {Howl}
         */
        on: function (event, fn, id, once) {
            var self = this;
            var events = self['_on' + event];

            if (typeof fn === 'function') {
                events.push(once ? {
                    id: id,
                    fn: fn,
                    once: once
                } : {
                    id: id,
                    fn: fn
                });
            }

            return self;
        },

        /**
         * Remove a custom event. Call without parameters to remove all events.
         * @param  {String}   event Event name.
         * @param  {Function} fn    Listener to remove. Leave empty to remove all.
         * @param  {Number}   id    (optional) Only remove events for this sound.
         * @return {Howl}
         */
        off: function (event, fn, id) {
            var self = this;
            var events = self['_on' + event];
            var i = 0;

            if (fn) {
                // Loop through event store and remove the passed function.
                for (i = 0; i < events.length; i++) {
                    if (fn === events[i].fn && id === events[i].id) {
                        events.splice(i, 1);
                        break;
                    }
                }
            } else if (event) {
                // Clear out all events of this type.
                self['_on' + event] = [];
            } else {
                // Clear out all events of every type.
                var keys = Object.keys(self);
                for (i = 0; i < keys.length; i++) {
                    if ((keys[i].indexOf('_on') === 0) && Array.isArray(self[keys[i]])) {
                        self[keys[i]] = [];
                    }
                }
            }

            return self;
        },

        /**
         * Listen to a custom event and remove it once fired.
         * @param  {String}   event Event name.
         * @param  {Function} fn    Listener to call.
         * @param  {Number}   id    (optional) Only listen to events for this sound.
         * @return {Howl}
         */
        once: function (event, fn, id) {
            var self = this;

            // Setup the event listener.
            self.on(event, fn, id, 1);

            return self;
        },

        /**
         * Emit all events of a specific type and pass the sound id.
         * @param  {String} event Event name.
         * @param  {Number} id    Sound ID.
         * @param  {Number} msg   Message to go with event.
         * @return {Howl}
         */
        _emit: function (event, id, msg) {
            var self = this;
            var events = self['_on' + event];

            // Loop through event store and fire all functions.
            for (var i = events.length - 1; i >= 0; i--) {
                if (!events[i].id || events[i].id === id || event === 'load') {
                    setTimeout(function (fn) {
                        fn.call(this, id, msg);
                    }.bind(self, events[i].fn), 0);

                    // If this event was setup with `once`, remove it.
                    if (events[i].once) {
                        self.off(event, events[i].fn, events[i].id);
                    }
                }
            }

            return self;
        },

        /**
         * Queue of actions initiated before the sound has loaded.
         * These will be called in sequence, with the next only firing
         * after the previous has finished executing (even if async like play).
         * @return {Howl}
         */
        _loadQueue: function () {
            var self = this;

            if (self._queue.length > 0) {
                var task = self._queue[0];

                // don't move onto the next task until this one is done
                self.once(task.event, function () {
                    self._queue.shift();
                    self._loadQueue();
                });

                task.action();
            }

            return self;
        },

        /**
         * Fired when playback ends at the end of the duration.
         * @param  {Sound} sound The sound object to work with.
         * @return {Howl}
         */
        _ended: function (sound) {
            var self = this;
            var sprite = sound._sprite;

            // Should this sound loop?
            var loop = !!(sound._loop || self._sprite[sprite][2]);

            // Fire the ended event.
            self._emit('end', sound._id);

            // Restart the playback for HTML5 Audio loop.
            if (!self._webAudio && loop) {
                self.stop(sound._id, true).play(sound._id);
            }

            // Restart this timer if on a Web Audio loop.
            if (self._webAudio && loop) {
                self._emit('play', sound._id);
                sound._seek = sound._start || 0;
                sound._rateSeek = 0;
                sound._playStart = Howler.ctx.currentTime;

                var timeout = ((sound._stop - sound._start) * 1000) / Math.abs(sound._rate);
                self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
            }

            // Mark the node as paused.
            if (self._webAudio && !loop) {
                sound._paused = true;
                sound._ended = true;
                sound._seek = sound._start || 0;
                sound._rateSeek = 0;
                self._clearTimer(sound._id);

                // Clean up the buffer source.
                self._cleanBuffer(sound._node);

                // Attempt to auto-suspend AudioContext if no sounds are still playing.
                Howler._autoSuspend();
            }

            // When using a sprite, end the track.
            if (!self._webAudio && !loop) {
                self.stop(sound._id);
            }

            return self;
        },

        /**
         * Clear the end timer for a sound playback.
         * @param  {Number} id The sound ID.
         * @return {Howl}
         */
        _clearTimer: function (id) {
            var self = this;

            if (self._endTimers[id]) {
                clearTimeout(self._endTimers[id]);
                delete self._endTimers[id];
            }

            return self;
        },

        /**
         * Return the sound identified by this ID, or return null.
         * @param  {Number} id Sound ID
         * @return {Object}    Sound object or null.
         */
        _soundById: function (id) {
            var self = this;

            // Loop through all sounds and find the one with this ID.
            for (var i = 0; i < self._sounds.length; i++) {
                if (id === self._sounds[i]._id) {
                    return self._sounds[i];
                }
            }

            return null;
        },

        /**
         * Return an inactive sound from the pool or create a new one.
         * @return {Sound} Sound playback object.
         */
        _inactiveSound: function () {
            var self = this;

            self._drain();

            // Find the first inactive node to recycle.
            for (var i = 0; i < self._sounds.length; i++) {
                if (self._sounds[i]._ended) {
                    return self._sounds[i].reset();
                }
            }

            // If no inactive node was found, create a new one.
            return new Sound(self);
        },

        /**
         * Drain excess inactive sounds from the pool.
         */
        _drain: function () {
            var self = this;
            var limit = self._pool;
            var cnt = 0;
            var i = 0;

            // If there are less sounds than the max pool size, we are done.
            if (self._sounds.length < limit) {
                return;
            }

            // Count the number of inactive sounds.
            for (i = 0; i < self._sounds.length; i++) {
                if (self._sounds[i]._ended) {
                    cnt++;
                }
            }

            // Remove excess inactive sounds, going in reverse order.
            for (i = self._sounds.length - 1; i >= 0; i--) {
                if (cnt <= limit) {
                    return;
                }

                if (self._sounds[i]._ended) {
                    // Disconnect the audio source when using Web Audio.
                    if (self._webAudio && self._sounds[i]._node) {
                        self._sounds[i]._node.disconnect(0);
                    }

                    // Remove sounds until we have the pool size.
                    self._sounds.splice(i, 1);
                    cnt--;
                }
            }
        },

        /**
         * Get all ID's from the sounds pool.
         * @param  {Number} id Only return one ID if one is passed.
         * @return {Array}    Array of IDs.
         */
        _getSoundIds: function (id) {
            var self = this;

            if (typeof id === 'undefined') {
                var ids = [];
                for (var i = 0; i < self._sounds.length; i++) {
                    ids.push(self._sounds[i]._id);
                }

                return ids;
            } else {
                return [id];
            }
        },

        /**
         * Load the sound back into the buffer source.
         * @param  {Sound} sound The sound object to work with.
         * @return {Howl}
         */
        _refreshBuffer: function (sound) {
            var self = this;

            // Setup the buffer source for playback.
            sound._node.bufferSource = Howler.ctx.createBufferSource();
            sound._node.bufferSource.buffer = cache[self._src];

            // Connect to the correct node.
            if (sound._panner) {
                sound._node.bufferSource.connect(sound._panner);
            } else {
                sound._node.bufferSource.connect(sound._node);
            }

            // Setup looping and playback rate.
            sound._node.bufferSource.loop = sound._loop;
            if (sound._loop) {
                sound._node.bufferSource.loopStart = sound._start || 0;
                sound._node.bufferSource.loopEnd = sound._stop;
            }
            sound._node.bufferSource.playbackRate.value = sound._rate;

            return self;
        },

        /**
         * Prevent memory leaks by cleaning up the buffer source after playback.
         * @param  {Object} node Sound's audio node containing the buffer source.
         * @return {Howl}
         */
        _cleanBuffer: function (node) {
            var self = this;

            if (self._scratchBuffer) {
                node.bufferSource.onended = null;
                node.bufferSource.disconnect(0);
                try {
                    node.bufferSource.buffer = self._scratchBuffer;
                } catch (e) {}
            }
            node.bufferSource = null;

            return self;
        }
    };

    /** Single Sound Methods **/
    /***************************************************************************/

    /**
     * Setup the sound object, which each node attached to a Howl group is contained in.
     * @param {Object} howl The Howl parent group.
     */
    var Sound = function (howl) {
        this._parent = howl;
        this.init();
    };
    Sound.prototype = {
        /**
         * Initialize a new Sound object.
         * @return {Sound}
         */
        init: function () {
            var self = this;
            var parent = self._parent;

            // Setup the default parameters.
            self._muted = parent._muted;
            self._loop = parent._loop;
            self._volume = parent._volume;
            self._muted = parent._muted;
            self._rate = parent._rate;
            self._seek = 0;
            self._paused = true;
            self._ended = true;
            self._sprite = '__default';

            // Generate a unique ID for this sound.
            self._id = Math.round(Date.now() * Math.random());

            // Add itself to the parent's pool.
            parent._sounds.push(self);

            // Create the new node.
            self.create();

            return self;
        },

        /**
         * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
         * @return {Sound}
         */
        create: function () {
            var self = this;
            var parent = self._parent;
            var volume = (Howler._muted || self._muted || self._parent._muted) ? 0 : self._volume;

            if (parent._webAudio) {
                // Create the gain node for controlling volume (the source will connect to this).
                self._node = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
                self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
                self._node.paused = true;
                self._node.connect(Howler.masterGain);
            } else {
                self._node = new Audio();

                // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
                self._errorFn = self._errorListener.bind(self);
                self._node.addEventListener('error', self._errorFn, false);

                // Listen for 'canplaythrough' event to let us know the sound is ready.
                self._loadFn = self._loadListener.bind(self);
                self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);

                // Setup the new audio node.
                self._node.src = parent._src;
                self._node.preload = 'auto';
                self._node.volume = volume * Howler.volume();

                // Begin loading the source.
                self._node.load();
            }

            return self;
        },

        /**
         * Reset the parameters of this sound to the original state (for recycle).
         * @return {Sound}
         */
        reset: function () {
            var self = this;
            var parent = self._parent;

            // Reset all of the parameters of this sound.
            self._muted = parent._muted;
            self._loop = parent._loop;
            self._volume = parent._volume;
            self._muted = parent._muted;
            self._rate = parent._rate;
            self._seek = 0;
            self._rateSeek = 0;
            self._paused = true;
            self._ended = true;
            self._sprite = '__default';

            // Generate a new ID so that it isn't confused with the previous sound.
            self._id = Math.round(Date.now() * Math.random());

            return self;
        },

        /**
         * HTML5 Audio error listener callback.
         */
        _errorListener: function () {
            var self = this;

            if (self._node.error && self._node.error.code === 4) {
                Howler.noAudio = true;
            }

            // Fire an error event and pass back the code.
            self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);

            // Clear the event listener.
            self._node.removeEventListener('error', self._errorListener, false);
        },

        /**
         * HTML5 Audio canplaythrough listener callback.
         */
        _loadListener: function () {
            var self = this;
            var parent = self._parent;

            // Round up the duration to account for the lower precision in HTML5 Audio.
            parent._duration = Math.ceil(self._node.duration * 10) / 10;

            // Setup a sprite if none is defined.
            if (Object.keys(parent._sprite).length === 0) {
                parent._sprite = {
                    __default: [0, parent._duration * 1000]
                };
            }

            if (parent._state !== 'loaded') {
                parent._state = 'loaded';
                parent._emit('load');
                parent._loadQueue();
            }

            if (parent._autoplay) {
                parent.play();
            }

            // Clear the event listener.
            self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
        }
    };

    /** Helper Methods **/
    /***************************************************************************/

    var cache = {};

    /**
     * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
     * @param  {Howl} self
     */
    var loadBuffer = function (self) {
        var url = self._src;

        // Check if the buffer has already been cached and use it instead.
        if (cache[url]) {
            // Set the duration from the cache.
            self._duration = cache[url].duration;

            // Load the sound into this Howl.
            loadSound(self);

            return;
        }

        if (/^data:[^;]+;base64,/.test(url)) {
            // Decode the base64 data URI without XHR, since some browsers don't support it.
            var data = atob(url.split(',')[1]);
            var dataView = new Uint8Array(data.length);
            for (var i = 0; i < data.length; ++i) {
                dataView[i] = data.charCodeAt(i);
            }

            decodeAudioData(dataView.buffer, self);
        } else {
            // Load the buffer from the URL.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'arraybuffer';
            xhr.onload = function () {
                // Make sure we get a successful response back.
                var code = (xhr.status + '')[0];
                if (code !== '0' && code !== '2' && code !== '3') {
                    self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
                    return;
                }

                decodeAudioData(xhr.response, self);
            };
            xhr.onerror = function () {
                // If there is an error, switch to HTML5 Audio.
                if (self._webAudio) {
                    self._html5 = true;
                    self._webAudio = false;
                    self._sounds = [];
                    delete cache[url];
                    self.load();
                }
            };
            safeXhrSend(xhr);
        }
    };

    /**
     * Send the XHR request wrapped in a try/catch.
     * @param  {Object} xhr XHR to send.
     */
    var safeXhrSend = function (xhr) {
        try {
            xhr.send();
        } catch (e) {
            xhr.onerror();
        }
    };

    /**
     * Decode audio data from an array buffer.
     * @param  {ArrayBuffer} arraybuffer The audio data.
     * @param  {Howl}        self
     */
    var decodeAudioData = function (arraybuffer, self) {
        // Decode the buffer into an audio source.
        Howler.ctx.decodeAudioData(arraybuffer, function (buffer) {
            if (buffer && self._sounds.length > 0) {
                cache[self._src] = buffer;
                loadSound(self, buffer);
            }
        }, function () {
            self._emit('loaderror', null, 'Decoding audio data failed.');
        });
    };

    /**
     * Sound is now loaded, so finish setting everything up and fire the loaded event.
     * @param  {Howl} self
     * @param  {Object} buffer The decoded buffer sound source.
     */
    var loadSound = function (self, buffer) {
        // Set the duration.
        if (buffer && !self._duration) {
            self._duration = buffer.duration;
        }

        // Setup a sprite if none is defined.
        if (Object.keys(self._sprite).length === 0) {
            self._sprite = {
                __default: [0, self._duration * 1000]
            };
        }

        // Fire the loaded event.
        if (self._state !== 'loaded') {
            self._state = 'loaded';
            self._emit('load');
            self._loadQueue();
        }

        // Begin playback if specified.
        if (self._autoplay) {
            self.play();
        }
    };

    /**
     * Setup the audio context when available, or switch to HTML5 Audio mode.
     */
    var setupAudioContext = function () {
        Howler.noAudio = false;

        // Check if we are using Web Audio and setup the AudioContext if we are.
        try {
            if (typeof AudioContext !== 'undefined') {
                Howler.ctx = new AudioContext();
            } else if (typeof webkitAudioContext !== 'undefined') {
                Howler.ctx = new webkitAudioContext();
            } else {
                Howler.usingWebAudio = false;
            }
        } catch (e) {
            Howler.usingWebAudio = false;
        }

        if (!Howler.usingWebAudio) {
            // No audio is available on this system if noAudio is set to true.
            if (typeof Audio !== 'undefined') {
                try {
                    var test = new Audio();

                    // Check if the canplaythrough event is available.
                    if (typeof test.oncanplaythrough === 'undefined') {
                        Howler._canPlayEvent = 'canplay';
                    }
                } catch (e) {
                    Howler.noAudio = true;
                }
            } else {
                Howler.noAudio = true;
            }
        }

        // Test to make sure audio isn't disabled in Internet Explorer
        try {
            var test = new Audio();
            if (test.muted) {
                Howler.noAudio = true;
            }
        } catch (e) {}

        // Check if a webview is being used on iOS8 or earlier (rather than the browser).
        // If it is, disable Web Audio as it causes crashing.
        var iOS = (/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform));
        var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        var version = appVersion ? parseInt(appVersion[1], 10) : null;
        if (iOS && version && version < 9) {
            var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
            if (Howler._navigator && Howler._navigator.standalone && !safari || Howler._navigator && !Howler._navigator.standalone && !safari) {
                Howler.usingWebAudio = false;
            }
        }

        // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
        if (Howler.usingWebAudio) {
            Howler.masterGain = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
            Howler.masterGain.gain.value = 1;
            Howler.masterGain.connect(Howler.ctx.destination);
        }

        // Re-run the setup on Howler.
        Howler._setup();
    };

    // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return {
                Howler: Howler,
                Howl: Howl
            };
        });
    }

    // Add support for CommonJS libraries such as browserify.
    if (typeof exports !== 'undefined') {
        exports.Howler = Howler;
        exports.Howl = Howl;
    }

    // Define globally in case AMD is not available or unused.
    /*
    if (typeof window !== 'undefined') {
        window.HowlerGlobal = HowlerGlobal;
        window.Howler = Howler;
        window.Howl = Howl;
        window.Sound = Sound;
    } else if (typeof global !== 'undefined') { // Add to global in Node.js (for testing, etc).
        global.HowlerGlobal = HowlerGlobal;
        global.Howler = Howler;
        global.Howl = Howl;
        global.Sound = Sound;
    }
    */

    /**
     * Load audio files, use Howler loader API.
     * @class HYPER.Preload.Audio
     */

    HYPER.Preload.Audio = Howl;

    /**
     * Holds audio library
     * @namespace HYPER.Preload.Audio
     */

    HYPER.Audio = {};
    
    /**
     * create a new Howler global controller.
     * @class HYPER.Audio.HowlerGlobal
     */
    
    HYPER.Audio.HowlerGlobal = HowlerGlobal;
    
    /**
     * Howler global controller.
     * @method HYPER.Audio.Howler
     */
    
    HYPER.Audio.Howler = Howler;
    
    /**
     * Load audio files, use Howler loader API.
     * @class HYPER.Audio.Howl
     */
    
    HYPER.Audio.Howl = Howl;
    
    /**
     * Howler Sound object.
     * @class HYPER.Audio.Sound
     */
    
    HYPER.Audio.Sound = Sound;


})();



(function () {
    "use strict";
    //HYPER.monkeys = WebMonkeys();
    /**
     * Holds all physics information
     * @namespace HYPER.Physics
     */
    HYPER.Physics = {};


})();


(function () {
    "use strict";

    var distX = 0;
    var distY = 0;
    var dx = 0;
    var dy = 0;
    var x = 0;
    var y = 0;

    /**
     * Check a collision between 2 aabb objects
     * @method HYPER.Physics.checkAABBCollision
     * @param {object} obj1 - First object to be checked.
     * @param {object} obj2 - Second object to be checked.
     */

    HYPER.Physics.checkAABBCollision = function (obj1, obj2) {
        var mesh1 = {},
            mesh2 = {};

        mesh1 = obj1;
        mesh2 = obj2;

        if (mesh1.x <= mesh2.x + mesh2.size.width && mesh1.x + mesh1.size.width >= mesh2.x &&
            mesh1.y <= mesh2.y + mesh2.size.height && mesh1.y + mesh1.size.height > mesh2.y) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Check a collision between 2 circular objects
     * @method HYPER.Physics.checkCircleCollision
     * @param {object} circle1 - First object to be checked.
     * @param {object} circle2 - Second object to be checked.
     */

    HYPER.Physics.checkCircleCollision = function (circle1, circle2) {
        if (Math.sqrt((circle1.x - circle2.x) * (circle1.x - circle2.x) + (circle1.y - circle2.y) * (circle1.y - circle2.y)) < circle1.size.radius + circle2.size.radius) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Check a collision between a AABB and a circle object.
     * @method HYPER.Physics.checkCircleAABBCollision
     * @param {object} circle - First object to be checked.
     * @param {object} rect - Second object to be checked.
     */

    HYPER.Physics.checkCircleAABBCollision = function (circle, rect) {
        distX = Math.abs(circle.x - rect.x - rect.size.width / 2);
        distY = Math.abs(circle.y - rect.y - rect.size.height / 2);

        if (distX > (rect.size.width / 2 + circle.size.radius)) {
            return false;
        }
        if (distY > (rect.size.height / 2 + circle.size.radius)) {
            return false;
        }

        if (distX <= (rect.size.width / 2)) {
            return true;
        }
        if (distY <= (rect.size.height / 2)) {
            return true;
        }

        dx = distX - rect.size.width / 2;
        dy = distY - rect.size.height / 2;
        return (dx * dx + dy * dy <= (circle.size.radius * circle.size.radius));
    }

    /**
     * Check a collision between a point and an AABB object.
     * @method HYPER.Physics.checkPointAABBCollision
     * @param {object} point - First object to be checked.
     * @param {object} rect - Second object to be checked.
     */

    HYPER.Physics.checkPointAABBCollision = function (point, rect) {
        if (point.x >= rect.x &&
            point.x <= rect.x + rect.size.width &&
            point.y >= rect.y &&
            point.y <= rect.y + rect.size.height) {
            return true;
        } else {
            return false;
        };
    };

    /**
     * Check a collision between a point and an circle object.
     * @method HYPER.Physics.checkPointCircleCollision
     * @param {object} point - First object to be checked.
     * @param {object} circle - Second object to be checked.
     */

    HYPER.Physics.checkPointCircleCollision = function (point, circle) {
        if (Math.sqrt((circle.x - point.x) * (circle.x - point.x) + (circle.y - point.y) * (circle.y - point.y)) <= circle.size.radius) {
            return true;
        } else {
            return false;
        }
    };

    /**
     * Check a collision between 2 point objects.
     * @method HYPER.Physics.checkPointPointCollision
     * @param {object} point1 - First object to be checked.
     * @param {object} point2 - Second object to be checked.
     */

    HYPER.Physics.checkPointPointCollision = function (point1, point2) {
        if (Math.floor(point1.x) === Math.floor(point2.x) && Math.floor(point2.x) === Math.floor(point2.x)) {
            return true;
        } else {
            return false;
        }
    };

    /**
     * Check a collision between 2 objects.
     * @method HYPER.Physics.checkCollision
     * @param {object} obj1 - First object to be checked.
     * @param {object} obj2 - Second object to be checked.
     */

    HYPER.Physics.checkCollision = function (obj1, obj2) {
        var obj1type, obj2type;
        if (!obj1.size) {
            obj1type = "point";
        }
        if (!obj1.shape === "circle") {
            obj1type = "circle";
        }
        if (!obj1.shape === "rect") {
            obj1type = "rect";
        }
        if (!obj2.size) {
            obj2type = "point";
        }
        if (!obj2.shape === "circle") {
            obj2type = "circle";
        }
        if (!obj2.shape === "rect") {
            obj2type = "rect";
        }

        if (obj1type === "point") {
            if (obj2type === "point") {
                return HYPER.Physics.checkPointPointCollision(obj1, obj2);
            }
            if (obj2type === "circle") {
                return HYPER.Physics.checkPointCircleCollision(obj1, obj2);
            }
            if (obj2type === "rect") {
                return HYPER.Physics.checkPointAABBCollision(obj1, obj2);
            }
        }
        if (obj1type === "rect") {
            if (obj2type === "rect") {
                return HYPER.Physics.checkAABBCollision(obj1, obj2);
            }
            if (obj2type === "circle") {
                return HYPER.Physics.checkCircleAABBCollision(obj2, obj1);
            }
            if (obj2type === "point") {
                return HYPER.Physics.checkPointAABBCollision(obj2, obj1);
            }
        }
        if (obj1type === "circle") {
            if (obj2type === "rect") {
                return HYPER.Physics.checkCircleAABBCollision(obj1, obj2);
            }
            if (obj2type === "circle") {
                return HYPER.Physics.checkCircleCircleCollision(obj2, obj1);
            }
            if (obj2type === "point") {
                return HYPER.Physics.checkPointCircleCollision(obj2, obj1);
            }
        }

    }

})();


(function () {
    "use strict";

    /**
     * All the methods to create and manulpate vectors.
     * @namespace HYPER.Physics.Vector
     */
    
    HYPER.Physics.Vector = {};
    
    /**
     * Creates a new vector.
     * @method HYPER.Physics.Vector.create
     */
    
    HYPER.Physics.Vector.create = function (x, y) {
        this.x = x || 0;
        this.y = y || 0;
        return {
            x: this.x,
            y: this.y
        }
    };
    
    /**
     * Clones a new vector.
     * @method HYPER.Physics.Vector.clone
     * @param {object} vector - The vector to be cloned.
     */
    
    HYPER.Physics.Vector.clone = function (vector) {
        this.x = vector.x || 0;
        this.y = vector.y || 0;
        return {
            x: this.x,
            y: this.y
        }
    };
    
    /**
     * Returns the length of a vector.
     * @method HYPER.Physics.Vector.magnitude
     * @param {object} vector - The vector to retrive the magnitude from.
     */
    
    HYPER.Physics.Vector.magnitude = function (vector) {
        return Math.sqrt((vector.x * vector.x) + (vector.y * vector.y));
    };
    
    /**
     * Returns the squared length of a vector.
     * @method HYPER.Physics.Vector.magnitudeSquared
     * @param {object} vector - The vector to retrive the squared magnitude from.
     */
    
    HYPER.Physics.Vector.magnitudeSquared = function (vector) {
        return (vector.x * vector.x) + (vector.y * vector.y);
    };
    
    /**
     * Rotates the vector by specified angle.
     * @method HYPER.Physics.Vector.rotate
     * @param {object} vector - The vector to rotate.
     * @param {number} angle - the angle to rotate the vector.
     */
    
    HYPER.Physics.Vector.rotate = function (vector, angle) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle);
        return {
            x: vector.x * cos - vector.y * sin,
            y: vector.x * sin + vector.y * cos
        };
    };
    
    /**
     * Rotates the vector about a specified point by specified angle.
     * @method HYPER.Physics.Vector.rotateAbout
     * @param {object} vector - The vector to rotate.
     * @param {number} angle - the angle to rotate the vector.
     * @param {object} point - The point to rotate around.
     */
    
    HYPER.Physics.Vector.rotateAbout = function (vector, angle, point, output) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle);
        if (!output) output = {};
        var x = point.x + ((vector.x - point.x) * cos - (vector.y - point.y) * sin);
        output.y = point.y + ((vector.x - point.x) * sin + (vector.y - point.y) * cos);
        output.x = x;
        return output;
    };
    
    /**
     * Normalises a vector (so that the vectors magnitude is 1)
     * @method HYPER.Physics.Vector.normalise
     * @param {object} vector - The vector to normalise.
     */
    
    HYPER.Physics.Vector.normalise = function (vector) {
        var magnitude = HYPER.Physics.Vector.magnitude(vector);
        if (magnitude === 0)
            return {
                x: 0,
                y: 0
            };
        return {
            x: vector.x / magnitude,
            y: vector.y / magnitude
        };
    };
    
    /**
     * Returns the dot-product of two vectors.
     * @method HYPER.Physics.Vector.dot
     * @param {object} vectorA - The first vector.
     * @param {object} vectorB - The second vector.
     */
    
    HYPER.Physics.Vector.dot = function (vectorA, vectorB) {
        return (vectorA.x * vectorB.x) + (vectorA.y * vectorB.y);
    };
    
    /**
     * Returns the cross-product of two vectors.
     * @method HYPER.Physics.Vector.cross
     * @param {object} vectorA - The first vector.
     * @param {object} vectorB - The second vector.
     */
    
    HYPER.Physics.Vector.cross = function (vectorA, vectorB) {
        return (vectorA.x * vectorB.y) - (vectorA.y * vectorB.x);
    };
    
    /**
     * Returns the cross-product of three vectors.
     * @method HYPER.Physics.Vector.cross3
     * @param {object} vectorA - The first vector.
     * @param {object} vectorB - The second vector.
     * @param {object} vectorC - The third vector.
     */
    
    HYPER.Physics.Vector.cross3 = function (vectorA, vectorB, vectorC) {
        return (vectorB.x - vectorA.x) * (vectorC.y - vectorA.y) - (vectorB.y - vectorA.y) * (vectorC.x - vectorA.x);
    };
    
    /**
     * Adds the two vectors.
     * @method HYPER.Physics.Vector.add
     * @param {object} vectorA - The first vector.
     * @param {object} vectorB - The second vector.
     */
    
    HYPER.Physics.Vector.add = function (vectorA, vectorB, output) {
        if (!output) output = {};
        output.x = vectorA.x + vectorB.x;
        output.y = vectorA.y + vectorB.y;
        return output;
    };
    
    /**
     * Subtracts the two vectors.
     * @method HYPER.Physics.Vector.sub 
     * @param {object} vectorA - The first vector.
     * @param {object} vectorB - The second vector.
     */
    
    HYPER.Physics.Vector.sub = function (vectorA, vectorB, output) {
        if (!output) output = {};
        output.x = vectorA.x - vectorB.x;
        output.y = vectorA.y - vectorB.y;
        return output;
    };
    
    /**
     * Multiplies a vector and a scalar.
     * @method HYPER.Physics.Vector.mult
     * @param {object} vector - The vector to multiply.
     * @param {object} scalar - The scalar to multiply by.
     */
    
    HYPER.Physics.Vector.mult = function (vector, scalar) {
        return {
            x: vector.x * scalar,
            y: vector.y * scalar
        };
    };
    
    /**
     * Divides a vector and a scalar.
     * @method HYPER.Physics.Vector.div
     * @param {object} vector - The vector to divide by.
     * @param {object} scalar - The scalar to divide by.
     */
    
    HYPER.Physics.Vector.div = function (vector, scalar) {
        return {
            x: vector.x / scalar,
            y: vector.y / scalar
        };
    };
    
    /**
     * Returns the perpendicular vector. Set `negate` to true for the perpendicular in the opposite direction.
     * @method HYPER.Physics.Vector.perp
     * @param {object} vector - The vector to retrive the perpendicular vector from.
     * @param {object} negate - Set to true to retrive the negated form of the perpendicular vector.
     */
    
    HYPER.Physics.Vector.perp = function (vector, negate) {
        negate = negate === true ? -1 : 1;
        return {
            x: negate * -vector.y,
            y: negate * vector.x
        };
    };
    
    /**
     * Negates both components of a vector such that it points in the opposite direction.
     * @method HYPER.Physics.Vector.neg
      * @param {object} vector - The vector to negate.
     */
    
    HYPER.Physics.Vector.neg = function (vector) {
        return {
            x: -vector.x,
            y: -vector.y
        };
    };
    
    /**
     * Returns the angle in radians between the two vectors relative to the x-axis. To get it in degrees, set angle to true.
     * @method HYPER.Physics.Vector.angle
     * @param {object} vectorA - The first vector.
     * @param {object} vectorB - The second vector.
     * @param {boolean} degrees - Set to true to get answer in degrees.
     */
    
    HYPER.Physics.Vector.angle = function (vectorA, vectorB, degrees) {
        if (degrees === true) {
            return HYPER.Math.RadiansToDegrees(Math.atan2(vectorB.y - vectorA.y, vectorB.x - vectorA.x));
        } else {
            return Math.atan2(vectorB.y - vectorA.y, vectorB.x - vectorA.x);
        }

    };


})();


/*
 * Copyright (c) 2016 Ivo Wetzel
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files 
 * (the "Software"), to deal in the Software without restriction, 
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE 
 * USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/* This software has been heavily modified by Andrew Stavast.
 * If you wish to view the original software,
 * it can currently be found at https://gist.github.com/BonsaiDen/6144232
 */
(function () {
    'use strict';

    /**
     * Holds all info for the BOXJS physics engine.
     * @namespace HYPER.Physics.BoxJS
     */

    HYPER.Physics.BoxJS = {};

    /**
     * Create a new vector.
     * @class HYPER.Physics.BoxJS.Vector2
     * @param {number} x X placement of the vector.
     * @param {number} y Y placement of the vector.
     */

    HYPER.Physics.BoxJS.Vector2 = function (x, y) {

        /**
         * @property {number} y - Y location of the vector.
         */

        this.x = x;

        /**
         * @property {number} x - X location of the vector.
         */

        this.y = y;
    }

    HYPER.Physics.BoxJS.Vector2.prototype = {

        /**
         * Add 2 vectors.
         * @method HYPER.Physics.BoxJS.Vector2.add
         * @param {object} v vector.
         */

        add: function (v) {
            return new HYPER.Physics.BoxJS.Vector2(this.x + v.x, this.y + v.y);
        },

        /**
         * subtract 2 vectors.
         * @method HYPER.Physics.BoxJS.Vector2.sub
         * @param {object} v vector.
         */

        sub: function (v) {
            return new HYPER.Physics.BoxJS.Vector2(this.x - v.x, this.y - v.y);
        },

        /**
         * Dot value of 2 vectors
         * @method HYPER.Physics.BoxJS.Vector2.dot
         * @param {object} v vector.
         */

        dot: function (v) {
            return this.x * v.x + this.y * v.y;
        },

        /**
         * Cross value of 2 vectors
         * @method HYPER.Physics.BoxJS.Vector2.cross
         * @param {object} v vector.
         */

        cross: function (v) {
            return this.x * v.y - this.y * v.x;
        },

        /**
         * Divide 2 vectors
         * @method HYPER.Physics.BoxJS.Vector2.div
         * @param {object} v vector.
         */

        div: function (s) {
            this.x /= s;
            this.y /= s;
            return this;
        },

        /**
         * Multiply 2 vectors
         * @method HYPER.Physics.BoxJS.Vector2.mul
         * @param {object} v vector.
         */

        mul: function (s) {
            this.x *= s;
            this.y *= s;
            return this;
        },

        /**
         * Normalize a vector.
         * @method HYPER.Physics.BoxJS.Vector2.normalize
         */

        normalize: function () {

            var len = this.length();
            if (this.length > 0.0001) {
                var invLen = 1.0 / len;
                this.x *= invLen;
                this.y *= invLen;
            }

        },

        /**
         * Get the squared length of a vector.
         * @method HYPER.Physics.BoxJS.Vector2.length
         */

        lengthSqr: function () {
            return this.x * this.x + this.y * this.y;
        },

        /**
         * Get the length of a vector.
         * @method HYPER.Physics.BoxJS.Vector2.length
         */

        length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }

    };

    /**
     * Create a new material.
     * @class HYPER.Physics.BoxJS.material
     * @param {object} e object to pass all parameters.
     * @param {boolean} e.fixed=false Should the physics body be fixed in place?
     * @param {number} e.restitution=0.1 How bouncy is the material?
     * @param {number} e.dynamicFriction=0.3 How much does friction affect this material while moving?
     * @param {number} e.staticFriction=1 How much does friction affect this material while at rest?
     * @param {array} e.dontCollideWith What materials does this pass through? Accepts the material name.
     * @param {string} e.name What is this material called?
     */

    HYPER.Physics.BoxJS.material = function (e) {
        e = e || {};

        /**
         * @property {string} _ID - The specific ID for this object.
         */

        this._ID = "material " + Math.random() + "" + Math.random();

        /**
         * @property {string} type - What type of object this is.
         */

        this.type = "material";

        /**
         * @property {boolean} fixed=false - Should this material be fixed in place?
         */

        this.fixed = e.fixed || false;

        /**
         * @property {number} restitution=0.1 - How bouncy is this material?
         */

        this.restitution = e.restitution || 0.1;

        /**
         * @property {number} staticFriction=1 - How much does friction affect this material while at rest?
         */

        this.staticFriction = e.staticFriction || 1;

        /**
         * @property {number} dynamicFriction=1 - How much does friction affect this material while in motion?
         */

        this.dynamicFriction = e.dynamicFriction || 0.3;

        /**
         * @property {array} dontCollideWith - What materials does this pass through? Accepts the material name.
         */

        this.dontCollideWith = e.dontCollideWith || [];

        /**
         * @property {array} name - What is this material called?
         */

        this.name = e.name || "material number: " + math.random();

    }

    var DEFAULT_MATERIAL = new HYPER.Physics.BoxJS.material({
        name: "DEFAULT_MATERIAL"
    });


    /**
     * Create a new AABB Box.
     * @class HYPER.Physics.BoxJS.Box
     * @param {object} e object to pass all parameters.
     * @param {HYPER.Physics.BoxJS.Vector2} e.pos Position of object.
     * @param {object} e.size Size of object.
     * @param {number} e.size.width Width of object.
     * @param {number} e.size.height Height of object.
     * @param {number} e.mass Mass of object.
     */

    HYPER.Physics.BoxJS.Box = function (e) {
        e = e || {};
        e.mass = e.mass || 1;
        e.maxVel = e.maxVel || {};

        if (e.material) {
            if (e.material.type === "material") {
                this.material = e.material;
            }
        } else {
            /**
             * @property {number} material - The material of this object.
             */
            this.material = DEFAULT_MATERIAL;
        }

        /**
         * @property {number} mass - The mass of this object.
         */

        this.mass = e.mass !== undefined ? e.mass : 1;

        /**
         * @property {number} active - Is object active?
         */

        this.active = true;

        /**
         * @property {number} isSleeping - Is object sleeping?
         */

        this.isSleeping = false;

        /**
         * @property {number} sleepCounter - How long has the object been sleeping?
         */

        this.sleepCounter = 0;

        /**
         * @property {string} type - What type of object this is.
         */

        this.type = "boxJSAABB";

        /**
         * @property {string} _ID - The specific ID for this object.
         */

        this._ID = "boxJSAABB " + Math.random() + "" + Math.random();

        /**
         * @private
         * @property {string} immovable - Is the object immovable?
         */

        this.immovable = e.fixed || false;

        /**
         * @property {HYPER.Physics.BoxJS.Vector2} oldPos - The old position of the object.
         */

        this.oldPos = new HYPER.Physics.BoxJS.Vector2(0, 0);

        /**
         * @property {HYPER.Physics.BoxJS.Vector2} center - The center of the object.
         */

        this.center = new HYPER.Physics.BoxJS.Vector2(e.width / 2 || 16, e.height / 2 || 16);

        /**
         * @property {number} im - The inverse mass.
         */

        this.im = e.mass === 0 ? 0 : 1 / e.mass;

        /**
         * @property {number} restitution=0.1 - The bouncyness of the object.
         */

        this.restitution = 0.1;

        /**
         * @property {number} staticFriction=1 - How much does friction affect this material while at rest?
         */

        this.staticFriction = 1;

        /**
         * @property {number} staticFriction=1 - How much does friction affect this material while in motion?
         */

        this.dynamicFriction = 0.3;

        /**
         * @property {HYPER.Physics.BoxJS.Vector2} maxVel={x:1000,y:1000} - What is the max velocity?
         */

        this.maxVel = new HYPER.Physics.BoxJS.Vector2(e.maxVel.x || 1000, e.maxVel.y || 1000);

        /**
         * @property {HYPER.Physics.BoxJS.Vector2} pos - What is position of the object?
         */

        this.pos = new HYPER.Physics.BoxJS.Vector2(e.x, e.y);

        /**
         * @property {HYPER.Physics.BoxJS.Vector2} vel - The velocity of the object.
         */

        this.vel = new HYPER.Physics.BoxJS.Vector2(0, 0);

        /**
         * @property {HYPER.Physics.BoxJS.Vector2} acc - The accelartion of the object.
         */

        this.acc = new HYPER.Physics.BoxJS.Vector2(0, 0);

        /**
         * @property {number} sleepThreshold - How slow should the object be to go to sleep.
         */

        this.sleepThreshold = e.sleepThreshold || 1;

        /**
         * @property {object} size - What size the object is.
         */

        this.size = {

            /**
             * @property {number} size.width - How wide the object is.
             */

            width: e.width,

            /**
             * @property {number} size.height - How tall the object is.
             */

            height: e.height
        };

        /**
         * @property {boolean} fixed=false - Is the object fixed in place?
         */

        this.fixed = e.fixed || false;

        /**
         * @property {HYPER.Physics.BoxJS.Vector2} force - Forces applied to the object.
         */

        this.force = new HYPER.Physics.BoxJS.Vector2(0, 0);

        /**
         * @property {HYPER.Physics.BoxJS.Vector2} min - Minium X and Y point of the object.
         */

        this.min = new HYPER.Physics.BoxJS.Vector2(0, 0);

        /**
         * @property {HYPER.Physics.BoxJS.Vector2} max - Maxium X and Y point of the object.
         */

        this.max = new HYPER.Physics.BoxJS.Vector2(0, 0);




    }

    HYPER.Physics.BoxJS.Box.prototype = {

        /**
         * Update the material data.
         * @private
         * @method HYPER.Physics.BoxJS.Box.updateMaterial
         */

        updateMaterial: function () {
            this.restitution = this.material.restitution;
            this.fixed = this.fixed || this.material.fixed;
            this.staticFriction = this.material.staticFriction;
            this.dynamicFriction = this.material.dynamicFriction;
        },

        /**
         * Check to see if overlaping another box.
         * @method HYPER.Physics.BoxJS.Box.isOverlapping
         * @param {HYPER.Physics.BoxJS.Box} other box to overlap.
         */

        isOverlapping: function (other) {
            if (other.type === "boxJSAABB") {
                if (this.max.x < other.min.x || this.min.x > other.max.x) {
                    return false;

                } else if (this.max.y < other.min.y || this.min.y > other.max.y) {
                    return false;

                } else {
                    return true;
                }
            } else if (other.x && other.y && other.width && other.height) {
                if (this.min.x <= rect2.x + rect2.width && this.max.x >= rect2.x &&
                    this.min.y <= rect2.y + rect2.height && this.max.x > rect2.y) {
                    // If they are colliding, return true
                    return true;
                } else {
                    // If they are not colliding, return false
                    return false;
                }
            } else if (other.type === "boxJSParticle") {
                if (other.pos.x > this.min.x &&
                    other.pos.x < this.max.x &&
                    other.pos.y > this.min.y &&
                    other.pos.y < this.max.y) {
                    return true;
                }
            } else {
                return false;
            }

        },

        /**
         * Update the sleeping state.
         * @private
         * @method HYPER.Physics.BoxJS.Box.updateSleeping
         * @param {boolean} allow If sleeping is allowed.
         */

        updateSleeping: function (allow) {
            if (allow) {

                if (this.speed <= this.sleepThreshold) {
                    this.sleepCounter++;
                } else if (this.speed > this.sleepThreshold) {
                    this.isSleeping = false;
                    this.sleepCounter = 0;
                }


                if (this.force.x !== 0 || this.force.y !== 0) {
                    this.sleepCounter = 0;
                }
                if (this.sleepCounter >= 100) {
                    this.isSleeping = true;
                } else {
                    this.isSleeping = false;
                }
            } else {
                this.isSleeping = false;
                this.sleepCounter = 0;
            }
            if (!this.active) {
                this.sleepCounter = 0;
            }
            if (this.fixed || this.im === 0) {
                this.isSleeping = true;
                this.sleepCounter = 201;
            }
        },

        /**
         * Set the sleeping state.
         * @method HYPER.Physics.BoxJS.Box.setSleeping
         * @param {boolean} set Set the sleeping state
         */

        setSleeping: function (set) {
            if (set === false) {
                this.isSleeping = false;
                this.sleepCounter = 0;
            } else {
                this.isSleeping = true;
                this.sleepCounter = 201;
            }

        },

        /**
         * Update the bounds of the object.
         * @private
         * @method HYPER.Physics.BoxJS.Box.updateBounds
         */

        updateBounds: function () {
            this.min.x = this.pos.x;
            this.max.x = this.pos.x + this.size.width;
            this.min.y = this.pos.y;
            this.max.y = this.pos.y + this.size.height;

            this.im = this.mass === 0 ? 0 : 1 / this.mass;
            if (this.fixed) {
                this.im = 0;
            }

        },

        /**
         * Integrate the forces.
         * @private
         * @method HYPER.Physics.BoxJS.Box.integrateForces
         * @param {HYPER.Physics.BoxJS.Vector2} gravity Set the gravity in the x and y position.
         */

        integrateForces: function (gravity) {
            if (this.im !== 0 && !this.isSleeping && this.active) {
                this.vel.x += this.acc.x;
                this.vel.y += this.acc.y;
                this.vel.x += (this.force.x * this.im + gravity.x) / 2;
                this.vel.y += (this.force.y * this.im + gravity.y) / 2;

                this.angularVel += this.angularAcc;
            }
        },

        /**
         * Integrate the velocity.
         * @private
         * @method HYPER.Physics.BoxJS.Box.integratevel
         * @param {HYPER.Physics.BoxJS.Vector2} gravity Set the gravity in the x and y position.
         * @param {boolean} allow If sleeping is allowed.
         */

        integratevel: function (gravity, allow) {
            if (this.isSleeping === true || !this.active) {
                this.vel.x = 0;
                this.vel.y = 0;
            } else {
                if (this.vel.x > this.maxVel.x) {
                    this.vel.x = this.maxVel.x;
                }
                if (this.vel.y > this.maxVel.y) {
                    this.vel.y = this.maxVel.y;
                }
                if (this.im !== 0) {
                    if (!this.fixed) {


                        this.pos.x += this.vel.x;
                        this.pos.y += this.vel.y;
                        this.angularPos += this.angularVel;


                    }
                }
            }

            this.integrateForces(gravity, allow);
            this.speed = Math.sqrt((this.pos.x - this.oldPos.x) * (this.pos.x - this.oldPos.x) + (this.pos.y - this.oldPos.y) * (this.pos.y - this.oldPos.y));
            //this.speed = Math.sqrt((this.vel.x) * (this.vel.x) + (this.vel.y) * (this.vel.y));


        },

        /**
         * Apply an impulse on the object.
         * @method HYPER.Physics.BoxJS.Box.applyImpulse
         * @param {number} x X impulse.
         * @param {number} y Y impulse.
         */

        applyImpulse: function (x, y) {
            if (!this.fixed && this.active) {
                this.vel.x += this.im * x;
                this.vel.y += this.im * y;

            }
        },

        /**
         * Apply an force on the object.
         * @method HYPER.Physics.BoxJS.Box.applyForce
         * @param {number} x X force.
         * @param {number} y Y force.
         */

        applyForce: function (x, y) {
            if (!this.fixed && this.active) {
                this.force.x += x;
                this.force.y += y;

            }
        },

        /**
         * clear the forces on the object.
         * @method HYPER.Physics.BoxJS.Box.clearForces
         */

        clearForces: function () {
            this.force.x = 0;
            this.force.y = 0;
        }

    };

    /**
     * Collide 2 AABBs
     * @private
     * @method HYPER.Physics.BoxJS.collideAABB
     * @param {HYPER.Physics.BoxJS.Box} a First box to collide.
     * @param {HYPER.Physics.BoxJS.Box} b Second box to collide.
     * @param {HYPER.Physics.BoxJS.Vector2} gravity Gravity to be applied.
     * @param {number} epsilon Epsilon value to be used.
     */

    HYPER.Physics.BoxJS.collideAABB = function (a, b, gravity, epsilon) {
        var e = Math.min(a.restitution || 0.1, b.restitution || 0.1);
        var sf = 0;
        var df = 0;

        var normal = new HYPER.Physics.BoxJS.Vector2(0, 0);
        var penetration = 0;


        // TODO is this correct?
        sf = Math.sqrt(a.staticFriction * b.staticFriction);
        df = Math.sqrt(a.dynamicFriction * b.dynamicFriction);

        // Figure out whether this is a resting collision, if so do not apply
        // any restitution
        var rx = b.vel.x - a.vel.x,
            ry = b.vel.y - a.vel.y;

        if ((rx * rx + ry * ry) < (gravity.x * gravity.x + gravity.y * gravity.y) + epsilon) {
            e = 0.0;
        }


        var nx = (a.pos.x + (a.size.width / 2)) - (b.pos.x + (b.size.width / 2)),
            ny = (a.pos.y + (a.size.height / 2)) - (b.pos.y + (b.size.height / 2));

        // Calculate half extends along x axis
        var aex = (a.max.x - a.min.x) / 2,
            bex = (b.max.x - b.min.x) / 2;
        // Calculate half extends along y axis
        var aey = (a.max.y - a.min.y) / 2,
            bey = (b.max.y - b.min.y) / 2;

        var keepGoing = false;

        // Overlap on x axis
        var xoverlap = aex + bex - Math.abs(nx);
        if (xoverlap) {



            // Overlap on y axis
            var yoverlap = aey + bey - Math.abs(ny);
            if (yoverlap) {

                // Find out which axis is the axis of least penetration
                if (xoverlap < yoverlap) {

                    // Point towards B knowing that n points from A to B
                    normal.x = nx < 0 ? 1 : -1;
                    normal.y = 0;
                    penetration = xoverlap;
                    keepGoing = true;

                } else {

                    // Point towards B knowing that n points from A to B
                    normal.x = 0;
                    normal.y = ny < 0 ? 1 : -1;
                    penetration = yoverlap;
                    keepGoing = true;

                }

            }

        }
        if (!keepGoing) {
            return false;
        }


        // Relative vel from a to b
        var rx = b.vel.x - a.vel.x,
            ry = b.vel.y - a.vel.y,


            velAlongNormal = rx * normal.x + ry * normal.y;

        // If the velocities are separating do nothing
        if (velAlongNormal > 0) {
            return;

        } else {



            // Correct penetration
            var j = -(1.0 + e) * velAlongNormal;
            j /= (a.im + b.im);

            // Apply the impulse each box gets a impulse based on its mass
            // ratio
            if (b.type !== "boxJSParticle") {
                a.applyImpulse(-j * normal.x, -j * normal.y);
            }
            if (a.type !== "boxJSParticle") {
                b.applyImpulse(j * normal.x, j * normal.y);
            }


            // Apply Friction
            var tx = rx - (normal.x * velAlongNormal),
                ty = ry - (normal.y * velAlongNormal),
                tl = Math.sqrt(tx * tx + ty * ty);

            if (tl > epsilon) {
                tx /= tl;
                ty /= tl;
            }

            var jt = -(rx * tx + ry * ty);
            jt /= (a.im + b.im);

            // Don't apply tiny friction impulses
            if (Math.abs(jt) < epsilon) {
                //return;
            }


            if (Math.abs(jt) < j * sf) {
                tx = tx * jt;
                ty = ty * jt;

            } else {
                tx = tx * -j * df;
                ty = ty * -j * df;
            }

            if (b.type !== "boxJSParticle") {
                a.applyImpulse(-tx, -ty);
            }
            if (a.type !== "boxJSParticle") {
                b.applyImpulse(tx, ty);
            }

        }


        var percent = 0.7,
            slop = 0.05,
            m = Math.max(penetration - slop, 0.0) / (a.im + b.im);

        // Apply correctional impulse
        var cx = m * normal.x * percent,
            cy = m * normal.y * percent;



        if (a.isSleeping) {
            if (Math.abs(cx * a.im) > a.sleepThreshold / 4 || Math.abs(cy * a.im) > a.sleepThreshold / 4) {
                a.sleepCounter = 0;
                a.isSleeping = false;
            }
        }
        if (b.isSleeping) {
            if (Math.abs(cx * b.im) > b.sleepThreshold / 4 || Math.abs(cy * b.im) > b.sleepThreshold / 4) {
                b.sleepCounter = 0;
                b.isSleeping = false;
            }
        }
        a.pos.x -= cx * a.im;
        a.pos.y -= cy * a.im;

        b.pos.x += cx * b.im;
        b.pos.y += cy * b.im;


    }

    /**
     * Collide 2 objects
     * @private
     * @method HYPER.Physics.BoxJS.collide
     * @param {HYPER.Physics.BoxJS.Box} a First box to collide.
     * @param {HYPER.Physics.BoxJS.Box} b Second box to collide.
     * @param {HYPER.Physics.BoxJS.Vector2} gravity Gravity to be applied.
     * @param {number} epsilon Epsilon value to be used.
     */

    HYPER.Physics.BoxJS.collide = function (a, b, gravity, epsilon) {
        if (a.type === "boxJSAABB" && b.type === "boxJSAABB") {
            HYPER.Physics.BoxJS.collideAABB(a, b, gravity, epsilon);
        }
    };

    var collisionObjects = [];
    var collisionNumber = 0;

    /**
     * Creat a physics engine
     * @class HYPER.Physics.BoxJS.Engine
     * @param {object} e object to pass all parameters.
     * @param {number} e.zIndex=0 Z index for the debug to render at.
     * @param {HYPER.Physics.BoxJS.Vector2} e.gravity Gravity to be applied to objects.
     * @param {boolean} e.allowSleeping Allow the objects to sleep.
     * @param {boolean} e.debug Allow the objects outlines to be seen.
     * @param {object} e.bounds Set the minium and maxium bounds of the world.
     * @param {HYPER.Physics.BoxJS.Vector2} e.bounds.min Set the minium bounds of the world.
     * @param {HYPER.Physics.BoxJS.Vector2} e.bounds.max Set the maxium bounds of the world.
     */

    HYPER.Physics.BoxJS.Engine = function (e) {
        e = e || {};
        e.gravity = e.gravity || {};

        /**
         * @property {number} zIndex - The z-index this will be rendered as.
         */

        this.zIndex = e.zIndex || 0

        /**
         * @property {number} iterations=10 - The number of iterations.
         */

        this.iterations = 10;

        /**
         * @property {HYPER.Physics.BoxJS.Vector2} gravity - The gravity of the world.
         */

        this.gravity = new HYPER.Physics.BoxJS.Vector2(e.gravity.x || 0, e.gravity.y || 1);

        /**
         * @property {boolean} allowSleeping - Allow bodies to sleep.
         */

        this.allowSleeping = e.allowSleeping || false;
        this.contacts = [];
        this.contactsLength = 0;
        this.bodies = [];
        this.length = 0;
        this.debug = e.debug || false;
        this.render = e.render || no0p;
        this.update = e.update || no0p;
        e.bounds = e.bounds || {};
        this.bounds = {
            min: e.bounds.min || {
                x: -Infinity,
                y: -Infinity
            },
            max: e.bounds.max || {
                x: Infinity,
                y: Infinity
            },
        }
    }

    HYPER.Physics.BoxJS.Engine.EPSILON = 0.0001;

    HYPER.Physics.BoxJS.Engine.prototype = {

        /**
         * Finds and solves all collisions.
         * @private
         * @method HYPER.Physics.BoxJS.Engine.findCollisions
         */

        findCollisions: function () {

            var DONT_COLLIDE = false;


            for (var i = 0; i < this.bodies.length; i++) {

                var a = this.bodies[i];
                for (var j = i + 1; j < this.bodies.length; j++) {

                    var b = this.bodies[j];

                    if (a.active === false || b.active === false) {
                        DONT_COLLIDE = true;
                    }


                    if (a.isSleeping === true && b.isSleeping === true && !DONT_COLLIDE) {
                        DONT_COLLIDE = true;

                    }



                    if (a.isSleeping && b.fixed && !DONT_COLLIDE) {
                        DONT_COLLIDE = true;
                    } else if (a.fixed && b.isSleeping && !DONT_COLLIDE) {
                        DONT_COLLIDE = true;
                    }



                    if (a.fixed && b.fixed && !DONT_COLLIDE) {
                        DONT_COLLIDE = true;
                    }
                    if (a.im === 0 && b.im === 0 && !DONT_COLLIDE) {
                        DONT_COLLIDE = true;
                    }

                    for (let g = 0; g < b.material.dontCollideWith.length; g++) {
                        if (b.material.dontCollideWith[g] === a.material.name && !DONT_COLLIDE) {
                            DONT_COLLIDE = true;
                        }
                    }
                    for (let g = 0; g < a.material.dontCollideWith.length; g++) {
                        if (a.material.dontCollideWith[g] === b.material.name && !DONT_COLLIDE) {
                            DONT_COLLIDE = true;
                        }
                    }



                    if (DONT_COLLIDE) {
                        DONT_COLLIDE = false;
                        continue;


                    } else if (a.isOverlapping(b)) {

                        HYPER.Physics.BoxJS.collide(a, b, this.gravity, HYPER.Physics.BoxJS.Engine.EPSILON);

                    }


                }

            }

        },

        /**
         * Integrates all forces
         * @private
         * @method HYPER.Physics.BoxJS.Engine.integrateForces
         */

        integrateForces: function () {
            for (var i = 0; i < this.bodies.length; i++) {
                this.bodies[i].integrateForces(this.gravity);
            }
        },

        /**
         * Integrates all velocities.
         * @private
         * @method HYPER.Physics.BoxJS.Engine.integrateVelocities
         */

        integrateVelocities: function () {
            for (var i = 0; i < this.bodies.length; i++) {

                this.bodies[i].integratevel(this.gravity, this.allowSleeping);

                this.bodies[i].clearForces();
                this.bodies[i].updateBounds();
                this.bodies[i].updateMaterial();

            }
        },

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Physics.BoxJS.Engine._update
         * @param {number} a - Information to be known about parent object.
         */

        _update: function (a) {
            for (let i = 0; i < this.bodies.length; i++) {
                this.bodies[i].oldPos.x = this.bodies[i].pos.x;
                this.bodies[i].oldPos.y = this.bodies[i].pos.y;

            }

            this.findCollisions();
            this.integrateForces();
            this.integrateVelocities();



            for (let i = 0; i < this.bodies.length; i++) {

                if (this.bodies[i].pos.x < this.bounds.min.x) {
                    this.bodies[i].pos.x = this.bounds.min.x;
                }
                if (this.bodies[i].pos.y < this.bounds.min.y) {
                    this.bodies[i].pos.y = this.bounds.min.y;
                }
                if (this.bodies[i].pos.x + this.bodies[i].size.width < this.bounds.min.x) {
                    this.bodies[i].pos.x = this.bounds.min.x - this.bodies[i].size.width;
                }
                if (this.bodies[i].pos.y + this.bodies[i].size.height < this.bounds.min.y) {
                    this.bodies[i].pos.y = this.bounds.min.y - this.bodies[i].size.height;
                }
                this.bodies[i].updateSleeping(this.allowSleeping);


            }

            this.update();

        },

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Physics.BoxJS.Engine._render
         * @param {number} a - Information to be known about parent object.
         */

        _render: function (a) {
            if (this.debug) {
                HYPER.Graphics.styleToCTX(HYPER.Graphics.DEFAULT_STYLE, a.ctx);
                for (let i = 0; i < this.bodies.length; i++) {

                    if (this.bodies[i].active) {
                        a.ctx.beginPath();
                        //a.ctx.rect(this.bodies[i].pos.x - a.camera.x, this.bodies[i].pos.y - a.camera.y, this.bodies[i].size.width, this.bodies[i].size.height);
                        a.ctx.moveTo(this.bodies[i].min.x - a.camera.x, this.bodies[i].min.y - a.camera.y);
                        a.ctx.lineTo(this.bodies[i].max.x - a.camera.x, this.bodies[i].min.y - a.camera.y);
                        a.ctx.lineTo(this.bodies[i].max.x - a.camera.x, this.bodies[i].max.y - a.camera.y);
                        a.ctx.lineTo(this.bodies[i].min.x - a.camera.x, this.bodies[i].max.y - a.camera.y);
                        a.ctx.lineTo(this.bodies[i].min.x - a.camera.x, this.bodies[i].min.y - a.camera.y);

                        a.ctx.moveTo((this.bodies[i].min.x + this.bodies[i].max.x) / 2 - a.camera.x, (this.bodies[i].min.y + this.bodies[i].max.y) / 2 - a.camera.y);
                        a.ctx.lineTo(this.bodies[i].oldPos.x + (this.bodies[i].size.width / 2) - a.camera.x, this.bodies[i].oldPos.y + (this.bodies[i].size.height / 2) - a.camera.y);

                        if (this.bodies[i].isSleeping && this.allowSleeping) {
                            a.ctx.strokeStyle = "#0000ff";
                        } else {
                            a.ctx.strokeStyle = "#ff0000";

                        }

                        a.ctx.stroke();
                    }



                }

            }

            this.render(a);
        },

        /**
         * Add a object to the engine.
         * @method HYPER.Physics.BoxJS.Engine.addBody
         * @param {object} box - Add a AABB box, or a sprite with physics enabled.
         */

        addBody: function (box) {
            if (box.type === "sprite") {
                this.bodies.push(box.body);
                this.length++;
            } else if (box.type === "group") {
                for (let i = 0; i < box.group.length; i++) {
                    this.bodies.push(box.group[i].body);
                    this.length++;
                }
                box.physics = "BoxAABB";
                box.world = this;
            } else if (box.type === "boxJSAABB") {
                this.bodies.push(box);
                this.length++;
            }

        },

        /**
         * Remove a object from the engine.
         * @method HYPER.Physics.BoxJS.Engine.removeBody
         * @param {object} box - Add a AABB box, or a sprite with physics enabled.
         */

        removeBody: function (box) {
            for (let i = 0; i < this.bodies.length; i++) {
                if (this.bodies[i] === box) {
                    this.bodies.splice(i, 1);
                    this.length--;
                }
            }
        },

    };

    /**
     * Enable a sprite for physics.
     * @method HYPER.Physics.BoxJS.enable
     * @param {HYPER.Sprite} sprite First box to collide.
     */

    HYPER.Physics.BoxJS.enable = function (sprite, physicsDATA) {
        if (sprite.type === "sprite") {
            physicsDATA = physicsDATA || {};
            physicsDATA.x = physicsDATA.x || sprite.x || 0;
            physicsDATA.y = physicsDATA.y || sprite.y || 0;
            physicsDATA.width = physicsDATA.width || sprite.width;
            physicsDATA.height = physicsDATA.height || sprite.height;
            physicsDATA.center = {
                x: sprite.rotX || physicsDATA.width / 2,
                y: sprite.rotY || physicsDATA.height / 2
            };
            physicsDATA.angularPos = sprite.angle || 0;
            sprite.body = new HYPER.Physics.BoxJS.Box(physicsDATA);
        }
        if (sprite.type === "group") {
            for (let i = 0; i < sprite.group.length; i++) {
                physicsDATA = physicsDATA || {};
                physicsDATA.x = physicsDATA.x || sprite.group[i].x || 0;
                physicsDATA.y = physicsDATA.y || sprite.group[i].y || 0;
                physicsDATA.width = physicsDATA.width || sprite.group[i].width;
                physicsDATA.height = physicsDATA.height || sprite.group[i].height;
                physicsDATA.center = {
                    x: sprite.group[i].rotX || physicsDATA.width / 2,
                    y: sprite.group[i].rotY || physicsDATA.height / 2
                };
                physicsDATA.angularPos = sprite.angle || 0;
                sprite.group[i].body = new AABB(physicsDATA);
            }
            sprite.physics = "BoxAABB";
        }

    };

})();


(function () {
    "use strict";

    /**
     * Create particles and emitters for your games.
     * @namespace HYPER.Particle
     */

    HYPER.Particle = {};


    /**
     * Create a new particle. 
     * @class HYPER.Particle.Particle
     * @param {object} e Object to pass all particle info.
     * @param {object} e.texture bitmap to be rendered as the particles.
     * @param {object} e.style Style info of this particle.
     * @param {number} e.x=0 X location of the particle.
     * @param {number} e.y=0 Y location of the particle.
     * @param {number} e.lifeTime=100 life time of the particle.
     * @param {number} e.startSize=10 The size the particle will start out as.
     * @param {number} e.endSize=10 The size the particle will end up as.
     * @param {color} e.startColor The color the particle will start out as.
     * @param {color} e.endColor The color the particle will end up as.
     * @param {number} e.startAlpha The alpha the particle will start out as.
     * @param {number} e.endAlpha The alpha the particle will end up as.
     */

    HYPER.Particle.Particle = function (e) {

        if (typeof e.startColor === "string") {
            var color = e.startColor;
            e.startColor = [
                    HYPER.Graphics.hexToRed(color),
                    HYPER.Graphics.hexToGreen(color),
                    HYPER.Graphics.hexToBlue(color),
                    e.startAlpha || 1
                ];

        }
        if (typeof e.endColor === "string") {
            var color = e.endColor;
            e.endColor = [
                    HYPER.Graphics.hexToRed(color),
                    HYPER.Graphics.hexToGreen(color),
                    HYPER.Graphics.hexToBlue(color),
                    e.endAlpha || 1
                ];

        }

        /**
         * @property {string} _ID - The specific ID for this object.
         */

        this._ID = "particle " + Math.random() + "" + Math.random();

        /**
         * @property {object} style - Graphics style for the particles.
         */

        this.style = e.style || HYPER.Graphics.DEFAULT_STYLE;

        /**
         * @property {number} x - The X location of the object.
         */

        this.x = e.x || 0;

        /**
         * @property {number} y - The Y location of the object.
         */

        this.y = e.y || 0;

        /**
         * @property {number} startSize - The size the particles start out as.
         */

        this.startSize = e.startSize || e.size || 10;

        /**
         * @property {number} endSize - The size the particles end up as.
         */

        this.endSize = e.endSize || e.size || 0;

        /**
         * @property {number} startAlpha - The alpha the particles start out as.
         */

        this.startAlpha = e.startAlpha || 0;

        /**
         * @property {number} endAlpha - The alpha the particles end up as.
         */

        this.endAlpha = e.endAlpha || 0;

        /**
         * @property {object} startColor - The color the particles start out as.
         */

        this.startColor = e.startColor || [
                255, 69, 0, this.startAlpha
            ];

        /**
         * @property {object} endColor - The color the particles end up as.
         */

        this.endColor = e.endColor || [
                70, 70, 70, this.endAlpha
            ];

        /**
         * @property {number} angle - The angle the particle will be rendered as.
         */

        this.angle = 0;

        /**
         * @property {object} vel - The velocity of the object.
         */

        this.vel = {
            x: 0,
            y: 0,
            angle: 0,
        };

        /**
         * @property {boolean} alive - if the object is alive.
         */

        this.alive = e.alive || false;

        /**
         * @property {number} lifeTime - How long the object should be alive.
         */

        this.lifeTime = e.lifeTime || 100;

        /**
         * @property {number} lifeTimeTotal - Total time of how long the object should be alive.
         */

        this.lifeTimeTotal = e.lifeTimeTotal || e.lifeTime || 100;

    };

    HYPER.Particle.Particle.prototype = {

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._update
         * @param {number} a - Information to be known about parent object.
         */

        _update: function (a) {
            if (this.alive) {
                if (this.x - this.size > a.camera.x + a.camera.width ||
                    this.y - this.size > a.camera.y + a.camera.height ||
                    this.x + this.size < a.camera.x ||
                    this.y + this.size < a.camera.y) {

                } else {
                    this.x += this.vel.x;
                    this.y += this.vel.y;
                    this.angle += this.vel.angle;
                    if (this.lifeTime > 0) {
                        this.lifeTime--;
                    }

                    if (this.lifeTime <= 0) {
                        this.alive = false;
                    }
                }
                if (this.lifeTime > 0) {
                    this.lifeTime--;
                }

                if (this.lifeTime <= 0) {
                    this.alive = false;
                }
            }

        },

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._render
         * @param {number} a - Information to be known about parent object.
         */

        _render: function (a, image, style) {
            if (this.alive) {
                image = image || {};
                style = style || this.style;
                if (this.x - this.size > a.camera.x + a.camera.width ||
                    this.y - this.size > a.camera.y + a.camera.height ||
                    this.x + this.size < a.camera.x ||
                    this.y + this.size < a.camera.y) {

                } else {
                    var percentGone = this.lifeTime / this.lifeTimeTotal;
                    var size = ((this.startSize - this.endSize) * percentGone) + this.endSize;
                    var color = [
                        Math.floor(((this.startColor[0] - this.endColor[0]) * percentGone) + this.endColor[0]),
                        Math.floor(((this.startColor[1] - this.endColor[1]) * percentGone) + this.endColor[1]),
                        Math.floor(((this.startColor[2] - this.endColor[2]) * percentGone) + this.endColor[2]),
                        ((this.startColor[3] - this.endColor[3]) * percentGone) + this.endColor[3],
                ];

                    var RBGcolor = "rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")"
                    var alpha = color[3] * style.alpha;
                    if (image.type === "bitmap") {

                        HYPER.Graphics.Draw(a.ctx, style).setFillColor(RBGcolor).setStrokeColor(RBGcolor).setAlpha(alpha).bitmap(image,
                            this.x - (image.width / 2) - a.camera.x,
                            this.y - (image.height / 2) - a.camera.y,
                            this.size, (image.height / this.width) * this.size,
                            0,
                            0,
                            image.width,
                            image.height,
                            this.angle,
                            image.width / 2,
                            image.height / 2);
                    } else {
                        HYPER.Graphics.Draw(a.ctx, style).setFillColor(RBGcolor).setStrokeColor(RBGcolor).setAlpha(alpha).circle(this.x - a.camera.x, this.y - a.camera.y, size);
                    }
                }



            }
        },
    };


    /**
     * Create particle emitters with the 'new' keyword.
     * @class HYPER.Particle.Emitter
     * @param {object} e Object to pass all sprite info.
     * @param {object} e.texture bitmap to be rendered as the particles.
     * @param {object} e.style Style info of this particles.
     * @param {number} e.x=0 X location of the emitter.
     * @param {number} e.y=0 Y location of the emitter.
     * @param {number} e.width=32 Width of the emitter.
     * @param {number} e.height=32 Height of the emitter.
     * @param {number} e.lifeTime=100 life time of particles emitted.
     * @param {number} e.startSize=10 The size the particles start out as.
     * @param {number} e.endSize=10 The size the particles end up as.
     * @param {color} e.startColor The color the particles start out as.
     * @param {color} e.endColor The color the particles end up as.
     * @param {number} e.startAlpha The alpha the particles start out as.
     * @param {number} e.endAlpha The alpha the particles end up as.
     */

    HYPER.Particle.Emitter = function (e) {
        e = e || {};

        /**
         * @property {string} _ID - The specific ID for this object.
         */

        this._ID = "emitter " + Math.random() + "" + Math.random();

        /**
         * @property {array} particles - The array that stores all particles in this object.
         */

        this.particles = [];

        /**
         * @property {object} lifeTimeTotal - Image data for the particles.
         */

        this.texture = e.texture || {};

        /**
         * @property {number} x - The X location of the object.
         */

        this.x = e.x || 0;

        /**
         * @property {number} y - The Y location of the object.
         */

        this.y = e.y || 0;

        /**
         * @property {number} width - The width of the object.
         */

        this.width = e.width || this.texture.width || 0;

        /**
         * @property {number} height - The height of the object.
         */

        this.height = e.height || this.texture.height || 0;

        /**
         * @property {number} lifeTime - How long the object should be alive.
         */

        this.lifeTime = e.lifeTime || 100;

        /**
         * @property {number} lifeTimeTotal - Total time of how long the object should be alive.
         */

        this.lifeTimeTotal = e.lifeTimeTotal || e.lifeTime || 100;

        /**
         * @property {object} style - Graphics style for the particles.
         */

        this.style = e.style || HYPER.Graphics.DEFAULT_STYLE;

        /**
         * @property {boolean} fadeOut - If the particles should fade out.
         */

        this.fadeOut = e.fadeout || false;

        /**
         * @property {number} maxParticles - Maxium number of particles.
         */

        this.maxParticles = e.maxParticles || 1000;

        /**
         * @property {number} startSize - The size the particles start out as.
         */

        this.startSize = e.startSize || e.size || 10;

        /**
         * @property {number} endSize - The size the particles end up as.
         */

        this.endSize = e.endSize || e.size || 0;

        /**
         * @property {number} startAlpha - The alpha the particles start out as.
         */

        this.startAlpha = e.startAlpha || e.alpha || this.style.alpha || 0;

        /**
         * @property {number} endAlpha - The alpha the particles end up as.
         */

        this.endAlpha = e.endAlpha || e.alpha || this.style.alpha || 0;

        /**
         * @property {function} render - User defined rendering, good for little extra things you want rendered.
         */

        this.render = e.render || no0p;

        /**
         * @property {function} update - User defined updating, good for little extra things you want updated.
         */

        this.update = e.update || no0p;

        /**
         * @property {boolean} locked - the object that this object is locked to.
         */

        this.locked = false;

        /**
         * @property {object} lockedOffset - the X and Y offset that the object will be locked to.
         */

        this.lockedOffset = {
            x: 0,
            y: 0
        };


        if (typeof e.startColor === "string") {
            var color = e.startColor;
            e.startColor = [
                    HYPER.Graphics.hexToRed(color),
                    HYPER.Graphics.hexToGreen(color),
                    HYPER.Graphics.hexToBlue(color),
                    this.startAlpha
                ];

        }
        if (typeof e.endColor === "string") {
            var color = e.endColor;
            e.endColor = [
                    HYPER.Graphics.hexToRed(color),
                    HYPER.Graphics.hexToGreen(color),
                    HYPER.Graphics.hexToBlue(color),
                    this.endAlpha
                ];

        }

        /**
         * @property {object} startColor - The color the particles start out as.
         */

        this.startColor = e.startColor || [
                255, 69, 0, 1
            ];

        /**
         * @property {object} endColor - The color the particles end up as.
         */

        this.endColor = e.endColor || [
                70, 70, 70, 0
            ];

        /**
         * @property {object} gravity - The gravity to be applied to the particles.
         */

        this.gravity = e.gravity || {
            x: 0,
            y: 0
        };



        for (let i = 0; i < this.maxParticles; i++) {
            this.particles[i] = new HYPER.Particle.Particle({
                x: this.x,
                y: this.y,
                startSize: this.startSize,
                endSize: this.endSize,
                startColor: this.startColor,
                endColor: this.endColor,
                startAlpha: this.startAlpha,
                endAlpha: this.endAlpha,
                style: this.style,
                lifeTime: this.lifeTime,
                lifeTimeTotal: this.lifeTimeTotal,

            });
        }



    };

    HYPER.Particle.Emitter.prototype = {
        /**
         * Spawn particles from the emmiter.
         * @method HYPER.Particle.Emitter.emit
         * @param {number} startAngle - The first angle you want particles emmited at. Particles may be emmited anywhere between the start angle and the angle.
         * @param {number} endAngle - The last angle you want particles emmited at. Particles may be emmited anywhere between the start angle and the angle.
         * @param {number} speed - The speed you want particles emmited at.
         * @param {number} number - The number of particles you want emmited.
         */
        emit: function (startAngle, endAngle, speed, number) {
            number = number || 1;
            for (let i = 0; i < this.particles.length; i++) {
                if (!this.particles[i].alive) {

                    var random = HYPER.Math.degreesToRadians(HYPER.Math.random(startAngle, endAngle, true));
                    this.particles[i].alive = true;

                    this.particles[i].x = HYPER.Math.random(this.x, this.x + this.width);
                    this.particles[i].y = HYPER.Math.random(this.y, this.y + this.height);
                    this.particles[i].vel.x = Math.cos(random) * speed;
                    this.particles[i].vel.y = Math.sin(random) * speed;
                    this.particles[i].startSize = this.startSize;
                    this.particles[i].endSize = this.endSize;
                    this.particles[i].startColor = this.startColor;
                    this.particles[i].endColor = this.endColor;
                    this.particles[i].startAlpha = this.startAlpha;
                    this.particles[i].endAlpha = this.endAlpha;
                    this.particles[i].style = this.style;
                    this.particles[i].lifeTime = this.lifeTime;
                    this.particles[i].lifeTimeTotal = this.lifeTimeTotal;

                    number--;
                    if (number <= 0) {
                        break;
                    }
                }
            }
        },

        /**
         * Sets the position of the sprite.
         * @method HYPER.Sprite.setPos
         * @param {number} x - The new X position of the sprite.
         * @param {number} y - The new Y position of the sprite.
         */

        setPos: function (x, y) {
            this.x = x;
            this.y = y;
            if (this.body.type === "boxJSAABB") {
                this.body.pos.x = x;
                this.body.pos.y = y;
            }
        },

        /**
         * Locks the object to any other object that has a X and Y property.
         * @method HYPER.Sprite.lockTo
         * @param {object} to - the object this object is locked to.
         * @param {number} x - The X offset that the object will be locked at.
         * @param {number} y - The Y offset that the object will be locked at.
         */

        lockTo: function (to, x, y) {
            if (to) {
                this.locked = to;
                this.lockedOffset.x = x || 0;
                this.lockedOffset.y = y || 0;

            }
        },

        /**
         * Unlocks the object.
         * @method HYPER.Sprite.unlock
         */

        unlock: function () {
            this.locked = false;
            this.lockedOffset.x = 0;
            this.lockedOffset.y = 0;
        },

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._update
         * @param {number} a - Information to be known about parent object.
         */

        _update: function (a) {
            for (let i = 0; i < this.particles.length; i++) {
                if (this.particles[i].alive) {
                    this.particles[i].vel.x += this.gravity.x;
                    this.particles[i].vel.y += this.gravity.y;
                    this.particles[i]._update(a);
                }
            }
            if (this.locked) {
                this.setPos(this.locked.x + this.lockedOffset.x, this.locked.y + this.lockedOffset.y);
                if (this.body) {
                    if (this.body.type === "boxJSAABB") {
                        this.body.fixed = true;
                    }
                }
            }
        },

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._render
         * @param {number} a - Information to be known about parent object.
         */

        _render: function (a) {
            for (let i = 0; i < this.particles.length; i++) {
                if (this.particles[i].alive) {
                    this.particles[i]._render(a, this.texture, this.style);
                }
            }
            a.ctx.globalAlpha = 1;
        },

    };


})();


(function () {
    "use strict";

    /**
     * Create a group object, useful for making and keeping track of lots of very simelar sprites.
     * @class HYPER.Group
     * @param {object} e Object to pass all sprite info.
     * @param {object} e.texture bitmap or spritesheet to be rendered as the sprite.
     * @param {object} e.style Style info of this sprite.
     * @param {number} e.x=0 X location of the sprite.
     * @param {number} e.y=0 Y location of the sprite.
     * @param {number} e.width=32 Width of the sprite.
     * @param {number} e.height=32 Height of the sprite.
     * @param {number} e.angle=0 angle the sprite is rotated.
     * @param {number} e.rotX=0 X location of the point the sprite is rotated around.
     * @param {number} e.rotY=0 Y location of the point the sprite is rotated around.
     */

    HYPER.Group = function (e) {
        e = e || {};

        /**
         * @property {string} _ID - The specific ID for this object.
         */

        this._ID = "group " + Math.random() + "" + Math.random();


        /**
         * @property {object} texture - The texture of the object to be rendered.
         */

        this.texture = e.texture || {
            _render: no0p,
            _update: no0p,
            frames: {},
            bitmap: {},
            type: "",
        };

        if (this.texture.type === "animation") {

        }

        /**
         * @property {boolean} locked - the object that this object is locked to.
         */
        this.locked = false;
        /**
         * @property {object} lockedOffset - the X and Y offset that the object will be locked to.
         */

        this.lockedOffset = {
            x: 0,
            y: 0
        };

        if (this.texture.type === "spritesheet") {
            this.texture = new HYPER.Graphics.Animation({
                spriteSheet: this.texture,
            });
        }

        this.texture.frames = this.texture.frames || {};
        this.texture.bitmap = this.texture.bitmap || {};

        /**
         * @property {string} type - Internal type identifier for the object.
         */

        this.type = "group";

        /**
         * @property {object} style - the style this object will be rendered with.
         */

        this.style = e.style || HYPER.Graphics.DEFAULT_STYLE;


        /**
         * @property {number} zIndex - The z-index this will be rendered as.
         */

        this.zIndex = e.zIndex || 0;

        /**
         * @property {number} x - The X location of the object.
         */

        this.x = e.x || 0;

        /**
         * @property {number} y - The Y location of the object.
         */

        this.y = e.y || 0;

        /**
         * @property {number} width - The width of the object.
         */

        this.width = e.width || this.texture.width || 32;

        /**
         * @property {number} height - The height of the object.
         */

        this.height = e.height || this.texture.height || 32;

        /**
         * @property {number} angle - The angle of the object.
         */

        this.angle = e.angle || 0;

        /**
         * @property {number} rotX - The X rotation point of the object.
         */

        this.rotX = e.rotX || this.width / 2;

        /**
         * @property {number} rotY - The Y rotation point of the object.
         */

        this.rotY = e.rotY || this.height / 2;


        /**
         * @property {boolean} visable - If the object should be rendered or not.
         */

        this.visible = true;

        /**
         * @property {boolean} active - If the object should be updated or not.
         */

        this.active = true;

        /**
         * @property {boolean} active - If the object should be updated and rendered or not.
         */

        this.alive = true;

        /**
         * @property {number} lifeTime - How long the object should be alive.
         */

        this.lifeTime = e.lifeTime || 0;

        /**
         * @property {number} health - The health of the object.
         */

        this.health = e.health || 1;

        /**
         * @property {number} heamaxHealthlth - The maxium health of the object.
         */

        this.maxHealth = e.health || 1;

        /**
         * @property {number} scaleX - The scale X of the object.
         */

        this.scaleX = e.scaleX || 1;

        /**
         * @property {number} scaleY - The scale Y of the object.
         */

        this.scaleY = e.scaleY || 1;

        /**
         * @property {number} scaleX - Should the object be drawn backwards?
         */

        this.flippedX = e.flippedX || false;

        /**
         * @property {number} scaleY - Should the object be drawn up-side-down?
         */

        this.flippedY = e.flippedY || false;

        /**
         * @property {boolean} autoCull - Should the object be drawn if not visable on the screen?
         */

        this.autoCull = e.autoCull || false;

        /**
         * @property {function} render - User defined rendering, good for little extra things you want rendered.
         */

        this.render = e.render || no0p;

        /**
         * @property {function} update - User defined updating, good for little extra things you want updated.
         */

        this.update = e.update || no0p;

        /**
         * @property {function} onDeath - User defined updating, called on objects death.
         */

        this.onDeath = e.onDeath || no0p;

        /**
         * @property {function} onClick - What should happen if the object is clicked?
         */

        this.onClick = e.onClick || no0p;

        /**
         * @property {function} onUp - What should happen if the mouse is lifted on the object?
         */

        this.onUp = e.onUp || no0p;

        /**
         * @property {function} onDown - What should happen if the mouse is dropped on the object?
         */

        this.onDown = e.onDown || no0p;

        /**
         * @property {function} onHold - What should happen if the object is held down by the mouse?
         */

        this.onHold = e.onHold || no0p;

        /**
         * @property {function} onDblClick - What should happen if the object is double clicked?
         */

        this.onDblClick = e.onDblClick || no0p;

        /**
         * @property {function} onHover - What should happen if the object is hovered over?
         */

        this.onHover = e.onHover || no0p;

        /**
         * @property {array} group - array of all objects in the group.
         */

        this.group = [];


    };

    HYPER.Group.prototype = {

        /**
         * Create a new sprite in the object.
         * @method HYPER.Group.create
         * @param {object} a Object to pass all sprite info.
         * @param {object} a.texture bitmap or spritesheet to be rendered as the sprite.
         * @param {object} a.style Style info of this sprite.
         * @param {number} a.x=0 X location of the sprite.
         * @param {number} a.y=0 Y location of the sprite.
         * @param {number} a.width=32 Width of the sprite.
         * @param {number} a.height=32 Height of the sprite.
         * @param {number} a.angle=0 angle the sprite is rotated.
         * @param {number} a.rotX=0 X location of the point the sprite is rotated around.
         * @param {number} a.rotY=0 Y location of the point the sprite is rotated around.
         */

        create: function (a) {
            a = a || {};
            var found = false;
            for (let i = 0; i < this.group.length; i++) {
                if (!this.group[i].alive) {
                    found = true;
                    this.group[i].texture = a.texture || this.texture;
                    this.group[i].style = a.style || this.style;
                    this.group[i].zIndex = a.zIndex || this.zIndex;
                    this.group[i].x = a.x || this.x;
                    this.group[i].y = a.y || this.x;
                    this.group[i].width = a.width || this.width;
                    this.group[i].height = a.height || this.height;
                    this.group[i].angle = a.angle || this.angle;
                    this.group[i].rotX = a.rotX || this.rotX;
                    this.group[i].rotY = a.rotY || this.rotY;
                    this.group[i].visible = true;
                    this.group[i].active = true;
                    this.group[i].alive = true;
                    this.group[i].lifeTime = a.lifeTime || this.lifeTime;
                    this.group[i].health = a.health || this.health;
                    this.group[i].maxHealth = a.health || this.maxHealth;
                    this.group[i].scaleX = a.scaleX || this.scaleX;
                    this.group[i].scaleY = a.scaleY || this.scaleY;
                    this.group[i].flippedX = a.flippedX || this.flippedX;
                    this.group[i].flippedY = a.flippedY || this.flippedY;
                    this.group[i].autoCull = a.autoCull || this.autoCull;
                    this.group[i].render = a.render || this.render;
                    this.group[i].update = a.update || this.update;
                    this.group[i].onDeath = a.onDeath || this.onDeath;
                    this.group[i].onClick = a.onClick || this.onClick;
                    this.group[i].onUp = a.onUp || this.onUp;
                    this.group[i].onDown = a.onDown || this.onDown;
                    this.group[i].onHold = a.onHold || this.onHold;
                    this.group[i].onDblClick = a.onDblClick || this.onDblClick;
                    this.group[i].onHover = a.onHover || this.onHover;
                    this.group[i].revive();
                    return this.group[i];
                    break;
                }
            }
            if (!found) {
                var object = this.group.push(new HYPER.Sprite({
                    texture: a.texture || this.texture,
                    style: a.style || this.style,
                    zIndex: a.zIndex || this.zIndex,
                    x: a.x || this.x,
                    y: a.y || this.y,
                    width: a.width || this.width,
                    height: a.height || this.height,
                    angle: a.angle || this.angle,
                    rotX: a.rotX || this.rotX,
                    rotY: a.rotY || this.rotY,
                    lifeTime: a.lifeTime || this.lifeTime,
                    health: a.health || this.health,
                    maxHealth: a.health || this.maxHealth,
                    scaleX: a.scaleX || this.scaleX,
                    scaleY: a.scaleY || this.scaleY,
                    flippedX: a.flippedX || this.flippedX,
                    flippedY: a.flippedY || this.flippedY,
                    autoCull: a.autoCull || this.autoCull,
                    render: a.render || this.render,
                    update: a.update || this.update,
                    onDeath: a.onDeath || this.onDeath,
                }));

                if (this.physics === "BoxAABB") {

                    HYPER.Physics.BoxJS.enable(this.group[object - 1]);
                    this.world.addBody(this.group[object - 1]);
                }
                return this.group[object - 1];
            }
        },

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._update
         * @param {number} a - Information to be known about parent object.
         */

        _update: function (g) {
            for (let i = 0; i < this.group.length; i++) {
                if (this.group[i].alive) {
                    this.group[i]._update(g);
                }
            }
        },

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._render
         * @param {number} a - Information to be known about parent object.
         */

        _render: function (g) {
            for (let i = 0; i < this.group.length; i++) {
                if (this.group[i].alive) {
                    this.group[i]._render(g);
                }
            }
        },

    };

})();


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
     * @param {number} e.camera.width=1280 Width of the camera.
     * @param {number} e.camera.height=720 Height of the camera.
     * @param {object} e.view The view object, change the position and view of the screen on the webpage.
     * @param {number} e.view.x=0 X location of the screen.
     * @param {number} e.view.y=0 Y location of the screen.
     * @param {number} e.view.width=1280 Width of the screen.
     * @param {number} e.view.height=720 Height of the screen.
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
            width: e.camera.width || 1280,
            /**
             * @property {number} camera.height - Height of the camera.
             */
            height: e.camera.height || 720,
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
            width: e.view.width || 1280,
            /**
             * @property {number} view.height - Height of the screen.
             */
            height: e.view.height || 720,
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
            _then: Date.now(),
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
            _then: Date.now(),
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
            if (state._ID.split(" ")[0] === "state") {
                this.currentState = state;
                this.currentState._init();
            } else {
                console.error(state + "is not a state.");
            }
        },

        /**
         * Updates the screen view to match the view and camera varaibles.
         * @private
         * @method HYPER.Screen._updateScreenview
         */

        _updateScreenview: function () {
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
                this.camera.height != this.canvas.height ||
                this.camera.width != this.canvas.width ||
                this.camera.height != this.canvas.height) {

                this.canvas.width = this.camera.width;
                this.canvas.height = this.camera.height;
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
            for (let i = 0; i < 10; i++) {
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
            this._anime._now = Date.now();
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
            this._tick._now = Date.now();
            this._tick._delta = this._tick._now - this._tick._then;
            if (this._tick._delta > this._tick._interval) {
                this._tick._then = this._tick._now - (this._tick._delta % this._tick._interval);

                // Game Code

                this._updateScreenview();

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


(function () {
    "use strict";

    /**
     * Create a new State. Screens and states are necessary to render and update game code.
     * @class HYPER.State
     * @param {object} e Object to pass all State info.
     * @param {string} e.canvas Id of the canvas you want used as the game State.
     * @param {boolean} e.antiAliasing=false Whether or not the canvas should use canvas antiAliasing.
     * @param {boolean} e.autoClear=false Whether or not the canvas should clear itself before every frame.
     * @param {boolean} e.smartRendering=false Whether or not to render objects not shown on the State.
     * @param {boolean} e.motionBlur=false Whether or not motion blur is enabled.
     * @param {boolean} e.showFPS=false Whether or not to show the current FPS.
     * @param {function} e.render Custom rendering directions for the State.
     * @param {function} e.update Custom updating directions for the State.
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
     * @param {number} e.camera.width=1280 Width of the camera.
     * @param {number} e.camera.height=720 Height of the camera.
     * @param {object} e.view The view object, change the position and view of the State on the webpage.
     * @param {number} e.view.x=0 X location of the State.
     * @param {number} e.view.y=0 Y location of the State.
     * @param {number} e.view.width=1280 Width of the State.
     * @param {number} e.view.height=720 Height of the State.
     */

    HYPER.State = function (e) {
        e = e || {};
        e.camera = e.camera || {};
        e.view = e.view || {};
        var that = this;

        /**
         * @property {string} _ID - The specific ID for this object.
         */

        this._ID = "state " + Math.random() + "" + Math.random();

        /**
         * @property {object} style - The style used for this object.
         */

        this.style = e.style || HYPER.Graphics.DEFAULT_STYLE;

        /**
         * @property {object} canvas - The canvas that all children are rendered directly to.
         */

        this.canvas = document.createElement("canvas");

        /**
         * @property {object} canvas - The ctx of the canvas that all children are rendered directly to.
         */

        this.ctx = this.canvas.getContext("2d");

        /**
         * @property {object} lastcanvas - The canvas that is used for motion blur.
         */

        this.lastcanvas = document.createElement("canvas");

        /**
         * @property {object} lastctx - The ctx that is used for motion blur.
         */

        this.lastctx = this.lastcanvas.getContext("2d");


        /**
         * @private
         * @property {function} _tick - stores all update speed settings.
         */

        this._tick = {
            FPS: e.tickFPS || e.tickfps || e.fps || 30,
            _now: 0,
            _then: Date.now(),
            _interval: 1000 / 30,
            _delta: 0,
        };

        /**
         * @private
         * @property {function} _anime - stores all rendering speed settings.
         */

        this._anime = {
            FPS: e.animeFPS || e.animefps || e.fps || 60,
            _now: 0,
            _then: Date.now(),
            _interval: 1000 / 60,
            _delta: 0,
        };

        /**
         * @property {string} backgroundColor - Background color of the state.
         */

        this.backgroundColor = e.backgroundColor || "#000000";

        /**
         * @property {string} backgroundColor - Background color of the state.
         */

        this.antiAliasing = e.antiAliasing || false;

        /**
         * @property {boolean} autoClear - Whether or not to clear the canvas before every frame.
         */

        this.autoClear = e.autoClear || false;

        /**
         * @property {boolean} smartRendering - Whether or not to render objects that are not on the screen.
         */

        this.smartRendering = e.smartRendering || false;

        /**
         * @property {boolean} motionBlur - Whether or not to render objects with a motion blur.
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
            width: e.camera.width || 1280,
            /**
             * @property {number} camera.height - Height of the camera.
             */
            height: e.camera.height || 720,
        };


        /**
         * @property {object} view - The object on the screen.
         */

        this.view = {
            /**
             * @property {number} view.x - X location on the screen.
             */
            x: e.view.x || 0,
            /**
             * @property {number} view.y - Y location on the screen.
             */
            y: e.view.y || 0,
            /**
             * @property {number} view.width - Width on the screen.
             */
            width: e.view.width || 1280,
            /**
             * @property {number} view.height - Height on the screen.
             */
            height: e.view.height || 720,
        };

        /**
         * @property {object} passedINFO - Info that is passed to children every loop.
         */

        this.passedINFO = {
            pointerDATA: [],
        };

        /**
         * @property {array} pointerDATA - pointer data that is passed to children every loop.
         */

        this.pointerDATA = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

        /**
         * @property {array} children - Array of all children in the screen.
         */

        this.children = [];

        /**
         * @property {array} children - Whether or not to use z-index when rendering.
         */

        this.enableZindex = e.enableZindex || false;

        /**
         * @property {function} render - user defined function that is called at the end of every frame.
         */

        this.render = e.render || no0p;

        /**
         * @property {function} update - user defined function that is called at the end of every tick.
         */

        this.update = e.update || no0p;

        /**
         * @property {function} update - user defined function that is called when the object is initalized.
         */

        this.init = e.init || no0p;

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




    };

    HYPER.State.prototype = {

        /**
         * Sets the update FPS of the object. Note that this is the fastest all children can also update.
         * @method HYPER.State.setTickFPS
         * @param {number} fps - The desired FPS.
         */

        setTickFPS: function (fps) {
            this._tick.FPS = fps;
            this._tick._interval = 1000 / this._tick.FPS;
        },

        /**
         * Sets the update FPS of the screen. Note that this is the fastest all children can also render.
         * @method HYPER.State.setAnimeFPS
         * @param {number} fps - The desired FPS.
         */

        setAnimeFPS: function (fps) {
            this._anime.FPS = fps;
            this._anime._interval = 1000 / this._anime.FPS;
        },

        /**
         * Adds children to the object.
         * @method HYPER.State.addChild
         * @param {object} child - The child you want to add.
         */

        addChild: function (child) {
            this.children.push(child);
        },

        /**
         * Removes children from the object.
         * @method HYPER.State.removeChild
         * @param {object} child - The child you want to remove.
         */

        removeChild: function (child) {
            for (let c = 0; c < this.children.length; c++) {
                if (child._ID === this.children[c]._ID) {
                    this.children.splice(c, 1);
                };
            };
        },

        /**
         * Removes all children from the object.
         * @method HYPER.State.removeAllChildren
         */

        removeAllChildren: function () {
            this.children = [];
        },

        /**
         * updates the renderer.
         * @private
         * @method HYPER.State._updateRender
         * @param {object} a - Rendering info.
         */

        _updateRender: function (a) {
            if (this.backgroundColor === "clear" || this.autoClear) {

                HYPER.Graphics.Draw(this.ctx)
                    .clearRect(
                        0,
                        0,
                        this.canvas.width,
                        this.canvas.height);


            } else {

                HYPER.Graphics.Draw(this.ctx)
                    .setFillColor(this.backgroundColor)
                    .rect(
                        0,
                        0,
                        this.canvas.width,
                        this.canvas.height);

            }

        },

        /**
         * renders the children.
         * @private
         * @method HYPER.State._renderChildren
         * @param {object} a - Rendering info.
         */

        _renderChildren: function (a) {
            if (this.enableZindex === true) {
                // Loop through all z-indexes
                for (let z = 0; z < this.children.length; z++) {
                    // Loop through all children
                    for (let i = 0; i < this.children.length; i++) {
                        // Check to see if the z-index is correct.
                        if (Math.round(this.children[i].zIndex) === z) {
                            // Check to see if smart rendering is turned on.
                            if (this.smartRendering === true) {
                                // Check to see if the desplayed object overlaps the screen.
                                if (HYPER.Physics.checkAABBCollision(this.view, this.children[i])) {
                                    this.children[i]._render(this.passedINFO);
                                }
                            } else {
                                this.children[i]._render(this.passedINFO);
                            }
                        }
                    }
                }
            } else {
                // loop through all children
                for (let i = 0; i < this.children.length; i++) {
                    // Check to see if smart rendering is turned on.
                    if (this.smartRendering === true) {
                        // Check to see if the desplayed object overlaps the screen.
                        if (HYPER.Physics.checkAABBCollision(this.view, this.children[i])) {
                            // render child
                            this.children[i]._render(this.passedINFO);
                        }
                    } else {
                        // render child
                        this.children[i]._render(this.passedINFO);
                    }
                }
            }
        },

        /**
         * Updates the children.
         * @private
         * @method HYPER.State._updateChildren
         * @param {object} a - Updating info.
         */

        _updateChildren: function (a) {
            // loop through all children.
            for (let i = 0; i < this.children.length; i++) {
                //update child
                this.children[i]._update(this.passedINFO);


            }
        },

        /**
         * Updates the pointers.
         * @private
         * @method HYPER.State._updatePointerData
         * @param {object} a - Updating info.
         */

        _updatePointerData: function (a) {
            //console.log(this);
            for (var i = 0; i < 1; i++) {

                this.pointerDATA[i].trueX = a.pointerDATA[i].x - this.view.x + this.camera.x;
                this.pointerDATA[i].trueY = a.pointerDATA[i].y - this.view.y + this.camera.y;
                this.pointerDATA[i].scaleFactorX = this.camera.width / this.view.width;
                this.pointerDATA[i].scaleFactorY = this.camera.height / this.view.height;
                this.pointerDATA[i].x = this.pointerDATA[i].trueX * this.pointerDATA[i].scaleFactorX - this.camera.x;
                this.pointerDATA[i].y = this.pointerDATA[i].trueY * this.pointerDATA[i].scaleFactorY - this.camera.y;

                this.pointerDATA[i].down = HYPER.Input.Pointer.point[i].down;
                this.pointerDATA[i].up = HYPER.Input.Pointer.point[i].up;
                this.pointerDATA[i].dblclick = HYPER.Input.Pointer.point[i].dblclick;
                this.pointerDATA[i].hold = HYPER.Input.Pointer.point[i].hold;
                this.pointerDATA[i].click = HYPER.Input.Pointer.point[i].down;

            }
            this.passedINFO.pointerDATA = this.pointerDATA;
        },

        /**
         * Updates the pointers based on the id.
         * @private
         * @method HYPER.State.updatePointerDATA_ID
         * @param {object} a - Updating info.
         */

        updatePointerDATA_ID: function (DATA, i) {
            this.pointerDATA[i].trueX = DATA.x - this.view.x + this.camera.x;
            this.pointerDATA[i].trueY = DATA.y - this.view.y + this.camera.y;
            this.pointerDATA[i].scaleFactorX = this.camera.width / this.view.width;
            this.pointerDATA[i].scaleFactorY = this.camera.height / this.view.height;
            this.pointerDATA[i].x = this.pointerDATA[i].trueX * this.pointerDATA[i].scaleFactorX - this.camera.x;
            this.pointerDATA[i].y = this.pointerDATA[i].trueY * this.pointerDATA[i].scaleFactorY - this.camera.y;

            this.pointerDATA[i].down = HYPER.Input.Pointer.point[i].down;
            this.pointerDATA[i].up = HYPER.Input.Pointer.point[i].up;
            this.pointerDATA[i].dblclick = HYPER.Input.Pointer.point[i].dblclick;
            this.pointerDATA[i].hold = HYPER.Input.Pointer.point[i].hold;
            this.pointerDATA[i].click = HYPER.Input.Pointer.point[i].down;
        },

        /**
         * Updates the info that is passed to the children.
         * @private
         * @method HYPER.State._updatePassedInfo
         * @param {object} a - Updating info.
         */

        _updatePassedInfo: function (a) {
            this.passedINFO.canvas = this.canvas;
            this.passedINFO.ctx = this.ctx;
            this.passedINFO.view = this.view;
            this.passedINFO.camera = this.camera;

            this._updatePointerData(a);
        },

        /**
         * Updates the settings used for rendering.
         * @private
         * @method HYPER.State._updateRenderingSettings
         * @param {object} a - Updating info.
         */

        _updateRenderingSettings: function (a) {

            if (this.camera.width != this.canvas.width ||
                this.camera.height != this.canvas.height) {
                this.canvas.width = this.camera.width;
                this.canvas.height = this.camera.height;

            }
            if (this.camera.width != this.lastcanvas.width ||
                this.camera.height != this.lastcanvas.height) {
                this.lastcanvas.width = this.camera.width;
                this.lastcanvas.height = this.camera.height;

            }
            // Set smooth Pixels
            if (this.ctx.mozImageSmoothingEnabled != this.antiAliasing) {
                this.ctx.mozImageSmoothingEnabled = this.antiAliasing;
            }
            if (this.ctx.webkitImageSmoothingEnabled != this.antiAliasing) {
                this.ctx.webkitImageSmoothingEnabled = this.antiAliasing;
            }
            if (this.ctx.msImageSmoothingEnabled != this.antiAliasing) {
                this.ctx.msImageSmoothingEnabled = this.antiAliasing;
            }
            if (this.ctx.imageSmoothingEnabled != this.antiAliasing) {
                this.ctx.imageSmoothingEnabled = this.antiAliasing;
            }


            if (this.antiAliasing == false && this.canvas.style.imageRendering != "pixelated") {
                this.canvas.style.imageRendering = "pixelated";
            } else if (this.antiAliasing == true && this.canvas.style.imageRendering != "auto") {
                this.canvas.style.imageRendering = "auto";
            }
            this._updateRender(a);

        },

        /**
         * Called on the click event.
         * @private
         * @method HYPER.State._onClick
         */

        _onClick: function (data) {
            this.updatePointerDATA_ID(data, data._ID);
            for (let i = 0; i < this.children.length; i++) {
                if (this.children[i].alive) {
                    if (this.children[i]._onClick) {
                        this.children[i]._onClick(this.pointerDATA[data._ID]);
                    }
                }
            }
            this.onClick(this.pointerDATA[data._ID]);
        },

        /**
         * Called on the mouse up event.
         * @private
         * @method HYPER.State._onUp
         */

        _onUp: function (data) {
            this.updatePointerDATA_ID(data, data._ID);
            for (let i = 0; i < this.children.length; i++) {
                if (this.children[i].alive) {
                    if (this.children[i]._onUp) {
                        this.children[i]._onUp(this.pointerDATA[data._ID]);
                    }
                }
            }
            this.onUp(this.pointerDATA[data._ID]);
        },

        /**
         * Called on the mouse down event.
         * @private
         * @method HYPER.State._onDown
         */

        _onDown: function (data) {
            this.updatePointerDATA_ID(data, data._ID);
            for (let i = 0; i < this.children.length; i++) {
                if (this.children[i].alive) {
                    if (this.children[i]._onDown) {
                        this.children[i]._onDown(this.pointerDATA[data._ID]);
                    }
                }
            }
            this.onDown(this.pointerDATA[data._ID]);
        },

        /**
         * Called when the mouse pointer is held down.
         * @private
         * @method HYPER.State._onHold
         */

        _onHold: function (data) {
            this.updatePointerDATA_ID(data, data._ID);
            for (let i = 0; i < this.children.length; i++) {
                if (this.children[i].alive) {
                    if (this.children[i]._onHold) {
                        this.children[i]._onHold(this.pointerDATA[data._ID]);
                    }
                }
            }
            this.onHold(this.pointerDATA[data._ID]);
        },

        /**
         * Called when the user double clicks.
         * @private
         * @method HYPER.State._onDblClick
         */

        _onDblClick: function (data) {
            for (let i = 0; i < this.children.length; i++) {
                if (this.children[i].alive) {
                    if (this.children[i]._onDblClick) {
                        this.children[i]._onDblClick(this.pointerDATA[data._ID]);
                    }
                }
            }
            this.onDblClick(this.pointerDATA[data._ID]);
        },

        /**
         * Called on the key down.
         * @private
         * @method HYPER.State._onKeyDown
         */

        _onKeyDown: function (data) {
            for (let i = 0; i < this.children.length; i++) {
                if (this.children[i].alive) {
                    if (this.children[i]._onKeyDown) {
                        this.children[i]._onKeyDown(data);
                    }
                }
            }
            this.onKeyDown(data);
        },

        /**
         * Called when a key is held down.
         * @private
         * @method HYPER.State._onKeyHeld
         */

        _onKeyHeld: function (data) {
            for (let i = 0; i < this.children.length; i++) {
                if (this.children[i].alive) {
                    if (this.children[i]._onKeyHeld) {
                        this.children[i]._onKeyHeld(data);
                    }
                }
            }
            console.log("hi")
            this.onKeyHeld(data);
        },

        /**
         * Called on the key up.
         * @private
         * @method HYPER.State._onKeyUp
         */

        _onKeyUp: function (data) {
            for (let i = 0; i < this.children.length; i++) {
                if (this.children[i].alive) {
                    if (this.children[i]._onKeyUp) {
                        this.children[i]._onKeyUp(data);
                    }
                }
            }
            this.onKeyUp(data);
        },

        /**
         * Called every frame.
         * @private
         * @method HYPER.State._render
         */

        _render: function (a) {
            this._anime._now = Date.now();
            this._anime._delta = this._anime._now - this._anime._then;

            if (this._anime._delta > this._anime._interval) {

                this._anime._then = this._anime._now - (this._anime._delta % this._anime._interval);



                if (this.backgroundColor === "clear" || this.autoClear) {


                    HYPER.Graphics.Draw(a.ctx)
                        .clearRect(
                            0,
                            0,
                            a.canvas.width,
                            a.canvas.height);


                }




                if (this.motionBlur) {

                    HYPER.Graphics.Draw(a.ctx, this.style)
                        .bitmap(
                            this.canvas,
                            0,
                            0,
                            this.camera.width,
                            this.camera.height,
                            this.view.x,
                            this.view.y,
                            this.view.width,
                            this.view.height);

                }

                this._updateRenderingSettings(a);
                this._updatePassedInfo(a);
                this._renderChildren(this.passedINFO);

                this.render(this.passedINFO);




                if (this.motionBlur) {

                    HYPER.Graphics.Draw(a.ctx, this.style)
                        .setAlpha(this.style.alpha / 2)
                        .bitmap(
                            this.canvas,
                            0,
                            0,
                            this.camera.width,
                            this.camera.height,
                            this.view.x,
                            this.view.y,
                            this.view.width,
                            this.view.height);


                } else {

                    HYPER.Graphics.Draw(a.ctx, this.style)
                        .bitmap(
                            this.canvas,
                            0,
                            0,
                            this.camera.width,
                            this.camera.height,
                            this.view.x,
                            this.view.y,
                            this.view.width,
                            this.view.height);
                };


            };
        },

        /**
         * Called every tick.
         * @private
         * @method HYPER.State._update
         */

        _update: function (a) {
            this._tick._now = Date.now();
            this._tick._delta = this._tick._now - this._tick._then;
            if (this._tick._delta > this._tick._interval) {
                this._tick._then = this._tick._now - (this._tick._delta % this._tick._interval);

                // Game Code
                this._updatePassedInfo(a);

                this._updateChildren(this.passedINFO);
                this.update(this.passedINFO);
                // End Game Code

            }
        },

        /**
         * Called when the state is initalized.
         * @method HYPER.State._init
         */

        _init: function () {
            this.init();
        },
    };

    
})();


(function () {
    "use strict";

    /**
     * Create a new Layer. Layers can be nested inside of states or screens.
     * @class HYPER.Layer
     * @param {object} e Object to pass all Layer info.
     * @param {string} e.canvas Id of the canvas you want used as the game Layer.
     * @param {boolean} e.antiAliasing=false Whether or not the canvas should use canvas antiAliasing.
     * @param {boolean} e.autoClear=false Whether or not the canvas should clear itself before every frame.
     * @param {boolean} e.smartRendering=false Whether or not to render objects not shown on the Layer.
     * @param {boolean} e.motionBlur=false Whether or not motion blur is enabled.
     * @param {boolean} e.showFPS=false Whether or not to show the current FPS.
     * @param {function} e.render Custom rendering directions for the Layer.
     * @param {function} e.update Custom updating directions for the Layer.
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
     * @param {number} e.camera.width=1280 Width of the camera.
     * @param {number} e.camera.height=720 Height of the camera.
     * @param {object} e.view The view object, change the position and view of the Layer on the webpage.
     * @param {number} e.view.x=0 X location of the Layer.
     * @param {number} e.view.y=0 Y location of the Layer.
     * @param {number} e.view.width=1280 Width of the Layer.
     * @param {number} e.view.height=720 Height of the Layer.
     */

    HYPER.Layer = function (e) {
        e = e || {};
        e.camera = e.camera || {};
        e.view = e.view || {};
        var that = this;

        /**
         * @property {string} _ID - The specific ID for this object.
         */

        this._ID = "Layer " + Math.random() + "" + Math.random();

        /**
         * @property {object} style - The style used for this object.
         */

        this.style = e.style || HYPER.Graphics.DEFAULT_STYLE;

        /**
         * @property {object} canvas - The canvas that all children are rendered directly to.
         */

        this.canvas = document.createElement("canvas");

        /**
         * @property {object} canvas - The ctx of the canvas that all children are rendered directly to.
         */

        this.ctx = this.canvas.getContext("2d");

        /**
         * @property {object} lastcanvas - The canvas that is used for motion blur.
         */

        this.lastcanvas = document.createElement("canvas");

        /**
         * @property {object} lastctx - The ctx that is used for motion blur.
         */

        this.lastctx = this.lastcanvas.getContext("2d");


        /**
         * @private
         * @property {function} _tick - stores all update speed settings.
         */

        this._tick = {
            FPS: e.tickFPS || e.tickfps || e.fps || 30,
            _now: 0,
            _then: Date.now(),
            _interval: 1000 / 30,
            _delta: 0,
        };

        /**
         * @private
         * @property {function} _anime - stores all rendering speed settings.
         */

        this._anime = {
            FPS: e.animeFPS || e.animefps || e.fps || 60,
            _now: 0,
            _then: Date.now(),
            _interval: 1000 / 60,
            _delta: 0,
        };

        /**
         * @property {string} backgroundColor - Background color of the Layer.
         */

        this.backgroundColor = e.backgroundColor || "#000000";

        /**
         * @property {string} backgroundColor - Background color of the Layer.
         */

        this.antiAliasing = e.antiAliasing || false;

        /**
         * @property {boolean} autoClear - Whether or not to clear the canvas before every frame.
         */

        this.autoClear = e.autoClear || false;

        /**
         * @property {boolean} smartRendering - Whether or not to render objects that are not on the screen.
         */

        this.smartRendering = e.smartRendering || false;

        /**
         * @property {boolean} motionBlur - Whether or not to render objects with a motion blur.
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
            width: e.camera.width || 1280,
            /**
             * @property {number} camera.height - Height of the camera.
             */
            height: e.camera.height || 720,
        };


        /**
         * @property {object} view - The object on the screen.
         */

        this.view = {
            /**
             * @property {number} view.x - X location on the screen.
             */
            x: e.view.x || 0,
            /**
             * @property {number} view.y - Y location on the screen.
             */
            y: e.view.y || 0,
            /**
             * @property {number} view.width - Width on the screen.
             */
            width: e.view.width || 1280,
            /**
             * @property {number} view.height - Height on the screen.
             */
            height: e.view.height || 720,
        };

        /**
         * @property {object} passedINFO - Info that is passed to children every loop.
         */

        this.passedINFO = {
            pointerDATA: [],
        };

        /**
         * @property {array} pointerDATA - pointer data that is passed to children every loop.
         */

        this.pointerDATA = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

        /**
         * @property {array} children - Array of all children in the screen.
         */

        this.children = [];

        /**
         * @property {array} children - Whether or not to use z-index when rendering.
         */

        this.enableZindex = e.enableZindex || false;

        /**
         * @property {function} render - user defined function that is called at the end of every frame.
         */

        this.render = e.render || no0p;

        /**
         * @property {function} update - user defined function that is called at the end of every tick.
         */

        this.update = e.update || no0p;

        /**
         * @property {function} update - user defined function that is called when the object is initalized.
         */

        this.init = e.init || no0p;

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




    };

    HYPER.Layer.prototype = {

        /**
         * Sets the update FPS of the object. Note that this is the fastest all children can also update.
         * @method HYPER.Layer.setTickFPS
         * @param {number} fps - The desired FPS.
         */

        setTickFPS: function (fps) {
            this._tick.FPS = fps;
            this._tick._interval = 1000 / this._tick.FPS;
        },

        /**
         * Sets the update FPS of the screen. Note that this is the fastest all children can also render.
         * @method HYPER.Layer.setAnimeFPS
         * @param {number} fps - The desired FPS.
         */

        setAnimeFPS: function (fps) {
            this._anime.FPS = fps;
            this._anime._interval = 1000 / this._anime.FPS;
        },

        /**
         * Adds children to the object.
         * @method HYPER.Layer.addChild
         * @param {object} child - The child you want to add.
         */

        addChild: function (child) {
            this.children.push(child);
        },

        /**
         * Removes children from the object.
         * @method HYPER.Layer.removeChild
         * @param {object} child - The child you want to remove.
         */

        removeChild: function (child) {
            for (let c = 0; c < this.children.length; c++) {
                if (child._ID === this.children[c]._ID) {
                    this.children.splice(c, 1);
                };
            };
        },

        /**
         * Removes all children from the object.
         * @method HYPER.Layer.removeAllChildren
         */

        removeAllChildren: function () {
            this.children = [];
        },

        /**
         * updates the renderer.
         * @private
         * @method HYPER.Layer._updateRender
         * @param {object} a - Rendering info.
         */

        _updateRender: function (a) {
            if (this.backgroundColor === "clear" || this.autoClear) {

                HYPER.Graphics.Draw(this.ctx)
                    .clearRect(
                        0,
                        0,
                        this.canvas.width,
                        this.canvas.height);


            } else {

                HYPER.Graphics.Draw(this.ctx)
                    .setFillColor(this.backgroundColor)
                    .rect(
                        0,
                        0,
                        this.canvas.width,
                        this.canvas.height);

            }

        },

        /**
         * renders the children.
         * @private
         * @method HYPER.Layer._renderChildren
         * @param {object} a - Rendering info.
         */

        _renderChildren: function (a) {
            if (this.enableZindex === true) {
                // Loop through all z-indexes
                for (let z = 0; z < this.children.length; z++) {
                    // Loop through all children
                    for (let i = 0; i < this.children.length; i++) {
                        // Check to see if the z-index is correct.
                        if (Math.round(this.children[i].zIndex) === z) {
                            // Check to see if smart rendering is turned on.
                            if (this.smartRendering === true) {
                                // Check to see if the desplayed object overlaps the screen.
                                if (HYPER.Physics.checkAABBCollision(this.view, this.children[i])) {
                                    this.children[i]._render(this.passedINFO);
                                }
                            } else {
                                this.children[i]._render(this.passedINFO);
                            }
                        }
                    }
                }
            } else {
                // loop through all children
                for (let i = 0; i < this.children.length; i++) {
                    // Check to see if smart rendering is turned on.
                    if (this.smartRendering === true) {
                        // Check to see if the desplayed object overlaps the screen.
                        if (HYPER.Physics.checkAABBCollision(this.view, this.children[i])) {
                            // render child
                            this.children[i]._render(this.passedINFO);
                        }
                    } else {
                        // render child
                        this.children[i]._render(this.passedINFO);
                    }
                }
            }
        },

        /**
         * Updates the children.
         * @private
         * @method HYPER.Layer._updateChildren
         * @param {object} a - Updating info.
         */

        _updateChildren: function (a) {
            // loop through all children.
            for (let i = 0; i < this.children.length; i++) {
                //update child
                this.children[i]._update(this.passedINFO);


            }
        },

        /**
         * Updates the pointers.
         * @private
         * @method HYPER.Layer._updatePointerData
         * @param {object} a - Updating info.
         */

        _updatePointerData: function (a) {
            //console.log(this);
            for (var i = 0; i < 1; i++) {

                this.pointerDATA[i].trueX = a.pointerDATA[i].x - this.view.x + this.camera.x;
                this.pointerDATA[i].trueY = a.pointerDATA[i].y - this.view.y + this.camera.y;
                this.pointerDATA[i].scaleFactorX = this.camera.width / this.view.width;
                this.pointerDATA[i].scaleFactorY = this.camera.height / this.view.height;
                this.pointerDATA[i].x = this.pointerDATA[i].trueX * this.pointerDATA[i].scaleFactorX - this.camera.x;
                this.pointerDATA[i].y = this.pointerDATA[i].trueY * this.pointerDATA[i].scaleFactorY - this.camera.y;

                this.pointerDATA[i].down = HYPER.Input.Pointer.point[i].down;
                this.pointerDATA[i].up = HYPER.Input.Pointer.point[i].up;
                this.pointerDATA[i].dblclick = HYPER.Input.Pointer.point[i].dblclick;
                this.pointerDATA[i].hold = HYPER.Input.Pointer.point[i].hold;
                this.pointerDATA[i].click = HYPER.Input.Pointer.point[i].down;

            }
            this.passedINFO.pointerDATA = this.pointerDATA;
        },

        /**
         * Updates the pointers based on the id.
         * @private
         * @method HYPER.Layer.updatePointerDATA_ID
         * @param {object} a - Updating info.
         */

        updatePointerDATA_ID: function (DATA, i) {
            this.pointerDATA[i].trueX = DATA.x - this.view.x + this.camera.x;
            this.pointerDATA[i].trueY = DATA.y - this.view.y + this.camera.y;
            this.pointerDATA[i].scaleFactorX = this.camera.width / this.view.width;
            this.pointerDATA[i].scaleFactorY = this.camera.height / this.view.height;
            this.pointerDATA[i].x = this.pointerDATA[i].trueX * this.pointerDATA[i].scaleFactorX - this.camera.x;
            this.pointerDATA[i].y = this.pointerDATA[i].trueY * this.pointerDATA[i].scaleFactorY - this.camera.y;

            this.pointerDATA[i].down = HYPER.Input.Pointer.point[i].down;
            this.pointerDATA[i].up = HYPER.Input.Pointer.point[i].up;
            this.pointerDATA[i].dblclick = HYPER.Input.Pointer.point[i].dblclick;
            this.pointerDATA[i].hold = HYPER.Input.Pointer.point[i].hold;
            this.pointerDATA[i].click = HYPER.Input.Pointer.point[i].down;
        },

        /**
         * Updates the info that is passed to the children.
         * @private
         * @method HYPER.Layer._updatePassedInfo
         * @param {object} a - Updating info.
         */

        _updatePassedInfo: function (a) {
            this.passedINFO.canvas = this.canvas;
            this.passedINFO.ctx = this.ctx;
            this.passedINFO.view = this.view;
            this.passedINFO.camera = this.camera;

            this._updatePointerData(a);
        },

        /**
         * Updates the settings used for rendering.
         * @private
         * @method HYPER.Layer._updateRenderingSettings
         * @param {object} a - Updating info.
         */

        _updateRenderingSettings: function (a) {

            if (this.camera.width != this.canvas.width ||
                this.camera.height != this.canvas.height) {
                this.canvas.width = this.camera.width;
                this.canvas.height = this.camera.height;

            }
            if (this.camera.width != this.lastcanvas.width ||
                this.camera.height != this.lastcanvas.height) {
                this.lastcanvas.width = this.camera.width;
                this.lastcanvas.height = this.camera.height;

            }
            // Set smooth Pixels
            if (this.ctx.mozImageSmoothingEnabled != this.antiAliasing) {
                this.ctx.mozImageSmoothingEnabled = this.antiAliasing;
            }
            if (this.ctx.webkitImageSmoothingEnabled != this.antiAliasing) {
                this.ctx.webkitImageSmoothingEnabled = this.antiAliasing;
            }
            if (this.ctx.msImageSmoothingEnabled != this.antiAliasing) {
                this.ctx.msImageSmoothingEnabled = this.antiAliasing;
            }
            if (this.ctx.imageSmoothingEnabled != this.antiAliasing) {
                this.ctx.imageSmoothingEnabled = this.antiAliasing;
            }


            if (this.antiAliasing == false && this.canvas.style.imageRendering != "pixelated") {
                this.canvas.style.imageRendering = "pixelated";
            } else if (this.antiAliasing == true && this.canvas.style.imageRendering != "auto") {
                this.canvas.style.imageRendering = "auto";
            }
            this._updateRender(a);

        },

        /**
         * Called on the click event.
         * @private
         * @method HYPER.Layer._onClick
         */

        _onClick: function (data) {
            this.updatePointerDATA_ID(data, data._ID);
            for (let i = 0; i < this.children.length; i++) {
                if (this.children[i].alive) {
                    if (this.children[i]._onClick) {
                        this.children[i]._onClick(this.pointerDATA[data._ID]);
                    }
                }
            }
            this.onClick(this.pointerDATA[data._ID]);
        },

        /**
         * Called on the mouse up event.
         * @private
         * @method HYPER.Layer._onUp
         */

        _onUp: function (data) {
            this.updatePointerDATA_ID(data, data._ID);
            for (let i = 0; i < this.children.length; i++) {
                if (this.children[i].alive) {
                    if (this.children[i]._onUp) {
                        this.children[i]._onUp(this.pointerDATA[data._ID]);
                    }
                }
            }
            this.onUp(this.pointerDATA[data._ID]);
        },

        /**
         * Called on the mouse down event.
         * @private
         * @method HYPER.Layer._onDown
         */

        _onDown: function (data) {
            this.updatePointerDATA_ID(data, data._ID);
            for (let i = 0; i < this.children.length; i++) {
                if (this.children[i].alive) {
                    if (this.children[i]._onDown) {
                        this.children[i]._onDown(this.pointerDATA[data._ID]);
                    }
                }
            }
            this.onDown(this.pointerDATA[data._ID]);
        },

        /**
         * Called when the mouse pointer is held down.
         * @private
         * @method HYPER.Layer._onHold
         */

        _onHold: function (data) {
            this.updatePointerDATA_ID(data, data._ID);
            for (let i = 0; i < this.children.length; i++) {
                if (this.children[i].alive) {
                    if (this.children[i]._onHold) {
                        this.children[i]._onHold(this.pointerDATA[data._ID]);
                    }
                }
            }
            this.onHold(this.pointerDATA[data._ID]);
        },

        /**
         * Called when the user double clicks.
         * @private
         * @method HYPER.Layer._onDblClick
         */

        _onDblClick: function (data) {
            for (let i = 0; i < this.children.length; i++) {
                if (this.children[i].alive) {
                    if (this.children[i]._onDblClick) {
                        this.children[i]._onDblClick(this.pointerDATA[data._ID]);
                    }
                }
            }
            this.onDblClick(this.pointerDATA[data._ID]);
        },

        /**
         * Called on the key down.
         * @private
         * @method HYPER.Layer._onKeyDown
         */

        _onKeyDown: function (data) {
            for (let i = 0; i < this.children.length; i++) {
                if (this.children[i].alive) {
                    if (this.children[i]._onKeyDown) {
                        this.children[i]._onKeyDown(data);
                    }
                }
            }
            this.onKeyDown(data);
        },

        /**
         * Called when a key is held down.
         * @private
         * @method HYPER.Layer._onKeyHeld
         */

        _onKeyHeld: function (data) {
            for (let i = 0; i < this.children.length; i++) {
                if (this.children[i].alive) {
                    if (this.children[i]._onKeyHeld) {
                        this.children[i]._onKeyHeld(data);
                    }
                }
            }
            console.log("hi")
            this.onKeyHeld(data);
        },

        /**
         * Called on the key up.
         * @private
         * @method HYPER.Layer._onKeyUp
         */

        _onKeyUp: function (data) {
            for (let i = 0; i < this.children.length; i++) {
                if (this.children[i].alive) {
                    if (this.children[i]._onKeyUp) {
                        this.children[i]._onKeyUp(data);
                    }
                }
            }
            this.onKeyUp(data);
        },

        /**
         * Called every frame.
         * @private
         * @method HYPER.Layer._render
         */

        _render: function (a) {
            this._anime._now = Date.now();
            this._anime._delta = this._anime._now - this._anime._then;

            if (this._anime._delta > this._anime._interval) {

                this._anime._then = this._anime._now - (this._anime._delta % this._anime._interval);



                if (this.backgroundColor === "clear" || this.autoClear) {


                    HYPER.Graphics.Draw(a.ctx)
                        .clearRect(
                            0,
                            0,
                            a.canvas.width,
                            a.canvas.height);


                }




                if (this.motionBlur) {

                    HYPER.Graphics.Draw(a.ctx, this.style)
                        .bitmap(
                            this.canvas,
                            0,
                            0,
                            this.camera.width,
                            this.camera.height,
                            this.view.x,
                            this.view.y,
                            this.view.width,
                            this.view.height);

                }

                this._updateRenderingSettings(a);
                this._updatePassedInfo(a);
                this._renderChildren(this.passedINFO);

                this.render(this.passedINFO);




                if (this.motionBlur) {

                    HYPER.Graphics.Draw(a.ctx, this.style)
                        .setAlpha(this.style.alpha / 2)
                        .bitmap(
                            this.canvas,
                            0,
                            0,
                            this.camera.width,
                            this.camera.height,
                            this.view.x,
                            this.view.y,
                            this.view.width,
                            this.view.height);


                } else {

                    HYPER.Graphics.Draw(a.ctx, this.style)
                        .bitmap(
                            this.canvas,
                            0,
                            0,
                            this.camera.width,
                            this.camera.height,
                            this.view.x,
                            this.view.y,
                            this.view.width,
                            this.view.height);
                };


            };
        },

        /**
         * Called every tick.
         * @private
         * @method HYPER.Layer._update
         */

        _update: function (a) {
            this._tick._now = Date.now();
            this._tick._delta = this._tick._now - this._tick._then;
            if (this._tick._delta > this._tick._interval) {
                this._tick._then = this._tick._now - (this._tick._delta % this._tick._interval);

                // Game Code
                this._updatePassedInfo(a);

                this._updateChildren(this.passedINFO);
                this.update(this.passedINFO);
                // End Game Code

            }
        },

        /**
         * Called when the Layer is initalized.
         * @method HYPER.Layer._init
         */

        _init: function () {
            this.init();
        },
    };


})();


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


(function () {
    "use strict";
    /**
     * Used to draw or create graphicle objects for particles sprites.
     * @class HYPER.Graphics.Draw
     * @param {object} ctx The context to draw to.
     * @param {object} style The style that will be drawn, use a Graphics.Style or pass your own information in the form of a object.
     * @param {boolean} autoStart If the path will automaticaly begin.
     * @return {object} self
     */

    HYPER.Graphics.Draw = function (ctx, style, autoStart) {

        /**
         * @property {object} ctx - The context that will be rendered to.
         */

        this.ctx = ctx;

        /**
         * @property {boolean} autoStart - If a drawing path should begin.
         */

        this.autoStart = autoStart || true;

        /**
         * @property {HYPER.Graphics.Style} style - The style all objects will bew rendered with.
         */

        this.style = style || HYPER.Graphics.DEFAULT_STYLE;

        // INIT the style
        HYPER.Graphics.styleToCTX(this.style, this.ctx);

        // auto start the path
        if (this.autoStart) {
            this.ctx.beginPath();
        }

        /**
         * Starts a new path.
         * @method HYPER.Graphics.Draw.beginPath
         */

        this.beginPath = function () {
            this.ctx.beginPath();
            return this;
        };

        /**
         * closes a path.
         * @method HYPER.Graphics.Draw.closePath
         */

        this.closePath = function () {
            this.ctx.closePath();
            return this;
        };

        /**
         * Fills a path.
         * @method HYPER.Graphics.Draw.fillPath
         */

        this.fillPath = function () {
            this.ctx.fill();
            return this;
        };

        /**
         * Strokes a path.
         * @method HYPER.Graphics.Draw.strokePath
         */

        this.strokePath = function () {
            this.ctx.stroke();
            return this;
        };

        /**
         * Sets the fill color.
         * @method HYPER.Graphics.Draw.setFillColor
         * @param {string} color - New fill color.
         */

        this.setFillColor = function (color) {
            this.ctx.fillStyle = color || this.ctx.fillStyle;
            return this;
        };

        /**
         * Sets the stroke color.
         * @method HYPER.Graphics.Draw.setStrokeColor
         * @param {string} color - New stroke color.
         */

        this.setStrokeColor = function (color) {
            this.ctx.strokeStyle = color || this.ctx.strokeStyle;
            return this;
        };

        /**
         * Sets the alpha value.
         * @method HYPER.Graphics.Draw.setAlpha
         * @param {number} alpha - New alpha value.
         */

        this.setAlpha = function (alpha) {
            this.ctx.globalAlpha = alpha;
            return this;
        };

        /**
         * Sets a new rendering style.
         * @method HYPER.Graphics.Draw.setStyle
         * @param {HYPER.Graphics.Style} style - New style.
         */

        this.setStyle = function (style) {
            if (style._ID.split(" ")[0] === "style") {
                this.style = style || {};
                HYPER.Graphics.styleToCTX(this.style, this.ctx);
            } else {
                console.error(state + "is not a style.");
            }
            return this;
        };

        /**
         * Clears a rectangle.
         * @method HYPER.Graphics.Draw.clearRect
         * @param {number} x - X position of rectangle.
         * @param {number} y - Y position of rectangle.
         * @param {number} width - Width of the rectangle.
         * @param {number} height - Height of the rectangle.
         */

        this.clearRect = function (x, y, width, height) {
            this.ctx.clearRect(x, y, width, height);
        };

        /**
         * Draws a line.
         * @method HYPER.Graphics.Draw.line
         * @param {number} startX - X position to start the line.
         * @param {number} startY - Y position to start the line.
         * @param {number} endX - X position to end the line.
         * @param {number} endY - Y position to end the line.
         */

        this.line = function (startX, startY, endX, endY) {
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            this.ctx.moveTo(startX, startY);
            this.ctx.lineTo(endX, endY);

            // fill the object
            if (this.style.fill) {
                this.ctx.fill();
            }
            //stroke the object
            if (this.style.stroke) {
                this.ctx.stroke();
            }
            if (this.autoStart === true) {
                this.ctx.closePath();
            }
            return this;
        };

        /**
         * Draws a circle.
         * @method HYPER.Graphics.Draw.circle
         * @param {number} y - X position of the circle.
         * @param {number} x - Y position of the circle.
         * @param {number} radius - Radius of the circle.
         * @param {number} startAngle=0 - Start angle of the circle.
         * @param {number} endAngle=360 - End angle of the circle.
         * @param {boolean} counterClockwise=false - Draw counter clockwise?.
         */

        this.circle = function (x, y, radius, startAngle, endAngle, counterClockwise) {
            startAngle = startAngle || 0;
            endAngle = endAngle || 360;
            counterClockwise = counterClockwise || false;
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            this.ctx.arc(x, y, radius, HYPER.Math.degreesToRadians(startAngle), HYPER.Math.degreesToRadians(endAngle), counterClockwise);
            // fill the object
            if (this.style.fill) {
                this.ctx.fill();
            }
            //stroke the object
            if (this.style.stroke) {
                this.ctx.stroke();
            }
            if (this.autoStart === true) {
                this.ctx.closePath();
            }
            return this;
        };

        /**
         * Draws a quadratic curve.
         * @method HYPER.Graphics.Draw.quadraticCurve
         * @param {number} startX - X position to start the quadratic curve.
         * @param {number} startY - Y position to start the quadratic curve.
         * @param {number} endX - X position to end the quadratic curve.
         * @param {number} endY - Y position to end the quadratic curve.
         * @param {number} cpx - The x-coordinate of the quadratic control point
         * @param {number} cpy - The y-coordinate of the quadratic control point
         */

        this.quadraticCurve = function (startX, startY, endX, endY, cpx, cpy) {
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            this.ctx.moveTo(startX, startY);
            this.ctx.quadraticCurveTo(endX, endY, cpx, cpy);
            // fill the object
            if (this.style.fill) {
                this.ctx.fill();
            }
            //stroke the object
            if (this.style.stroke) {
                this.ctx.stroke();
            }
            if (this.autoStart === true) {
                this.ctx.closePath();
            }
            return this;
        };

        /**
         * Draws a bezier curve.
         * @method HYPER.Graphics.Draw.bezierCurve
         * @param {number} startX - X position to start the quadratic curve.
         * @param {number} startY - Y position to start the quadratic curve.
         * @param {number} endX - X position to end the quadratic curve.
         * @param {number} endY - Y position to end the quadratic curve.
         * @param {number} cpx1 - The x-coordinate of the 1st quadratic control point
         * @param {number} cpy1 - The y-coordinate of the 1st quadratic control point
         * @param {number} cpx2 - The x-coordinate of the 2nd quadratic control point
         * @param {number} cpy2 - The y-coordinate of the 2nd quadratic control point
         */

        this.bezierCurve = function (startX, startY, endX, endY, cpx1, cpy1, cpx2, cpy2) {
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            this.ctx.moveTo(startX, startY);
            this.ctx.bezierCurveTo(endX, endY, cpx1, cpy1, cpx2, cpy2);
            // fill the object
            if (this.style.fill) {
                this.ctx.fill();
            }
            //stroke the object
            if (this.style.stroke) {
                this.ctx.stroke();
            }
            if (this.autoStart === true) {
                this.ctx.closePath();
            }
            return this;
        };

        /**
         * Draws a arc.
         * @method HYPER.Graphics.Draw.arcTo
         * @param {number} startX - X position to start the arc.
         * @param {number} startY - Y position to start the arc.
         * @param {number} endX - X position to end the arc.
         * @param {number} endY - Y position to end the arc.
         * @param {number} tanX - X tangant of the arc.
         * @param {number} tanY - Y tangent of the arc.
         * @param {number} radius - Radius of the arc.
         */

        this.arcTo = function (startX, startY, endX, endY, tanX, tanY, radius) {
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            this.ctx.moveTo(startX, startY);
            this.ctx.arcTo(endX, endY, tanX, tanY, radius);
            // fill the object
            if (this.style.fill) {
                this.ctx.fill();
            }
            //stroke the object
            if (this.style.stroke) {
                this.ctx.stroke();
            }
            if (this.autoStart === true) {
                this.ctx.closePath();
            }
            return this;
        };

        /**
         * Draws a rectangle.
         * @method HYPER.Graphics.Draw.rect
         * @param {number} x - X position of rectangle.
         * @param {number} y - Y position of rectangle.
         * @param {number} width - Width of the rectangle.
         * @param {number} height - Height of the rectangle.
         * @param {number} angle - Degrees the rectangle is rotated.
         * @param {number} rotX - X rotation point of the rectangle.
         * @param {number} rotY - Y rotation point of the rectangle.
         */

        this.rect = function (x, y, width, height, angle, rotX, rotY) {
            angle = angle || 0;
            rotX = rotX || 0;
            rotY = rotY || 0;
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            if (angle != 0) {
                this.ctx.translate(x + rotX, y + rotY);
                this.ctx.rotate(HYPER.Math.degreesToRadians(angle));
                this.ctx.rect(-rotX, -rotY, width, height);
                this.ctx.rotate(-HYPER.Math.degreesToRadians(angle));
                this.ctx.translate(-(x + rotX), -(y + rotY));
            } else {
                this.ctx.rect(x, y, width, height);
            }

            // fill the object
            if (this.style.fill) {
                this.ctx.fill();
            }
            //stroke the object
            if (this.style.stroke) {
                this.ctx.stroke();
            }
            if (this.autoStart === true) {
                this.ctx.closePath();
            }
            return this;
        };

        /**
         * Draws a triangle.
         * @method HYPER.Graphics.Draw.triangle
         * @param {number} x1 - X position of 1st triangle point.
         * @param {number} y1 - Y position of 1st triangle point.
         * @param {number} x2 - X position of 2nd triangle point.
         * @param {number} y2 - Y position of 2nd triangle point.
         * @param {number} x3 - X position of 3rd triangle point.
         * @param {number} y3 - Y position of 3rd triangle point.
         * @param {number} angle - Degrees the triangle is rotated.
         * @param {number} rotX - X rotation point of the triangle.
         * @param {number} rotY - Y rotation point of the triangle.
         */

        this.triangle = function (x1, y1, x2, y2, x3, y3, angle, rotX, rotY) {
            angle = angle || 0;
            rotX = rotX || 0;
            rotY = rotY || 0;
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            if (angle != 0) {
                this.ctx.translate(x1 + rotX, y1 + rotY);
                this.ctx.rotate(HYPER.Math.degreesToRadians(angle));
                this.ctx.moveTo(x1 - x1 - rotX, y1 - x1 - rotY);
                this.ctx.lineTo(x2 - x1 - rotX, y2 - y1 - rotY);
                this.ctx.lineTo(x3 - x1 - rotX, y3 - y1 - rotY);
                this.ctx.lineTo(x1 - x1 - rotX, y1 - y1 - rotY);
                this.ctx.rotate(-HYPER.Math.degreesToRadians(angle));
                this.ctx.translate(-(x1 + rotX), -(y1 + rotY));
            } else {
                this.ctx.moveTo(x1, y1);
                this.ctx.lineTo(x2, y2);
                this.ctx.lineTo(x3, y3);
                //this.ctx.lineTo(x1, y1);
            }
            if (this.autoStart === true) {
                this.ctx.closePath();
            }

            // fill the object
            if (this.style.fill) {
                this.ctx.fill();
            }
            //stroke the object
            if (this.style.stroke) {
                this.ctx.stroke();
            }

            return this;
        };

        /**
         * Draws a polygon.
         * @method HYPER.Graphics.Draw.shape
         * @param {array} pos - Array of positions to use for the polygon. Every even number is x, and every odd number is y.
         * @param {number} angle - Degrees the polygon is rotated.
         * @param {number} rotX - X rotation point of the polygon.
         * @param {number} rotY - Y rotation point of the polygon.
         */

        this.polygon = function (pos, angle, rotX, rotY) {
            angle = angle || 0;
            rotX = rotX || 0;
            rotY = rotY || 0;
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            if (angle != 0) {
                this.ctx.translate(pos[0] + rotX, pos[1] + rotY);
                this.ctx.rotate(HYPER.Math.degreesToRadians(angle));
                this.ctx.moveTo(pos[0] - pos[0] - rotX, pos[1] - pos[1] - rotY);
                for (let i = 0; i < pos.length; i += 2) {
                    this.ctx.lineTo(pos[i] - pos[0] - rotX, pos[i + 1] - pos[1] - rotY);
                }
                this.ctx.lineTo(pos[0] - pos[0] - rotX, pos[1] - pos[1] - rotY);
                this.ctx.rotate(-HYPER.Math.degreesToRadians(angle));
                this.ctx.translate(-(pos[0] + rotX), -(pos[1] + rotY));
            } else {
                this.ctx.moveTo(pos[0], pos[1]);
                for (let i = 0; i < pos.length; i += 2) {
                    this.ctx.lineTo(pos[i], pos[i + 1]);
                }
                this.ctx.lineTo(pos[0], pos[1]);
            }

            if (this.autoStart === true) {
                this.ctx.closePath();
            }
            // fill the object
            if (this.style.fill) {
                this.ctx.fill();
            }
            //stroke the object
            if (this.style.stroke) {
                this.ctx.stroke();
            }


            return this;
        };

        /**
         * Draws some text.
         * @method HYPER.Graphics.Draw.text
         * @param {string} text - Text to draw.
         * @param {number} x - X position of text.
         * @param {number} y - Y position of text.
         * @param {number} angle - Degrees the text is rotated.
         * @param {number} rotX - X rotation point of the text.
         * @param {number} rotY - Y rotation point of the text.
         */

        this.text = function (text, x, y, angle, rotX, rotY) {
            angle = angle || 0;
            rotX = rotX || 0;
            rotY = rotY || 0;
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            if (angle != 0) {
                this.ctx.translate(x + rotX, y + rotY);
                this.ctx.rotate(HYPER.Math.degreesToRadians(angle));
                if (this.style.fill) {
                    this.ctx.fillText(text, -rotX, -rotY);
                }
                if (this.style.stroke) {
                    this.ctx.strokeText(text, -rotX, -rotY);
                }
                this.ctx.rotate(-HYPER.Math.degreesToRadians(angle));
                this.ctx.translate(-(x + rotX), -(y + rotY));
            } else {
                if (this.style.fill) {
                    this.ctx.fillText(text, x, y);
                }
                if (this.style.stroke) {
                    this.ctx.strokeText(text, x, y);
                }
            }
            if (this.autoStart === true) {
                this.ctx.closePath();
            }
            return this;
        };

        /**
         * Draws a bitmap.
         * @method HYPER.Graphics.Draw.bitmap
         * @param {string} image - Image to draw.
         * @param {number} x - X position of bitmap.
         * @param {number} y - Y position of bitmap.
         * @param {number} width - Width of the bitmap.
         * @param {number} height - Height of the bitmap.
         * @param {number} sx - Cropped X position of bitmap.
         * @param {number} sy - Cropped Y position of bitmap.
         * @param {number} swidth - Cropped Width of the bitmap.
         * @param {number} sheight - Cropped Height of the bitmap.
         * @param {number} angle - Degrees the bitmap is rotated.
         * @param {number} rotX - X rotation point of the bitmap.
         * @param {number} rotY - Y rotation point of the bitmap.
         * @param {number} scaleX - Scaled X value of the bitmap.
         * @param {number} scaleY - Scaled Y value of the bitmap.
         */

        this.bitmap = function (image, x, y, width, height, sx, sy, swidth, sheight, angle, rotX, rotY, scaleX, scaleY) {
            angle = angle || 0;
            rotX = rotX || 0;
            rotY = rotY || 0;
            if (image.bitmap) {
                image = image.bitmap;
            }
            sx = sx || 0;
            sy = sy || 0;
            scaleX = scaleX || 1;
            scaleY = scaleY || 1;
            swidth = swidth || image.width;
            sheight = sheight || image.height;
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }

            if (angle != 0 || scaleX != 1 || scaleY != 1) {
                //this.ctx.save();
                this.ctx.translate(x + rotX, y + rotY);

                this.ctx.rotate(HYPER.Math.degreesToRadians(angle));
                this.ctx.scale(scaleX, scaleY);
                this.ctx.drawImage(image, sx, sy, swidth, sheight, -rotX, -rotY, width, height);
                this.ctx.scale(1 / scaleX, 1 / scaleY);
                this.ctx.rotate(-HYPER.Math.degreesToRadians(angle));

                this.ctx.translate(-(x + rotX), -(y + rotY));
                //this.ctx.restore();
            } else {
                this.ctx.drawImage(image, sx, sy, swidth, sheight, x, y, width, height);
            }

            // fill the object
            if (this.style.fill) {
                this.ctx.fill();
            }
            //stroke the object
            if (this.style.stroke) {
                this.ctx.stroke();
            }
            if (this.autoStart === true) {
                this.ctx.closePath();
            }
            return this;
        };

        return this;
    };
})();


(function () {
    "use strict";
    /**
     * Used to desplay animations with spritesheets.
     * @class HYPER.Graphics.Animation
     * @param {object} e Object of passed info.
     * @param {object} e.spriteSheet Sprite sheet to be animated.
     * @param {number} e.currentFrame=0 The current frame number of the animation.
     * @param {function} e.onLoopEnd Function to call when the animation finishes, called every loop.
     * @param {function} e.onFrame Function called every frame change.
     */
    HYPER.Graphics.Animation = function (e) {
        
        /**
         * @property {object} spriteSheet - The spritesheet to be used for the animation.
         */
        
        this.spriteSheet = e.spriteSheet || {};

        /**
         * @property {string} _ID - The specific ID for this object.
         */
        
        this._ID = "animation " + Math.random() + "" + Math.random();

        /**
         * @property {string} type - The type of object it is.
         */

        this.type = "animation";

        /**
         * @property {number} width - The width of the animation.
         */

        this.width = e.width || this.spriteSheet.width || 0;

        /**
         * @property {number} height - The height of the animation.
         */

        this.height = e.height || this.spriteSheet.height || 0;

        /**
         * @property {number} currentFrame - The current frame of the animation.
         */

        this.currentFrame = e.currentFrame || 0;

        /**
         * @property {boolean} paused - If the animation is paused or not.
         */

        this.paused = true;

        /**
         * @property {object} currentAnimation - The current animation to play.
         */

        this.currentAnimation = false;

        /**
         * @property {function} onLoopEnd - What to do at the end of every loop.
         */

        this.onLoopEnd = e.onLoopEnd || no0p;

        /**
         * @property {function} onLoopEnd - What to do at the end of every frame. First parameter is the frame ID.
         */

        this.onFrame = e.onFrame || no0p;

        /**
         * @property {number} FPS - The FPS of the animation.
         */

        this.FPS = 30;

        /**
         * @private
         * @property {number} _now - Current time.
         */

        this._now;

        /**
         * @private
         * @property {number} _then - Previous time.
         */

        this._then = Date.now();

        /**
         * @private
         * @property {number} _interval - How much time you want to pass between loops.
         */

        this._interval = 1000 / this.FPS;

        /**
         * @private
         * @property {number} _delta - Diffrence in time between loops.
         */

        this._delta;

        /**
         * @property {function} update - Called every tick.
         */

        this.update = e.update || no0p;

        /**
         * @property {function} update - Called every frame.
         */

        this.render = e.render || no0p;

    };

    HYPER.Graphics.Animation.prototype = {

        /**
         * Function to play animations.
         * @method HYPER.Graphics.Animation.play
         * @param {string} animationName the name of the animation you want to play.
         * @param {number} frameNumber The frame that you want to start playing at.
         */

        play: function (animationName, frameNumber) {
            this.currentAnimation = this.spriteSheet.animations[animationName];
            this.FPS = this.spriteSheet.animations[animationName].fps;
            this._interval = 1000 / this.FPS;
            this.currentFrame = frameNumber || this.currentFrame || 0;
            this.paused = false;
        },

        /**
         * Function to pause animations.
         * @method HYPER.Graphics.Animation.pause
         */

        pause: function () {
            this.paused = true;
        },

        /**
         * Function to start animations. It always re-starts the animation.
         * @param {string} animationName the name of the animation you want to play.
         * @param {number} frameNumber The frame that you want to start playing at.
         * @method HYPER.Graphics.Animation.start
         */

        start: function (animationName, frameNumber) {
            this.currentFrame = frameNumber || 0;
            this.currentAnimation = this.spriteSheet.animations[animationName];
            this.FPS = this.spriteSheet.animations[animationName].fps;
            this.paused = false;
        },

        /**
         * Function to stop animations. This function re-sets the animation frame.
         * @method HYPER.Graphics.Animation.stop
         */

        stop: function () {
            this.paused = true;
            this.currentFrame = 0;
        },

        /**
         * Function called every tick.
         * @method HYPER.Graphics.Animation._update
         */

        _update: function (a) {
            this._now = Date.now();
            this._delta = this._now - this._then;
            if (this._delta > this._interval) {
                this._then = this._now - (this._delta % this._interval);

                // Game Code

                if (!this.paused && this.currentAnimation) {


                    this.currentFrame += 1;

                    this.onFrame(this.currentFrame);

                    this.currentAnimation.onFrame(this.currentFrame);

                    if (this.currentFrame >= this.currentAnimation.frames.length) {
                        this.currentAnimation.onLoop();
                        this.currentFrame = 0;
                        if (!this.currentAnimation.loop) {
                            this.paused = true;
                        }
                    }

                } else {

                }


                // End Game Code

            }
        },

        /**
         * Function called every frame.
         * @method HYPER.Graphics.Animation._render
         */

        _render: function (a, x, y, width, height, angle, rotX, rotY, scaleX, scaleY) {
            if (this.currentAnimation) {
                x = x || 0;
                y = y || 0;
                width = width || 0;
                height = height || 0;
                angle = angle || 0;
                rotX = rotX || 0;
                rotY = rotY || 0;
                scaleX = scaleX || 1;
                scaleY = scaleY || 1;
                var flipped = "";
                if (scaleX < 0) {
                    flipped = "x";
                }
                if (scaleY < 0) {
                    flipped = "y";
                }
                if (scaleX < 0 && scaleY < 0) {
                    flipped = "xy";
                }
                scaleX = Math.abs(scaleX);
                scaleY = Math.abs(scaleY);
                if (flipped === "x") {
                    HYPER.Graphics.Draw(a.ctx).bitmap(this.spriteSheet.flippedX.bitmap,
                        x,
                        y,
                        width,
                        height, -this.spriteSheet.frameINFO[this.currentFrame].x + this.spriteSheet.flippedX.bitmap.width,
                        this.spriteSheet.frameINFO[this.currentFrame].y, -this.spriteSheet.frameINFO[this.currentFrame].width,
                        this.spriteSheet.frameINFO[this.currentFrame].height,
                        angle,
                        rotX,
                        rotY,
                        scaleX,
                        scaleY);
                } else if (flipped === "xy") {
                    HYPER.Graphics.Draw(a.ctx).bitmap(this.spriteSheet.flippedXY.bitmap,
                        x,
                        y,
                        width,
                        height, -this.spriteSheet.frameINFO[this.currentFrame].x + this.spriteSheet.flippedX.bitmap.width, -this.spriteSheet.frameINFO[this.currentFrame].y + this.spriteSheet.flippedX.bitmap.height, -this.spriteSheet.frameINFO[this.currentFrame].width, -this.spriteSheet.frameINFO[this.currentFrame].height,
                        angle,
                        rotX,
                        rotY,
                        scaleX,
                        scaleY);
                } else if (flipped === "y") {
                    HYPER.Graphics.Draw(a.ctx).bitmap(this.spriteSheet.flippedY.bitmap,
                        x,
                        y,
                        width,
                        height,
                        this.spriteSheet.frameINFO[this.currentFrame].x, -this.spriteSheet.frameINFO[this.currentFrame].y + this.spriteSheet.flippedX.bitmap.height,
                        this.spriteSheet.frameINFO[this.currentFrame].width, -this.spriteSheet.frameINFO[this.currentFrame].height,
                        angle,
                        rotX,
                        rotY,
                        scaleX,
                        scaleY);
                } else {
                    HYPER.Graphics.Draw(a.ctx).bitmap(this.spriteSheet.bitmap,
                        x,
                        y,
                        width,
                        height,
                        this.spriteSheet.frameINFO[this.currentFrame].x,
                        this.spriteSheet.frameINFO[this.currentFrame].y,
                        this.spriteSheet.frameINFO[this.currentFrame].width,
                        this.spriteSheet.frameINFO[this.currentFrame].height,
                        angle,
                        rotX,
                        rotY,
                        scaleX,
                        scaleY);
                };
            }


        },
    };
})();


(function () {
    "use strict";
    /**
     * Create sprites with the 'new' keyword.
     * @class HYPER.Sprite
     * @param {object} e Object to pass all sprite info.
     * @param {object} e.texture bitmap or spritesheet to be rendered as the sprite.
     * @param {object} e.style Style info of this sprite.
     * @param {number} e.x=0 X location of the sprite.
     * @param {number} e.y=0 Y location of the sprite.
     * @param {number} e.width=32 Width of the sprite.
     * @param {number} e.height=32 Height of the sprite.
     * @param {number} e.angle=0 angle the sprite is rotated.
     * @param {number} e.rotX=0 X location of the point the sprite is rotated around.
     * @param {number} e.rotY=0 Y location of the point the sprite is rotated around.
     */
    HYPER.Sprite = function (e) {
        e = e || {};

        /**
         * @property {string} _ID - The specific ID for this object.
         */

        this._ID = "sprite " + Math.random() + "" + Math.random();

        /**
         * @property {object} body - The object that will store all physics info if physics is enabled.
         */

        this.body = {};


        /**
         * @property {object} texture - The texture of the object to be rendered.
         */

        this.texture = e.texture || {
            _render: no0p,
            _update: no0p,
            frames: {},
            bitmap: {},
            type: "",
        };

        if (this.texture.type === "animation") {

        }

        

        if (this.texture.type === "spritesheet") {
            this.texture = new HYPER.Graphics.Animation({
                spriteSheet: this.texture,
            });
        }

        this.texture.frames = this.texture.frames || {};
        this.texture.bitmap = this.texture.bitmap || {};
        
        /**
         * @property {boolean} locked - the object that this object is locked to.
         */
        
        this.locked = false;
        
        /**
         * @property {object} lockedOffset - the X and Y offset that the object will be locked to.
         */

        this.lockedOffset = {
            x: 0,
            y: 0
        };

        /**
         * @property {string} type - Internal type identifier for the object.
         */

        this.type = "sprite";

        /**
         * @property {object} style - the style this object will be rendered with.
         */

        this.style = e.style || HYPER.Graphics.DEFAULT_STYLE;


        /**
         * @property {number} zIndex - The z-index this will be rendered as.
         */

        this.zIndex = e.zIndex || 0;

        /**
         * @property {number} x - The X location of the object.
         */

        this.x = e.x || 0;

        /**
         * @property {number} y - The Y location of the object.
         */

        this.y = e.y || 0;

        /**
         * @property {number} width - The width of the object.
         */

        this.width = e.width || this.texture.width || 32;

        /**
         * @property {number} height - The height of the object.
         */

        this.height = e.height || this.texture.height || 32;

        /**
         * @property {number} angle - The angle of the object.
         */

        this.angle = e.angle || 0;

        /**
         * @property {number} rotX - The X rotation point of the object.
         */

        this.rotX = e.rotX || this.width / 2;

        /**
         * @property {number} rotY - The Y rotation point of the object.
         */

        this.rotY = e.rotY || this.height / 2;


        /**
         * @property {boolean} visable - If the object should be rendered or not.
         */

        this.visible = true;

        /**
         * @property {boolean} active - If the object should be updated or not.
         */

        this.active = true;

        /**
         * @property {boolean} active - If the object should be updated and rendered or not.
         */

        this.alive = true;

        /**
         * @property {number} lifeTime - How long the object should be alive.
         */

        this.lifeTime = e.lifeTime || 0;

        /**
         * @property {number} health - The health of the object.
         */

        this.health = e.health || 1;

        /**
         * @property {number} heamaxHealthlth - The maxium health of the object.
         */

        this.maxHealth = e.health || 1;

        /**
         * @property {number} scaleX - The scale X of the object.
         */

        this.scaleX = e.scaleX || 1;

        /**
         * @property {number} scaleY - The scale Y of the object.
         */

        this.scaleY = e.scaleY || 1;

        /**
         * @property {number} scaleX - Should the object be drawn backwards?
         */

        this.flippedX = e.flippedX || false;

        /**
         * @property {number} scaleY - Should the object be drawn up-side-down?
         */

        this.flippedY = e.flippedY || false;

        /**
         * @property {boolean} autoCull - Should the object be drawn if not visable on the screen?
         */

        this.autoCull = e.autoCull || false;

        /**
         * @property {function} render - User defined rendering, good for little extra things you want rendered.
         */

        this.render = e.render || no0p;

        /**
         * @property {function} update - User defined updating, good for little extra things you want updated.
         */

        this.update = e.update || no0p;

        /**
         * @property {function} onDeath - User defined updating, called on objects death.
         */

        this.onDeath = e.onDeath || no0p;

        /**
         * @property {function} onClick - What should happen if the object is clicked?
         */

        this.onClick = e.onClick || no0p;

        /**
         * @property {function} onUp - What should happen if the mouse is lifted on the object?
         */

        this.onUp = e.onUp || no0p;

        /**
         * @property {function} onDown - What should happen if the mouse is dropped on the object?
         */

        this.onDown = e.onDown || no0p;

        /**
         * @property {function} onHold - What should happen if the object is held down by the mouse?
         */

        this.onHold = e.onHold || no0p;

        /**
         * @property {function} onDblClick - What should happen if the object is double clicked?
         */

        this.onDblClick = e.onDblClick || no0p;

        /**
         * @property {function} onHover - What should happen if the object is hovered over?
         */

        this.onHover = e.onHover || no0p;

    };

    HYPER.Sprite.prototype = {

        /**
         * Locks the object to any other object that has a X and Y property.
         * @method HYPER.Sprite.lockTo
         * @param {object} to - the object this object is locked to.
         * @param {number} x - The X offset that the object will be locked at.
         * @param {number} y - The Y offset that the object will be locked at.
         */

        lockTo: function (to, x, y) {
            if (to) {
                this.locked = to;
                this.lockedOffset.x = x || 0;
                this.lockedOffset.y = y || 0;

                if (this.body) {
                    if (this.body.type === "boxJSAABB") {
                        this.body.fixed = true;
                    }
                }

            }
        },

        /**
         * Unlocks the object.
         * @method HYPER.Sprite.unlock
         */

        unlock: function () {
            this.locked = false;
            this.lockedOffset.x = 0;
            this.lockedOffset.y = 0;
            if (this.body) {
                if (this.body.type === "boxJSAABB") {
                    this.body.fixed = false;
                }
            }
        },

        /**
         * Subtracts health from the health property.
         * @method HYPER.Sprite.damage
         * @param {number} value - The amount the object will be damaged.
         */

        damage: function (value) {
            this.health -= value;
        },

        /**
         * Adds health to the health property.
         * @method HYPER.Sprite.heal
         * @param {number} value - The amount the object will be healed.
         */

        heal: function (value) {
            this.health += value;
        },

        /**
         * Sets the position of the sprite.
         * @method HYPER.Sprite.setPos
         * @param {number} x - The new X position of the sprite.
         * @param {number} y - The new Y position of the sprite.
         */

        setPos: function (x, y) {
            this.x = x;
            this.y = y;
            if (this.body.type === "boxJSAABB") {
                this.body.pos.x = x;
                this.body.pos.y = y;
            }
        },

        /**
         * Kills the sprite.
         * @method HYPER.Sprite.kill
         */

        kill: function () {
            this.visible = false;
            this.active = false;
            this.alive = false;
            if (this.body.type === "boxJSAABB") {
                this.body.active = false;
            }
        },

        /**
         * Revives the sprite.
         * @method HYPER.Sprite.revive
         * @param {number} health - The health the object will have.
         */

        revive: function (health) {
            this.health = health || this.maxHealth || 1;
            this.visible = true;
            this.active = true;
            this.alive = true;
            if (this.body.type === "boxJSAABB") {
                this.body.active = true;
            }
        },

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._onClick
         * @param {number} data - pointer data of the click.
         */

        _onClick: function (data) {
            if (this.x < data.x && this.y < data.y && this.x + this.width > data.x && this.y + this.height > data.y) {
                this.onClick(data);
            }
        },

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._onUp
         * @param {number} data - pointer data of the click.
         */

        _onUp: function (data) {
            if (this.x < data.x && this.y < data.y && this.x + this.width > data.x && this.y + this.height > data.y) {
                this.onUp(data);
            }
        },

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._onDown
         * @param {number} data - pointer data of the click.
         */

        _onDown: function (data) {
            if (this.x < data.x && this.y < data.y && this.x + this.width > data.x && this.y + this.height > data.y) {
                this.onDown(data);
            }
        },

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._onHold
         * @param {number} data - pointer data of the click.
         */

        _onHold: function (data) {
            if (this.x < data.x && this.y < data.y && this.x + this.width > data.x && this.y + this.height > data.y) {
                this.onHold(data);
            }
        },

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._onDblClick
         * @param {number} data - pointer data of the click.
         */

        _onDblClick: function (data) {
            if (this.x < data.x && this.y < data.y && this.x + this.width > data.x && this.y + this.height > data.y) {
                this.onDblClick(data);
            }
        },

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._render
         * @param {number} a - Information to be known about parent object.
         */

        _render: function (a) {
            var shown = true;
            if (this.autoCull === true) {
                if (HYPER.Physics.checkAABBCollision(this, a.camera)) {
                    shown = true;
                } else {
                    shown = false;
                }
            }
            if (this.visible && this.alive && shown) {
                var Xflip = 1,
                    Yflip = 1;
                if (this.flippedX) {
                    Xflip = -1;
                }
                if (this.flippedY) {
                    Yflip = -1;
                }
                if (this.texture.type === "animation") {

                    this.texture._render(a, this.x - a.camera.x, this.y - a.camera.y, this.width, this.height, this.angle, this.rotX, this.rotY, this.scaleX * Xflip, this.scaleY * Yflip);

                } else if (this.texture.type === "bitmap") {
                    if (this.flippedX && !this.flippedY) {
                        HYPER.Graphics.Draw(a.ctx).bitmap(this.texture.flippedX.bitmap, this.x - a.camera.x, this.y - a.camera.y, this.width, this.height, 0, 0, this.texture.width, this.texture.height, this.angle, this.rotX, this.rotY, this.scaleX, this.scaleY);
                    } else if (this.flippedX && this.flippedY) {
                        HYPER.Graphics.Draw(a.ctx).bitmap(this.texture.flippedY.bitmap, this.x - a.camera.x, this.y - a.camera.y, this.width, this.height, 0, 0, this.texture.width, this.texture.height, this.angle, this.rotX, this.rotY, this.scaleX, this.scaleY);
                    } else if (!this.flippedX && this.flippedY) {
                        HYPER.Graphics.Draw(a.ctx).bitmap(this.texture.flippedXY.bitmap, this.x - a.camera.x, this.y - a.camera.y, this.width, this.height, 0, 0, this.texture.width, this.texture.height, this.angle, this.rotX, this.rotY, this.scaleX, this.scaleY);
                    } else {
                        HYPER.Graphics.Draw(a.ctx).bitmap(this.texture.bitmap, this.x - a.camera.x, this.y - a.camera.y, this.width, this.height, 0, 0, this.texture.width, this.texture.height, this.angle, this.rotX, this.rotY, this.scaleX, this.scaleY);
                    }

                }
                this.render(a, this);
            }

        },

        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._update
         * @param {number} a - Information to be known about parent object.
         */

        _update: function (a) {
            if (this.active && this.alive) {

                for (let i = 0; i < a.pointerDATA.length; i++) {
                    if (this.x < a.pointerDATA[i].x && this.y < a.pointerDATA[i].y && this.x + this.width > a.pointerDATA[i].x && this.y + this.height > a.pointerDATA[i].y) {
                        this.onHover(a.pointerDATA[i]);
                    }
                }

                if (this.body.type === "boxJSAABB") {
                    this.x = this.body.pos.x;
                    this.y = this.body.pos.y;
                    this.width = this.body.size.width;
                    this.height = this.body.size.height;
                    this.angle = this.body.angularPos;
                    this.rotX = this.body.center.x;
                    this.rotY = this.body.center.y;
                }
                if (this.locked) {
                    //this.x = this.locked.x + this.lockedOffset.x;
                    //this.y = this.locked.y + this.lockedOffset.y;
                    this.setPos(this.locked.x + this.lockedOffset.x, this.locked.y + this.lockedOffset.y);
                    if (this.body) {
                        if (this.body.type === "boxJSAABB") {
                            this.body.fixed = true;
                        }
                    }
                }
                if (this.texture._update) {
                    this.texture._update(a, this.x, this.y, this.width, this.height, this.angle, this.rotX, this.rotY, this.scaleX, this.scaleY);

                }
                if (this.health <= 0) {
                    this.kill();
                }
                if (this.health > this.maxHealth) {
                    this.health = this.maxHealth;
                }



                this.update(a, this);




            }
            if (this.lifeTime > 0) {
                this.lifeTime--;
                if (this.lifeTime <= 0) {
                    this.kill();
                }
            }



        },
    };

})();


(function () {
    "use strict";
    /**
     * Initalize the HYPER library.
     * @method HYPER.init
     */
    HYPER.init = function () {
        HYPER.Timer.init();
        HYPER.Input.init();
        return HYPER;
    };
})();