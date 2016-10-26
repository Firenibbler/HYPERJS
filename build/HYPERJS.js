/*! hyperjs - Version: 1.0.0 - 2016-10-21 - Author: Andrew Stavast */
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
(function() {
    "use strict";
    /**
     * A blank function used to fill other functions.
     * @method no0p
     */
    window.no0p = function() {};
    /**
     * Gloable object for all HYPER functions.
     * @namespace HYPER
     */
    window.HYPER = {};
    HYPER.CURRENT_DATE = Date.now();
    /**
     * Returns true if the user is using a mobile operating system.
     * @method mobileAndTabvarcheck
     */
    window.mobileAndTabvarcheck = function() {
        var a = false;
        (function(b) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) a = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return a;
    };
})();

(function() {
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
        getAllArray: function(a, b) {
            for (var c = 0; c < a.length; c++) {
                b(c, a[c]);
            }
        },
        /**
         * Converts radians to degees.
         * @method HYPER.Math.RadiansToDegrees
         * @param {number} radians - The value to convert to degrees.
         */
        RadiansToDegrees: function(a) {
            return a * (180 / Math.PI);
        },
        /**
         * Converts degrees to radians.
         * @method HYPER.Math.degreesToRadians
         * @param {number} degrees - The value to convert to radians.
         */
        degreesToRadians: function(a) {
            return a * (Math.PI / 180);
        },
        /**
         * Returns a random number between the two given numbers.
         * @method HYPER.Math.random
         * @param {number} s=0 - The smallest value possible for the random number.
         * @param {number} e=1 - The largest value possible for the random number.
         * @param {number} float=false - Whether or not to give a floating point number.
         */
        random: function(a, b, c) {
            c = c || false;
            b = b || 0;
            a = a || 1;
            if (c) {
                return Math.random() * (a - b) + b;
            } else {
                return Math.round(Math.random() * (a - b) + b);
            }
        }
    };
})();

(function() {
    "use strict";
    /**
     * Gloable object for all Timer functions.
     * @method Timer
     */
    HYPER.Timer = {};
    HYPER.Timer.children = [];
    HYPER.Timer.addOnTick = function(a) {
        //callback._ID = "" + Math.random() + "" + Math.random();
        HYPER.Timer.children.push(a);
    };
    HYPER.Timer.setTimer = function(a, b) {
        var c = false;
        for (var d = 0; d < HYPER.Timer.children.length; d++) {
            if (!HYPER.Timer.children[d].alive && HYPER.Timer.children[d].type === "timer") {
                c = true;
                var e = HYPER.Timer.fps * a;
                HYPER.Timer.children[d]._ID = "" + Math.random() + "" + Math.random();
                HYPER.Timer.children[d].originTime = HYPER.Timer.tick;
                HYPER.Timer.children[d].callback = b;
                HYPER.Timer.children[d].alive = true;
            }
        }
        if (!c) {
            var e = HYPER.Timer.fps * a;
            var f = function() {
                if (HYPER.Timer.tick === f.originTime + e) {
                    f.callback();
                    f.alive = false;
                }
            };
            f.type = "timer";
            f._ID = "timer" + Math.random() + "" + Math.random();
            f.originTime = HYPER.Timer.tick;
            f.callback = b;
            f.alive = true;
            HYPER.Timer.children.push(f);
        }
    };
    HYPER.Timer.removeChild = function(a) {
        for (var b = 0; b < HYPER.Timer.children.length; b++) {
            if (a._ID = HYPER.Timer.children[b]._ID) {
                HYPER.Timer.children.splice(b, 1);
            }
        }
    };
    HYPER.Timer.Ticker = function() {
        HYPER.CURRENT_DATE = Date.now();
        for (var a = 0; a < HYPER.Timer.children.length; a++) {
            HYPER.Timer.children[a](HYPER.Timer.tick);
        }
        HYPER.Timer.tick++;
    };
    HYPER.Timer._Looper = function() {
        HYPER.Timer.Ticker();
        requestAnimationFrame(HYPER.Timer._Looper);
    };
    HYPER.Timer.init = function() {
        HYPER.Timer._Looper();
    };
})();

(function() {
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
        getPointer: function(a) {
            a = a || 0;
            return this.point[a];
        },
        /**
         * Returns if a pointer is being clicked.
         * @method HYPER.Input.Pointer.getClick
         * @param {number} ID - The ID of the pointer you want.
         */
        getClick: function(a) {
            a = a || 0;
            return this.point[a].click;
        },
        /**
         * Returns if a pointer is being held.
         * @method HYPER.Input.Pointer.getHold
         * @param {number} ID - The ID of the pointer you want.
         */
        getHold: function(a) {
            a = a || 0;
            return this.point[a].held;
        },
        /**
         * Returns if a pointer is clicked Up.
         * @method HYPER.Input.Pointer.getUp
         * @param {number} ID - The ID of the pointer you want.
         */
        getUp: function(a) {
            a = a || 0;
            return this.point[a].up;
        },
        /**
         * Returns if a pointer is clicked Down.
         * @method HYPER.Input.Pointer.getDown
         * @param {number} ID - The ID of the pointer you want.
         */
        getDown: function(a) {
            a = a || 0;
            return this.point[a].down;
        },
        /**
         * Returns the position of the pointer on the page.
         * @method HYPER.Input.Pointer.getPosition
         * @param {number} ID - The ID of the pointer you want.
         */
        getPosition: function(a) {
            a = a || 0;
            return this.point[a];
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
            mousemove: function(a) {
                // Prevent the default action from occurring.
                a.preventDefault();
                // Set the X coordinate of the click
                HYPER.Input.Pointer.point[0]._x = a.pageX;
                // Set the Y coordinate of the click
                HYPER.Input.Pointer.point[0]._y = a.pageY;
            },
            /**
             * Function to be called on the mouse down event.
             * @method HYPER.Input.Pointer._listeners.mousedown
             * @param {object} e - The info to be passed from the event.
             */
            mousedown: function(a) {
                // Prevent the default action from occurring.
                a.preventDefault();
                // Set the X coordinate of the click
                HYPER.Input.Pointer.point[0]._x = a.pageX;
                // Set the Y coordinate of the click
                HYPER.Input.Pointer.point[0]._y = a.pageY;
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
            mouseup: function(a) {
                // Prevent the default action from occurring.
                a.preventDefault();
                // Set the X coordinate of the click
                HYPER.Input.Pointer.point[0]._x = a.pageX;
                // Set the Y coordinate of the click
                HYPER.Input.Pointer.point[0]._y = a.pageY;
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
            touchmove: function(a) {
                // Prevent the default action from occurring.
                a.preventDefault();
                // Set the X coordinate of the touchpoint
                HYPER.Input.Pointer.point[a.which]._x = a.changedTouches[a.which].pageX;
                // Set the Y coordinate of the touchpoint
                HYPER.Input.Pointer.point[a.which]._y = a.changedTouches[a.which].pageY;
            },
            /**
             * Function to be called on the touch start event.
             * @method HYPER.Input.Pointer._listeners.touchstart
             * @param {object} e - The info to be passed from the event.
             */
            touchstart: function(a) {
                // Prevent the default action from occurring.
                a.preventDefault();
                // Set the X coordinate of the touchpoint
                HYPER.Input.Pointer.point[a.which]._x = a.changedTouches[a.which].pageX;
                // Set the Y coordinate of the touchpoint
                HYPER.Input.Pointer.point[a.which]._y = a.changedTouches[a.which].pageY;
                // record that the touchpoint is being pressed down
                HYPER.Input.Pointer.point[a.which]._down = true;
                // record that the touchpoint is being held down
                HYPER.Input.Pointer.point[a.which]._hold = true;
            },
            /**
             * Function to be called on the touch end event.
             * @method HYPER.Input.Pointer._listeners.touchend
             * @param {object} e - The info to be passed from the event.
             */
            touchend: function(a) {
                // Prevent the default action from occurring.
                a.preventDefault();
                // Set the X coordinate of the touchpoint
                HYPER.Input.Pointer.point[a.which]._x = a.changedTouches[a.which].pageX;
                // Set the Y coordinate of the touchpoint
                HYPER.Input.Pointer.point[a.which]._y = a.changedTouches[a.which].pageY;
                // record that the touchpoint is being pressed up
                HYPER.Input.Pointer.point[a.which]._up = true;
                // record that the touchpoint is no longer being held down
                HYPER.Input.Pointer.point[a.which]._hold = false;
            },
            /**
             * Function to be called on any listerners you dont want to do anything.
             * @method HYPER.Input.Pointer._listeners.preventDefault
             * @param {object} e - The info to be passed from the event.
             */
            preventDefault: function(a) {
                a.preventDefault();
            }
        }
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
        getKey: function(a) {
            a = a.toLocaleLowerCase();
            if (a === "backspace") {
                return HYPER.Input.Keys.key[8];
            }
            if (a === "tab") {
                return HYPER.Input.Keys.key[9];
            }
            if (a === "enter") {
                return HYPER.Input.Keys.key[13];
            }
            if (a === "shift") {
                return HYPER.Input.Keys.key[16];
            }
            if (a === "ctrl") {
                return HYPER.Input.Keys.key[17];
            }
            if (a === "alt") {
                return HYPER.Input.Keys.key[18];
            }
            if (a === "pause/break") {
                return HYPER.Input.Keys.key[19];
            }
            if (a === "caps lock") {
                return HYPER.Input.Keys.key[20];
            }
            if (a === "escape") {
                return HYPER.Input.Keys.key[27];
            }
            if (a === "page up") {
                return HYPER.Input.Keys.key[33];
            }
            if (a === "page down") {
                return HYPER.Input.Keys.key[34];
            }
            if (a === "end") {
                return HYPER.Input.Keys.key[35];
            }
            if (a === "home") {
                return HYPER.Input.Keys.key[36];
            }
            if (a === "left arrow") {
                return HYPER.Input.Keys.key[37];
            }
            if (a === "up arrow") {
                return HYPER.Input.Keys.key[38];
            }
            if (a === "right arrow") {
                return HYPER.Input.Keys.key[39];
            }
            if (a === "down arrow") {
                return HYPER.Input.Keys.key[40];
            }
            if (a === "space") {
                return HYPER.Input.Keys.key[32];
            }
            if (a === "insert") {
                return HYPER.Input.Keys.key[45];
            }
            if (a === "delete") {
                return HYPER.Input.Keys.key[46];
            }
            if (a === "0") {
                return HYPER.Input.Keys.key[48];
            }
            if (a === "1") {
                return HYPER.Input.Keys.key[49];
            }
            if (a === "2") {
                return HYPER.Input.Keys.key[50];
            }
            if (a === "3") {
                return HYPER.Input.Keys.key[51];
            }
            if (a === "4") {
                return HYPER.Input.Keys.key[52];
            }
            if (a === "5") {
                return HYPER.Input.Keys.key[53];
            }
            if (a === "6") {
                return HYPER.Input.Keys.key[54];
            }
            if (a === "7") {
                return HYPER.Input.Keys.key[55];
            }
            if (a === "8") {
                return HYPER.Input.Keys.key[56];
            }
            if (a === "9") {
                return HYPER.Input.Keys.key[57];
            }
            if (a === "a") {
                return HYPER.Input.Keys.key[65];
            }
            if (a === "b") {
                return HYPER.Input.Keys.key[66];
            }
            if (a === "c") {
                return HYPER.Input.Keys.key[67];
            }
            if (a === "d") {
                return HYPER.Input.Keys.key[68];
            }
            if (a === "e") {
                return HYPER.Input.Keys.key[69];
            }
            if (a === "f") {
                return HYPER.Input.Keys.key[70];
            }
            if (a === "g") {
                return HYPER.Input.Keys.key[71];
            }
            if (a === "h") {
                return HYPER.Input.Keys.key[72];
            }
            if (a === "i") {
                return HYPER.Input.Keys.key[73];
            }
            if (a === "j") {
                return HYPER.Input.Keys.key[74];
            }
            if (a === "k") {
                return HYPER.Input.Keys.key[75];
            }
            if (a === "l") {
                return HYPER.Input.Keys.key[76];
            }
            if (a === "m") {
                return HYPER.Input.Keys.key[77];
            }
            if (a === "n") {
                return HYPER.Input.Keys.key[78];
            }
            if (a === "o") {
                return HYPER.Input.Keys.key[79];
            }
            if (a === "p") {
                return HYPER.Input.Keys.key[80];
            }
            if (a === "q") {
                return HYPER.Input.Keys.key[81];
            }
            if (a === "r") {
                return HYPER.Input.Keys.key[82];
            }
            if (a === "s") {
                return HYPER.Input.Keys.key[83];
            }
            if (a === "t") {
                return HYPER.Input.Keys.key[84];
            }
            if (a === "u") {
                return HYPER.Input.Keys.key[85];
            }
            if (a === "v") {
                return HYPER.Input.Keys.key[86];
            }
            if (a === "w") {
                return HYPER.Input.Keys.key[87];
            }
            if (a === "x") {
                return HYPER.Input.Keys.key[88];
            }
            if (a === "y") {
                return HYPER.Input.Keys.key[89];
            }
            if (a === "z") {
                return HYPER.Input.Keys.key[90];
            }
            if (a === "left window key") {
                return HYPER.Input.Keys.key[91];
            }
            if (a === "right window key") {
                return HYPER.Input.Keys.key[92];
            }
            if (a === "select key") {
                return HYPER.Input.Keys.key[93];
            }
            if (a === "numpad 0") {
                return HYPER.Input.Keys.key[96];
            }
            if (a === "numpad 1") {
                return HYPER.Input.Keys.key[97];
            }
            if (a === "numpad 2") {
                return HYPER.Input.Keys.key[98];
            }
            if (a === "numpad 3") {
                return HYPER.Input.Keys.key[99];
            }
            if (a === "numpad 4") {
                return HYPER.Input.Keys.key[100];
            }
            if (a === "numpad 5") {
                return HYPER.Input.Keys.key[101];
            }
            if (a === "numpad 6") {
                return HYPER.Input.Keys.key[102];
            }
            if (a === "numpad 7") {
                return HYPER.Input.Keys.key[103];
            }
            if (a === "numpad 8") {
                return HYPER.Input.Keys.key[104];
            }
            if (a === "numpad 9") {
                return HYPER.Input.Keys.key[105];
            }
            if (a === "multiply") {
                return HYPER.Input.Keys.key[106];
            }
            if (a === "add") {
                return HYPER.Input.Keys.key[107];
            }
            if (a === "subtract") {
                return HYPER.Input.Keys.key[109];
            }
            if (a === "decimal point") {
                return HYPER.Input.Keys.key[110];
            }
            if (a === "divide") {
                return HYPER.Input.Keys.key[111];
            }
            if (a === "f1") {
                return HYPER.Input.Keys.key[112];
            }
            if (a === "f2") {
                return HYPER.Input.Keys.key[113];
            }
            if (a === "f3") {
                return HYPER.Input.Keys.key[114];
            }
            if (a === "f4") {
                return HYPER.Input.Keys.key[115];
            }
            if (a === "f5") {
                return HYPER.Input.Keys.key[116];
            }
            if (a === "f6") {
                return HYPER.Input.Keys.key[117];
            }
            if (a === "f7") {
                return HYPER.Input.Keys.key[118];
            }
            if (a === "f8") {
                return HYPER.Input.Keys.key[119];
            }
            if (a === "f9") {
                return HYPER.Input.Keys.key[120];
            }
            if (a === "f10") {
                return HYPER.Input.Keys.key[121];
            }
            if (a === "f11") {
                return HYPER.Input.Keys.key[122];
            }
            if (a === "f12") {
                return HYPER.Input.Keys.key[123];
            }
            if (a === "num lock") {
                return HYPER.Input.Keys.key[144];
            }
            if (a === "scroll lock") {
                return HYPER.Input.Keys.key[145];
            }
            if (a === "semi-colon") {
                return HYPER.Input.Keys.key[186];
            }
            if (a === "equal sign") {
                return HYPER.Input.Keys.key[187];
            }
            if (a === "comma") {
                return HYPER.Input.Keys.key[188];
            }
            if (a === "dash") {
                return HYPER.Input.Keys.key[189];
            }
            if (a === "period") {
                return HYPER.Input.Keys.key[190];
            }
            if (a === "forward slash") {
                return HYPER.Input.Keys.key[191];
            }
            if (a === "grave accent") {
                return HYPER.Input.Keys.key[192];
            }
            if (a === "open bracket") {
                return HYPER.Input.Keys.key[219];
            }
            if (a === "back slash") {
                return HYPER.Input.Keys.key[220];
            }
            if (a === "close braket") {
                return HYPER.Input.Keys.key[221];
            }
            if (a === "single quote") {
                return HYPER.Input.Keys.key[222];
            }
        },
        getKeyFromID: function(a) {
            if (a === 8) {
                return "backspace";
            }
            if (a === 9) {
                return "tab";
            }
            if (a === 13) {
                return "enter";
            }
            if (a === 16) {
                return "shift";
            }
            if (a === 17) {
                return "ctrl";
            }
            if (a === 18) {
                return "alt";
            }
            if (a === 19) {
                return "pause/break";
            }
            if (a === 20) {
                return "caps lock";
            }
            if (a === 27) {
                return "escape";
            }
            if (a === 33) {
                return "page up";
            }
            if (a === 34) {
                return "page down";
            }
            if (a === 35) {
                return "end";
            }
            if (a === 36) {
                return "home";
            }
            if (a === 37) {
                return "left arrow";
            }
            if (a === 38) {
                return "up arrow";
            }
            if (a === 39) {
                return "right arrow";
            }
            if (a === 40) {
                return "down arrow";
            }
            if (a === 32) {
                return "space";
            }
            if (a === 45) {
                return "insert";
            }
            if (a === 46) {
                return "delete";
            }
            if (a === 48) {
                return "0";
            }
            if (a === 49) {
                return "1";
            }
            if (a === 50) {
                return "2";
            }
            if (a === 51) {
                return "3";
            }
            if (a === 52) {
                return "4";
            }
            if (a === 53) {
                return "5";
            }
            if (a === 54) {
                return "6";
            }
            if (a === 55) {
                return "7";
            }
            if (a === 56) {
                return "8";
            }
            if (a === 57) {
                return "9";
            }
            if (a === 65) {
                return "a";
            }
            if (a === 66) {
                return "b";
            }
            if (a === 67) {
                return "c";
            }
            if (a === 68) {
                return "d";
            }
            if (a === 69) {
                return "e";
            }
            if (a === 70) {
                return "f";
            }
            if (a === 71) {
                return "g";
            }
            if (a === 72) {
                return "h";
            }
            if (a === 73) {
                return "i";
            }
            if (a === 74) {
                return "j";
            }
            if (a === 75) {
                return "k";
            }
            if (a === 76) {
                return "l";
            }
            if (a === 77) {
                return "m";
            }
            if (a === 78) {
                return "n";
            }
            if (a === 79) {
                return "o";
            }
            if (a === 80) {
                return "p";
            }
            if (a === 81) {
                return "q";
            }
            if (a === 82) {
                return "r";
            }
            if (a === 83) {
                return "s";
            }
            if (a === 84) {
                return "t";
            }
            if (a === 85) {
                return "u";
            }
            if (a === 86) {
                return "v";
            }
            if (a === 87) {
                return "w";
            }
            if (a === 88) {
                return "x";
            }
            if (a === 89) {
                return "y";
            }
            if (a === 90) {
                return "z";
            }
            if (a === 91) {
                return "left window key";
            }
            if (a === 92) {
                return "right window key";
            }
            if (a === 93) {
                return "select key";
            }
            if (a === 96) {
                return "numpad 0";
            }
            if (a === 97) {
                return "numpad 1";
            }
            if (a === 98) {
                return "numpad 2";
            }
            if (a === 99) {
                return "numpad 3";
            }
            if (a === 100) {
                return "numpad 4";
            }
            if (a === 101) {
                return "numpad 5";
            }
            if (a === 102) {
                return "numpad 6";
            }
            if (a === 103) {
                return "numpad 7";
            }
            if (a === 104) {
                return "numpad 8";
            }
            if (a === 105) {
                return "numpad 9";
            }
            if (a === 106) {
                return "multiply";
            }
            if (a === 107) {
                return "add";
            }
            if (a === 109) {
                return "subtract";
            }
            if (a === 110) {
                return "decimal point";
            }
            if (a === 111) {
                return "divide";
            }
            if (a === 112) {
                return "f1";
            }
            if (a === 113) {
                return "f2";
            }
            if (a === 114) {
                return "f3";
            }
            if (a === 115) {
                return "f4";
            }
            if (a === 116) {
                return "f5";
            }
            if (a === 117) {
                return "f6";
            }
            if (a === 118) {
                return "f7";
            }
            if (a === 119) {
                return "f8";
            }
            if (a === 120) {
                return "f9";
            }
            if (a === 121) {
                return "f10";
            }
            if (a === 122) {
                return "f11";
            }
            if (a === 123) {
                return "f12";
            }
            if (a === 144) {
                return "num lock";
            }
            if (a === 145) {
                return "scroll lock";
            }
            if (a === 186) {
                return "semi-colon";
            }
            if (a === 187) {
                return "equal sign";
            }
            if (a === 188) {
                return "comma";
            }
            if (a === 189) {
                return "dash";
            }
            if (a === 190) {
                return "period";
            }
            if (a === 191) {
                return "forward slash";
            }
            if (a === 192) {
                return "grave accent";
            }
            if (a === 219) {
                return "open bracket";
            }
            if (a === 220) {
                return "back slash";
            }
            if (a === 221) {
                return "close braket";
            }
            if (a === 222) {
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
            onkeyup: function(a) {
                // record that you are lifting up.
                HYPER.Input.Keys.key[a.which]._up = true;
                // sets the hold value to false
                HYPER.Input.Keys.key[a.which]._hold = false;
            },
            /**
             * Event listener function that fires when a key is pushed.
             * @method HYPER.Input.Keys._listeners.onkeydown
             * @param {number}data - pointer data of the click.
             */
            onkeydown: function(a) {
                // record that you are pressing down
                HYPER.Input.Keys.key[a.which]._down = true;
                // sets the hold value to true
                HYPER.Input.Keys.key[a.which]._hold = true;
            }
        }
    };
    /**
      Initilize all the event listeners that will be used
     */
    HYPER.Input._addEventListeners = function() {
        // check to see if mobile.
        if (mobileAndTabvarcheck()) {
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
    HYPER.Input.addScreen = function(a) {
        HYPER.Input.screens.push(a);
    };
    HYPER.Input.updateInput = function() {
        for (var a = 0; a < 10; a++) {
            HYPER.Input.Pointer.point[a].x = HYPER.Input.Pointer.point[a]._x;
            HYPER.Input.Pointer.point[a].y = HYPER.Input.Pointer.point[a]._y;
            HYPER.Input.Pointer.point[a].up = HYPER.Input.Pointer.point[a]._up;
            HYPER.Input.Pointer.point[a].down = HYPER.Input.Pointer.point[a]._down;
            HYPER.Input.Pointer.point[a].hold = HYPER.Input.Pointer.point[a]._hold;
            HYPER.Input.Pointer.point[a].dblclick = HYPER.Input.Pointer.point[a]._dblclick;
            HYPER.Input.Pointer.point[a].click = HYPER.Input.Pointer.point[a]._up;
            HYPER.Input.Pointer.point[a]._up = false;
            HYPER.Input.Pointer.point[a]._down = false;
            HYPER.Input.Pointer.point[a]._dblclick = false;
            for (var b = 0; b < HYPER.Input.screens.length; b++) {
                if (HYPER.Input.Pointer.point[a].click) {
                    HYPER.Input.screens[b]._onClick(a);
                }
                if (HYPER.Input.Pointer.point[a].up) {
                    HYPER.Input.screens[b]._onUp(a);
                }
                if (HYPER.Input.Pointer.point[a].down) {
                    HYPER.Input.screens[b]._onDown(a);
                }
                if (HYPER.Input.Pointer.point[a].hold) {
                    HYPER.Input.screens[b]._onHold(a);
                }
                if (HYPER.Input.Pointer.point[a].dblclick) {
                    HYPER.Input.screens[b]._onDblClick(a);
                }
            }
        }
        for (var a = 0; a < 222; a++) {
            HYPER.Input.Keys.key[a].up = HYPER.Input.Keys.key[a]._up;
            HYPER.Input.Keys.key[a].down = HYPER.Input.Keys.key[a]._down;
            HYPER.Input.Keys.key[a].hold = HYPER.Input.Keys.key[a]._hold;
            HYPER.Input.Keys.key[a]._up = false;
            HYPER.Input.Keys.key[a]._down = false;
            for (var b = 0; b < HYPER.Input.screens.length; b++) {
                if (HYPER.Input.Keys.key[a].up) {
                    HYPER.Input.screens[b]._onKeyUp(HYPER.Input.Keys.getKeyFromID(a));
                }
                if (HYPER.Input.Keys.key[a].down) {
                    HYPER.Input.screens[b]._onKeyDown(HYPER.Input.Keys.getKeyFromID(a));
                }
                if (HYPER.Input.Keys.key[a].hold) {
                    HYPER.Input.screens[b]._onKeyHeld(HYPER.Input.Keys.getKeyFromID(a));
                }
            }
        }
    };
    /**
      Initilize the Input module. 
     */
    HYPER.Input.init = function() {
        for (var a = 0; a < 10; a++) {
            HYPER.Input.Pointer.point[a] = {
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
                _dblclick: false
            };
        }
        for (var a = 0; a < 300; a++) {
            if (!HYPER.Input.Keys.key[a]) {
                HYPER.Input.Keys.key[a] = {
                    _up: false,
                    _down: false,
                    _hold: false,
                    up: false,
                    down: false,
                    hold: false,
                    _ID: a
                };
            }
            HYPER.Input.Keys.key[a].up = HYPER.Input.Keys.key[a]._up;
            HYPER.Input.Keys.key[a].down = HYPER.Input.Keys.key[a]._down;
            HYPER.Input.Keys.key[a].hold = HYPER.Input.Keys.key[a]._hold;
            HYPER.Input.Keys.key[a]._up = false;
            HYPER.Input.Keys.key[a]._down = false;
        }
        HYPER.Input._addEventListeners();
        HYPER.Timer.addOnTick(HYPER.Input.updateInput);
    };
})();

(function() {
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
            loaded: 0
        },
        /**
         * Returns the amount of assets that have been loaded so far.
         * @method HYPER.Preload.getNumberLoaded
         */
        getNumberLoaded: function() {
            // return the amount of loaded assets
            return HYPER.Preload.info.loaded;
        },
        /**
         * Returns the amount of assets that need to be loaded.
         * @method HYPER.Preload.getNeededLoaded
         */
        getNeededLoaded: function() {
            // return amount of total assets.
            return HYPER.Preload.info.load;
        },
        /**
         * Returns the amount of assets that have been loaded as a decimal.
         * @method HYPER.Preload.getLoaded
         */
        getLoaded: function() {
            // returns decemal of assets loaded out of all assets.
            return HYPER.Preload.info.loaded / HYPER.Preload.info.load;
        }
    };
})();

(function() {
    "use strict";
    /**
     * Create a sprite sheet
     * @class HYPER.Preload.Bitmap
     * @param {object} e Info used to create the Bitmap.
     * @param {string} e.src The sourse of the image file for the Bitmap.
     * @param {function} e.onload What to do when the image loads.
     */
    HYPER.Preload.Bitmap = function(a) {
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
        this.image.src = a.src;
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
        this.onload = a.onload || no0p;
        // add to total amount of assets.
        HYPER.Preload.info.load++;
        // Set that to this.
        var b = this;
        // when the image loads
        this.image.onload = function() {
            // set the bitmap width to the images width
            b.bitmap.width = b.image.width;
            b.flippedX.bitmap.width = b.image.width;
            b.flippedY.bitmap.width = b.image.width;
            b.flippedXY.bitmap.width = b.image.width;
            // set the bitmap height to the images height
            b.bitmap.height = b.image.height;
            b.flippedX.bitmap.height = b.image.height;
            b.flippedY.bitmap.height = b.image.height;
            b.flippedXY.bitmap.height = b.image.height;
            // set the width to the images width
            b.width = b.image.width;
            // set the height to the images height
            b.height = b.image.height;
            // draw the image onto the bitmap
            b.ctx.drawImage(b.image, 0, 0, b.image.width, b.image.height, 0, 0, b.bitmap.width, b.bitmap.height);
            b.flippedX.ctx.translate(b.width / 2, b.height / 2);
            b.flippedX.ctx.scale(-1, 1);
            b.flippedX.ctx.drawImage(b.image, 0, 0, b.image.width, b.image.height, -b.width / 2, -b.height / 2, b.flippedX.bitmap.width, b.flippedX.bitmap.height);
            b.flippedX.ctx.scale(-1, 1);
            b.flippedX.ctx.translate(-b.width / 2, -b.height / 2);
            b.flippedY.ctx.translate(b.width / 2, b.height / 2);
            b.flippedY.ctx.scale(1, -1);
            b.flippedY.ctx.drawImage(b.image, 0, 0, b.image.width, b.image.height, -b.width / 2, -b.height / 2, b.flippedY.bitmap.width, b.flippedY.bitmap.height);
            b.flippedY.ctx.scale(1, -1);
            b.flippedY.ctx.translate(-b.width / 2, -b.height / 2);
            b.flippedXY.ctx.translate(b.width / 2, b.height / 2);
            b.flippedXY.ctx.scale(-1, -1);
            b.flippedXY.ctx.drawImage(b.image, 0, 0, b.image.width, b.image.height, -b.width / 2, -b.height / 2, b.flippedXY.bitmap.width, b.flippedXY.bitmap.height);
            b.flippedXY.ctx.scale(-1, -1);
            b.flippedXY.ctx.translate(-b.width / 2, -b.height / 2);
            // mark this image as loaded
            HYPER.Preload.info.loaded++;
            // run user specified onload function.
            b.onload();
        };
    };
    HYPER.Preload.Bitmap.prototype = {
        /**
         * Draws to the bitmap, uses same methods that HYPER.Graphics.Draw uses. 
         * @method HYPER.Preload.Bitmap.draw
         * @param {HYPER.Graphics.Style} style - the style used to draw.
         */
        draw: function(a) {
            return HYPER.Graphics.Draw(this.ctx, a);
        },
        /**
         * Clears the bitmap.
         * @method HYPER.Preload.Bitmap.clear
         */
        clear: function() {
            HYPER.Graphics.Draw(this.ctx).clearRect(0, 0, this.bitmap.width, this.bitmap.height);
        }
    };
})();

(function() {
    "use strict";
    /**
     * Create a sprite sheet
     * @class HYPER.Preload.SpriteSheet
     * @param {object} e Info used to create the spritesheet.
     * @param {string} e.src The sourse of the image file for the spritesheet.
     * @param {number} [e.wide = 1] The number of frames wide the image is.
     * @param {number} [e.tall = 1] The number of frames tall the image is.
     */
    HYPER.Preload.SpriteSheet = function(a) {
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
        this.onload = a.onload || no0p;
        /**
         * @property {function} image - Image object.
         */
        this.image = new Image();
        // set the source of the image object
        this.image.src = a.src;
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
        this.frames = a.frames || {};
        /**
         * @property {number} frames.wide=1 - How many frames wide your spritesheet is.
         */
        this.frames.wide = a.frames.wide || 1;
        /**
         * @property {number} frames.tall=1 - How many frames tall your spritesheet is.
         */
        this.frames.tall = a.frames.tall || 1;
        /**
         * @property {array} frameINFO - Array of frame data.
         */
        this.frameINFO = a.frameINFO || [];
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
        var b = this;
        // when the image loads
        this.image.onload = function() {
            // set the bitmap width to the images width
            b.bitmap.width = b.image.width;
            b.flippedX.bitmap.width = b.image.width;
            b.flippedY.bitmap.width = b.image.width;
            b.flippedXY.bitmap.width = b.image.width;
            // set the bitmap height to the images height
            b.bitmap.height = b.image.height;
            b.flippedX.bitmap.height = b.image.height;
            b.flippedY.bitmap.height = b.image.height;
            b.flippedXY.bitmap.height = b.image.height;
            // draw the image onto the bitmap
            b.ctx.drawImage(b.image, 0, 0, b.image.width, b.image.height, 0, 0, b.bitmap.width, b.bitmap.height);
            // Set the frames.
            b.setFramesOBJ(b.frames);
            b.width = b.width || b.frames.wide / b.bitmap.width;
            b.height = b.height || b.frames.tall / b.bitmap.height;
            // STILL NEED TO SET THE FLIPPED IMAGES WIDTH AND HEIGHTS!!!
            b.flippedX.ctx.translate(b.image.width / 2, b.image.height / 2);
            b.flippedX.ctx.scale(-1, 1);
            b.flippedX.ctx.drawImage(b.image, 0, 0, b.image.width, b.image.height, -b.image.width / 2, -b.image.height / 2, b.flippedX.bitmap.width, b.flippedX.bitmap.height);
            b.flippedX.ctx.scale(-1, 1);
            b.flippedX.ctx.translate(-b.image.width / 2, -b.image.height / 2);
            b.flippedY.ctx.translate(b.image.width / 2, b.image.height / 2);
            b.flippedY.ctx.scale(1, -1);
            b.flippedY.ctx.drawImage(b.image, 0, 0, b.image.width, b.image.height, -b.image.width / 2, -b.image.height / 2, b.flippedY.bitmap.width, b.flippedY.bitmap.height);
            b.flippedY.ctx.scale(1, -1);
            b.flippedY.ctx.translate(-b.image.width / 2, -b.image.height / 2);
            b.flippedXY.ctx.translate(b.image.width / 2, b.image.height / 2);
            b.flippedXY.ctx.scale(-1, -1);
            b.flippedXY.ctx.drawImage(b.image, 0, 0, b.image.width, b.image.height, -b.image.width / 2, -b.image.height / 2, b.flippedXY.bitmap.width, b.flippedXY.bitmap.height);
            b.flippedXY.ctx.scale(-1, -1);
            b.flippedXY.ctx.translate(-b.image.width / 2, -b.image.height / 2);
            // mark this image as loaded
            HYPER.Preload.info.loaded++;
            // run user specified onload function.
            b.onload();
        };
    };
    HYPER.Preload.SpriteSheet.prototype = {
        /**
         * Draws to the bitmap, uses same methods that HYPER.Graphics.Draw uses. 
         * @method HYPER.Preload.SpriteSheet.draw
         * @param {HYPER.Graphics.Style} style - the style used to draw.
         */
        draw: function(a) {
            return HYPER.Graphics.Draw(this.ctx, a);
        },
        /**
         * Clears the bitmap.
         * @method HYPER.Preload.SpriteSheet.clear
         */
        clear: function() {
            HYPER.Graphics.Draw(this.ctx).clearRect(0, 0, this.bitmap.width, this.bitmap.height);
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
        setAnimation: function(a) {
            for (var b = 0; b < arguments.length; b++) {
                arguments[b].name = arguments[b].name || "animation" + Math.random() + "" + Math.random();
                this.animations[a.name] = {};
                this.animations[a.name].frames = a.frames || [ 0 ];
                this.animations[a.name].next = a.next || a.name;
                this.animations[a.name].fps = a.fps || 30;
                this.animations[a.name].loop = a.loop || false;
                this.animations[a.name].onLoop = a.onLoop || no0p;
                this.animations[a.name].onFrame = a.onFrame || no0p;
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
        setFrames: function(a) {
            // if a is an array.
            if (Array.isArray(a)) {
                // loop through all a objects
                for (var b = 0; b < a.length; b++) {
                    // set the frameInfo equal to a, so user can define additional information if needed.
                    this.frameINFO[b] = a[b];
                    // This function is executed every time the frame is shown. Makes it possible to play sounds on diffrent frames. 
                    this.frameINFO[b].onFrame = a[b].onFrame || no0p;
                    this.frameINFO[b].x = a[b].x;
                    this.frameINFO[b].y = a[b].y;
                    this.frameINFO[b].width = a[b].width;
                    this.frameINFO[b].height = a[b].height;
                    this.frameINFO[b].regX = a[b].regX || 0;
                    this.frameINFO[b].regY = a[b].regY || 0;
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
        setFramesOBJ: function(a, b) {
            // If a is defined.
            if (a) {
                b = b || true;
                // The X and Y position of each frame.
                var c = 0, d = 0;
                // If you want previous data to be overwritten.
                if (b) {
                    // Loop through all frames.
                    for (var e = 0; e < a.wide * a.tall; e++) {
                        // Calculate the X and Y position of each frame
                        c = e % a.wide * (this.bitmap.width / a.wide);
                        d = Math.floor(e / a.wide) * (this.bitmap.height / a.tall);
                        // If the current frame info is NOT defined.
                        if (!this.frameINFO[e]) {
                            this.frameINFO[e] = {};
                        }
                        this.frameINFO[e].onFrame = no0p;
                        this.frameINFO[e].x = c;
                        this.frameINFO[e].y = d;
                        this.frameINFO[e].width = this.bitmap.width / a.wide;
                        this.frameINFO[e].height = this.bitmap.height / a.tall;
                        this.frameINFO[e].regX = a.regX || this.frameINFO[e].regX || 0;
                        this.frameINFO[e].regY = a.regY || this.frameINFO[e].regY || 0;
                    }
                } else {
                    // Loop through all possible frames.
                    for (var e = 0; e < a.wide * a.tall; e++) {
                        // Calculate the X and Y position of each frame
                        c = e % a.wide * (this.bitmap.width / a.wide);
                        d = Math.Floor(e / a.wide) * (this.bitmap.height / a.tall);
                        // If the current frame info is NOT defined.
                        if (!this.frameINFO[e]) {
                            this.frameINFO[e] = {};
                        }
                        this.frameINFO[e].x = this.frameINFO[e].x || c;
                        this.frameINFO[e].y = this.frameINFO[e].y || d;
                        this.frameINFO[e].width = this.frameINFO[e].width || this.bitmap.width / a.wide;
                        this.frameINFO[e].height = this.frameINFO[e].height || this.bitmap.height / a.tall;
                        this.frameINFO[e].regX = this.frameINFO[e].regX || a.regX || 0;
                        this.frameINFO[e].regY = this.frameINFO[e].regY || a.regY || 0;
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
        editFrame: function(a, b) {
            this.frameINFO[a].onFrame = b.onFrame || this.frameINFO[a].onFrame || no0p;
            this.frameINFO[a].x = b.x || this.frameINFO[a].x || 0;
            this.frameINFO[a].y = b.y || this.frameINFO[a].y || 0;
            this.frameINFO[a].width = b.width || this.frameINFO[a].width || 0;
            this.frameINFO[a].height = b.height || this.frameINFO[a].height || 0;
            this.frameINFO[a].regX = b.regX || this.frameINFO[a].regX || 0;
            this.frameINFO[a].regY = b.regY || this.frameINFO[a].regY || 0;
        }
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
(function() {
    "use strict";
    /** Global Methods **/
    /***************************************************************************/
    /**
     * Create the global controller. All contained methods and properties apply
     * to all sounds that are currently playing or will be in the future.
     */
    var a = function() {
        this.init();
    };
    a.prototype = {
        /**
         * Initialize the global Howler object.
         * @return {Howler}
         */
        init: function() {
            var a = this || b;
            // Internal properties.
            a._codecs = {};
            a._howls = [];
            a._muted = false;
            a._volume = 1;
            a._canPlayEvent = "canplaythrough";
            a._navigator = typeof window !== "undefined" && window.navigator ? window.navigator : null;
            // Public properties.
            a.masterGain = null;
            a.noAudio = false;
            a.usingWebAudio = true;
            a.autoSuspend = true;
            a.ctx = null;
            // Set to false to disable the auto iOS enabler.
            a.mobileAutoEnable = true;
            // Setup the various state values for global tracking.
            a._setup();
            return a;
        },
        /**
         * Get/set the global volume for all sounds.
         * @param  {Float} vol Volume from 0.0 to 1.0.
         * @return {Howler/Float}     Returns self or current volume.
         */
        volume: function(a) {
            var c = this || b;
            a = parseFloat(a);
            // If we don't have an AudioContext created yet, run the setup.
            if (!c.ctx) {
                j();
            }
            if (typeof a !== "undefined" && a >= 0 && a <= 1) {
                c._volume = a;
                // Don't update any of the nodes if we are muted.
                if (c._muted) {
                    return c;
                }
                // When using Web Audio, we just need to adjust the master gain.
                if (c.usingWebAudio) {
                    c.masterGain.gain.value = a;
                }
                // Loop through and change volume for all HTML5 audio nodes.
                for (var d = 0; d < c._howls.length; d++) {
                    if (!c._howls[d]._webAudio) {
                        // Get all of the sounds in this Howl group.
                        var e = c._howls[d]._getSoundIds();
                        // Loop through all sounds and change the volumes.
                        for (var f = 0; f < e.length; f++) {
                            var g = c._howls[d]._soundById(e[f]);
                            if (g && g._node) {
                                g._node.volume = g._volume * a;
                            }
                        }
                    }
                }
                return c;
            }
            return c._volume;
        },
        /**
         * Handle muting and unmuting globally.
         * @param  {Boolean} muted Is muted or not.
         */
        mute: function(a) {
            var c = this || b;
            // If we don't have an AudioContext created yet, run the setup.
            if (!c.ctx) {
                j();
            }
            c._muted = a;
            // With Web Audio, we just need to mute the master gain.
            if (c.usingWebAudio) {
                c.masterGain.gain.value = a ? 0 : c._volume;
            }
            // Loop through and mute all HTML5 Audio nodes.
            for (var d = 0; d < c._howls.length; d++) {
                if (!c._howls[d]._webAudio) {
                    // Get all of the sounds in this Howl group.
                    var e = c._howls[d]._getSoundIds();
                    // Loop through all sounds and mark the audio node as muted.
                    for (var f = 0; f < e.length; f++) {
                        var g = c._howls[d]._soundById(e[f]);
                        if (g && g._node) {
                            g._node.muted = a ? true : g._muted;
                        }
                    }
                }
            }
            return c;
        },
        /**
         * Unload and destroy all currently loaded Howl objects.
         * @return {Howler}
         */
        unload: function() {
            var a = this || b;
            for (var c = a._howls.length - 1; c >= 0; c--) {
                a._howls[c].unload();
            }
            // Create a new AudioContext to make sure it is fully reset.
            if (a.usingWebAudio && typeof a.ctx.close !== "undefined") {
                a.ctx.close();
                a.ctx = null;
                j();
            }
            return a;
        },
        /**
         * Check for codec support of specific extension.
         * @param  {String} ext Audio file extention.
         * @return {Boolean}
         */
        codecs: function(a) {
            return (this || b)._codecs[a.replace(/^x-/, "")];
        },
        /**
         * Setup various state values for global tracking.
         * @return {Howler}
         */
        _setup: function() {
            var a = this || b;
            // Keeps track of the suspend/resume state of the AudioContext.
            a.state = a.ctx ? a.ctx.state || "running" : "running";
            // Automatically begin the 30-second suspend process
            a._autoSuspend();
            // Check for supported codecs.
            if (!a.noAudio) {
                a._setupCodecs();
            }
            return a;
        },
        /**
         * Check for browser support for various codecs and cache the results.
         * @return {Howler}
         */
        _setupCodecs: function() {
            var a = this || b;
            var c = typeof Audio !== "undefined" ? new Audio() : null;
            if (!c || typeof c.canPlayType !== "function") {
                return a;
            }
            var d = c.canPlayType("audio/mpeg;").replace(/^no$/, "");
            // Opera version <33 has mixed MP3 support, so we need to check for and block it.
            var e = a._navigator && a._navigator.userAgent.match(/OPR\/([0-6].)/g);
            var f = e && parseInt(e[0].split("/")[1], 10) < 33;
            a._codecs = {
                mp3: !!(!f && (d || c.canPlayType("audio/mp3;").replace(/^no$/, ""))),
                mpeg: !!d,
                opus: !!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                oga: !!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!c.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                aac: !!c.canPlayType("audio/aac;").replace(/^no$/, ""),
                caf: !!c.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                m4a: !!(c.canPlayType("audio/x-m4a;") || c.canPlayType("audio/m4a;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                mp4: !!(c.canPlayType("audio/x-mp4;") || c.canPlayType("audio/mp4;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                webm: !!c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                dolby: !!c.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                flac: !!(c.canPlayType("audio/x-flac;") || c.canPlayType("audio/flac;")).replace(/^no$/, "")
            };
            return a;
        },
        /**
         * Mobile browsers will only allow audio to be played after a user interaction.
         * Attempt to automatically unlock audio on the first user interaction.
         * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
         * @return {Howler}
         */
        _enableMobileAudio: function() {
            var a = this || b;
            // Only run this on mobile devices if audio isn't already eanbled.
            var c = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(a._navigator && a._navigator.userAgent);
            var d = !!("ontouchend" in window || a._navigator && a._navigator.maxTouchPoints > 0 || a._navigator && a._navigator.msMaxTouchPoints > 0);
            if (a._mobileEnabled || !a.ctx || !c && !d) {
                return;
            }
            a._mobileEnabled = false;
            // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
            // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
            // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
            if (!a._mobileUnloaded && a.ctx.sampleRate !== 44100) {
                a._mobileUnloaded = true;
                a.unload();
            }
            // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
            // http://stackoverflow.com/questions/24119684
            a._scratchBuffer = a.ctx.createBuffer(1, 1, 22050);
            // Call this method on touch start to create and play a buffer,
            // then check if the audio actually played to determine if
            // audio has now been unlocked on iOS, Android, etc.
            var e = function() {
                // Create an empty buffer.
                var b = a.ctx.createBufferSource();
                b.buffer = a._scratchBuffer;
                b.connect(a.ctx.destination);
                // Play the empty buffer.
                if (typeof b.start === "undefined") {
                    b.noteOn(0);
                } else {
                    b.start(0);
                }
                // Setup a timeout to check that we are unlocked on the next event loop.
                b.onended = function() {
                    b.disconnect(0);
                    // Update the unlocked state and prevent this check from happening again.
                    a._mobileEnabled = true;
                    a.mobileAutoEnable = false;
                    // Remove the touch start listener.
                    document.removeEventListener("touchend", e, true);
                };
            };
            // Setup a touch start listener to attempt an unlock in.
            document.addEventListener("touchend", e, true);
            return a;
        },
        /**
         * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
         * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
         * @return {Howler}
         */
        _autoSuspend: function() {
            var a = this;
            if (!a.autoSuspend || !a.ctx || typeof a.ctx.suspend === "undefined" || !b.usingWebAudio) {
                return;
            }
            // Check if any sounds are playing.
            for (var c = 0; c < a._howls.length; c++) {
                if (a._howls[c]._webAudio) {
                    for (var d = 0; d < a._howls[c]._sounds.length; d++) {
                        if (!a._howls[c]._sounds[d]._paused) {
                            return a;
                        }
                    }
                }
            }
            if (a._suspendTimer) {
                clearTimeout(a._suspendTimer);
            }
            // If no sound has played after 30 seconds, suspend the context.
            a._suspendTimer = setTimeout(function() {
                if (!a.autoSuspend) {
                    return;
                }
                a._suspendTimer = null;
                a.state = "suspending";
                a.ctx.suspend().then(function() {
                    a.state = "suspended";
                    if (a._resumeAfterSuspend) {
                        delete a._resumeAfterSuspend;
                        a._autoResume();
                    }
                });
            }, 3e4);
            return a;
        },
        /**
         * Automatically resume the Web Audio AudioContext when a new sound is played.
         * @return {Howler}
         */
        _autoResume: function() {
            var a = this;
            if (!a.ctx || typeof a.ctx.resume === "undefined" || !b.usingWebAudio) {
                return;
            }
            if (a.state === "running" && a._suspendTimer) {
                clearTimeout(a._suspendTimer);
                a._suspendTimer = null;
            } else if (a.state === "suspended") {
                a.state = "resuming";
                a.ctx.resume().then(function() {
                    a.state = "running";
                });
                if (a._suspendTimer) {
                    clearTimeout(a._suspendTimer);
                    a._suspendTimer = null;
                }
            } else if (a.state === "suspending") {
                a._resumeAfterSuspend = true;
            }
            return a;
        }
    };
    // Setup the global audio controller.
    var b = new a();
    /** Group Methods **/
    /***************************************************************************/
    /**
     * Create an audio group controller.
     * @param {Object} o Passed in properties for this group.
     */
    var c = function(a) {
        var b = this;
        // Throw an error if no source is provided.
        if (!a.src || a.src.length === 0) {
            console.error("An array of source files must be passed with any new Howl.");
            return;
        }
        b.init(a);
    };
    c.prototype = {
        /**
         * Initialize a new Howl group object.
         * @param  {Object} o Passed in properties for this group.
         * @return {Howl}
         */
        init: function(a) {
            var c = this;
            // If we don't have an AudioContext created yet, run the setup.
            if (!b.ctx) {
                j();
            }
            // Setup user-defined default properties.
            c._autoplay = a.autoplay || false;
            c._format = typeof a.format !== "string" ? a.format : [ a.format ];
            c._html5 = a.html5 || false;
            c._muted = a.mute || false;
            c._loop = a.loop || false;
            c._pool = a.pool || 5;
            c._preload = typeof a.preload === "boolean" ? a.preload : true;
            c._rate = a.rate || 1;
            c._sprite = a.sprite || {};
            c._src = typeof a.src !== "string" ? a.src : [ a.src ];
            c._volume = a.volume !== undefined ? a.volume : 1;
            // Setup all other default properties.
            c._duration = 0;
            c._state = "unloaded";
            c._sounds = [];
            c._endTimers = {};
            c._queue = [];
            HYPER.Preload.load++;
            c.onloadTry = function() {
                HYPER.Preload.loaded++;
                if (a.onload) {
                    a.onload();
                }
            };
            // Setup event listeners.
            c._onend = a.onend ? [ {
                fn: a.onend
            } ] : [];
            c._onfade = a.onfade ? [ {
                fn: a.onfade
            } ] : [];
            c._onload = c.onloadTry;
            c._onloaderror = a.onloaderror ? [ {
                fn: a.onloaderror
            } ] : [];
            c._onpause = a.onpause ? [ {
                fn: a.onpause
            } ] : [];
            c._onplay = a.onplay ? [ {
                fn: a.onplay
            } ] : [];
            c._onstop = a.onstop ? [ {
                fn: a.onstop
            } ] : [];
            c._onmute = a.onmute ? [ {
                fn: a.onmute
            } ] : [];
            c._onvolume = a.onvolume ? [ {
                fn: a.onvolume
            } ] : [];
            c._onrate = a.onrate ? [ {
                fn: a.onrate
            } ] : [];
            c._onseek = a.onseek ? [ {
                fn: a.onseek
            } ] : [];
            // Web Audio or HTML5 Audio?
            c._webAudio = b.usingWebAudio && !c._html5;
            // Automatically try to enable audio on iOS.
            if (typeof b.ctx !== "undefined" && b.ctx && b.mobileAutoEnable) {
                b._enableMobileAudio();
            }
            // Keep track of this Howl group in the global controller.
            b._howls.push(c);
            // Load the source file unless otherwise specified.
            if (c._preload) {
                c.load();
            }
            return c;
        },
        /**
         * Load the audio file.
         * @return {Howler}
         */
        load: function() {
            var a = this;
            var c = null;
            // If no audio is available, quit immediately.
            if (b.noAudio) {
                a._emit("loaderror", null, "No audio support.");
                return;
            }
            // Make sure our source is in an array.
            if (typeof a._src === "string") {
                a._src = [ a._src ];
            }
            // Loop through the sources and pick the first one that is compatible.
            for (var e = 0; e < a._src.length; e++) {
                var g, h;
                if (a._format && a._format[e]) {
                    // If an extension was specified, use that instead.
                    g = a._format[e];
                } else {
                    // Make sure the source is a string.
                    h = a._src[e];
                    if (typeof h !== "string") {
                        a._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                        continue;
                    }
                    // Extract the file extension from the URL or base64 data URI.
                    g = /^data:audio\/([^;,]+);/i.exec(h);
                    if (!g) {
                        g = /\.([^.]+)$/.exec(h.split("?", 1)[0]);
                    }
                    if (g) {
                        g = g[1].toLowerCase();
                    }
                }
                // Check if this extension is available.
                if (b.codecs(g)) {
                    c = a._src[e];
                    break;
                }
            }
            if (!c) {
                a._emit("loaderror", null, "No codec support for selected audio sources.");
                return;
            }
            a._src = c;
            a._state = "loading";
            // If the hosting page is HTTPS and the source isn't,
            // drop down to HTML5 Audio to avoid Mixed Content errors.
            if (window.location.protocol === "https:" && c.slice(0, 5) === "http:") {
                a._html5 = true;
                a._webAudio = false;
            }
            // Create a new sound object and add it to the pool.
            new d(a);
            // Load and decode the audio data for playback.
            if (a._webAudio) {
                f(a);
            }
            return a;
        },
        /**
         * Play a sound or resume previous playback.
         * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
         * @param  {Boolean} internal Internal Use: true prevents event firing.
         * @return {Number}          Sound ID.
         */
        play: function(a, c) {
            var d = this;
            var e = null;
            // Determine if a sprite, sound id or nothing was passed
            if (typeof a === "number") {
                e = a;
                a = null;
            } else if (typeof a === "string" && d._state === "loaded" && !d._sprite[a]) {
                // If the passed sprite doesn't exist, do nothing.
                return null;
            } else if (typeof a === "undefined") {
                // Use the default sound sprite (plays the full audio length).
                a = "__default";
                // Check if there is a single paused sound that isn't ended.
                // If there is, play that sound. If not, continue as usual.
                var f = 0;
                for (var g = 0; g < d._sounds.length; g++) {
                    if (d._sounds[g]._paused && !d._sounds[g]._ended) {
                        f++;
                        e = d._sounds[g]._id;
                    }
                }
                if (f === 1) {
                    a = null;
                } else {
                    e = null;
                }
            }
            // Get the selected node, or get one from the pool.
            var h = e ? d._soundById(e) : d._inactiveSound();
            // If the sound doesn't exist, do nothing.
            if (!h) {
                return null;
            }
            // Select the sprite definition.
            if (e && !a) {
                a = h._sprite || "__default";
            }
            // If we have no sprite and the sound hasn't loaded, we must wait
            // for the sound to load to get our audio's duration.
            if (d._state !== "loaded" && !d._sprite[a]) {
                d._queue.push({
                    event: "play",
                    action: function() {
                        d.play(d._soundById(h._id) ? h._id : undefined);
                    }
                });
                return h._id;
            }
            // Don't play the sound if an id was passed and it is already playing.
            if (e && !h._paused) {
                // Trigger the play event, in order to keep iterating through queue.
                if (!c) {
                    setTimeout(function() {
                        d._emit("play", h._id);
                    }, 0);
                }
                return h._id;
            }
            // Make sure the AudioContext isn't suspended, and resume it if it is.
            if (d._webAudio) {
                b._autoResume();
            }
            // Determine how long to play for and where to start playing.
            var i = h._seek > 0 ? h._seek : d._sprite[a][0] / 1e3;
            var j = (d._sprite[a][0] + d._sprite[a][1]) / 1e3 - i;
            var k = j * 1e3 / Math.abs(h._rate);
            // Update the parameters of the sound
            h._paused = false;
            h._ended = false;
            h._sprite = a;
            h._seek = i;
            h._start = d._sprite[a][0] / 1e3;
            h._stop = (d._sprite[a][0] + d._sprite[a][1]) / 1e3;
            h._loop = !!(h._loop || d._sprite[a][2]);
            // Begin the actual playback.
            var l = h._node;
            if (d._webAudio) {
                // Fire this when the sound is ready to play to begin Web Audio playback.
                var m = function() {
                    d._refreshBuffer(h);
                    // Setup the playback params.
                    var a = h._muted || d._muted ? 0 : h._volume;
                    l.gain.setValueAtTime(a, b.ctx.currentTime);
                    h._playStart = b.ctx.currentTime;
                    // Play the sound using the supported method.
                    if (typeof l.bufferSource.start === "undefined") {
                        h._loop ? l.bufferSource.noteGrainOn(0, i, 86400) : l.bufferSource.noteGrainOn(0, i, j);
                    } else {
                        h._loop ? l.bufferSource.start(0, i, 86400) : l.bufferSource.start(0, i, j);
                    }
                    // Start a new timer if none is present.
                    if (k !== Infinity) {
                        d._endTimers[h._id] = setTimeout(d._ended.bind(d, h), k);
                    }
                    if (!c) {
                        setTimeout(function() {
                            d._emit("play", h._id);
                        }, 0);
                    }
                };
                if (d._state === "loaded") {
                    m();
                } else {
                    // Wait for the audio to load and then begin playback.
                    d.once("load", m, h._id);
                    // Cancel the end timer.
                    d._clearTimer(h._id);
                }
            } else {
                // Fire this when the sound is ready to play to begin HTML5 Audio playback.
                var n = function() {
                    l.currentTime = i;
                    l.muted = h._muted || d._muted || b._muted || l.muted;
                    l.volume = h._volume * b.volume();
                    l.playbackRate = h._rate;
                    setTimeout(function() {
                        l.play();
                        // Setup the new end timer.
                        if (k !== Infinity) {
                            d._endTimers[h._id] = setTimeout(d._ended.bind(d, h), k);
                        }
                        if (!c) {
                            d._emit("play", h._id);
                        }
                    }, 0);
                };
                // Play immediately if ready, or wait for the 'canplaythrough'e vent.
                var o = d._state === "loaded" && (window && window.ejecta || !l.readyState && b._navigator.isCocoonJS);
                if (l.readyState === 4 || o) {
                    n();
                } else {
                    var p = function() {
                        // Begin playback.
                        n();
                        // Clear this listener.
                        l.removeEventListener(b._canPlayEvent, p, false);
                    };
                    l.addEventListener(b._canPlayEvent, p, false);
                    // Cancel the end timer.
                    d._clearTimer(h._id);
                }
            }
            return h._id;
        },
        /**
         * Pause playback and save current position.
         * @param  {Number} id The sound ID (empty to pause all in group).
         * @return {Howl}
         */
        pause: function(a) {
            var b = this;
            // If the sound hasn't loaded, add it to the load queue to pause when capable.
            if (b._state !== "loaded") {
                b._queue.push({
                    event: "pause",
                    action: function() {
                        b.pause(a);
                    }
                });
                return b;
            }
            // If no id is passed, get all ID's to be paused.
            var c = b._getSoundIds(a);
            for (var d = 0; d < c.length; d++) {
                // Clear the end timer.
                b._clearTimer(c[d]);
                // Get the sound.
                var e = b._soundById(c[d]);
                if (e && !e._paused) {
                    // Reset the seek position.
                    e._seek = b.seek(c[d]);
                    e._rateSeek = 0;
                    e._paused = true;
                    // Stop currently running fades.
                    b._stopFade(c[d]);
                    if (e._node) {
                        if (b._webAudio) {
                            // make sure the sound has been created
                            if (!e._node.bufferSource) {
                                return b;
                            }
                            if (typeof e._node.bufferSource.stop === "undefined") {
                                e._node.bufferSource.noteOff(0);
                            } else {
                                e._node.bufferSource.stop(0);
                            }
                            // Clean up the buffer source.
                            b._cleanBuffer(e._node);
                        } else if (!isNaN(e._node.duration) || e._node.duration === Infinity) {
                            e._node.pause();
                        }
                    }
                    // Fire the pause event, unless `true` is passed as the 2nd argument.
                    if (!arguments[1]) {
                        b._emit("pause", e._id);
                    }
                }
            }
            return b;
        },
        /**
         * Stop playback and reset to start.
         * @param  {Number} id The sound ID (empty to stop all in group).
         * @param  {Boolean} internal Internal Use: true prevents event firing.
         * @return {Howl}
         */
        stop: function(a, b) {
            var c = this;
            // If the sound hasn't loaded, add it to the load queue to stop when capable.
            if (c._state !== "loaded") {
                c._queue.push({
                    event: "stop",
                    action: function() {
                        c.stop(a);
                    }
                });
                return c;
            }
            // If no id is passed, get all ID's to be stopped.
            var d = c._getSoundIds(a);
            for (var e = 0; e < d.length; e++) {
                // Clear the end timer.
                c._clearTimer(d[e]);
                // Get the sound.
                var f = c._soundById(d[e]);
                if (f) {
                    // Reset the seek position.
                    f._seek = f._start || 0;
                    f._rateSeek = 0;
                    f._paused = true;
                    f._ended = true;
                    // Stop currently running fades.
                    c._stopFade(d[e]);
                    if (f._node) {
                        if (c._webAudio) {
                            // make sure the sound has been created
                            if (!f._node.bufferSource) {
                                if (!b) {
                                    c._emit("stop", f._id);
                                }
                                return c;
                            }
                            if (typeof f._node.bufferSource.stop === "undefined") {
                                f._node.bufferSource.noteOff(0);
                            } else {
                                f._node.bufferSource.stop(0);
                            }
                            // Clean up the buffer source.
                            c._cleanBuffer(f._node);
                        } else if (!isNaN(f._node.duration) || f._node.duration === Infinity) {
                            f._node.currentTime = f._start || 0;
                            f._node.pause();
                        }
                    }
                }
                if (f && !b) {
                    c._emit("stop", f._id);
                }
            }
            return c;
        },
        /**
         * Mute/unmute a single sound or all sounds in this Howl group.
         * @param  {Boolean} muted Set to true to mute and false to unmute.
         * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
         * @return {Howl}
         */
        mute: function(a, c) {
            var d = this;
            // If the sound hasn't loaded, add it to the load queue to mute when capable.
            if (d._state !== "loaded") {
                d._queue.push({
                    event: "mute",
                    action: function() {
                        d.mute(a, c);
                    }
                });
                return d;
            }
            // If applying mute/unmute to all sounds, update the group's value.
            if (typeof c === "undefined") {
                if (typeof a === "boolean") {
                    d._muted = a;
                } else {
                    return d._muted;
                }
            }
            // If no id is passed, get all ID's to be muted.
            var e = d._getSoundIds(c);
            for (var f = 0; f < e.length; f++) {
                // Get the sound.
                var g = d._soundById(e[f]);
                if (g) {
                    g._muted = a;
                    if (d._webAudio && g._node) {
                        g._node.gain.setValueAtTime(a ? 0 : g._volume, b.ctx.currentTime);
                    } else if (g._node) {
                        g._node.muted = b._muted ? true : a;
                    }
                    d._emit("mute", g._id);
                }
            }
            return d;
        },
        /**
         * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
         *   volume() -> Returns the group's volume value.
         *   volume(id) -> Returns the sound id's current volume.
         *   volume(vol) -> Sets the volume of all sounds in this Howl group.
         *   volume(vol, id) -> Sets the volume of passed sound id.
         * @return {Howl/Number} Returns self or current volume.
         */
        volume: function() {
            var a = this;
            var c = arguments;
            var d, e;
            // Determine the values based on arguments.
            if (c.length === 0) {
                // Return the value of the groups' volume.
                return a._volume;
            } else if (c.length === 1 || c.length === 2 && typeof c[1] === "undefined") {
                // First check if this is an ID, and if not, assume it is a new volume.
                var f = a._getSoundIds();
                var g = f.indexOf(c[0]);
                if (g >= 0) {
                    e = parseInt(c[0], 10);
                } else {
                    d = parseFloat(c[0]);
                }
            } else if (c.length >= 2) {
                d = parseFloat(c[0]);
                e = parseInt(c[1], 10);
            }
            // Update the volume or return the current volume.
            var h;
            if (typeof d !== "undefined" && d >= 0 && d <= 1) {
                // If the sound hasn't loaded, add it to the load queue to change volume when capable.
                if (a._state !== "loaded") {
                    a._queue.push({
                        event: "volume",
                        action: function() {
                            a.volume.apply(a, c);
                        }
                    });
                    return a;
                }
                // Set the group volume.
                if (typeof e === "undefined") {
                    a._volume = d;
                }
                // Update one or all volumes.
                e = a._getSoundIds(e);
                for (var i = 0; i < e.length; i++) {
                    // Get the sound.
                    h = a._soundById(e[i]);
                    if (h) {
                        h._volume = d;
                        // Stop currently running fades.
                        if (!c[2]) {
                            a._stopFade(e[i]);
                        }
                        if (a._webAudio && h._node && !h._muted) {
                            h._node.gain.setValueAtTime(d, b.ctx.currentTime);
                        } else if (h._node && !h._muted) {
                            h._node.volume = d * b.volume();
                        }
                        a._emit("volume", h._id);
                    }
                }
            } else {
                h = e ? a._soundById(e) : a._sounds[0];
                return h ? h._volume : 0;
            }
            return a;
        },
        /**
         * Fade a currently playing sound between two volumes (if no id is passsed, all sounds will fade).
         * @param  {Number} from The value to fade from (0.0 to 1.0).
         * @param  {Number} to   The volume to fade to (0.0 to 1.0).
         * @param  {Number} len  Time in milliseconds to fade.
         * @param  {Number} id   The sound id (omit to fade all sounds).
         * @return {Howl}
         */
        fade: function(a, c, d, e) {
            var f = this;
            var g = Math.abs(a - c);
            var h = a > c ? "out" : "in";
            var i = g / .01;
            var j = i > 0 ? d / i : d;
            // If the sound hasn't loaded, add it to the load queue to fade when capable.
            if (f._state !== "loaded") {
                f._queue.push({
                    event: "fade",
                    action: function() {
                        f.fade(a, c, d, e);
                    }
                });
                return f;
            }
            // Set the volume to the start position.
            f.volume(a, e);
            // Fade the volume of one or all sounds.
            var k = f._getSoundIds(e);
            for (var l = 0; l < k.length; l++) {
                // Get the sound.
                var m = f._soundById(k[l]);
                // Create a linear fade or fall back to timeouts with HTML5 Audio.
                if (m) {
                    // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
                    if (!e) {
                        f._stopFade(k[l]);
                    }
                    // If we are using Web Audio, var the native methods do the actual fade.
                    if (f._webAudio && !m._muted) {
                        var n = b.ctx.currentTime;
                        var o = n + d / 1e3;
                        m._volume = a;
                        m._node.gain.setValueAtTime(a, n);
                        m._node.gain.linearRampToValueAtTime(c, o);
                    }
                    var p = a;
                    m._interval = setInterval(function(a, b) {
                        // Update the volume amount, but only if the volume should change.
                        if (i > 0) {
                            p += h === "in" ? .01 : -.01;
                        }
                        // Make sure the volume is in the right bounds.
                        p = Math.max(0, p);
                        p = Math.min(1, p);
                        // Round to within 2 decimal points.
                        p = Math.round(p * 100) / 100;
                        // Change the volume.
                        if (f._webAudio) {
                            if (typeof e === "undefined") {
                                f._volume = p;
                            }
                            b._volume = p;
                        } else {
                            f.volume(p, a, true);
                        }
                        // When the fade is compvare, stop it and fire event.
                        if (p === c) {
                            clearInterval(b._interval);
                            b._interval = null;
                            f.volume(p, a);
                            f._emit("fade", a);
                        }
                    }.bind(f, k[l], m), j);
                }
            }
            return f;
        },
        /**
         * Internal method that stops the currently playing fade when
         * a new fade starts, volume is changed or the sound is stopped.
         * @param  {Number} id The sound id.
         * @return {Howl}
         */
        _stopFade: function(a) {
            var c = this;
            var d = c._soundById(a);
            if (d && d._interval) {
                if (c._webAudio) {
                    d._node.gain.cancelScheduledValues(b.ctx.currentTime);
                }
                clearInterval(d._interval);
                d._interval = null;
                c._emit("fade", a);
            }
            return c;
        },
        /**
         * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
         *   loop() -> Returns the group's loop value.
         *   loop(id) -> Returns the sound id's loop value.
         *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
         *   loop(loop, id) -> Sets the loop value of passed sound id.
         * @return {Howl/Boolean} Returns self or current loop value.
         */
        loop: function() {
            var a = this;
            var b = arguments;
            var c, d, e;
            // Determine the values for loop and id.
            if (b.length === 0) {
                // Return the grou's loop value.
                return a._loop;
            } else if (b.length === 1) {
                if (typeof b[0] === "boolean") {
                    c = b[0];
                    a._loop = c;
                } else {
                    // Return this sound's loop value.
                    e = a._soundById(parseInt(b[0], 10));
                    return e ? e._loop : false;
                }
            } else if (b.length === 2) {
                c = b[0];
                d = parseInt(b[1], 10);
            }
            // If no id is passed, get all ID's to be looped.
            var f = a._getSoundIds(d);
            for (var g = 0; g < f.length; g++) {
                e = a._soundById(f[g]);
                if (e) {
                    e._loop = c;
                    if (a._webAudio && e._node && e._node.bufferSource) {
                        e._node.bufferSource.loop = c;
                    }
                }
            }
            return a;
        },
        /**
         * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
         *   rate() -> Returns the first sound node's current playback rate.
         *   rate(id) -> Returns the sound id's current playback rate.
         *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
         *   rate(rate, id) -> Sets the playback rate of passed sound id.
         * @return {Howl/Number} Returns self or the current playback rate.
         */
        rate: function() {
            var a = this;
            var c = arguments;
            var d, e;
            // Determine the values based on arguments.
            if (c.length === 0) {
                // We will simply return the current rate of the first node.
                e = a._sounds[0]._id;
            } else if (c.length === 1) {
                // First check if this is an ID, and if not, assume it is a new rate value.
                var f = a._getSoundIds();
                var g = f.indexOf(c[0]);
                if (g >= 0) {
                    e = parseInt(c[0], 10);
                } else {
                    d = parseFloat(c[0]);
                }
            } else if (c.length === 2) {
                d = parseFloat(c[0]);
                e = parseInt(c[1], 10);
            }
            // Update the playback rate or return the current value.
            var h;
            if (typeof d === "number") {
                // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
                if (a._state !== "loaded") {
                    a._queue.push({
                        event: "rate",
                        action: function() {
                            a.rate.apply(a, c);
                        }
                    });
                    return a;
                }
                // Set the group rate.
                if (typeof e === "undefined") {
                    a._rate = d;
                }
                // Update one or all volumes.
                e = a._getSoundIds(e);
                for (var i = 0; i < e.length; i++) {
                    // Get the sound.
                    h = a._soundById(e[i]);
                    if (h) {
                        // Keep track of our position when the rate changed and update the playback
                        // start position so we can properly adjust the seek position for time elapsed.
                        h._rateSeek = a.seek(e[i]);
                        h._playStart = a._webAudio ? b.ctx.currentTime : h._playStart;
                        h._rate = d;
                        // Change the playback rate.
                        if (a._webAudio && h._node && h._node.bufferSource) {
                            h._node.bufferSource.playbackRate.value = d;
                        } else if (h._node) {
                            h._node.playbackRate = d;
                        }
                        // Reset the timers.
                        var j = a.seek(e[i]);
                        var k = (a._sprite[h._sprite][0] + a._sprite[h._sprite][1]) / 1e3 - j;
                        var l = k * 1e3 / Math.abs(h._rate);
                        // Start a new end timer if sound is already playing.
                        if (a._endTimers[e[i]] || !h._paused) {
                            a._clearTimer(e[i]);
                            a._endTimers[e[i]] = setTimeout(a._ended.bind(a, h), l);
                        }
                        a._emit("rate", h._id);
                    }
                }
            } else {
                h = a._soundById(e);
                return h ? h._rate : a._rate;
            }
            return a;
        },
        /**
         * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
         *   seek() -> Returns the first sound node's current seek position.
         *   seek(id) -> Returns the sound id's current seek position.
         *   seek(seek) -> Sets the seek position of the first sound node.
         *   seek(seek, id) -> Sets the seek position of passed sound id.
         * @return {Howl/Number} Returns self or the current seek position.
         */
        seek: function() {
            var a = this;
            var c = arguments;
            var d, e;
            // Determine the values based on arguments.
            if (c.length === 0) {
                // We will simply return the current position of the first node.
                e = a._sounds[0]._id;
            } else if (c.length === 1) {
                // First check if this is an ID, and if not, assume it is a new seek position.
                var f = a._getSoundIds();
                var g = f.indexOf(c[0]);
                if (g >= 0) {
                    e = parseInt(c[0], 10);
                } else {
                    e = a._sounds[0]._id;
                    d = parseFloat(c[0]);
                }
            } else if (c.length === 2) {
                d = parseFloat(c[0]);
                e = parseInt(c[1], 10);
            }
            // If there is no ID, bail out.
            if (typeof e === "undefined") {
                return a;
            }
            // If the sound hasn't loaded, add it to the load queue to seek when capable.
            if (a._state !== "loaded") {
                a._queue.push({
                    event: "seek",
                    action: function() {
                        a.seek.apply(a, c);
                    }
                });
                return a;
            }
            // Get the sound.
            var h = a._soundById(e);
            if (h) {
                if (typeof d === "number" && d >= 0) {
                    // Pause the sound and update position for restarting playback.
                    var i = a.playing(e);
                    if (i) {
                        a.pause(e, true);
                    }
                    // Move the position of the track and cancel timer.
                    h._seek = d;
                    h._ended = false;
                    a._clearTimer(e);
                    // Restart the playback if the sound was playing.
                    if (i) {
                        a.play(e, true);
                    }
                    // Update the seek position for HTML5 Audio.
                    if (!a._webAudio && h._node) {
                        h._node.currentTime = d;
                    }
                    a._emit("seek", e);
                } else {
                    if (a._webAudio) {
                        var j = a.playing(e) ? b.ctx.currentTime - h._playStart : 0;
                        var k = h._rateSeek ? h._rateSeek - h._seek : 0;
                        return h._seek + (k + j * Math.abs(h._rate));
                    } else {
                        return h._node.currentTime;
                    }
                }
            }
            return a;
        },
        /**
         * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
         * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
         * @return {Boolean} True if playing and false if not.
         */
        playing: function(a) {
            var b = this;
            // Check the passed sound ID (if any).
            if (typeof a === "number") {
                var c = b._soundById(a);
                return c ? !c._paused : false;
            }
            // Otherwise, loop through all sounds and check if any are playing.
            for (var d = 0; d < b._sounds.length; d++) {
                if (!b._sounds[d]._paused) {
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
        duration: function(a) {
            var b = this;
            var c = b._duration;
            // If we pass an ID, get the sound and return the sprite length.
            var d = b._soundById(a);
            if (d) {
                c = b._sprite[d._sprite][1] / 1e3;
            }
            return c;
        },
        /**
         * Returns the current loaded state of this Howl.
         * @return {String} 'unloaded', 'loading', 'loaded'
         */
        state: function() {
            return this._state;
        },
        /**
         * Unload and destroy the current Howl object.
         * This will immediately stop all sound instances attached to this group.
         */
        unload: function() {
            var a = this;
            // Stop playing any active sounds.
            var c = a._sounds;
            for (var d = 0; d < c.length; d++) {
                // Stop the sound if it is currently playing.
                if (!c[d]._paused) {
                    a.stop(c[d]._id);
                    a._emit("end", c[d]._id);
                }
                // Remove the source or disconnect.
                if (!a._webAudio) {
                    // Set the source to 0-second silence to stop any downloading.
                    c[d]._node.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=";
                    // Remove any event listeners.
                    c[d]._node.removeEventListener("error", c[d]._errorFn, false);
                    c[d]._node.removeEventListener(b._canPlayEvent, c[d]._loadFn, false);
                }
                // Empty out all of the nodes.
                delete c[d]._node;
                // Make sure all timers are cleared out.
                a._clearTimer(c[d]._id);
                // Remove the references in the global Howler object.
                var f = b._howls.indexOf(a);
                if (f >= 0) {
                    b._howls.splice(f, 1);
                }
            }
            // delete this sound from the cache (if no other Howl is using it).
            var g = true;
            for (d = 0; d < b._howls.length; d++) {
                if (b._howls[d]._src === a._src) {
                    g = false;
                    break;
                }
            }
            if (e && g) {
                delete e[a._src];
            }
            // Clear out `self`.
            a._state = "unloaded";
            a._sounds = [];
            a = null;
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
        on: function(a, b, c, d) {
            var e = this;
            var f = e["_on" + a];
            if (typeof b === "function") {
                f.push(d ? {
                    id: c,
                    fn: b,
                    once: d
                } : {
                    id: c,
                    fn: b
                });
            }
            return e;
        },
        /**
         * Remove a custom event. Call without parameters to remove all events.
         * @param  {String}   event Event name.
         * @param  {Function} fn    Listener to remove. Leave empty to remove all.
         * @param  {Number}   id    (optional) Only remove events for this sound.
         * @return {Howl}
         */
        off: function(a, b, c) {
            var d = this;
            var e = d["_on" + a];
            var f = 0;
            if (b) {
                // Loop through event store and remove the passed function.
                for (f = 0; f < e.length; f++) {
                    if (b === e[f].fn && c === e[f].id) {
                        e.splice(f, 1);
                        break;
                    }
                }
            } else if (a) {
                // Clear out all events of this type.
                d["_on" + a] = [];
            } else {
                // Clear out all events of every type.
                var g = Object.keys(d);
                for (f = 0; f < g.length; f++) {
                    if (g[f].indexOf("_on") === 0 && Array.isArray(d[g[f]])) {
                        d[g[f]] = [];
                    }
                }
            }
            return d;
        },
        /**
         * Listen to a custom event and remove it once fired.
         * @param  {String}   event Event name.
         * @param  {Function} fn    Listener to call.
         * @param  {Number}   id    (optional) Only listen to events for this sound.
         * @return {Howl}
         */
        once: function(a, b, c) {
            var d = this;
            // Setup the event listener.
            d.on(a, b, c, 1);
            return d;
        },
        /**
         * Emit all events of a specific type and pass the sound id.
         * @param  {String} event Event name.
         * @param  {Number} id    Sound ID.
         * @param  {Number} msg   Message to go with event.
         * @return {Howl}
         */
        _emit: function(a, b, c) {
            var d = this;
            var e = d["_on" + a];
            // Loop through event store and fire all functions.
            for (var f = e.length - 1; f >= 0; f--) {
                if (!e[f].id || e[f].id === b || a === "load") {
                    setTimeout(function(a) {
                        a.call(this, b, c);
                    }.bind(d, e[f].fn), 0);
                    // If this event was setup with `once`, remove it.
                    if (e[f].once) {
                        d.off(a, e[f].fn, e[f].id);
                    }
                }
            }
            return d;
        },
        /**
         * Queue of actions initiated before the sound has loaded.
         * These will be called in sequence, with the next only firing
         * after the previous has finished executing (even if async like play).
         * @return {Howl}
         */
        _loadQueue: function() {
            var a = this;
            if (a._queue.length > 0) {
                var b = a._queue[0];
                // don't move onto the next task until this one is done
                a.once(b.event, function() {
                    a._queue.shift();
                    a._loadQueue();
                });
                b.action();
            }
            return a;
        },
        /**
         * Fired when playback ends at the end of the duration.
         * @param  {Sound} sound The sound object to work with.
         * @return {Howl}
         */
        _ended: function(a) {
            var c = this;
            var d = a._sprite;
            // Should this sound loop?
            var e = !!(a._loop || c._sprite[d][2]);
            // Fire the ended event.
            c._emit("end", a._id);
            // Restart the playback for HTML5 Audio loop.
            if (!c._webAudio && e) {
                c.stop(a._id, true).play(a._id);
            }
            // Restart this timer if on a Web Audio loop.
            if (c._webAudio && e) {
                c._emit("play", a._id);
                a._seek = a._start || 0;
                a._rateSeek = 0;
                a._playStart = b.ctx.currentTime;
                var f = (a._stop - a._start) * 1e3 / Math.abs(a._rate);
                c._endTimers[a._id] = setTimeout(c._ended.bind(c, a), f);
            }
            // Mark the node as paused.
            if (c._webAudio && !e) {
                a._paused = true;
                a._ended = true;
                a._seek = a._start || 0;
                a._rateSeek = 0;
                c._clearTimer(a._id);
                // Clean up the buffer source.
                c._cleanBuffer(a._node);
                // Attempt to auto-suspend AudioContext if no sounds are still playing.
                b._autoSuspend();
            }
            // When using a sprite, end the track.
            if (!c._webAudio && !e) {
                c.stop(a._id);
            }
            return c;
        },
        /**
         * Clear the end timer for a sound playback.
         * @param  {Number} id The sound ID.
         * @return {Howl}
         */
        _clearTimer: function(a) {
            var b = this;
            if (b._endTimers[a]) {
                clearTimeout(b._endTimers[a]);
                delete b._endTimers[a];
            }
            return b;
        },
        /**
         * Return the sound identified by this ID, or return null.
         * @param  {Number} id Sound ID
         * @return {Object}    Sound object or null.
         */
        _soundById: function(a) {
            var b = this;
            // Loop through all sounds and find the one with this ID.
            for (var c = 0; c < b._sounds.length; c++) {
                if (a === b._sounds[c]._id) {
                    return b._sounds[c];
                }
            }
            return null;
        },
        /**
         * Return an inactive sound from the pool or create a new one.
         * @return {Sound} Sound playback object.
         */
        _inactiveSound: function() {
            var a = this;
            a._drain();
            // Find the first inactive node to recycle.
            for (var b = 0; b < a._sounds.length; b++) {
                if (a._sounds[b]._ended) {
                    return a._sounds[b].reset();
                }
            }
            // If no inactive node was found, create a new one.
            return new d(a);
        },
        /**
         * Drain excess inactive sounds from the pool.
         */
        _drain: function() {
            var a = this;
            var b = a._pool;
            var c = 0;
            var d = 0;
            // If there are less sounds than the max pool size, we are done.
            if (a._sounds.length < b) {
                return;
            }
            // Count the number of inactive sounds.
            for (d = 0; d < a._sounds.length; d++) {
                if (a._sounds[d]._ended) {
                    c++;
                }
            }
            // Remove excess inactive sounds, going in reverse order.
            for (d = a._sounds.length - 1; d >= 0; d--) {
                if (c <= b) {
                    return;
                }
                if (a._sounds[d]._ended) {
                    // Disconnect the audio source when using Web Audio.
                    if (a._webAudio && a._sounds[d]._node) {
                        a._sounds[d]._node.disconnect(0);
                    }
                    // Remove sounds until we have the pool size.
                    a._sounds.splice(d, 1);
                    c--;
                }
            }
        },
        /**
         * Get all ID's from the sounds pool.
         * @param  {Number} id Only return one ID if one is passed.
         * @return {Array}    Array of IDs.
         */
        _getSoundIds: function(a) {
            var b = this;
            if (typeof a === "undefined") {
                var c = [];
                for (var d = 0; d < b._sounds.length; d++) {
                    c.push(b._sounds[d]._id);
                }
                return c;
            } else {
                return [ a ];
            }
        },
        /**
         * Load the sound back into the buffer source.
         * @param  {Sound} sound The sound object to work with.
         * @return {Howl}
         */
        _refreshBuffer: function(a) {
            var c = this;
            // Setup the buffer source for playback.
            a._node.bufferSource = b.ctx.createBufferSource();
            a._node.bufferSource.buffer = e[c._src];
            // Connect to the correct node.
            if (a._panner) {
                a._node.bufferSource.connect(a._panner);
            } else {
                a._node.bufferSource.connect(a._node);
            }
            // Setup looping and playback rate.
            a._node.bufferSource.loop = a._loop;
            if (a._loop) {
                a._node.bufferSource.loopStart = a._start || 0;
                a._node.bufferSource.loopEnd = a._stop;
            }
            a._node.bufferSource.playbackRate.value = a._rate;
            return c;
        },
        /**
         * Prevent memory leaks by cleaning up the buffer source after playback.
         * @param  {Object} node Sound's audio node containing the buffer source.
         * @return {Howl}
         */
        _cleanBuffer: function(a) {
            var b = this;
            if (b._scratchBuffer) {
                a.bufferSource.onended = null;
                a.bufferSource.disconnect(0);
                try {
                    a.bufferSource.buffer = b._scratchBuffer;
                } catch (a) {}
            }
            a.bufferSource = null;
            return b;
        }
    };
    /** Single Sound Methods **/
    /***************************************************************************/
    /**
     * Setup the sound object, which each node attached to a Howl group is contained in.
     * @param {Object} howl The Howl parent group.
     */
    var d = function(a) {
        this._parent = a;
        this.init();
    };
    d.prototype = {
        /**
         * Initialize a new Sound object.
         * @return {Sound}
         */
        init: function() {
            var a = this;
            var b = a._parent;
            // Setup the default parameters.
            a._muted = b._muted;
            a._loop = b._loop;
            a._volume = b._volume;
            a._muted = b._muted;
            a._rate = b._rate;
            a._seek = 0;
            a._paused = true;
            a._ended = true;
            a._sprite = "__default";
            // Generate a unique ID for this sound.
            a._id = Math.round(Date.now() * Math.random());
            // Add itself to the parent's pool.
            b._sounds.push(a);
            // Create the new node.
            a.create();
            return a;
        },
        /**
         * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
         * @return {Sound}
         */
        create: function() {
            var a = this;
            var c = a._parent;
            var d = b._muted || a._muted || a._parent._muted ? 0 : a._volume;
            if (c._webAudio) {
                // Create the gain node for controlling volume (the source will connect to this).
                a._node = typeof b.ctx.createGain === "undefined" ? b.ctx.createGainNode() : b.ctx.createGain();
                a._node.gain.setValueAtTime(d, b.ctx.currentTime);
                a._node.paused = true;
                a._node.connect(b.masterGain);
            } else {
                a._node = new Audio();
                // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
                a._errorFn = a._errorListener.bind(a);
                a._node.addEventListener("error", a._errorFn, false);
                // Listen for 'canplaythrough' event to var us know the sound is ready.
                a._loadFn = a._loadListener.bind(a);
                a._node.addEventListener(b._canPlayEvent, a._loadFn, false);
                // Setup the new audio node.
                a._node.src = c._src;
                a._node.preload = "auto";
                a._node.volume = d * b.volume();
                // Begin loading the source.
                a._node.load();
            }
            return a;
        },
        /**
         * Reset the parameters of this sound to the original state (for recycle).
         * @return {Sound}
         */
        reset: function() {
            var a = this;
            var b = a._parent;
            // Reset all of the parameters of this sound.
            a._muted = b._muted;
            a._loop = b._loop;
            a._volume = b._volume;
            a._muted = b._muted;
            a._rate = b._rate;
            a._seek = 0;
            a._rateSeek = 0;
            a._paused = true;
            a._ended = true;
            a._sprite = "__default";
            // Generate a new ID so that it isn't confused with the previous sound.
            a._id = Math.round(Date.now() * Math.random());
            return a;
        },
        /**
         * HTML5 Audio error listener callback.
         */
        _errorListener: function() {
            var a = this;
            if (a._node.error && a._node.error.code === 4) {
                b.noAudio = true;
            }
            // Fire an error event and pass back the code.
            a._parent._emit("loaderror", a._id, a._node.error ? a._node.error.code : 0);
            // Clear the event listener.
            a._node.removeEventListener("error", a._errorListener, false);
        },
        /**
         * HTML5 Audio canplaythrough listener callback.
         */
        _loadListener: function() {
            var a = this;
            var c = a._parent;
            // Round up the duration to account for the lower precision in HTML5 Audio.
            c._duration = Math.ceil(a._node.duration * 10) / 10;
            // Setup a sprite if none is defined.
            if (Object.keys(c._sprite).length === 0) {
                c._sprite = {
                    __default: [ 0, c._duration * 1e3 ]
                };
            }
            if (c._state !== "loaded") {
                c._state = "loaded";
                c._emit("load");
                c._loadQueue();
            }
            if (c._autoplay) {
                c.play();
            }
            // Clear the event listener.
            a._node.removeEventListener(b._canPlayEvent, a._loadFn, false);
        }
    };
    /** Helper Methods **/
    /***************************************************************************/
    var e = {};
    /**
     * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
     * @param  {Howl} self
     */
    var f = function(a) {
        var b = a._src;
        // Check if the buffer has already been cached and use it instead.
        if (e[b]) {
            // Set the duration from the cache.
            a._duration = e[b].duration;
            // Load the sound into this Howl.
            i(a);
            return;
        }
        if (/^data:[^;]+;base64,/.test(b)) {
            // Decode the base64 data URI without XHR, since some browsers don't support it.
            var c = atob(b.split(",")[1]);
            var d = new Uint8Array(c.length);
            for (var f = 0; f < c.length; ++f) {
                d[f] = c.charCodeAt(f);
            }
            h(d.buffer, a);
        } else {
            // Load the buffer from the URL.
            var j = new XMLHttpRequest();
            j.open("GET", b, true);
            j.responseType = "arraybuffer";
            j.onload = function() {
                // Make sure we get a successful response back.
                var b = (j.status + "")[0];
                if (b !== "0" && b !== "2" && b !== "3") {
                    a._emit("loaderror", null, "Failed loading audio file with status: " + j.status + ".");
                    return;
                }
                h(j.response, a);
            };
            j.onerror = function() {
                // If there is an error, switch to HTML5 Audio.
                if (a._webAudio) {
                    a._html5 = true;
                    a._webAudio = false;
                    a._sounds = [];
                    delete e[b];
                    a.load();
                }
            };
            g(j);
        }
    };
    /**
     * Send the XHR request wrapped in a try/catch.
     * @param  {Object} xhr XHR to send.
     */
    var g = function(a) {
        try {
            a.send();
        } catch (b) {
            a.onerror();
        }
    };
    /**
     * Decode audio data from an array buffer.
     * @param  {ArrayBuffer} arraybuffer The audio data.
     * @param  {Howl}        self
     */
    var h = function(a, c) {
        // Decode the buffer into an audio source.
        b.ctx.decodeAudioData(a, function(a) {
            if (a && c._sounds.length > 0) {
                e[c._src] = a;
                i(c, a);
            }
        }, function() {
            c._emit("loaderror", null, "Decoding audio data failed.");
        });
    };
    /**
     * Sound is now loaded, so finish setting everything up and fire the loaded event.
     * @param  {Howl} self
     * @param  {Object} buffer The decoded buffer sound source.
     */
    var i = function(a, b) {
        // Set the duration.
        if (b && !a._duration) {
            a._duration = b.duration;
        }
        // Setup a sprite if none is defined.
        if (Object.keys(a._sprite).length === 0) {
            a._sprite = {
                __default: [ 0, a._duration * 1e3 ]
            };
        }
        // Fire the loaded event.
        if (a._state !== "loaded") {
            a._state = "loaded";
            a._emit("load");
            a._loadQueue();
        }
        // Begin playback if specified.
        if (a._autoplay) {
            a.play();
        }
    };
    /**
     * Setup the audio context when available, or switch to HTML5 Audio mode.
     */
    var j = function() {
        b.noAudio = false;
        // Check if we are using Web Audio and setup the AudioContext if we are.
        try {
            if (typeof AudioContext !== "undefined") {
                b.ctx = new AudioContext();
            } else if (typeof webkitAudioContext !== "undefined") {
                b.ctx = new webkitAudioContext();
            } else {
                b.usingWebAudio = false;
            }
        } catch (a) {
            b.usingWebAudio = false;
        }
        if (!b.usingWebAudio) {
            // No audio is available on this system if noAudio is set to true.
            if (typeof Audio !== "undefined") {
                try {
                    var a = new Audio();
                    // Check if the canplaythrough event is available.
                    if (typeof a.oncanplaythrough === "undefined") {
                        b._canPlayEvent = "canplay";
                    }
                } catch (a) {
                    b.noAudio = true;
                }
            } else {
                b.noAudio = true;
            }
        }
        // Test to make sure audio isn't disabled in Internet Explorer
        try {
            var a = new Audio();
            if (a.muted) {
                b.noAudio = true;
            }
        } catch (a) {}
        // Check if a webview is being used on iOS8 or earlier (rather than the browser).
        // If it is, disable Web Audio as it causes crashing.
        var c = /iP(hone|od|ad)/.test(b._navigator && b._navigator.platform);
        var d = b._navigator && b._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        var e = d ? parseInt(d[1], 10) : null;
        if (c && e && e < 9) {
            var f = /safari/.test(b._navigator && b._navigator.userAgent.toLowerCase());
            if (b._navigator && b._navigator.standalone && !f || b._navigator && !b._navigator.standalone && !f) {
                b.usingWebAudio = false;
            }
        }
        // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
        if (b.usingWebAudio) {
            b.masterGain = typeof b.ctx.createGain === "undefined" ? b.ctx.createGainNode() : b.ctx.createGain();
            b.masterGain.gain.value = 1;
            b.masterGain.connect(b.ctx.destination);
        }
        // Re-run the setup on Howler.
        b._setup();
    };
    // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
    if (typeof define === "function" && define.amd) {
        define([], function() {
            return {
                Howler: b,
                Howl: c
            };
        });
    }
    // Add support for CommonJS libraries such as browserify.
    if (typeof exports !== "undefined") {
        exports.Howler = b;
        exports.Howl = c;
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
    HYPER.Preload.Audio = c;
    /**
     * Holds audio library
     * @namespace HYPER.Preload.Audio
     */
    HYPER.Audio = {};
    /**
     * create a new Howler global controller.
     * @class HYPER.Audio.HowlerGlobal
     */
    HYPER.Audio.HowlerGlobal = a;
    /**
     * Howler global controller.
     * @method HYPER.Audio.Howler
     */
    HYPER.Audio.Howler = b;
    /**
     * Load audio files, use Howler loader API.
     * @class HYPER.Audio.Howl
     */
    HYPER.Audio.Howl = c;
    /**
     * Howler Sound object.
     * @class HYPER.Audio.Sound
     */
    HYPER.Audio.Sound = d;
})();

(function() {
    "use strict";
    //HYPER.monkeys = WebMonkeys();
    /**
     * Holds all physics information
     * @namespace HYPER.Physics
     */
    HYPER.Physics = {};
})();

(function() {
    "use strict";
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var e = 0;
    var f = 0;
    /**
     * Check a collision between 2 aabb objects
     * @method HYPER.Physics.checkAABBCollision
     * @param {object} obj1 - First object to be checked.
     * @param {object} obj2 - Second object to be checked.
     */
    HYPER.Physics.checkAABBCollision = function(a, b) {
        if (a.x <= b.x + b.size.width && a.x + a.size.width >= b.x && a.y <= b.y + b.size.height && a.y + a.size.height > b.y) {
            return true;
        } else {
            return false;
        }
    };
    /**
     * Check a collision between 2 circular objects
     * @method HYPER.Physics.checkCircleCollision
     * @param {object} circle1 - First object to be checked.
     * @param {object} circle2 - Second object to be checked.
     */
    HYPER.Physics.checkCircleCollision = function(a, b) {
        if (Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y)) < a.size.radius + b.size.radius) {
            return true;
        } else {
            return false;
        }
    };
    /**
     * Check a collision between a AABB and a circle object.
     * @method HYPER.Physics.checkCircleAABBCollision
     * @param {object} circle - First object to be checked.
     * @param {object} rect - Second object to be checked.
     */
    HYPER.Physics.checkCircleAABBCollision = function(e, f) {
        a = Math.abs(e.x - f.x - f.size.width / 2);
        b = Math.abs(e.y - f.y - f.size.height / 2);
        if (a > f.size.width / 2 + e.size.radius) {
            return false;
        }
        if (b > f.size.height / 2 + e.size.radius) {
            return false;
        }
        if (a <= f.size.width / 2) {
            return true;
        }
        if (b <= f.size.height / 2) {
            return true;
        }
        c = a - f.size.width / 2;
        d = b - f.size.height / 2;
        return c * c + d * d <= e.size.radius * e.size.radius;
    };
    /**
     * Check a collision between a point and an AABB object.
     * @method HYPER.Physics.checkPointAABBCollision
     * @param {object} point - First object to be checked.
     * @param {object} rect - Second object to be checked.
     */
    HYPER.Physics.checkPointAABBCollision = function(a, b) {
        if (a.x >= b.x && a.x <= b.x + b.size.width && a.y >= b.y && a.y <= b.y + b.size.height) {
            return true;
        } else {
            return false;
        }
    };
    /**
     * Check a collision between a point and an circle object.
     * @method HYPER.Physics.checkPointCircleCollision
     * @param {object} point - First object to be checked.
     * @param {object} circle - Second object to be checked.
     */
    HYPER.Physics.checkPointCircleCollision = function(a, b) {
        if (Math.sqrt((b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y)) <= b.size.radius) {
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
    HYPER.Physics.checkPointPointCollision = function(a, b) {
        if (Math.floor(a.x) === Math.floor(b.x) && Math.floor(b.x) === Math.floor(b.x)) {
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
    HYPER.Physics.checkCollision = function(a, b) {
        var c, d;
        if (!a.size) {
            c = "point";
        }
        if (!a.shape === "circle") {
            c = "circle";
        }
        if (!a.shape === "rect") {
            c = "rect";
        }
        if (!b.size) {
            d = "point";
        }
        if (!b.shape === "circle") {
            d = "circle";
        }
        if (!b.shape === "rect") {
            d = "rect";
        }
        if (c === "point") {
            if (d === "point") {
                return HYPER.Physics.checkPointPointCollision(a, b);
            }
            if (d === "circle") {
                return HYPER.Physics.checkPointCircleCollision(a, b);
            }
            if (d === "rect") {
                return HYPER.Physics.checkPointAABBCollision(a, b);
            }
        }
        if (c === "rect") {
            if (d === "rect") {
                return HYPER.Physics.checkAABBCollision(a, b);
            }
            if (d === "circle") {
                return HYPER.Physics.checkCircleAABBCollision(b, a);
            }
            if (d === "point") {
                return HYPER.Physics.checkPointAABBCollision(b, a);
            }
        }
        if (c === "circle") {
            if (d === "rect") {
                return HYPER.Physics.checkCircleAABBCollision(a, b);
            }
            if (d === "circle") {
                return HYPER.Physics.checkCircleCircleCollision(b, a);
            }
            if (d === "point") {
                return HYPER.Physics.checkPointCircleCollision(b, a);
            }
        }
    };
})();

(function() {
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
    HYPER.Physics.Vector.create = function(a, b) {
        this.x = a || 0;
        this.y = b || 0;
        return {
            x: this.x,
            y: this.y
        };
    };
    /**
     * Clones a new vector.
     * @method HYPER.Physics.Vector.clone
     * @param {object} vector - The vector to be cloned.
     */
    HYPER.Physics.Vector.clone = function(a) {
        this.x = a.x || 0;
        this.y = a.y || 0;
        return {
            x: this.x,
            y: this.y
        };
    };
    /**
     * Returns the length of a vector.
     * @method HYPER.Physics.Vector.magnitude
     * @param {object} vector - The vector to retrive the magnitude from.
     */
    HYPER.Physics.Vector.magnitude = function(a) {
        return Math.sqrt(a.x * a.x + a.y * a.y);
    };
    /**
     * Returns the squared length of a vector.
     * @method HYPER.Physics.Vector.magnitudeSquared
     * @param {object} vector - The vector to retrive the squared magnitude from.
     */
    HYPER.Physics.Vector.magnitudeSquared = function(a) {
        return a.x * a.x + a.y * a.y;
    };
    /**
     * Rotates the vector by specified angle.
     * @method HYPER.Physics.Vector.rotate
     * @param {object} vector - The vector to rotate.
     * @param {number} angle - the angle to rotate the vector.
     */
    HYPER.Physics.Vector.rotate = function(a, b) {
        var c = Math.cos(b), d = Math.sin(b);
        return {
            x: a.x * c - a.y * d,
            y: a.x * d + a.y * c
        };
    };
    /**
     * Rotates the vector about a specified point by specified angle.
     * @method HYPER.Physics.Vector.rotateAbout
     * @param {object} vector - The vector to rotate.
     * @param {number} angle - the angle to rotate the vector.
     * @param {object} point - The point to rotate around.
     */
    HYPER.Physics.Vector.rotateAbout = function(a, b, c, d) {
        var e = Math.cos(b), f = Math.sin(b);
        if (!d) d = {};
        var g = c.x + ((a.x - c.x) * e - (a.y - c.y) * f);
        d.y = c.y + ((a.x - c.x) * f + (a.y - c.y) * e);
        d.x = g;
        return d;
    };
    /**
     * Normalises a vector (so that the vectors magnitude is 1)
     * @method HYPER.Physics.Vector.normalise
     * @param {object} vector - The vector to normalise.
     */
    HYPER.Physics.Vector.normalise = function(a) {
        var b = HYPER.Physics.Vector.magnitude(a);
        if (b === 0) return {
            x: 0,
            y: 0
        };
        return {
            x: a.x / b,
            y: a.y / b
        };
    };
    /**
     * Returns the dot-product of two vectors.
     * @method HYPER.Physics.Vector.dot
     * @param {object} vectorA - The first vector.
     * @param {object} vectorB - The second vector.
     */
    HYPER.Physics.Vector.dot = function(a, b) {
        return a.x * b.x + a.y * b.y;
    };
    /**
     * Returns the cross-product of two vectors.
     * @method HYPER.Physics.Vector.cross
     * @param {object} vectorA - The first vector.
     * @param {object} vectorB - The second vector.
     */
    HYPER.Physics.Vector.cross = function(a, b) {
        return a.x * b.y - a.y * b.x;
    };
    /**
     * Returns the cross-product of three vectors.
     * @method HYPER.Physics.Vector.cross3
     * @param {object} vectorA - The first vector.
     * @param {object} vectorB - The second vector.
     * @param {object} vectorC - The third vector.
     */
    HYPER.Physics.Vector.cross3 = function(a, b, c) {
        return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
    };
    /**
     * Adds the two vectors.
     * @method HYPER.Physics.Vector.add
     * @param {object} vectorA - The first vector.
     * @param {object} vectorB - The second vector.
     */
    HYPER.Physics.Vector.add = function(a, b, c) {
        if (!c) c = {};
        c.x = a.x + b.x;
        c.y = a.y + b.y;
        return c;
    };
    /**
     * Subtracts the two vectors.
     * @method HYPER.Physics.Vector.sub 
     * @param {object} vectorA - The first vector.
     * @param {object} vectorB - The second vector.
     */
    HYPER.Physics.Vector.sub = function(a, b, c) {
        if (!c) c = {};
        c.x = a.x - b.x;
        c.y = a.y - b.y;
        return c;
    };
    /**
     * Multiplies a vector and a scalar.
     * @method HYPER.Physics.Vector.mult
     * @param {object} vector - The vector to multiply.
     * @param {object} scalar - The scalar to multiply by.
     */
    HYPER.Physics.Vector.mult = function(a, b) {
        return {
            x: a.x * b,
            y: a.y * b
        };
    };
    /**
     * Divides a vector and a scalar.
     * @method HYPER.Physics.Vector.div
     * @param {object} vector - The vector to divide by.
     * @param {object} scalar - The scalar to divide by.
     */
    HYPER.Physics.Vector.div = function(a, b) {
        return {
            x: a.x / b,
            y: a.y / b
        };
    };
    /**
     * Returns the perpendicular vector. Set `negate` to true for the perpendicular in the opposite direction.
     * @method HYPER.Physics.Vector.perp
     * @param {object} vector - The vector to retrive the perpendicular vector from.
     * @param {object} negate - Set to true to retrive the negated form of the perpendicular vector.
     */
    HYPER.Physics.Vector.perp = function(a, b) {
        b = b === true ? -1 : 1;
        return {
            x: b * -a.y,
            y: b * a.x
        };
    };
    /**
     * Negates both components of a vector such that it points in the opposite direction.
     * @method HYPER.Physics.Vector.neg
      * @param {object} vector - The vector to negate.
     */
    HYPER.Physics.Vector.neg = function(a) {
        return {
            x: -a.x,
            y: -a.y
        };
    };
    /**
     * Returns the angle in radians between the two vectors relative to the x-axis. To get it in degrees, set angle to true.
     * @method HYPER.Physics.Vector.angle
     * @param {object} vectorA - The first vector.
     * @param {object} vectorB - The second vector.
     * @param {boolean} degrees - Set to true to get answer in degrees.
     */
    HYPER.Physics.Vector.angle = function(a, b, c) {
        if (c === true) {
            return HYPER.Math.RadiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));
        } else {
            return Math.atan2(b.y - a.y, b.x - a.x);
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
(function() {
    "use strict";
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
    HYPER.Physics.BoxJS.Vector2 = function(a, b) {
        /**
         * @property {number} y - Y location of the vector.
         */
        this.x = a;
        /**
         * @property {number} x - X location of the vector.
         */
        this.y = b;
    };
    HYPER.Physics.BoxJS.Vector2.prototype = {
        /**
         * Add 2 vectors.
         * @method HYPER.Physics.BoxJS.Vector2.add
         * @param {object} v vector.
         */
        add: function(a) {
            return new HYPER.Physics.BoxJS.Vector2(this.x + a.x, this.y + a.y);
        },
        /**
         * subtract 2 vectors.
         * @method HYPER.Physics.BoxJS.Vector2.sub
         * @param {object} v vector.
         */
        sub: function(a) {
            return new HYPER.Physics.BoxJS.Vector2(this.x - a.x, this.y - a.y);
        },
        /**
         * Dot value of 2 vectors
         * @method HYPER.Physics.BoxJS.Vector2.dot
         * @param {object} v vector.
         */
        dot: function(a) {
            return this.x * a.x + this.y * a.y;
        },
        /**
         * Cross value of 2 vectors
         * @method HYPER.Physics.BoxJS.Vector2.cross
         * @param {object} v vector.
         */
        cross: function(a) {
            return this.x * a.y - this.y * a.x;
        },
        /**
         * Divide 2 vectors
         * @method HYPER.Physics.BoxJS.Vector2.div
         * @param {object} v vector.
         */
        div: function(a) {
            this.x /= a;
            this.y /= a;
            return this;
        },
        /**
         * Multiply 2 vectors
         * @method HYPER.Physics.BoxJS.Vector2.mul
         * @param {object} v vector.
         */
        mul: function(a) {
            this.x *= a;
            this.y *= a;
            return this;
        },
        /**
         * Normalize a vector.
         * @method HYPER.Physics.BoxJS.Vector2.normalize
         */
        normalize: function() {
            var a = this.length();
            if (this.length > 1e-4) {
                var b = 1 / a;
                this.x *= b;
                this.y *= b;
            }
        },
        /**
         * Get the squared length of a vector.
         * @method HYPER.Physics.BoxJS.Vector2.length
         */
        lengthSqr: function() {
            return this.x * this.x + this.y * this.y;
        },
        /**
         * Get the length of a vector.
         * @method HYPER.Physics.BoxJS.Vector2.length
         */
        length: function() {
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
    HYPER.Physics.BoxJS.material = function(a) {
        a = a || {};
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
        this.fixed = a.fixed || false;
        /**
         * @property {number} restitution=0.1 - How bouncy is this material?
         */
        this.restitution = a.restitution || .1;
        /**
         * @property {number} staticFriction=1 - How much does friction affect this material while at rest?
         */
        this.staticFriction = a.staticFriction || 1;
        /**
         * @property {number} dynamicFriction=1 - How much does friction affect this material while in motion?
         */
        this.dynamicFriction = a.dynamicFriction || .3;
        /**
         * @property {array} dontCollideWith - What materials does this pass through? Accepts the material name.
         */
        this.dontCollideWith = a.dontCollideWith || [];
        /**
         * @property {array} name - What is this material called?
         */
        this.name = a.name || "material number: " + math.random();
    };
    var a = new HYPER.Physics.BoxJS.material({
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
    HYPER.Physics.BoxJS.Box = function(b) {
        b = b || {};
        b.mass = b.mass || 1;
        b.maxVel = b.maxVel || {};
        if (b.material) {
            if (b.material.type === "material") {
                this.material = b.material;
            }
        } else {
            /**
             * @property {number} material - The material of this object.
             */
            this.material = a;
        }
        /**
         * @property {number} mass - The mass of this object.
         */
        this.mass = b.mass !== undefined ? b.mass : 1;
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
        this.immovable = b.fixed || false;
        /**
         * @property {HYPER.Physics.BoxJS.Vector2} oldPos - The old position of the object.
         */
        this.oldPos = new HYPER.Physics.BoxJS.Vector2(0, 0);
        /**
         * @property {HYPER.Physics.BoxJS.Vector2} center - The center of the object.
         */
        this.center = new HYPER.Physics.BoxJS.Vector2(b.width / 2 || 16, b.height / 2 || 16);
        /**
         * @property {number} im - The inverse mass.
         */
        this.im = b.mass === 0 ? 0 : 1 / b.mass;
        /**
         * @property {number} restitution=0.1 - The bouncyness of the object.
         */
        this.restitution = .1;
        /**
         * @property {number} staticFriction=1 - How much does friction affect this material while at rest?
         */
        this.staticFriction = 1;
        /**
         * @property {number} staticFriction=1 - How much does friction affect this material while in motion?
         */
        this.dynamicFriction = .3;
        /**
         * @property {HYPER.Physics.BoxJS.Vector2} maxVel={x:1000,y:1000} - What is the max velocity?
         */
        this.maxVel = new HYPER.Physics.BoxJS.Vector2(b.maxVel.x || 1e3, b.maxVel.y || 1e3);
        /**
         * @property {HYPER.Physics.BoxJS.Vector2} pos - What is position of the object?
         */
        this.pos = new HYPER.Physics.BoxJS.Vector2(b.x, b.y);
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
        this.sleepThreshold = b.sleepThreshold || 1;
        /**
         * @property {object} size - What size the object is.
         */
        this.size = {
            /**
             * @property {number} size.width - How wide the object is.
             */
            width: b.width,
            /**
             * @property {number} size.height - How tall the object is.
             */
            height: b.height
        };
        /**
         * @property {boolean} fixed=false - Is the object fixed in place?
         */
        this.fixed = b.fixed || false;
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
    };
    HYPER.Physics.BoxJS.Box.prototype = {
        /**
         * Update the material data.
         * @private
         * @method HYPER.Physics.BoxJS.Box.updateMaterial
         */
        updateMaterial: function() {
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
        isOverlapping: function(a) {
            if (a.type === "boxJSAABB") {
                if (this.max.x < a.min.x || this.min.x > a.max.x) {
                    return false;
                } else if (this.max.y < a.min.y || this.min.y > a.max.y) {
                    return false;
                } else {
                    return true;
                }
            } else if (a.x && a.y && a.width && a.height) {
                if (this.min.x <= rect2.x + rect2.width && this.max.x >= rect2.x && this.min.y <= rect2.y + rect2.height && this.max.x > rect2.y) {
                    // If they are colliding, return true
                    return true;
                } else {
                    // If they are not colliding, return false
                    return false;
                }
            } else if (a.type === "boxJSParticle") {
                if (a.pos.x > this.min.x && a.pos.x < this.max.x && a.pos.y > this.min.y && a.pos.y < this.max.y) {
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
        updateSleeping: function(a) {
            if (a) {
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
        setSleeping: function(a) {
            if (a === false) {
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
        updateBounds: function() {
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
        integrateForces: function(a) {
            if (this.im !== 0 && !this.isSleeping && this.active) {
                this.vel.x += this.acc.x;
                this.vel.y += this.acc.y;
                this.vel.x += (this.force.x * this.im + a.x) / 2;
                this.vel.y += (this.force.y * this.im + a.y) / 2;
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
        integratevel: function(a, b) {
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
            this.integrateForces(a, b);
            this.speed = Math.sqrt((this.pos.x - this.oldPos.x) * (this.pos.x - this.oldPos.x) + (this.pos.y - this.oldPos.y) * (this.pos.y - this.oldPos.y));
        },
        /**
         * Apply an impulse on the object.
         * @method HYPER.Physics.BoxJS.Box.applyImpulse
         * @param {number} x X impulse.
         * @param {number} y Y impulse.
         */
        applyImpulse: function(a, b) {
            if (!this.fixed && this.active) {
                this.vel.x += this.im * a;
                this.vel.y += this.im * b;
            }
        },
        /**
         * Apply an force on the object.
         * @method HYPER.Physics.BoxJS.Box.applyForce
         * @param {number} x X force.
         * @param {number} y Y force.
         */
        applyForce: function(a, b) {
            if (!this.fixed && this.active) {
                this.force.x += a;
                this.force.y += b;
            }
        },
        /**
         * clear the forces on the object.
         * @method HYPER.Physics.BoxJS.Box.clearForces
         */
        clearForces: function() {
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
    HYPER.Physics.BoxJS.collideAABB = function(a, b, c, d) {
        var e = Math.min(a.restitution || .1, b.restitution || .1);
        var f = 0;
        var g = 0;
        var h = new HYPER.Physics.BoxJS.Vector2(0, 0);
        var i = 0;
        // TODO is this correct?
        f = Math.sqrt(a.staticFriction * b.staticFriction);
        g = Math.sqrt(a.dynamicFriction * b.dynamicFriction);
        // Figure out whether this is a resting collision, if so do not apply
        // any restitution
        var j = b.vel.x - a.vel.x, k = b.vel.y - a.vel.y;
        if (j * j + k * k < c.x * c.x + c.y * c.y + d) {
            e = 0;
        }
        var l = a.pos.x + a.size.width / 2 - (b.pos.x + b.size.width / 2), m = a.pos.y + a.size.height / 2 - (b.pos.y + b.size.height / 2);
        // Calculate half extends along x axis
        var n = (a.max.x - a.min.x) / 2, o = (b.max.x - b.min.x) / 2;
        // Calculate half extends along y axis
        var p = (a.max.y - a.min.y) / 2, q = (b.max.y - b.min.y) / 2;
        var r = false;
        // Overlap on x axis
        var s = n + o - Math.abs(l);
        if (s) {
            // Overlap on y axis
            var t = p + q - Math.abs(m);
            if (t) {
                // Find out which axis is the axis of least penetration
                if (s < t) {
                    // Point towards B knowing that n points from A to B
                    h.x = l < 0 ? 1 : -1;
                    h.y = 0;
                    i = s;
                    r = true;
                } else {
                    // Point towards B knowing that n points from A to B
                    h.x = 0;
                    h.y = m < 0 ? 1 : -1;
                    i = t;
                    r = true;
                }
            }
        }
        if (!r) {
            return false;
        }
        // Relative vel from a to b
        var j = b.vel.x - a.vel.x, k = b.vel.y - a.vel.y, u = j * h.x + k * h.y;
        // If the velocities are separating do nothing
        if (u > 0) {
            return;
        } else {
            // Correct penetration
            var v = -(1 + e) * u;
            v /= a.im + b.im;
            // Apply the impulse each box gets a impulse based on its mass
            // ratio
            if (b.type !== "boxJSParticle") {
                a.applyImpulse(-v * h.x, -v * h.y);
            }
            if (a.type !== "boxJSParticle") {
                b.applyImpulse(v * h.x, v * h.y);
            }
            // Apply Friction
            var w = j - h.x * u, x = k - h.y * u, y = Math.sqrt(w * w + x * x);
            if (y > d) {
                w /= y;
                x /= y;
            }
            var z = -(j * w + k * x);
            z /= a.im + b.im;
            // Don't apply tiny friction impulses
            if (Math.abs(z) < d) {}
            if (Math.abs(z) < v * f) {
                w = w * z;
                x = x * z;
            } else {
                w = w * -v * g;
                x = x * -v * g;
            }
            if (b.type !== "boxJSParticle") {
                a.applyImpulse(-w, -x);
            }
            if (a.type !== "boxJSParticle") {
                b.applyImpulse(w, x);
            }
        }
        var A = .7, B = .05, C = Math.max(i - B, 0) / (a.im + b.im);
        // Apply correctional impulse
        var D = C * h.x * A, E = C * h.y * A;
        if (a.isSleeping) {
            if (Math.abs(D * a.im) > a.sleepThreshold / 4 || Math.abs(E * a.im) > a.sleepThreshold / 4) {
                a.sleepCounter = 0;
                a.isSleeping = false;
            }
        }
        if (b.isSleeping) {
            if (Math.abs(D * b.im) > b.sleepThreshold / 4 || Math.abs(E * b.im) > b.sleepThreshold / 4) {
                b.sleepCounter = 0;
                b.isSleeping = false;
            }
        }
        a.pos.x -= D * a.im;
        a.pos.y -= E * a.im;
        b.pos.x += D * b.im;
        b.pos.y += E * b.im;
    };
    /**
     * Collide 2 objects
     * @private
     * @method HYPER.Physics.BoxJS.collide
     * @param {HYPER.Physics.BoxJS.Box} a First box to collide.
     * @param {HYPER.Physics.BoxJS.Box} b Second box to collide.
     * @param {HYPER.Physics.BoxJS.Vector2} gravity Gravity to be applied.
     * @param {number} epsilon Epsilon value to be used.
     */
    HYPER.Physics.BoxJS.collide = function(a, b, c, d) {
        if (a.type === "boxJSAABB" && b.type === "boxJSAABB") {
            HYPER.Physics.BoxJS.collideAABB(a, b, c, d);
        }
    };
    var b = [];
    var c = 0;
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
    HYPER.Physics.BoxJS.Engine = function(a) {
        a = a || {};
        a.gravity = a.gravity || {};
        /**
         * @property {number} zIndex - The z-index this will be rendered as.
         */
        this.zIndex = a.zIndex || 0;
        /**
         * @property {number} iterations=10 - The number of iterations.
         */
        this.iterations = 10;
        /**
         * @property {HYPER.Physics.BoxJS.Vector2} gravity - The gravity of the world.
         */
        this.gravity = new HYPER.Physics.BoxJS.Vector2(a.gravity.x || 0, a.gravity.y || 1);
        /**
         * @property {boolean} allowSleeping - Allow bodies to sleep.
         */
        this.allowSleeping = a.allowSleeping || false;
        this.contacts = [];
        this.contactsLength = 0;
        this.bodies = [];
        this.length = 0;
        this.debug = a.debug || false;
        this.render = a.render || no0p;
        this.update = a.update || no0p;
        a.bounds = a.bounds || {};
        this.bounds = {
            min: a.bounds.min || {
                x: -Infinity,
                y: -Infinity
            },
            max: a.bounds.max || {
                x: Infinity,
                y: Infinity
            }
        };
    };
    HYPER.Physics.BoxJS.Engine.EPSILON = 1e-4;
    HYPER.Physics.BoxJS.Engine.prototype = {
        /**
         * Finds and solves all collisions.
         * @private
         * @method HYPER.Physics.BoxJS.Engine.findCollisions
         */
        findCollisions: function() {
            var a = false;
            for (var b = 0; b < this.bodies.length; b++) {
                var c = this.bodies[b];
                for (var d = b + 1; d < this.bodies.length; d++) {
                    var e = this.bodies[d];
                    if (c.active === false || e.active === false) {
                        a = true;
                    }
                    if (c.isSleeping === true && e.isSleeping === true && !a) {
                        a = true;
                    }
                    if (c.isSleeping && e.fixed && !a) {
                        a = true;
                    } else if (c.fixed && e.isSleeping && !a) {
                        a = true;
                    }
                    if (c.fixed && e.fixed && !a) {
                        a = true;
                    }
                    if (c.im === 0 && e.im === 0 && !a) {
                        a = true;
                    }
                    for (var f = 0; f < e.material.dontCollideWith.length; f++) {
                        if (e.material.dontCollideWith[f] === c.material.name && !a) {
                            a = true;
                        }
                    }
                    for (var f = 0; f < c.material.dontCollideWith.length; f++) {
                        if (c.material.dontCollideWith[f] === e.material.name && !a) {
                            a = true;
                        }
                    }
                    if (a) {
                        a = false;
                        continue;
                    } else if (c.isOverlapping(e)) {
                        HYPER.Physics.BoxJS.collide(c, e, this.gravity, HYPER.Physics.BoxJS.Engine.EPSILON);
                    }
                }
            }
        },
        /**
         * Integrates all forces
         * @private
         * @method HYPER.Physics.BoxJS.Engine.integrateForces
         */
        integrateForces: function() {
            for (var a = 0; a < this.bodies.length; a++) {
                this.bodies[a].integrateForces(this.gravity);
            }
        },
        /**
         * Integrates all velocities.
         * @private
         * @method HYPER.Physics.BoxJS.Engine.integrateVelocities
         */
        integrateVelocities: function() {
            for (var a = 0; a < this.bodies.length; a++) {
                this.bodies[a].integratevel(this.gravity, this.allowSleeping);
                this.bodies[a].clearForces();
                this.bodies[a].updateBounds();
                this.bodies[a].updateMaterial();
            }
        },
        /**
         * Called by parent function.
         * @private
         * @method HYPER.Physics.BoxJS.Engine._update
         * @param {number} a - Information to be known about parent object.
         */
        _update: function(a) {
            for (var b = 0; b < this.bodies.length; b++) {
                this.bodies[b].oldPos.x = this.bodies[b].pos.x;
                this.bodies[b].oldPos.y = this.bodies[b].pos.y;
            }
            this.findCollisions();
            this.integrateForces();
            this.integrateVelocities();
            for (var b = 0; b < this.bodies.length; b++) {
                if (this.bodies[b].pos.x < this.bounds.min.x) {
                    this.bodies[b].pos.x = this.bounds.min.x;
                }
                if (this.bodies[b].pos.y < this.bounds.min.y) {
                    this.bodies[b].pos.y = this.bounds.min.y;
                }
                if (this.bodies[b].pos.x + this.bodies[b].size.width < this.bounds.min.x) {
                    this.bodies[b].pos.x = this.bounds.min.x - this.bodies[b].size.width;
                }
                if (this.bodies[b].pos.y + this.bodies[b].size.height < this.bounds.min.y) {
                    this.bodies[b].pos.y = this.bounds.min.y - this.bodies[b].size.height;
                }
                this.bodies[b].updateSleeping(this.allowSleeping);
            }
            this.update();
        },
        /**
         * Called by parent function.
         * @private
         * @method HYPER.Physics.BoxJS.Engine._render
         * @param {number} a - Information to be known about parent object.
         */
        _render: function(a) {
            if (this.debug) {
                HYPER.Graphics.styleToCTX(HYPER.Graphics.DEFAULT_STYLE, a.ctx);
                for (var b = 0; b < this.bodies.length; b++) {
                    if (this.bodies[b].active) {
                        a.ctx.beginPath();
                        //a.ctx.rect(this.bodies[i].pos.x - a.camera.x, this.bodies[i].pos.y - a.camera.y, this.bodies[i].size.width, this.bodies[i].size.height);
                        a.ctx.moveTo(this.bodies[b].min.x - a.camera.x, this.bodies[b].min.y - a.camera.y);
                        a.ctx.lineTo(this.bodies[b].max.x - a.camera.x, this.bodies[b].min.y - a.camera.y);
                        a.ctx.lineTo(this.bodies[b].max.x - a.camera.x, this.bodies[b].max.y - a.camera.y);
                        a.ctx.lineTo(this.bodies[b].min.x - a.camera.x, this.bodies[b].max.y - a.camera.y);
                        a.ctx.lineTo(this.bodies[b].min.x - a.camera.x, this.bodies[b].min.y - a.camera.y);
                        a.ctx.moveTo((this.bodies[b].min.x + this.bodies[b].max.x) / 2 - a.camera.x, (this.bodies[b].min.y + this.bodies[b].max.y) / 2 - a.camera.y);
                        a.ctx.lineTo(this.bodies[b].oldPos.x + this.bodies[b].size.width / 2 - a.camera.x, this.bodies[b].oldPos.y + this.bodies[b].size.height / 2 - a.camera.y);
                        if (this.bodies[b].isSleeping && this.allowSleeping) {
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
        addBody: function(a) {
            if (a.type === "sprite") {
                this.bodies.push(a.body);
                this.length++;
            } else if (a.type === "group") {
                for (var b = 0; b < a.group.length; b++) {
                    this.bodies.push(a.group[b].body);
                    this.length++;
                }
                a.physics = "BoxAABB";
                a.world = this;
            } else if (a.type === "boxJSAABB") {
                this.bodies.push(a);
                this.length++;
            }
        },
        /**
         * Remove a object from the engine.
         * @method HYPER.Physics.BoxJS.Engine.removeBody
         * @param {object} box - Add a AABB box, or a sprite with physics enabled.
         */
        removeBody: function(a) {
            for (var b = 0; b < this.bodies.length; b++) {
                if (this.bodies[b] === a) {
                    this.bodies.splice(b, 1);
                    this.length--;
                }
            }
        }
    };
    /**
     * Enable a sprite for physics.
     * @method HYPER.Physics.BoxJS.enable
     * @param {HYPER.Sprite} sprite First box to collide.
     */
    HYPER.Physics.BoxJS.enable = function(a, b) {
        if (a.type === "sprite") {
            b = b || {};
            b.x = b.x || a.x || 0;
            b.y = b.y || a.y || 0;
            b.width = b.width || a.width;
            b.height = b.height || a.height;
            b.center = {
                x: a.rotX || b.width / 2,
                y: a.rotY || b.height / 2
            };
            b.angularPos = a.angle || 0;
            a.body = new HYPER.Physics.BoxJS.Box(b);
        }
        if (a.type === "group") {
            for (var c = 0; c < a.group.length; c++) {
                b = b || {};
                b.x = b.x || a.group[c].x || 0;
                b.y = b.y || a.group[c].y || 0;
                b.width = b.width || a.group[c].width;
                b.height = b.height || a.group[c].height;
                b.center = {
                    x: a.group[c].rotX || b.width / 2,
                    y: a.group[c].rotY || b.height / 2
                };
                b.angularPos = a.angle || 0;
                a.group[c].body = new AABB(b);
            }
            a.physics = "BoxAABB";
        }
    };
})();

(function() {
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
    HYPER.Particle.Particle = function(a) {
        if (typeof a.startColor === "string") {
            var b = a.startColor;
            a.startColor = [ HYPER.Graphics.hexToRed(b), HYPER.Graphics.hexToGreen(b), HYPER.Graphics.hexToBlue(b), a.startAlpha || 1 ];
        }
        if (typeof a.endColor === "string") {
            var b = a.endColor;
            a.endColor = [ HYPER.Graphics.hexToRed(b), HYPER.Graphics.hexToGreen(b), HYPER.Graphics.hexToBlue(b), a.endAlpha || 1 ];
        }
        /**
         * @property {string} _ID - The specific ID for this object.
         */
        this._ID = "particle " + Math.random() + "" + Math.random();
        /**
         * @property {object} style - Graphics style for the particles.
         */
        this.style = a.style || HYPER.Graphics.DEFAULT_STYLE;
        /**
         * @property {number} x - The X location of the object.
         */
        this.x = a.x || 0;
        /**
         * @property {number} y - The Y location of the object.
         */
        this.y = a.y || 0;
        /**
         * @property {number} startSize - The size the particles start out as.
         */
        this.startSize = a.startSize || a.size || 10;
        /**
         * @property {number} endSize - The size the particles end up as.
         */
        this.endSize = a.endSize || a.size || 0;
        /**
         * @property {number} startAlpha - The alpha the particles start out as.
         */
        this.startAlpha = a.startAlpha || 0;
        /**
         * @property {number} endAlpha - The alpha the particles end up as.
         */
        this.endAlpha = a.endAlpha || 0;
        /**
         * @property {object} startColor - The color the particles start out as.
         */
        this.startColor = a.startColor || [ 255, 69, 0, this.startAlpha ];
        /**
         * @property {object} endColor - The color the particles end up as.
         */
        this.endColor = a.endColor || [ 70, 70, 70, this.endAlpha ];
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
            angle: 0
        };
        /**
         * @property {boolean} alive - if the object is alive.
         */
        this.alive = a.alive || false;
        /**
         * @property {number} lifeTime - How long the object should be alive.
         */
        this.lifeTime = a.lifeTime || 100;
        /**
         * @property {number} lifeTimeTotal - Total time of how long the object should be alive.
         */
        this.lifeTimeTotal = a.lifeTimeTotal || a.lifeTime || 100;
        this._color = [];
    };
    HYPER.Particle.Particle.prototype = {
        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._update
         * @param {number} a - Information to be known about parent object.
         */
        _update: function(a) {
            if (this.alive) {
                if (this.x - this.size > a.camera.x + a.camera.width || this.y - this.size > a.camera.y + a.camera.height || this.x + this.size < a.camera.x || this.y + this.size < a.camera.y) {} else {
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
        _render: function(a, b, c) {
            if (this.alive) {
                c = c || this.style;
                if (this.x - this.size > a.camera.x + a.camera.width || this.y - this.size > a.camera.y + a.camera.height || this.x + this.size < a.camera.x || this.y + this.size < a.camera.y) {} else {
                    var d = this.lifeTime / this.lifeTimeTotal;
                    var e = (this.startSize - this.endSize) * d + this.endSize;
                    this._color = [ Math.floor((this.startColor[0] - this.endColor[0]) * d + this.endColor[0]), Math.floor((this.startColor[1] - this.endColor[1]) * d + this.endColor[1]), Math.floor((this.startColor[2] - this.endColor[2]) * d + this.endColor[2]), (this.startColor[3] - this.endColor[3]) * d + this.endColor[3] ];
                    var f = "rgb(" + this._color[0] + ", " + this._color[1] + ", " + this._color[2] + ")";
                    var g = this._color[3] * c.alpha;
                    if (b.type === "bitmap") {
                        HYPER.Graphics.Draw(a.ctx, c).setFillColor(f).setStrokeColor(f).setAlpha(g).bitmap(b, this.x - b.width / 2 - a.camera.x, this.y - b.height / 2 - a.camera.y, this.size, b.height / this.width * this.size, 0, 0, b.width, b.height, this.angle, b.width / 2, b.height / 2);
                    } else {
                        HYPER.Graphics.Draw(a.ctx, c).setFillColor(f).setStrokeColor(f).setAlpha(g).circle(this.x - a.camera.x, this.y - a.camera.y, e);
                    }
                }
            }
        }
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
    HYPER.Particle.Emitter = function(a) {
        a = a || {};
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
        this.texture = a.texture || {};
        /**
         * @property {number} x - The X location of the object.
         */
        this.x = a.x || 0;
        /**
         * @property {number} y - The Y location of the object.
         */
        this.y = a.y || 0;
        /**
         * @property {number} width - The width of the object.
         */
        this.width = a.width || this.texture.width || 0;
        /**
         * @property {number} height - The height of the object.
         */
        this.height = a.height || this.texture.height || 0;
        /**
         * @property {number} lifeTime - How long the object should be alive.
         */
        this.lifeTime = a.lifeTime || 100;
        /**
         * @property {number} lifeTimeTotal - Total time of how long the object should be alive.
         */
        this.lifeTimeTotal = a.lifeTimeTotal || a.lifeTime || 100;
        /**
         * @property {object} style - Graphics style for the particles.
         */
        this.style = a.style || HYPER.Graphics.DEFAULT_STYLE;
        /**
         * @property {boolean} fadeOut - If the particles should fade out.
         */
        this.fadeOut = a.fadeout || false;
        /**
         * @property {number} maxParticles - Maxium number of particles.
         */
        this.maxParticles = a.maxParticles || 1e3;
        /**
         * @property {number} startSize - The size the particles start out as.
         */
        this.startSize = a.startSize || a.size || 10;
        /**
         * @property {number} endSize - The size the particles end up as.
         */
        this.endSize = a.endSize || a.size || 0;
        /**
         * @property {number} startAlpha - The alpha the particles start out as.
         */
        this.startAlpha = a.startAlpha || a.alpha || this.style.alpha || 0;
        /**
         * @property {number} endAlpha - The alpha the particles end up as.
         */
        this.endAlpha = a.endAlpha || a.alpha || this.style.alpha || 0;
        /**
         * @property {function} render - User defined rendering, good for little extra things you want rendered.
         */
        this.render = a.render || no0p;
        /**
         * @property {function} update - User defined updating, good for little extra things you want updated.
         */
        this.update = a.update || no0p;
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
        if (typeof a.startColor === "string") {
            var b = a.startColor;
            a.startColor = [ HYPER.Graphics.hexToRed(b), HYPER.Graphics.hexToGreen(b), HYPER.Graphics.hexToBlue(b), this.startAlpha ];
        }
        if (typeof a.endColor === "string") {
            var b = a.endColor;
            a.endColor = [ HYPER.Graphics.hexToRed(b), HYPER.Graphics.hexToGreen(b), HYPER.Graphics.hexToBlue(b), this.endAlpha ];
        }
        /**
         * @property {object} startColor - The color the particles start out as.
         */
        this.startColor = a.startColor || [ 255, 69, 0, 1 ];
        /**
         * @property {object} endColor - The color the particles end up as.
         */
        this.endColor = a.endColor || [ 70, 70, 70, 0 ];
        /**
         * @property {object} gravity - The gravity to be applied to the particles.
         */
        this.gravity = a.gravity || {
            x: 0,
            y: 0
        };
        for (var c = 0; c < this.maxParticles; c++) {
            this.particles[c] = new HYPER.Particle.Particle({
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
                lifeTimeTotal: this.lifeTimeTotal
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
        emit: function(a, b, c, d) {
            d = d || 1;
            for (var e = 0; e < this.particles.length; e++) {
                if (!this.particles[e].alive) {
                    var f = HYPER.Math.degreesToRadians(HYPER.Math.random(a, b, true));
                    this.particles[e].alive = true;
                    this.particles[e].x = HYPER.Math.random(this.x, this.x + this.width);
                    this.particles[e].y = HYPER.Math.random(this.y, this.y + this.height);
                    this.particles[e].vel.x = Math.cos(f) * c;
                    this.particles[e].vel.y = Math.sin(f) * c;
                    this.particles[e].startSize = this.startSize;
                    this.particles[e].endSize = this.endSize;
                    this.particles[e].startColor = this.startColor;
                    this.particles[e].endColor = this.endColor;
                    this.particles[e].startAlpha = this.startAlpha;
                    this.particles[e].endAlpha = this.endAlpha;
                    this.particles[e].style = this.style;
                    this.particles[e].lifeTime = this.lifeTime;
                    this.particles[e].lifeTimeTotal = this.lifeTimeTotal;
                    d--;
                    if (d <= 0) {
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
        setPos: function(a, b) {
            this.x = a;
            this.y = b;
            if (this.body.type === "boxJSAABB") {
                this.body.pos.x = a;
                this.body.pos.y = b;
            }
        },
        /**
         * Locks the object to any other object that has a X and Y property.
         * @method HYPER.Sprite.lockTo
         * @param {object} to - the object this object is locked to.
         * @param {number} x - The X offset that the object will be locked at.
         * @param {number} y - The Y offset that the object will be locked at.
         */
        lockTo: function(a, b, c) {
            if (a) {
                this.locked = a;
                this.lockedOffset.x = b || 0;
                this.lockedOffset.y = c || 0;
            }
        },
        /**
         * Unlocks the object.
         * @method HYPER.Sprite.unlock
         */
        unlock: function() {
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
        _update: function(a) {
            for (var b = 0; b < this.particles.length; b++) {
                if (this.particles[b].alive) {
                    this.particles[b].vel.x += this.gravity.x;
                    this.particles[b].vel.y += this.gravity.y;
                    this.particles[b]._update(a);
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
        _render: function(a) {
            for (var b = 0; b < this.particles.length; b++) {
                if (this.particles[b].alive) {
                    this.particles[b]._render(a, this.texture, this.style);
                }
            }
            a.ctx.globalAlpha = 1;
            HYPER.Graphics.Draw(a.ctx).setAlpha(1);
        }
    };
})();

(function() {
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
    HYPER.Group = function(a) {
        a = a || {};
        /**
         * @property {string} _ID - The specific ID for this object.
         */
        this._ID = "group " + Math.random() + "" + Math.random();
        /**
         * @property {object} texture - The texture of the object to be rendered.
         */
        this.texture = a.texture || {
            _render: no0p,
            _update: no0p,
            frames: {},
            bitmap: {},
            type: ""
        };
        if (this.texture.type === "animation") {}
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
                spriteSheet: this.texture
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
        this.style = a.style || HYPER.Graphics.DEFAULT_STYLE;
        /**
         * @property {number} zIndex - The z-index this will be rendered as.
         */
        this.zIndex = a.zIndex || 0;
        /**
         * @property {number} x - The X location of the object.
         */
        this.x = a.x || 0;
        /**
         * @property {number} y - The Y location of the object.
         */
        this.y = a.y || 0;
        /**
         * @property {number} width - The width of the object.
         */
        this.width = a.width || this.texture.width || 32;
        /**
         * @property {number} height - The height of the object.
         */
        this.height = a.height || this.texture.height || 32;
        /**
         * @property {number} angle - The angle of the object.
         */
        this.angle = a.angle || 0;
        /**
         * @property {number} rotX - The X rotation point of the object.
         */
        this.rotX = a.rotX || this.width / 2;
        /**
         * @property {number} rotY - The Y rotation point of the object.
         */
        this.rotY = a.rotY || this.height / 2;
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
        this.lifeTime = a.lifeTime || 0;
        /**
         * @property {number} health - The health of the object.
         */
        this.health = a.health || 1;
        /**
         * @property {number} heamaxHealthlth - The maxium health of the object.
         */
        this.maxHealth = a.health || 1;
        /**
         * @property {number} scaleX - The scale X of the object.
         */
        this.scaleX = a.scaleX || 1;
        /**
         * @property {number} scaleY - The scale Y of the object.
         */
        this.scaleY = a.scaleY || 1;
        /**
         * @property {number} scaleX - Should the object be drawn backwards?
         */
        this.flippedX = a.flippedX || false;
        /**
         * @property {number} scaleY - Should the object be drawn up-side-down?
         */
        this.flippedY = a.flippedY || false;
        /**
         * @property {boolean} autoCull - Should the object be drawn if not visable on the screen?
         */
        this.autoCull = a.autoCull || false;
        /**
         * @property {function} render - User defined rendering, good for little extra things you want rendered.
         */
        this.render = a.render || no0p;
        /**
         * @property {function} update - User defined updating, good for little extra things you want updated.
         */
        this.update = a.update || no0p;
        /**
         * @property {function} onDeath - User defined updating, called on objects death.
         */
        this.onDeath = a.onDeath || no0p;
        /**
         * @property {function} onClick - What should happen if the object is clicked?
         */
        this.onClick = a.onClick || no0p;
        /**
         * @property {function} onUp - What should happen if the mouse is lifted on the object?
         */
        this.onUp = a.onUp || no0p;
        /**
         * @property {function} onDown - What should happen if the mouse is dropped on the object?
         */
        this.onDown = a.onDown || no0p;
        /**
         * @property {function} onHold - What should happen if the object is held down by the mouse?
         */
        this.onHold = a.onHold || no0p;
        /**
         * @property {function} onDblClick - What should happen if the object is double clicked?
         */
        this.onDblClick = a.onDblClick || no0p;
        /**
         * @property {function} onHover - What should happen if the object is hovered over?
         */
        this.onHover = a.onHover || no0p;
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
        create: function(a) {
            a = a || {};
            var b = false;
            for (var c = 0; c < this.group.length; c++) {
                if (!this.group[c].alive) {
                    b = true;
                    this.group[c].texture = a.texture || this.texture;
                    this.group[c].style = a.style || this.style;
                    this.group[c].zIndex = a.zIndex || this.zIndex;
                    this.group[c].x = a.x || this.x;
                    this.group[c].y = a.y || this.x;
                    this.group[c].width = a.width || this.width;
                    this.group[c].height = a.height || this.height;
                    this.group[c].angle = a.angle || this.angle;
                    this.group[c].rotX = a.rotX || this.rotX;
                    this.group[c].rotY = a.rotY || this.rotY;
                    this.group[c].visible = true;
                    this.group[c].active = true;
                    this.group[c].alive = true;
                    this.group[c].lifeTime = a.lifeTime || this.lifeTime;
                    this.group[c].health = a.health || this.health;
                    this.group[c].maxHealth = a.health || this.maxHealth;
                    this.group[c].scaleX = a.scaleX || this.scaleX;
                    this.group[c].scaleY = a.scaleY || this.scaleY;
                    this.group[c].flippedX = a.flippedX || this.flippedX;
                    this.group[c].flippedY = a.flippedY || this.flippedY;
                    this.group[c].autoCull = a.autoCull || this.autoCull;
                    this.group[c].render = a.render || this.render;
                    this.group[c].update = a.update || this.update;
                    this.group[c].onDeath = a.onDeath || this.onDeath;
                    this.group[c].onClick = a.onClick || this.onClick;
                    this.group[c].onUp = a.onUp || this.onUp;
                    this.group[c].onDown = a.onDown || this.onDown;
                    this.group[c].onHold = a.onHold || this.onHold;
                    this.group[c].onDblClick = a.onDblClick || this.onDblClick;
                    this.group[c].onHover = a.onHover || this.onHover;
                    this.group[c].revive();
                    return this.group[c];
                    break;
                }
            }
            if (!b) {
                var d = this.group.push(new HYPER.Sprite({
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
                    onDeath: a.onDeath || this.onDeath
                }));
                if (this.physics === "BoxAABB") {
                    HYPER.Physics.BoxJS.enable(this.group[d - 1]);
                    this.world.addBody(this.group[d - 1]);
                }
                return this.group[d - 1];
            }
        },
        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._update
         * @param {number} a - Information to be known about parent object.
         */
        _update: function(a) {
            for (var b = 0; b < this.group.length; b++) {
                if (this.group[b].alive) {
                    this.group[b]._update(a);
                }
            }
        },
        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._render
         * @param {number} a - Information to be known about parent object.
         */
        _render: function(a) {
            for (var b = 0; b < this.group.length; b++) {
                if (this.group[b].alive) {
                    this.group[b]._render(a);
                }
            }
        }
    };
})();

(function() {
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
     * @param {number} e.camera.width=800 Width of the camera.
     * @param {number} e.camera.height=600 Height of the camera.
     * @param {object} e.view The view object, change the position and view of the screen on the webpage.
     * @param {number} e.view.x=0 X location of the screen.
     * @param {number} e.view.y=0 Y location of the screen.
     * @param {number} e.view.width=800 Width of the screen.
     * @param {number} e.view.height=600 Height of the screen.
     */
    HYPER.Screen = function(a) {
        if (!a) {
            console.error("No settings defined.");
            return;
        }
        a.view = a.view || {};
        a.camera = a.camera || {};
        var b = this;
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
        this.canvas = document.getElementById(a.canvas);
        /**
         * @property {object} canvas - The ctx of the canvas that all children are rendered directly to.
         */
        this.ctx = this.canvas.getContext("2d");
        /**
         * @property {boolean} antiAliasing - Whether or not the canvas should use canvas antiAliasing.
         */
        this.antiAliasing = a.antiAliasing || false;
        /**
         * @property {boolean} autoClear - Whether or not the canvas should clear itself before every frame.
         */
        this.autoClear = a.autoClear || false;
        /**
         * @property {boolean} autoClear - Whether or not to render objects not shown on the screen.
         */
        this.smartRendering = a.smartRendering || false;
        /**
         * @property {boolean} motionBlur - Whether or not motion blur is enabled.
         */
        this.motionBlur = a.motionBlur || false;
        /**
         * @property {object} camera - The camera object, change the position and view to change what is shown.
         */
        this.camera = {
            /**
             * @property {number} camera.x - X location of the camera.
             */
            x: a.camera.x || 0,
            /**
             * @property {number} camera.y - Y location of the camera.
             */
            y: a.camera.y || 0,
            /**
             * @property {number} camera.width - Width of the camera.
             */
            width: a.camera.width || 800,
            /**
             * @property {number} camera.height - Height of the camera.
             */
            height: a.camera.height || 600
        };
        /**
         * @property {object} view - The view and position that the screen is on the webpage.
         */
        this.view = {
            /**
             * @property {number} view.x - X location of the screen.
             */
            x: a.view.x || 0,
            /**
             * @property {number} view.y - Y location of the screen.
             */
            y: a.view.y || 0,
            /**
             * @property {number} view.width - Width of the screen.
             */
            width: a.view.width || 800,
            /**
             * @property {number} view.height - Height of the screen.
             */
            height: a.view.height || 600
        };
        /**
         * @property {object} passedINFO - Info that is passed to children every loop.
         */
        this.passedINFO = {};
        /**
         * @property {array} pointerDATA - pointer data that is passed to children every loop.
         */
        this.pointerDATA = [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {} ];
        /**
         * @property {function} render - user defined function that is called at the end of every frame.
         */
        this.render = a.render || no0p;
        /**
         * @property {function} update - user defined function that is called at the end of every tick.
         */
        this.update = a.update || no0p;
        /**
         * @property {object} currentState - The state that is currently active.
         */
        this.currentState = a.currentState || {
            _init: no0p,
            _render: no0p,
            _update: no0p
        };
        /**
         * @property {function} onClick - Function that is called every time the screen is clicked.
         */
        this.onClick = a.onClick || no0p;
        /**
         * @property {function} onUp - Function that is called every time the screen is clicked up.
         */
        this.onUp = a.onUp || no0p;
        /**
         * @property {function} onDown - Function that is called every time the screen is clicked down.
         */
        this.onDown = a.onDown || no0p;
        /**
         * @property {function} onHold - Function that is called every tick the screen is being clicked by the mouse pointer.
         */
        this.onHold = a.onHold || no0p;
        /**
         * @property {function} onDblClick - Function that is called every time the screen is double clicked.
         */
        this.onDblClick = a.onDblClick || no0p;
        /**
         * @property {function} onKeyUp - Function that is called every time a key is lifted.
         */
        this.onKeyUp = a.onKeyUp || no0p;
        /**
         * @property {function} onKeyDown - Function that is called every time a key is pushed.
         */
        this.onKeyDown = a.onKeyDown || no0p;
        /**
         * @property {function} onKeyHeld - Function that is called every time a key is held down.
         */
        this.onKeyHeld = a.onKeyHeld || no0p;
        /**
         * @property {function} showFPS - Show the current FPS.
         */
        this.showFPS = a.showFPS || false;
        /**
         * @private
         * @property {function} _tick - stores all update speed settings.
         */
        this._tick = {
            FPS: a.tickFPS || a.tickfps || a.fps || 30,
            _now: 0,
            _then: HYPER.CURRENT_DATE,
            _interval: 33.33333333,
            _delta: 0
        };
        /**
         * @private
         * @property {function} _looper - function that loops the render and update functions.
         */
        this._looper = function() {
            b._update();
            b._render();
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
        setFPS: function(a) {
            this._tick.FPS = a;
            this._tick._interval = 1e3 / this._tick.FPS;
        },
        /**
         * Sets the current state to the specified state.
         * @method HYPER.Screen.setCurrentState
         * @param {HYPER.State} state - The desired state.
         */
        setCurrentState: function(a) {
            if (a.type === "state") {
                this.currentState = a;
                this.currentState._init();
            } else {
                console.error(a + "is not a state.");
            }
        },
        /**
         * Updates the screen view to match the view and camera varaibles.
         * @private
         * @method HYPER.Screen._updateScreenView
         */
        _updateScreenView: function() {
            this.view.x = this.canvas.offsetLeft;
            this.view.y = this.canvas.offsetTop;
            this.camera.x = 0;
            this.camera.y = 0;
            if (this.view.width + "px" != this.canvas.style.width || this.view.height + "px" != this.canvas.style.height) {
                this.canvas.style.width = this.view.width + "px";
                this.canvas.style.height = this.view.height + "px";
            }
            if (this.camera.width != this.canvas.width || this.camera.height != this.canvas.height) {
                this.canvas.width = this.camera.width;
                this.canvas.height = this.camera.height;
            }
        },
        /**
         * Updates the pointer data that is passed to the children.
         * @private
         * @method HYPER.Screen._updatePointerData
         */
        _updatePointerData: function() {
            for (var a = 0; a < 10; a++) {
                this.pointerDATA[a]._ID = a;
                this.pointerDATA[a].trueX = HYPER.Input.Pointer.point[a].x - this.canvas.offsetLeft;
                this.pointerDATA[a].trueY = HYPER.Input.Pointer.point[a].y - this.canvas.offsetTop;
                this.pointerDATA[a].scaleFactorX = this.camera.width / this.view.width;
                this.pointerDATA[a].scaleFactorY = this.camera.height / this.view.height;
                this.pointerDATA[a].x = this.pointerDATA[a].trueX * this.pointerDATA[a].scaleFactorX;
                this.pointerDATA[a].y = this.pointerDATA[a].trueY * this.pointerDATA[a].scaleFactorY;
                this.pointerDATA[a].down = HYPER.Input.Pointer.point[a].down;
                this.pointerDATA[a].up = HYPER.Input.Pointer.point[a].up;
                this.pointerDATA[a].dblclick = HYPER.Input.Pointer.point[a].dblclick;
                this.pointerDATA[a].hold = HYPER.Input.Pointer.point[a].hold;
                this.pointerDATA[a].click = HYPER.Input.Pointer.point[a].click;
            }
            this.passedINFO.pointerDATA = this.pointerDATA;
        },
        /**
         * Updates the info that is passed to the children.
         * @private
         * @method HYPER.Screen._updatePassedInfo
         */
        _updatePassedInfo: function() {
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
        _updateRenderingSettings: function() {
            // Set auto clear
            if (this.autoClear === true) {
                HYPER.Graphics.Draw(this.ctx).clearRect(0, 0, this.canvas.width, this.canvas.height);
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
        _onClick: function(a) {
            this._updatePointerData();
            this.currentState._onClick(this.pointerDATA[a]);
            this.onClick(this.pointerDATA[a]);
        },
        /**
         * Called on the mouse up event.
         * @private
         * @method HYPER.Screen._onUp
         */
        _onUp: function(a) {
            this._updatePointerData();
            this.currentState._onUp(this.pointerDATA[a]);
            this.onUp(this.pointerDATA[a]);
        },
        /**
         * Called on the mouse down event.
         * @private
         * @method HYPER.Screen._onDown
         */
        _onDown: function(a) {
            this._updatePointerData();
            this.currentState._onDown(this.pointerDATA[a]);
            this.onDown(this.pointerDATA[a]);
        },
        /**
         * Called when the mouse pointer is held down.
         * @private
         * @method HYPER.Screen._onHold
         */
        _onHold: function(a) {
            this._updatePointerData();
            this.currentState._onHold(this.pointerDATA[a]);
            this.onHold(this.pointerDATA[a]);
        },
        /**
         * Called when the user double clicks.
         * @private
         * @method HYPER.Screen._onDblClick
         */
        _onDblClick: function(a) {
            this._updatePointerData();
            this.currentState._onDblClick(this.pointerDATA[a]);
            this.onDblClick(this.pointerDATA[a]);
        },
        /**
         * Called on the key up.
         * @private
         * @method HYPER.Screen._onKeyUp
         */
        _onKeyUp: function(a) {
            this.currentState._onKeyUp(a);
            this.onKeyUp(a);
        },
        /**
         * Called on the key down.
         * @private
         * @method HYPER.Screen._onKeyDown
         */
        _onKeyDown: function(a) {
            this.currentState._onKeyDown(a);
            this.onKeyDown(a);
        },
        /**
         * Called when a key is held down.
         * @private
         * @method HYPER.Screen._onKeyHeld
         */
        _onKeyHeld: function(a) {
            this.currentState._onKeyHeld(a);
            this.onKeyHeld(a);
        },
        /**
         * Called every frame.
         * @private
         * @method HYPER.Screen._render
         */
        _render: function() {
            this._updateRenderingSettings();
            this._updatePassedInfo();
            this.currentState._render(this.passedINFO);
            this.render(this.passedINFO);
        },
        /**
         * Called every tick.
         * @private
         * @method HYPER.Screen._update
         */
        _update: function() {
            this._tick._now = HYPER.CURRENT_DATE;
            this._tick._delta = this._tick._now - this._tick._then;
            if (this._tick._delta > this._tick._interval) {
                this._tick._then = this._tick._now - this._tick._delta % this._tick._interval;
                // Game Code
                this._updateScreenView();
                this._updatePassedInfo();
                this.currentState._update(this.passedINFO);
                this.update(this.passedINFO);
            }
        },
        /**
         * Call to initalize the screen.
         * @method HYPER.Screen.init
         */
        init: function() {
            this.currentState._init();
            HYPER.Timer.addOnTick(this._looper);
        }
    };
})();

(function() {
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
     * @param {number} e.camera.width=800 Width of the camera.
     * @param {number} e.camera.height=600 Height of the camera.
     * @param {object} e.view The view object, change the position and view of the State on the webpage.
     * @param {number} e.view.x=0 X location of the State.
     * @param {number} e.view.y=0 Y location of the State.
     * @param {number} e.view.width=800 Width of the State.
     * @param {number} e.view.height=600 Height of the State.
     */
    HYPER.State = function(a) {
        a = a || {};
        a.camera = a.camera || {};
        a.view = a.view || {};
        var b = this;
        /**
         * @property {string} _ID - The specific ID for this object.
         */
        this._ID = "state " + Math.random() + "" + Math.random();
        /**
         * @property {string} type - TheType of object this is.
         */
        this.type = "state";
        /**
         * @property {object} style - The style used for this object.
         */
        this.style = a.style || HYPER.Graphics.DEFAULT_STYLE;
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
            FPS: a.tickFPS || a.tickfps || a.fps || 30,
            _now: 0,
            _then: HYPER.CURRENT_DATE,
            _interval: 1e3 / 30,
            _delta: 0
        };
        /**
         * @property {string} backgroundColor - Background color of the state.
         */
        this.backgroundColor = a.backgroundColor || "#000000";
        /**
         * @property {string} backgroundColor - Background color of the state.
         */
        this.antiAliasing = a.antiAliasing || false;
        /**
         * @property {boolean} autoClear - Whether or not to clear the canvas before every frame.
         */
        this.autoClear = a.autoClear || false;
        /**
         * @property {boolean} smartRendering - Whether or not to render objects that are not on the screen.
         */
        this.smartRendering = a.smartRendering || false;
        /**
         * @property {boolean} motionBlur - Whether or not to render objects with a motion blur.
         */
        this.motionBlur = a.motionBlur || false;
        /**
         * @property {object} camera - The camera object, change the position and view to change what is shown.
         */
        this.camera = {
            /**
             * @property {number} camera.x - X location of the camera.
             */
            x: a.camera.x || 0,
            /**
             * @property {number} camera.y - Y location of the camera.
             */
            y: a.camera.y || 0,
            /**
             * @property {number} camera.width - Width of the camera.
             */
            width: a.camera.width || 800,
            /**
             * @property {number} camera.height - Height of the camera.
             */
            height: a.camera.height || 600
        };
        /**
         * @property {object} view - The object on the screen.
         */
        this.view = {
            /**
             * @property {number} view.x - X location on the screen.
             */
            x: a.view.x || 0,
            /**
             * @property {number} view.y - Y location on the screen.
             */
            y: a.view.y || 0,
            /**
             * @property {number} view.width - Width on the screen.
             */
            width: a.view.width || 800,
            /**
             * @property {number} view.height - Height on the screen.
             */
            height: a.view.height || 600
        };
        /**
         * @property {object} passedINFO - Info that is passed to children every loop.
         */
        this.passedINFO = {
            pointerDATA: []
        };
        /**
         * @property {array} pointerDATA - pointer data that is passed to children every loop.
         */
        this.pointerDATA = [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {} ];
        /**
         * @property {array} children - Array of all children in the screen.
         */
        this.children = [];
        /**
         * @property {array} children - Whether or not to use z-index when rendering.
         */
        this.enableZindex = a.enableZindex || false;
        /**
         * @property {function} render - user defined function that is called at the end of every frame.
         */
        this.render = a.render || no0p;
        /**
         * @property {function} update - user defined function that is called at the end of every tick.
         */
        this.update = a.update || no0p;
        /**
         * @property {function} update - user defined function that is called when the object is initalized.
         */
        this.init = a.init || no0p;
        /**
         * @property {function} onClick - Function that is called every time the screen is clicked.
         */
        this.onClick = a.onClick || no0p;
        /**
         * @property {function} onUp - Function that is called every time the screen is clicked up.
         */
        this.onUp = a.onUp || no0p;
        /**
         * @property {function} onDown - Function that is called every time the screen is clicked down.
         */
        this.onDown = a.onDown || no0p;
        /**
         * @property {function} onHold - Function that is called every tick the screen is being clicked by the mouse pointer.
         */
        this.onHold = a.onHold || no0p;
        /**
         * @property {function} onDblClick - Function that is called every time the screen is double clicked.
         */
        this.onDblClick = a.onDblClick || no0p;
        /**
         * @property {function} onKeyUp - Function that is called every time a key is lifted.
         */
        this.onKeyUp = a.onKeyUp || no0p;
        /**
         * @property {function} onKeyDown - Function that is called every time a key is pushed.
         */
        this.onKeyDown = a.onKeyDown || no0p;
        /**
         * @property {function} onKeyHeld - Function that is called every time a key is held down.
         */
        this.onKeyHeld = a.onKeyHeld || no0p;
    };
    HYPER.State.prototype = {
        /**
         * Sets the update FPS of the object. Note that this is the fastest all children can also update.
         * @method HYPER.State.setTickFPS
         * @param {number} fps - The desired FPS.
         */
        setTickFPS: function(a) {
            this._tick.FPS = a;
            this._tick._interval = 1e3 / this._tick.FPS;
        },
        /**
         * Adds children to the object.
         * @method HYPER.State.addChild
         * @param {object} child - The child you want to add.
         */
        addChild: function(a) {
            this.children.push(a);
        },
        /**
         * Removes children from the object.
         * @method HYPER.State.removeChild
         * @param {object} child - The child you want to remove.
         */
        removeChild: function(a) {
            for (var b = 0; b < this.children.length; b++) {
                if (a._ID === this.children[b]._ID) {
                    this.children.splice(b, 1);
                }
            }
        },
        /**
         * Removes all children from the object.
         * @method HYPER.State.removeAllChildren
         */
        removeAllChildren: function() {
            this.children.length = 0;
        },
        /**
         * updates the renderer.
         * @private
         * @method HYPER.State._updateRender
         * @param {object} a - Rendering info.
         */
        _updateRender: function(a) {
            if (this.backgroundColor === "clear" || this.autoClear) {
                HYPER.Graphics.Draw(this.ctx).clearRect(0, 0, this.canvas.width, this.canvas.height);
            } else {
                HYPER.Graphics.Draw(this.ctx).setFillColor(this.backgroundColor).rect(0, 0, this.canvas.width, this.canvas.height);
            }
        },
        /**
         * renders the children.
         * @private
         * @method HYPER.State._renderChildren
         * @param {object} a - Rendering info.
         */
        _renderChildren: function(a) {
            if (this.enableZindex === true) {
                // Loop through all z-indexes
                for (var b = 0; b < this.children.length; b++) {
                    // Loop through all children
                    for (var c = 0; c < this.children.length; c++) {
                        // Check to see if the z-index is correct.
                        if (Math.round(this.children[c].zIndex) === b) {
                            // Check to see if smart rendering is turned on.
                            if (this.smartRendering === true) {
                                // Check to see if the desplayed object overlaps the screen.
                                if (HYPER.Physics.checkAABBCollision(this.view, this.children[c])) {
                                    this.children[c]._render(this.passedINFO);
                                }
                            } else {
                                this.children[c]._render(this.passedINFO);
                            }
                        }
                    }
                }
            } else {
                // loop through all children
                for (var c = 0; c < this.children.length; c++) {
                    // Check to see if smart rendering is turned on.
                    if (this.smartRendering === true) {
                        // Check to see if the desplayed object overlaps the screen.
                        if (HYPER.Physics.checkAABBCollision(this.view, this.children[c])) {
                            // render child
                            this.children[c]._render(this.passedINFO);
                        }
                    } else {
                        // render child
                        this.children[c]._render(this.passedINFO);
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
        _updateChildren: function(a) {
            // loop through all children.
            for (var b = 0; b < this.children.length; b++) {
                //update child
                this.children[b]._update(this.passedINFO);
            }
        },
        /**
         * Updates the pointers.
         * @private
         * @method HYPER.State._updatePointerData
         * @param {object} a - Updating info.
         */
        _updatePointerData: function(a) {
            //console.log(this);
            for (var b = 0; b < 10; b++) {
                this.pointerDATA[b].trueX = a.pointerDATA[b].x - this.view.x + this.camera.x;
                this.pointerDATA[b].trueY = a.pointerDATA[b].y - this.view.y + this.camera.y;
                this.pointerDATA[b].scaleFactorX = this.camera.width / this.view.width;
                this.pointerDATA[b].scaleFactorY = this.camera.height / this.view.height;
                this.pointerDATA[b].x = this.pointerDATA[b].trueX * this.pointerDATA[b].scaleFactorX - this.camera.x;
                this.pointerDATA[b].y = this.pointerDATA[b].trueY * this.pointerDATA[b].scaleFactorY - this.camera.y;
                this.pointerDATA[b].down = HYPER.Input.Pointer.point[b].down;
                this.pointerDATA[b].up = HYPER.Input.Pointer.point[b].up;
                this.pointerDATA[b].dblclick = HYPER.Input.Pointer.point[b].dblclick;
                this.pointerDATA[b].hold = HYPER.Input.Pointer.point[b].hold;
                this.pointerDATA[b].click = HYPER.Input.Pointer.point[b].down;
            }
            this.passedINFO.pointerDATA = this.pointerDATA;
        },
        /**
         * Updates the pointers based on the id.
         * @private
         * @method HYPER.State.updatePointerDATA_ID
         * @param {object} a - Updating info.
         */
        updatePointerDATA_ID: function(a, b) {
            this.pointerDATA[b].trueX = a.x - this.view.x + this.camera.x;
            this.pointerDATA[b].trueY = a.y - this.view.y + this.camera.y;
            this.pointerDATA[b].scaleFactorX = this.camera.width / this.view.width;
            this.pointerDATA[b].scaleFactorY = this.camera.height / this.view.height;
            this.pointerDATA[b].x = this.pointerDATA[b].trueX * this.pointerDATA[b].scaleFactorX - this.camera.x;
            this.pointerDATA[b].y = this.pointerDATA[b].trueY * this.pointerDATA[b].scaleFactorY - this.camera.y;
            this.pointerDATA[b].down = HYPER.Input.Pointer.point[b].down;
            this.pointerDATA[b].up = HYPER.Input.Pointer.point[b].up;
            this.pointerDATA[b].dblclick = HYPER.Input.Pointer.point[b].dblclick;
            this.pointerDATA[b].hold = HYPER.Input.Pointer.point[b].hold;
            this.pointerDATA[b].click = HYPER.Input.Pointer.point[b].down;
        },
        /**
         * Updates the info that is passed to the children.
         * @private
         * @method HYPER.State._updatePassedInfo
         * @param {object} a - Updating info.
         */
        _updatePassedInfo: function(a) {
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
        _updateRenderingSettings: function(a) {
            if (this.camera.width != this.canvas.width || this.camera.height != this.canvas.height) {
                this.canvas.width = this.camera.width;
                this.canvas.height = this.camera.height;
            }
            if (this.camera.width != this.lastcanvas.width || this.camera.height != this.lastcanvas.height) {
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
        _onClick: function(a) {
            this.updatePointerDATA_ID(a, a._ID);
            for (var b = 0; b < this.children.length; b++) {
                if (this.children[b].alive) {
                    if (this.children[b]._onClick) {
                        this.children[b]._onClick(this.pointerDATA[a._ID]);
                    }
                }
            }
            this.onClick(this.pointerDATA[a._ID]);
        },
        /**
         * Called on the mouse up event.
         * @private
         * @method HYPER.State._onUp
         */
        _onUp: function(a) {
            this.updatePointerDATA_ID(a, a._ID);
            for (var b = 0; b < this.children.length; b++) {
                if (this.children[b].alive) {
                    if (this.children[b]._onUp) {
                        this.children[b]._onUp(this.pointerDATA[a._ID]);
                    }
                }
            }
            this.onUp(this.pointerDATA[a._ID]);
        },
        /**
         * Called on the mouse down event.
         * @private
         * @method HYPER.State._onDown
         */
        _onDown: function(a) {
            this.updatePointerDATA_ID(a, a._ID);
            for (var b = 0; b < this.children.length; b++) {
                if (this.children[b].alive) {
                    if (this.children[b]._onDown) {
                        this.children[b]._onDown(this.pointerDATA[a._ID]);
                    }
                }
            }
            this.onDown(this.pointerDATA[a._ID]);
        },
        /**
         * Called when the mouse pointer is held down.
         * @private
         * @method HYPER.State._onHold
         */
        _onHold: function(a) {
            this.updatePointerDATA_ID(a, a._ID);
            for (var b = 0; b < this.children.length; b++) {
                if (this.children[b].alive) {
                    if (this.children[b]._onHold) {
                        this.children[b]._onHold(this.pointerDATA[a._ID]);
                    }
                }
            }
            this.onHold(this.pointerDATA[a._ID]);
        },
        /**
         * Called when the user double clicks.
         * @private
         * @method HYPER.State._onDblClick
         */
        _onDblClick: function(a) {
            for (var b = 0; b < this.children.length; b++) {
                if (this.children[b].alive) {
                    if (this.children[b]._onDblClick) {
                        this.children[b]._onDblClick(this.pointerDATA[a._ID]);
                    }
                }
            }
            this.onDblClick(this.pointerDATA[a._ID]);
        },
        /**
         * Called on the key down.
         * @private
         * @method HYPER.State._onKeyDown
         */
        _onKeyDown: function(a) {
            for (var b = 0; b < this.children.length; b++) {
                if (this.children[b].alive) {
                    if (this.children[b]._onKeyDown) {
                        this.children[b]._onKeyDown(a);
                    }
                }
            }
            this.onKeyDown(a);
        },
        /**
         * Called when a key is held down.
         * @private
         * @method HYPER.State._onKeyHeld
         */
        _onKeyHeld: function(a) {
            for (var b = 0; b < this.children.length; b++) {
                if (this.children[b].alive) {
                    if (this.children[b]._onKeyHeld) {
                        this.children[b]._onKeyHeld(a);
                    }
                }
            }
            this.onKeyHeld(a);
        },
        /**
         * Called on the key up.
         * @private
         * @method HYPER.State._onKeyUp
         */
        _onKeyUp: function(a) {
            for (var b = 0; b < this.children.length; b++) {
                if (this.children[b].alive) {
                    if (this.children[b]._onKeyUp) {
                        this.children[b]._onKeyUp(a);
                    }
                }
            }
            this.onKeyUp(a);
        },
        /**
         * Called every frame.
         * @private
         * @method HYPER.State._render
         */
        _render: function(a) {
            if (this.backgroundColor === "clear" || this.autoClear) {
                HYPER.Graphics.Draw(a.ctx).clearRect(0, 0, a.canvas.width, a.canvas.height);
            }
            if (this.motionBlur) {
                HYPER.Graphics.Draw(a.ctx, this.style).bitmap(this.canvas, 0, 0, this.camera.width, this.camera.height, this.view.x, this.view.y, this.view.width, this.view.height);
            }
            this._updateRenderingSettings(a);
            this._updatePassedInfo(a);
            this._renderChildren(this.passedINFO);
            this.render(this.passedINFO);
            if (this.motionBlur) {
                HYPER.Graphics.Draw(a.ctx, this.style).setAlpha(this.style.alpha / 2).bitmap(this.canvas, 0, 0, this.camera.width, this.camera.height, this.view.x, this.view.y, this.view.width, this.view.height);
            } else {
                HYPER.Graphics.Draw(a.ctx, this.style).bitmap(this.canvas, 0, 0, this.camera.width, this.camera.height, this.view.x, this.view.y, this.view.width, this.view.height);
            }
        },
        /**
         * Called every tick.
         * @private
         * @method HYPER.State._update
         */
        _update: function(a) {
            this._tick._now = HYPER.CURRENT_DATE;
            this._tick._delta = this._tick._now - this._tick._then;
            if (this._tick._delta > this._tick._interval) {
                this._tick._then = this._tick._now - this._tick._delta % this._tick._interval;
                // Game Code
                this._updatePassedInfo(a);
                this._updateChildren(this.passedINFO);
                this.update(this.passedINFO);
            }
        },
        /**
         * Called when the state is initalized.
         * @method HYPER.State._init
         */
        _init: function() {
            this.init();
        }
    };
})();

(function() {
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
     * @param {number} e.camera.width=800 Width of the camera.
     * @param {number} e.camera.height=600 Height of the camera.
     * @param {object} e.view The view object, change the position and view of the Layer on the webpage.
     * @param {number} e.view.x=0 X location of the Layer.
     * @param {number} e.view.y=0 Y location of the Layer.
     * @param {number} e.view.width=800 Width of the Layer.
     * @param {number} e.view.height=600 Height of the Layer.
     */
    HYPER.Layer = function(a) {
        a = a || {};
        a.camera = a.camera || {};
        a.view = a.view || {};
        var b = this;
        /**
         * @property {string} _ID - The specific ID for this object.
         */
        this._ID = "Layer " + Math.random() + "" + Math.random();
        /**
         * @property {object} style - The style used for this object.
         */
        this.style = a.style || HYPER.Graphics.DEFAULT_STYLE;
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
            FPS: a.tickFPS || a.tickfps || a.fps || 30,
            _now: 0,
            _then: HYPER.CURRENT_DATE,
            _interval: 1e3 / 30,
            _delta: 0
        };
        /**
         * @property {string} backgroundColor - Background color of the Layer.
         */
        this.backgroundColor = a.backgroundColor || "#000000";
        /**
         * @property {string} backgroundColor - Background color of the Layer.
         */
        this.antiAliasing = a.antiAliasing || false;
        /**
         * @property {boolean} autoClear - Whether or not to clear the canvas before every frame.
         */
        this.autoClear = a.autoClear || false;
        /**
         * @property {boolean} smartRendering - Whether or not to render objects that are not on the screen.
         */
        this.smartRendering = a.smartRendering || false;
        /**
         * @property {boolean} motionBlur - Whether or not to render objects with a motion blur.
         */
        this.motionBlur = a.motionBlur || false;
        /**
         * @property {object} camera - The camera object, change the position and view to change what is shown.
         */
        this.camera = {
            /**
             * @property {number} camera.x - X location of the camera.
             */
            x: a.camera.x || 0,
            /**
             * @property {number} camera.y - Y location of the camera.
             */
            y: a.camera.y || 0,
            /**
             * @property {number} camera.width - Width of the camera.
             */
            width: a.camera.width || 800,
            /**
             * @property {number} camera.height - Height of the camera.
             */
            height: a.camera.height || 600
        };
        /**
         * @property {object} view - The object on the screen.
         */
        this.view = {
            /**
             * @property {number} view.x - X location on the screen.
             */
            x: a.view.x || 0,
            /**
             * @property {number} view.y - Y location on the screen.
             */
            y: a.view.y || 0,
            /**
             * @property {number} view.width - Width on the screen.
             */
            width: a.view.width || 800,
            /**
             * @property {number} view.height - Height on the screen.
             */
            height: a.view.height || 600
        };
        /**
         * @property {object} passedINFO - Info that is passed to children every loop.
         */
        this.passedINFO = {
            pointerDATA: []
        };
        /**
         * @property {array} pointerDATA - pointer data that is passed to children every loop.
         */
        this.pointerDATA = [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {} ];
        /**
         * @property {array} children - Array of all children in the screen.
         */
        this.children = [];
        /**
         * @property {array} children - Whether or not to use z-index when rendering.
         */
        this.enableZindex = a.enableZindex || false;
        /**
         * @property {function} render - user defined function that is called at the end of every frame.
         */
        this.render = a.render || no0p;
        /**
         * @property {function} update - user defined function that is called at the end of every tick.
         */
        this.update = a.update || no0p;
        /**
         * @property {function} update - user defined function that is called when the object is initalized.
         */
        this.init = a.init || no0p;
        /**
         * @property {function} onClick - Function that is called every time the screen is clicked.
         */
        this.onClick = a.onClick || no0p;
        /**
         * @property {function} onUp - Function that is called every time the screen is clicked up.
         */
        this.onUp = a.onUp || no0p;
        /**
         * @property {function} onDown - Function that is called every time the screen is clicked down.
         */
        this.onDown = a.onDown || no0p;
        /**
         * @property {function} onHold - Function that is called every tick the screen is being clicked by the mouse pointer.
         */
        this.onHold = a.onHold || no0p;
        /**
         * @property {function} onDblClick - Function that is called every time the screen is double clicked.
         */
        this.onDblClick = a.onDblClick || no0p;
        /**
         * @property {function} onKeyUp - Function that is called every time a key is lifted.
         */
        this.onKeyUp = a.onKeyUp || no0p;
        /**
         * @property {function} onKeyDown - Function that is called every time a key is pushed.
         */
        this.onKeyDown = a.onKeyDown || no0p;
        /**
         * @property {function} onKeyHeld - Function that is called every time a key is held down.
         */
        this.onKeyHeld = a.onKeyHeld || no0p;
    };
    HYPER.Layer.prototype = {
        /**
         * Sets the update FPS of the object. Note that this is the fastest all children can also update.
         * @method HYPER.Layer.setTickFPS
         * @param {number} fps - The desired FPS.
         */
        setTickFPS: function(a) {
            this._tick.FPS = a;
            this._tick._interval = 1e3 / this._tick.FPS;
        },
        /**
         * Adds children to the object.
         * @method HYPER.Layer.addChild
         * @param {object} child - The child you want to add.
         */
        addChild: function(a) {
            this.children.push(a);
        },
        /**
         * Removes children from the object.
         * @method HYPER.Layer.removeChild
         * @param {object} child - The child you want to remove.
         */
        removeChild: function(a) {
            for (var b = 0; b < this.children.length; b++) {
                if (a._ID === this.children[b]._ID) {
                    this.children.splice(b, 1);
                }
            }
        },
        /**
         * Removes all children from the object.
         * @method HYPER.Layer.removeAllChildren
         */
        removeAllChildren: function() {
            this.children = [];
        },
        /**
         * updates the renderer.
         * @private
         * @method HYPER.Layer._updateRender
         * @param {object} a - Rendering info.
         */
        _updateRender: function(a) {
            if (this.backgroundColor === "clear" || this.autoClear) {
                HYPER.Graphics.Draw(this.ctx).clearRect(0, 0, this.canvas.width, this.canvas.height);
            } else {
                HYPER.Graphics.Draw(this.ctx).setFillColor(this.backgroundColor).rect(0, 0, this.canvas.width, this.canvas.height);
            }
        },
        /**
         * renders the children.
         * @private
         * @method HYPER.Layer._renderChildren
         * @param {object} a - Rendering info.
         */
        _renderChildren: function(a) {
            if (this.enableZindex === true) {
                // Loop through all z-indexes
                for (var b = 0; b < this.children.length; b++) {
                    // Loop through all children
                    for (var c = 0; c < this.children.length; c++) {
                        // Check to see if the z-index is correct.
                        if (Math.round(this.children[c].zIndex) === b) {
                            // Check to see if smart rendering is turned on.
                            if (this.smartRendering === true) {
                                // Check to see if the desplayed object overlaps the screen.
                                if (HYPER.Physics.checkAABBCollision(this.view, this.children[c])) {
                                    this.children[c]._render(this.passedINFO);
                                }
                            } else {
                                this.children[c]._render(this.passedINFO);
                            }
                        }
                    }
                }
            } else {
                // loop through all children
                for (var c = 0; c < this.children.length; c++) {
                    // Check to see if smart rendering is turned on.
                    if (this.smartRendering === true) {
                        // Check to see if the desplayed object overlaps the screen.
                        if (HYPER.Physics.checkAABBCollision(this.view, this.children[c])) {
                            // render child
                            this.children[c]._render(this.passedINFO);
                        }
                    } else {
                        // render child
                        this.children[c]._render(this.passedINFO);
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
        _updateChildren: function(a) {
            // loop through all children.
            for (var b = 0; b < this.children.length; b++) {
                //update child
                this.children[b]._update(this.passedINFO);
            }
        },
        /**
         * Updates the pointers.
         * @private
         * @method HYPER.Layer._updatePointerData
         * @param {object} a - Updating info.
         */
        _updatePointerData: function(a) {
            //console.log(this);
            for (var b = 0; b < 1; b++) {
                this.pointerDATA[b].trueX = a.pointerDATA[b].x - this.view.x + this.camera.x;
                this.pointerDATA[b].trueY = a.pointerDATA[b].y - this.view.y + this.camera.y;
                this.pointerDATA[b].scaleFactorX = this.camera.width / this.view.width;
                this.pointerDATA[b].scaleFactorY = this.camera.height / this.view.height;
                this.pointerDATA[b].x = this.pointerDATA[b].trueX * this.pointerDATA[b].scaleFactorX - this.camera.x;
                this.pointerDATA[b].y = this.pointerDATA[b].trueY * this.pointerDATA[b].scaleFactorY - this.camera.y;
                this.pointerDATA[b].down = HYPER.Input.Pointer.point[b].down;
                this.pointerDATA[b].up = HYPER.Input.Pointer.point[b].up;
                this.pointerDATA[b].dblclick = HYPER.Input.Pointer.point[b].dblclick;
                this.pointerDATA[b].hold = HYPER.Input.Pointer.point[b].hold;
                this.pointerDATA[b].click = HYPER.Input.Pointer.point[b].down;
            }
            this.passedINFO.pointerDATA = this.pointerDATA;
        },
        /**
         * Updates the pointers based on the id.
         * @private
         * @method HYPER.Layer.updatePointerDATA_ID
         * @param {object} a - Updating info.
         */
        updatePointerDATA_ID: function(a, b) {
            this.pointerDATA[b].trueX = a.x - this.view.x + this.camera.x;
            this.pointerDATA[b].trueY = a.y - this.view.y + this.camera.y;
            this.pointerDATA[b].scaleFactorX = this.camera.width / this.view.width;
            this.pointerDATA[b].scaleFactorY = this.camera.height / this.view.height;
            this.pointerDATA[b].x = this.pointerDATA[b].trueX * this.pointerDATA[b].scaleFactorX - this.camera.x;
            this.pointerDATA[b].y = this.pointerDATA[b].trueY * this.pointerDATA[b].scaleFactorY - this.camera.y;
            this.pointerDATA[b].down = HYPER.Input.Pointer.point[b].down;
            this.pointerDATA[b].up = HYPER.Input.Pointer.point[b].up;
            this.pointerDATA[b].dblclick = HYPER.Input.Pointer.point[b].dblclick;
            this.pointerDATA[b].hold = HYPER.Input.Pointer.point[b].hold;
            this.pointerDATA[b].click = HYPER.Input.Pointer.point[b].down;
        },
        /**
         * Updates the info that is passed to the children.
         * @private
         * @method HYPER.Layer._updatePassedInfo
         * @param {object} a - Updating info.
         */
        _updatePassedInfo: function(a) {
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
        _updateRenderingSettings: function(a) {
            if (this.camera.width != this.canvas.width || this.camera.height != this.canvas.height) {
                this.canvas.width = this.camera.width;
                this.canvas.height = this.camera.height;
            }
            if (this.camera.width != this.lastcanvas.width || this.camera.height != this.lastcanvas.height) {
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
        _onClick: function(a) {
            this.updatePointerDATA_ID(a, a._ID);
            for (var b = 0; b < this.children.length; b++) {
                if (this.children[b].alive) {
                    if (this.children[b]._onClick) {
                        this.children[b]._onClick(this.pointerDATA[a._ID]);
                    }
                }
            }
            this.onClick(this.pointerDATA[a._ID]);
        },
        /**
         * Called on the mouse up event.
         * @private
         * @method HYPER.Layer._onUp
         */
        _onUp: function(a) {
            this.updatePointerDATA_ID(a, a._ID);
            for (var b = 0; b < this.children.length; b++) {
                if (this.children[b].alive) {
                    if (this.children[b]._onUp) {
                        this.children[b]._onUp(this.pointerDATA[a._ID]);
                    }
                }
            }
            this.onUp(this.pointerDATA[a._ID]);
        },
        /**
         * Called on the mouse down event.
         * @private
         * @method HYPER.Layer._onDown
         */
        _onDown: function(a) {
            this.updatePointerDATA_ID(a, a._ID);
            for (var b = 0; b < this.children.length; b++) {
                if (this.children[b].alive) {
                    if (this.children[b]._onDown) {
                        this.children[b]._onDown(this.pointerDATA[a._ID]);
                    }
                }
            }
            this.onDown(this.pointerDATA[a._ID]);
        },
        /**
         * Called when the mouse pointer is held down.
         * @private
         * @method HYPER.Layer._onHold
         */
        _onHold: function(a) {
            this.updatePointerDATA_ID(a, a._ID);
            for (var b = 0; b < this.children.length; b++) {
                if (this.children[b].alive) {
                    if (this.children[b]._onHold) {
                        this.children[b]._onHold(this.pointerDATA[a._ID]);
                    }
                }
            }
            this.onHold(this.pointerDATA[a._ID]);
        },
        /**
         * Called when the user double clicks.
         * @private
         * @method HYPER.Layer._onDblClick
         */
        _onDblClick: function(a) {
            for (var b = 0; b < this.children.length; b++) {
                if (this.children[b].alive) {
                    if (this.children[b]._onDblClick) {
                        this.children[b]._onDblClick(this.pointerDATA[a._ID]);
                    }
                }
            }
            this.onDblClick(this.pointerDATA[a._ID]);
        },
        /**
         * Called on the key down.
         * @private
         * @method HYPER.Layer._onKeyDown
         */
        _onKeyDown: function(a) {
            for (var b = 0; b < this.children.length; b++) {
                if (this.children[b].alive) {
                    if (this.children[b]._onKeyDown) {
                        this.children[b]._onKeyDown(a);
                    }
                }
            }
            this.onKeyDown(a);
        },
        /**
         * Called when a key is held down.
         * @private
         * @method HYPER.Layer._onKeyHeld
         */
        _onKeyHeld: function(a) {
            for (var b = 0; b < this.children.length; b++) {
                if (this.children[b].alive) {
                    if (this.children[b]._onKeyHeld) {
                        this.children[b]._onKeyHeld(a);
                    }
                }
            }
            console.log("hi");
            this.onKeyHeld(a);
        },
        /**
         * Called on the key up.
         * @private
         * @method HYPER.Layer._onKeyUp
         */
        _onKeyUp: function(a) {
            for (var b = 0; b < this.children.length; b++) {
                if (this.children[b].alive) {
                    if (this.children[b]._onKeyUp) {
                        this.children[b]._onKeyUp(a);
                    }
                }
            }
            this.onKeyUp(a);
        },
        /**
         * Called every frame.
         * @private
         * @method HYPER.Layer._render
         */
        _render: function(a) {
            if (this.backgroundColor === "clear" || this.autoClear) {
                HYPER.Graphics.Draw(a.ctx).clearRect(0, 0, a.canvas.width, a.canvas.height);
            }
            if (this.motionBlur) {
                HYPER.Graphics.Draw(a.ctx, this.style).bitmap(this.canvas, 0, 0, this.camera.width, this.camera.height, this.view.x, this.view.y, this.view.width, this.view.height);
            }
            this._updateRenderingSettings(a);
            this._updatePassedInfo(a);
            this._renderChildren(this.passedINFO);
            this.render(this.passedINFO);
            if (this.motionBlur) {
                HYPER.Graphics.Draw(a.ctx, this.style).setAlpha(this.style.alpha / 2).bitmap(this.canvas, 0, 0, this.camera.width, this.camera.height, this.view.x, this.view.y, this.view.width, this.view.height);
            } else {
                HYPER.Graphics.Draw(a.ctx, this.style).bitmap(this.canvas, 0, 0, this.camera.width, this.camera.height, this.view.x, this.view.y, this.view.width, this.view.height);
            }
        },
        /**
         * Called every tick.
         * @private
         * @method HYPER.Layer._update
         */
        _update: function(a) {
            this._tick._now = HYPER.CURRENT_DATE;
            this._tick._delta = this._tick._now - this._tick._then;
            if (this._tick._delta > this._tick._interval) {
                this._tick._then = this._tick._now - this._tick._delta % this._tick._interval;
                // Game Code
                this._updatePassedInfo(a);
                this._updateChildren(this.passedINFO);
                this.update(this.passedINFO);
            }
        },
        /**
         * Called when the Layer is initalized.
         * @method HYPER.Layer._init
         */
        _init: function() {
            this.init();
        }
    };
})();

(function() {
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
    HYPER.Graphics.cutHex = function(a) {
        return a.charAt(0) == "#" ? a.substring(1, 7) : a;
    };
    /**
     * Convert hex color code to red value.
     * @method HYPER.Graphics.hexToRed
     * @param {string} h Hex color code string to red value.
     */
    HYPER.Graphics.hexToRed = function(a) {
        return parseInt(HYPER.Graphics.cutHex(a).substring(0, 2), 16);
    };
    /**
     * Convert hex color code to green value.
     * @method HYPER.Graphics.hexToGreen
     * @param {string} h Hex color code string to green value.
     */
    HYPER.Graphics.hexToGreen = function(a) {
        return parseInt(HYPER.Graphics.cutHex(a).substring(2, 4), 16);
    };
    /**
     * Convert hex color code to blue value.
     * @method HYPER.Graphics.hexToBlue
     * @param {string} h Hex color code string to blue value.
     */
    HYPER.Graphics.hexToBlue = function(a) {
        return parseInt(HYPER.Graphics.cutHex(a).substring(4, 6), 16);
    };
})();

(function() {
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
    HYPER.Graphics.Style = function(a) {
        a = typeof a === "undefined" ? {} : a;
        a.shadow = a.shadow || {};
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
        this.alpha = typeof a.alpha === "undefined" ? 1 : a.alpha;
        /**
         * @property {string} color="#000000" - The fill color value to be rendered.
         */
        this.color = typeof a.color === "undefined" ? "#000000" : a.color;
        /**
         * @property {string} linecap="butt" - The line cap type to be rendered.
         */
        this.linecap = typeof a.linecap === "undefined" ? "butt" : a.linecap;
        /**
         * @property {string} linejoin="miter" - The line join type to be rendered.
         */
        this.linejoin = typeof a.linejoin === "undefined" ? "miter" : a.linejoin;
        /**
         * @property {number} miterLimit=10 - The miter limit to be rendered.
         */
        this.miterLimit = typeof a.miterLimit === "undefined" ? 10 : a.miterLimit;
        /**
         * @property {number} strokeColor="#000000" - Stroke color to be rendered.
         */
        this.strokeColor = typeof a.strokeColor === "undefined" ? "#000000" : a.strokeColor;
        /**
         * @property {number} lineWidth=1 - Line width of the line to be rendered.
         */
        this.lineWidth = typeof a.lineWidth === "undefined" ? 1 : a.lineWidth;
        /**
         * @property {boolean} fill=true - Should the graphicl objects be filled?
         */
        this.fill = typeof a.fill === "undefined" ? true : a.fill;
        /**
         * @property {boolean} stroke=false - Should the graphicl objects be stroked?
         */
        this.stroke = typeof a.stroke === "undefined" ? false : a.stroke;
        /**
         * @property {number} lineDashOffset=0 - What should the dashed offset be?
         */
        this.lineDashOffset = typeof a.lineDashOffset === "undefined" ? 0 : a.lineDashOffset;
        /**
         * @property {number} fontSize=12 - What should the font size be?
         */
        this.fontSize = typeof a.fontSize === "undefined" ? 12 : a.fontSize;
        /**
         * @property {string} fontSize="Arial" - What should the font family be?
         */
        this.fontFamily = typeof a.fontFamily === "undefined" ? "Arial" : a.fontFamily;
        /**
         * @property {string} globalCompositeOperation="source-over" - Set the global compisit opperation.
         */
        this.globalCompositeOperation = typeof a.globalCompositeOperation === "undefined" ? "source-over" : a.globalCompositeOperation;
        /**
         * @property {object} shadow - Set the shadow properties.
         */
        this.shadow = a.shadow;
        /**
         * @property {string} shadow.color="#000000" - Set the shadow color.
         */
        this.shadow.color = typeof a.shadow.color === "undefined" ? "#000000" : a.shadow.color;
        /**
         * @property {string} shadow.blur=0 - Set the shadow blur.
         */
        this.shadow.blur = typeof a.shadow.blur === "undefined" ? 0 : a.shadow.blur;
        /**
         * @property {string} shadow.offsetX=0 - Set the shadow offset x.
         */
        this.shadow.offsetX = typeof a.shadow.offsetX === "undefined" ? 0 : a.shadow.offsetX;
        /**
         * @property {string} shadow.offsetY=0 - Set the shadow offset y.
         */
        this.shadow.offsetY = typeof a.shadow.offsetY === "undefined" ? 0 : a.shadow.offsetY;
    };
    HYPER.Graphics.Style.prototype = {
        /**
         * Apply this style to any context.
         * @method HYPER.Graphics.Style.applyTo
         * @param {object} ctx Context for the style.
         */
        applyTo: function(a) {
            HYPER.Graphics.styleToCTX(this, a);
        }
    };
    /**
     * Apply a style to any context.
     * @method HYPER.Graphics.styleToCTX
     * @param {HYPER.Graphics.Style} style Style to apply.
     * @param {object} ctx Context for the style.
     */
    HYPER.Graphics.styleToCTX = function(a, b) {
        b.globalAlpha = a.alpha || 1;
        b.fillStyle = a.color || "#000000";
        b.lineCap = a.lineCap || "butt";
        b.linejoin = a.linejoin || "miter";
        b.miterLimit = a.miterLimit || 10;
        b.strokeStyle = a.strokeColor || "#000000";
        b.lineWidth = a.lineWidth || 1;
        b.lineDashOffset = a.lineDashOffset || 0;
        b.textAlign = "left";
        b.textBaseline = "top";
        b.font = a.fontSize || 12 + "px " + a.fontFamily || "Arial";
        b.globalCompositeOperation = a.globalCompositeOperation || "source-over";
        b.shadowColor = a.shadow.color || "#000000";
        b.shadowBlur = a.shadow.blur || 0;
        b.shadowOffsetX = a.shadow.offsetX || 0;
        b.shadowOffsetY = a.shadow.offsetY || 0;
    };
    HYPER.Graphics.DEFAULT_STYLE = new HYPER.Graphics.Style();
})();

(function() {
    "use strict";
    /**
     * Used to draw or create graphicle objects for particles sprites.
     * @class HYPER.Graphics.Draw
     * @param {object} ctx The context to draw to.
     * @param {object} style The style that will be drawn, use a Graphics.Style or pass your own information in the form of a object.
     * @param {boolean} autoStart If the path will automaticaly begin.
     * @return {object} self
     */
    HYPER.Graphics.Draw = function(a, b, c) {
        /**
         * @property {object} ctx - The context that will be rendered to.
         */
        this.ctx = a;
        /**
         * @property {boolean} autoStart - If a drawing path should begin.
         */
        this.autoStart = c || true;
        /**
         * @property {HYPER.Graphics.Style} style - The style all objects will bew rendered with.
         */
        this.style = b || HYPER.Graphics.DEFAULT_STYLE;
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
        this.beginPath = function() {
            this.ctx.beginPath();
            return this;
        };
        /**
         * closes a path.
         * @method HYPER.Graphics.Draw.closePath
         */
        this.closePath = function() {
            this.ctx.closePath();
            return this;
        };
        /**
         * Fills a path.
         * @method HYPER.Graphics.Draw.fillPath
         */
        this.fillPath = function() {
            this.ctx.fill();
            return this;
        };
        /**
         * Strokes a path.
         * @method HYPER.Graphics.Draw.strokePath
         */
        this.strokePath = function() {
            this.ctx.stroke();
            return this;
        };
        /**
         * Sets the fill color.
         * @method HYPER.Graphics.Draw.setFillColor
         * @param {string} color - New fill color.
         */
        this.setFillColor = function(a) {
            this.ctx.fillStyle = a || this.ctx.fillStyle;
            return this;
        };
        /**
         * Sets the stroke color.
         * @method HYPER.Graphics.Draw.setStrokeColor
         * @param {string} color - New stroke color.
         */
        this.setStrokeColor = function(a) {
            this.ctx.strokeStyle = a || this.ctx.strokeStyle;
            return this;
        };
        /**
         * Sets the alpha value.
         * @method HYPER.Graphics.Draw.setAlpha
         * @param {number} alpha - New alpha value.
         */
        this.setAlpha = function(a) {
            this.ctx.globalAlpha = a;
            return this;
        };
        /**
         * Sets a new rendering style.
         * @method HYPER.Graphics.Draw.setStyle
         * @param {HYPER.Graphics.Style} style - New style.
         */
        this.setStyle = function(a) {
            if (a._ID.split(" ")[0] === "style") {
                this.style = a || {};
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
        this.clearRect = function(a, b, c, d) {
            this.ctx.clearRect(a, b, c, d);
            return this;
        };
        /**
         * Draws a line.
         * @method HYPER.Graphics.Draw.line
         * @param {number} startX - X position to start the line.
         * @param {number} startY - Y position to start the line.
         * @param {number} endX - X position to end the line.
         * @param {number} endY - Y position to end the line.
         */
        this.line = function(a, b, c, d) {
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            this.ctx.moveTo(a, b);
            this.ctx.lineTo(c, d);
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
        this.circle = function(a, b, c, d, e, f) {
            d = d || 0;
            e = e || 360;
            f = f || false;
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            this.ctx.arc(a, b, c, HYPER.Math.degreesToRadians(d), HYPER.Math.degreesToRadians(e), f);
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
        this.quadraticCurve = function(a, b, c, d, e, f) {
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            this.ctx.moveTo(a, b);
            this.ctx.quadraticCurveTo(c, d, e, f);
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
        this.bezierCurve = function(a, b, c, d, e, f, g, h) {
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            this.ctx.moveTo(a, b);
            this.ctx.bezierCurveTo(c, d, e, f, g, h);
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
        this.arcTo = function(a, b, c, d, e, f, g) {
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            this.ctx.moveTo(a, b);
            this.ctx.arcTo(c, d, e, f, g);
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
        this.rect = function(a, b, c, d, e, f, g) {
            e = e || 0;
            f = f || 0;
            g = g || 0;
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            if (e != 0) {
                this.ctx.translate(a + f, b + g);
                this.ctx.rotate(HYPER.Math.degreesToRadians(e));
                this.ctx.rect(-f, -g, c, d);
                this.ctx.rotate(-HYPER.Math.degreesToRadians(e));
                this.ctx.translate(-(a + f), -(b + g));
            } else {
                this.ctx.rect(a, b, c, d);
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
        this.triangle = function(a, b, c, d, e, f, g, h, i) {
            g = g || 0;
            h = h || 0;
            i = i || 0;
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            if (g != 0) {
                this.ctx.translate(a + h, b + i);
                this.ctx.rotate(HYPER.Math.degreesToRadians(g));
                this.ctx.moveTo(a - a - h, b - a - i);
                this.ctx.lineTo(c - a - h, d - b - i);
                this.ctx.lineTo(e - a - h, f - b - i);
                this.ctx.lineTo(a - a - h, b - b - i);
                this.ctx.rotate(-HYPER.Math.degreesToRadians(g));
                this.ctx.translate(-(a + h), -(b + i));
            } else {
                this.ctx.moveTo(a, b);
                this.ctx.lineTo(c, d);
                this.ctx.lineTo(e, f);
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
        this.polygon = function(a, b, c, d) {
            b = b || 0;
            c = c || 0;
            d = d || 0;
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            if (b != 0) {
                this.ctx.translate(a[0] + c, a[1] + d);
                this.ctx.rotate(HYPER.Math.degreesToRadians(b));
                this.ctx.moveTo(a[0] - a[0] - c, a[1] - a[1] - d);
                for (var e = 0; e < a.length; e += 2) {
                    this.ctx.lineTo(a[e] - a[0] - c, a[e + 1] - a[1] - d);
                }
                this.ctx.lineTo(a[0] - a[0] - c, a[1] - a[1] - d);
                this.ctx.rotate(-HYPER.Math.degreesToRadians(b));
                this.ctx.translate(-(a[0] + c), -(a[1] + d));
            } else {
                this.ctx.moveTo(a[0], a[1]);
                for (var e = 0; e < a.length; e += 2) {
                    this.ctx.lineTo(a[e], a[e + 1]);
                }
                this.ctx.lineTo(a[0], a[1]);
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
        this.text = function(a, b, c, d, e, f) {
            d = d || 0;
            e = e || 0;
            f = f || 0;
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            if (d != 0) {
                this.ctx.translate(b + e, c + f);
                this.ctx.rotate(HYPER.Math.degreesToRadians(d));
                if (this.style.fill) {
                    this.ctx.fillText(a, -e, -f);
                }
                if (this.style.stroke) {
                    this.ctx.strokeText(a, -e, -f);
                }
                this.ctx.rotate(-HYPER.Math.degreesToRadians(d));
                this.ctx.translate(-(b + e), -(c + f));
            } else {
                if (this.style.fill) {
                    this.ctx.fillText(a, b, c);
                }
                if (this.style.stroke) {
                    this.ctx.strokeText(a, b, c);
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
        this.bitmap = function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
            j = j || 0;
            k = k || 0;
            l = l || 0;
            if (a.bitmap) {
                a = a.bitmap;
            }
            f = f || 0;
            g = g || 0;
            m = m || 1;
            n = n || 1;
            h = h || a.width;
            i = i || a.height;
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            if (j != 0 || m != 1 || n != 1) {
                //this.ctx.save();
                this.ctx.translate(b + k, c + l);
                this.ctx.rotate(HYPER.Math.degreesToRadians(j));
                this.ctx.scale(m, n);
                this.ctx.drawImage(a, f, g, h, i, -k, -l, d, e);
                this.ctx.scale(1 / m, 1 / n);
                this.ctx.rotate(-HYPER.Math.degreesToRadians(j));
                this.ctx.translate(-(b + k), -(c + l));
            } else {
                this.ctx.drawImage(a, f, g, h, i, b, c, d, e);
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

(function() {
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
    HYPER.Graphics.Animation = function(a) {
        /**
         * @property {object} spriteSheet - The spritesheet to be used for the animation.
         */
        this.spriteSheet = a.spriteSheet || {};
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
        this.width = a.width || this.spriteSheet.width || 0;
        /**
         * @property {number} height - The height of the animation.
         */
        this.height = a.height || this.spriteSheet.height || 0;
        /**
         * @property {number} currentFrame - The current frame of the animation.
         */
        this.currentFrame = a.currentFrame || 0;
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
        this.onLoopEnd = a.onLoopEnd || no0p;
        /**
         * @property {function} onLoopEnd - What to do at the end of every frame. First parameter is the frame ID.
         */
        this.onFrame = a.onFrame || no0p;
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
        this._then = HYPER.CURRENT_DATE;
        /**
         * @private
         * @property {number} _interval - How much time you want to pass between loops.
         */
        this._interval = 1e3 / this.FPS;
        /**
         * @private
         * @property {number} _delta - Diffrence in time between loops.
         */
        this._delta;
        /**
         * @property {function} update - Called every tick.
         */
        this.update = a.update || no0p;
        /**
         * @property {function} update - Called every frame.
         */
        this.render = a.render || no0p;
    };
    HYPER.Graphics.Animation.prototype = {
        /**
         * Function to play animations.
         * @method HYPER.Graphics.Animation.play
         * @param {string} animationName the name of the animation you want to play.
         * @param {number} frameNumber The frame that you want to start playing at.
         */
        play: function(a, b) {
            this.currentAnimation = this.spriteSheet.animations[a];
            this.FPS = this.spriteSheet.animations[a].fps;
            this._interval = 1e3 / this.FPS;
            this.currentFrame = b || this.currentFrame || 0;
            this.paused = false;
        },
        /**
         * Function to pause animations.
         * @method HYPER.Graphics.Animation.pause
         */
        pause: function() {
            this.paused = true;
        },
        /**
         * Function to start animations. It always re-starts the animation.
         * @param {string} animationName the name of the animation you want to play.
         * @param {number} frameNumber The frame that you want to start playing at.
         * @method HYPER.Graphics.Animation.start
         */
        start: function(a, b) {
            this.currentFrame = b || 0;
            this.currentAnimation = this.spriteSheet.animations[a];
            this.FPS = this.spriteSheet.animations[a].fps;
            this.paused = false;
        },
        /**
         * Function to stop animations. This function re-sets the animation frame.
         * @method HYPER.Graphics.Animation.stop
         */
        stop: function() {
            this.paused = true;
            this.currentFrame = 0;
        },
        /**
         * Function called every tick.
         * @method HYPER.Graphics.Animation._update
         */
        _update: function(a) {
            this._now = HYPER.CURRENT_DATE;
            this._delta = this._now - this._then;
            if (this._delta > this._interval) {
                this._then = this._now - this._delta % this._interval;
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
                } else {}
            }
        },
        /**
         * Function called every frame.
         * @method HYPER.Graphics.Animation._render
         */
        _render: function(a, b, c, d, e, f, g, h, i, j) {
            if (this.currentAnimation) {
                b = b || 0;
                c = c || 0;
                d = d || 0;
                e = e || 0;
                f = f || 0;
                g = g || 0;
                h = h || 0;
                i = i || 1;
                j = j || 1;
                var k = "";
                if (i < 0) {
                    k = "x";
                }
                if (j < 0) {
                    k = "y";
                }
                if (i < 0 && j < 0) {
                    k = "xy";
                }
                i = Math.abs(i);
                j = Math.abs(j);
                if (k === "x") {
                    HYPER.Graphics.Draw(a.ctx).bitmap(this.spriteSheet.flippedX.bitmap, b, c, d, e, -this.spriteSheet.frameINFO[this.currentFrame].x + this.spriteSheet.flippedX.bitmap.width, this.spriteSheet.frameINFO[this.currentFrame].y, -this.spriteSheet.frameINFO[this.currentFrame].width, this.spriteSheet.frameINFO[this.currentFrame].height, f, g, h, i, j);
                } else if (k === "xy") {
                    HYPER.Graphics.Draw(a.ctx).bitmap(this.spriteSheet.flippedXY.bitmap, b, c, d, e, -this.spriteSheet.frameINFO[this.currentFrame].x + this.spriteSheet.flippedX.bitmap.width, -this.spriteSheet.frameINFO[this.currentFrame].y + this.spriteSheet.flippedX.bitmap.height, -this.spriteSheet.frameINFO[this.currentFrame].width, -this.spriteSheet.frameINFO[this.currentFrame].height, f, g, h, i, j);
                } else if (k === "y") {
                    HYPER.Graphics.Draw(a.ctx).bitmap(this.spriteSheet.flippedY.bitmap, b, c, d, e, this.spriteSheet.frameINFO[this.currentFrame].x, -this.spriteSheet.frameINFO[this.currentFrame].y + this.spriteSheet.flippedX.bitmap.height, this.spriteSheet.frameINFO[this.currentFrame].width, -this.spriteSheet.frameINFO[this.currentFrame].height, f, g, h, i, j);
                } else {
                    HYPER.Graphics.Draw(a.ctx).bitmap(this.spriteSheet.bitmap, b, c, d, e, this.spriteSheet.frameINFO[this.currentFrame].x, this.spriteSheet.frameINFO[this.currentFrame].y, this.spriteSheet.frameINFO[this.currentFrame].width, this.spriteSheet.frameINFO[this.currentFrame].height, f, g, h, i, j);
                }
            }
        }
    };
})();

(function() {
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
    HYPER.Sprite = function(a) {
        a = a || {};
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
        this.texture = a.texture || {
            _render: no0p,
            _update: no0p,
            frames: {},
            bitmap: {},
            type: ""
        };
        if (this.texture.type === "animation") {}
        if (this.texture.type === "spritesheet") {
            this.texture = new HYPER.Graphics.Animation({
                spriteSheet: this.texture
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
        this.style = a.style || HYPER.Graphics.DEFAULT_STYLE;
        /**
         * @property {number} zIndex - The z-index this will be rendered as.
         */
        this.zIndex = a.zIndex || 0;
        /**
         * @property {number} x - The X location of the object.
         */
        this.x = a.x || 0;
        /**
         * @property {number} y - The Y location of the object.
         */
        this.y = a.y || 0;
        /**
         * @property {number} width - The width of the object.
         */
        this.width = a.width || this.texture.width || 32;
        /**
         * @property {number} height - The height of the object.
         */
        this.height = a.height || this.texture.height || 32;
        /**
         * @property {number} angle - The angle of the object.
         */
        this.angle = a.angle || 0;
        /**
         * @property {number} rotX - The X rotation point of the object.
         */
        this.rotX = a.rotX || this.width / 2;
        /**
         * @property {number} rotY - The Y rotation point of the object.
         */
        this.rotY = a.rotY || this.height / 2;
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
        this.lifeTime = a.lifeTime || 0;
        /**
         * @property {number} health - The health of the object.
         */
        this.health = a.health || 1;
        /**
         * @property {number} heamaxHealthlth - The maxium health of the object.
         */
        this.maxHealth = a.health || 1;
        /**
         * @property {number} scaleX - The scale X of the object.
         */
        this.scaleX = a.scaleX || 1;
        /**
         * @property {number} scaleY - The scale Y of the object.
         */
        this.scaleY = a.scaleY || 1;
        /**
         * @property {number} scaleX - Should the object be drawn backwards?
         */
        this.flippedX = a.flippedX || false;
        /**
         * @property {number} scaleY - Should the object be drawn up-side-down?
         */
        this.flippedY = a.flippedY || false;
        /**
         * @property {boolean} autoCull - Should the object be drawn if not visable on the screen?
         */
        this.autoCull = a.autoCull || false;
        /**
         * @property {function} render - User defined rendering, good for little extra things you want rendered.
         */
        this.render = a.render || no0p;
        /**
         * @property {function} update - User defined updating, good for little extra things you want updated.
         */
        this.update = a.update || no0p;
        /**
         * @property {function} onDeath - User defined updating, called on objects death.
         */
        this.onDeath = a.onDeath || no0p;
        /**
         * @property {function} onClick - What should happen if the object is clicked?
         */
        this.onClick = a.onClick || no0p;
        /**
         * @property {function} onUp - What should happen if the mouse is lifted on the object?
         */
        this.onUp = a.onUp || no0p;
        /**
         * @property {function} onDown - What should happen if the mouse is dropped on the object?
         */
        this.onDown = a.onDown || no0p;
        /**
         * @property {function} onHold - What should happen if the object is held down by the mouse?
         */
        this.onHold = a.onHold || no0p;
        /**
         * @property {function} onDblClick - What should happen if the object is double clicked?
         */
        this.onDblClick = a.onDblClick || no0p;
        /**
         * @property {function} onHover - What should happen if the object is hovered over?
         */
        this.onHover = a.onHover || no0p;
    };
    HYPER.Sprite.prototype = {
        /**
         * Locks the object to any other object that has a X and Y property.
         * @method HYPER.Sprite.lockTo
         * @param {object} to - the object this object is locked to.
         * @param {number} x - The X offset that the object will be locked at.
         * @param {number} y - The Y offset that the object will be locked at.
         */
        lockTo: function(a, b, c) {
            if (a) {
                this.locked = a;
                this.lockedOffset.x = b || 0;
                this.lockedOffset.y = c || 0;
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
        unlock: function() {
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
        damage: function(a) {
            this.health -= a;
        },
        /**
         * Adds health to the health property.
         * @method HYPER.Sprite.heal
         * @param {number} value - The amount the object will be healed.
         */
        heal: function(a) {
            this.health += a;
        },
        /**
         * Sets the position of the sprite.
         * @method HYPER.Sprite.setPos
         * @param {number} x - The new X position of the sprite.
         * @param {number} y - The new Y position of the sprite.
         */
        setPos: function(a, b) {
            this.x = a;
            this.y = b;
            if (this.body.type === "boxJSAABB") {
                this.body.pos.x = a;
                this.body.pos.y = b;
            }
        },
        /**
         * Kills the sprite.
         * @method HYPER.Sprite.kill
         */
        kill: function() {
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
        revive: function(a) {
            this.health = a || this.maxHealth || 1;
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
        _onClick: function(a) {
            if (this.x < a.x && this.y < a.y && this.x + this.width > a.x && this.y + this.height > a.y) {
                this.onClick(a);
            }
        },
        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._onUp
         * @param {number} data - pointer data of the click.
         */
        _onUp: function(a) {
            if (this.x < a.x && this.y < a.y && this.x + this.width > a.x && this.y + this.height > a.y) {
                this.onUp(a);
            }
        },
        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._onDown
         * @param {number} data - pointer data of the click.
         */
        _onDown: function(a) {
            if (this.x < a.x && this.y < a.y && this.x + this.width > a.x && this.y + this.height > a.y) {
                this.onDown(a);
            }
        },
        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._onHold
         * @param {number} data - pointer data of the click.
         */
        _onHold: function(a) {
            if (this.x < a.x && this.y < a.y && this.x + this.width > a.x && this.y + this.height > a.y) {
                this.onHold(a);
            }
        },
        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._onDblClick
         * @param {number} data - pointer data of the click.
         */
        _onDblClick: function(a) {
            if (this.x < a.x && this.y < a.y && this.x + this.width > a.x && this.y + this.height > a.y) {
                this.onDblClick(a);
            }
        },
        /**
         * Called by parent function.
         * @private
         * @method HYPER.Sprite._render
         * @param {number} a - Information to be known about parent object.
         */
        _render: function(a) {
            var b = true;
            if (this.autoCull === true) {
                if (HYPER.Physics.checkAABBCollision(this, a.camera)) {
                    b = true;
                } else {
                    b = false;
                }
            }
            if (this.visible && this.alive && b) {
                var c = 1, d = 1;
                if (this.flippedX) {
                    c = -1;
                }
                if (this.flippedY) {
                    d = -1;
                }
                if (this.texture.type === "animation") {
                    this.texture._render(a, this.x - a.camera.x, this.y - a.camera.y, this.width, this.height, this.angle, this.rotX, this.rotY, this.scaleX * c, this.scaleY * d);
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
        _update: function(a) {
            if (this.active && this.alive) {
                for (var b = 0; b < a.pointerDATA.length; b++) {
                    if (this.x < a.pointerDATA[b].x && this.y < a.pointerDATA[b].y && this.x + this.width > a.pointerDATA[b].x && this.y + this.height > a.pointerDATA[b].y) {
                        this.onHover(a.pointerDATA[b]);
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
                    console.log("dead");
                }
            }
        }
    };
})();

(function() {
    "use strict";
    /**
     * Initalize the HYPER library.
     * @method HYPER.init
     */
    HYPER.init = function() {
        HYPER.Timer.init();
        HYPER.Input.init();
        return HYPER;
    };
})();