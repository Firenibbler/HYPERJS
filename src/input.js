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
            return this.point[ID].held;
        },

        /**
         * Returns if a pointer is clicked Up.
         * @method HYPER.Input.Pointer.getUp
         * @param {number} ID - The ID of the pointer you want.
         */

        getUp: function (ID) {
            ID = ID || 0;
            return this.point[ID].up;
        },

        /**
         * Returns if a pointer is clicked Down.
         * @method HYPER.Input.Pointer.getDown
         * @param {number} ID - The ID of the pointer you want.
         */

        getDown: function (ID) {
            ID = ID || 0;
            return this.point[ID].down;
        },

        /**
         * Returns the position of the pointer on the page.
         * @method HYPER.Input.Pointer.getPosition
         * @param {number} ID - The ID of the pointer you want.
         */

        getPosition: function (ID) {
            ID = ID || 0;
            return this.point[ID]
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


    HYPER.Input.updateInput = function () {
        for (var i = 0; i < 1; i++) {
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

            for (var s = 0; s < HYPER.Input.screens.length; s++) {
                if (HYPER.Input.Pointer.point[i].x > HYPER.Input.screens[s].canvas.offsetLeft &&
                    HYPER.Input.Pointer.point[i].y > HYPER.Input.screens[s].canvas.offsetTop &&
                    HYPER.Input.Pointer.point[i].x < HYPER.Input.screens[s].canvas.offsetLeft + HYPER.Input.screens[s].view.width &&
                    HYPER.Input.Pointer.point[i].y < HYPER.Input.screens[s].canvas.offsetTop + HYPER.Input.screens[s].view.height) {

                    HYPER.Input.screens[s]._onHover(i);
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
            }

        };
        for (var i = 0; i < 222; i++) {
            HYPER.Input.Keys.key[i].up = HYPER.Input.Keys.key[i]._up;
            HYPER.Input.Keys.key[i].down = HYPER.Input.Keys.key[i]._down;
            HYPER.Input.Keys.key[i].hold = HYPER.Input.Keys.key[i]._hold;

            HYPER.Input.Keys.key[i]._up = false;
            HYPER.Input.Keys.key[i]._down = false;


            for (var s = 0; s < HYPER.Input.screens.length; s++) {
                if (HYPER.Input.Keys.key[i].up) {
                    HYPER.Input.screens[s]._onKeyUp(HYPER.Input.Keys.getKeyFromID(i));
                }
                if (HYPER.Input.Keys.key[i].down) {
                    HYPER.Input.screens[s]._onKeyDown(HYPER.Input.Keys.getKeyFromID(i));
                }
                if (HYPER.Input.Keys.key[i].hold) {
                    HYPER.Input.screens[s]._onKeyHeld(HYPER.Input.Keys.getKeyFromID(i));
                }
            }

        };

    };


    /**
      Initilize the Input module. 
     */
    HYPER.Input.init = function () {
        for (var i = 0; i < 10; i++) {
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
        for (var i = 0; i < 300; i++) {
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



        HYPER.Timer.addOnTick(HYPER.Input.updateInput);

    };
})();