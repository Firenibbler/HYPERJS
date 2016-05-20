(function () {
    "use strict";
    // INPUT
    var i = 0;
    /**
     * Description Gloable object for all Input functions.
     */
    HYPER.Input = {};

    /**
     * Description Gloable object for all Pointer functions.
     */
    HYPER.Input.Pointer = {
        point: [],
        _listeners: {
            mousemove: function (e) {
                e.preventDefault();
                HYPER.Input.Pointer.point[0]._x = e.pageX;
                HYPER.Input.Pointer.point[0]._y = e.pageY;
            },
            mousedown: function (e) {
                e.preventDefault();
                HYPER.Input.Pointer.point[0]._x = e.pageX;
                HYPER.Input.Pointer.point[0]._y = e.pageY;
                HYPER.Input.Pointer.point[0]._down = true;
                HYPER.Input.Pointer.point[0]._hold = true;

            },
            mouseup: function (e) {
                e.preventDefault();
                HYPER.Input.Pointer.point[0]._x = e.pageX;
                HYPER.Input.Pointer.point[0]._y = e.pageY;
                HYPER.Input.Pointer.point[0]._up = true;
                HYPER.Input.Pointer.point[0]._hold = false;
            },
            dblclick: function (e) {
                e.preventDefault();
                HYPER.Input.Pointer.point[0]._x = e.pageX;
                HYPER.Input.Pointer.point[0]._y = e.pageY;
                HYPER.Input.Pointer.point[0]._dbclick = true;
            },
            touchmove: function (e) {
                e.preventDefault();
                HYPER.Input.Pointer.point[e.which]._x = e.changedTouches[e.which].pageX;
                HYPER.Input.Pointer.point[e.which]._y = e.changedTouches[e.which].pageY;
            },
            touchstart: function (e) {
                e.preventDefault();
                HYPER.Input.Pointer.point[e.which]._x = e.changedTouches[e.which].pageX;
                HYPER.Input.Pointer.point[e.which]._y = e.changedTouches[e.which].pageY;
                HYPER.Input.Pointer.point[e.which]._down = true;
                HYPER.Input.Pointer.point[e.which]._hold = true;

            },
            touchend: function (e) {
                e.preventDefault();
                HYPER.Input.Pointer.point[e.which]._x = e.changedTouches[e.which].pageX;
                HYPER.Input.Pointer.point[e.which]._y = e.changedTouches[e.which].pageY;
                HYPER.Input.Pointer.point[e.which]._up = true;
                HYPER.Input.Pointer.point[e.which]._hold = false;

            },
            preventDefault: function (e) {
                e.preventDefault();
            },
        },
        getPointer: function (n) {
            return HYPER.Input.Pointer.point[n];
        },
    };

    /**
     * Description Gloable object for all Keys functions.
     */
    HYPER.Input.Keys = {
        key: [],
        _listeners: {
            keyup: function (e) {
                HYPER.Input.Keys.key[e.which]._up = true;
                HYPER.Input.Keys.key[e.which]._hold = false;
            },
            keydown: function (e) {
                HYPER.Input.Keys.key[e.which]._down = true;
                HYPER.Input.Keys.key[e.which]._hold = true;
            },
        },
        getKey: function (letter) {
            if (letter == "backspace") {
                return HYPER.Input.Keys.key[8];
            }
            if (letter == "tab") {
                return HYPER.Input.Keys.key[9];
            }
            if (letter == "enter") {
                return HYPER.Input.Keys.key[13];
            }
            if (letter == "shift") {
                return HYPER.Input.Keys.key[16];
            }
            if (letter == "ctrl") {
                return HYPER.Input.Keys.key[17];
            }
            if (letter == "alt") {
                return HYPER.Input.Keys.key[18];
            }
            if (letter == "pause/break") {
                return HYPER.Input.Keys.key[19];
            }
            if (letter == "caps lock") {
                return HYPER.Input.Keys.key[20];
            }
            if (letter == "escape") {
                return HYPER.Input.Keys.key[27];
            }
            if (letter == "page up") {
                return HYPER.Input.Keys.key[33];
            }
            if (letter == "page down") {
                return HYPER.Input.Keys.key[34];
            }
            if (letter == "end") {
                return HYPER.Input.Keys.key[35];
            }
            if (letter == "home") {
                return HYPER.Input.Keys.key[36];
            }
            if (letter == "left arrow") {
                return HYPER.Input.Keys.key[37];
            }
            if (letter == "up arrow") {
                return HYPER.Input.Keys.key[38];
            }
            if (letter == "right arrow") {
                return HYPER.Input.Keys.key[39];
            }
            if (letter == "down arrow") {
                return HYPER.Input.Keys.key[40];
            }
            if (letter == "space") {
                return HYPER.Input.Keys.key[32];
            }
            if (letter == "insert") {
                return HYPER.Input.Keys.key[45];
            }
            if (letter == "delete") {
                return HYPER.Input.Keys.key[46];
            }
            if (letter == "0") {
                return HYPER.Input.Keys.key[48];
            }
            if (letter == "1") {
                return HYPER.Input.Keys.key[49];
            }
            if (letter == "2") {
                return HYPER.Input.Keys.key[50];
            }
            if (letter == "3") {
                return HYPER.Input.Keys.key[51];
            }
            if (letter == "4") {
                return HYPER.Input.Keys.key[52];
            }
            if (letter == "5") {
                return HYPER.Input.Keys.key[53];
            }
            if (letter == "6") {
                return HYPER.Input.Keys.key[54];
            }
            if (letter == "7") {
                return HYPER.Input.Keys.key[55];
            }
            if (letter == "8") {
                return HYPER.Input.Keys.key[56];
            }
            if (letter == "9") {
                return HYPER.Input.Keys.key[57];
            }
            if (letter == "a") {
                return HYPER.Input.Keys.key[65];
            }
            if (letter == "b") {
                return HYPER.Input.Keys.key[66];
            }
            if (letter == "c") {
                return HYPER.Input.Keys.key[67];
            }
            if (letter == "d") {
                return HYPER.Input.Keys.key[68];
            }
            if (letter == "e") {
                return HYPER.Input.Keys.key[69];
            }
            if (letter == "f") {
                return HYPER.Input.Keys.key[70];
            }
            if (letter == "g") {
                return HYPER.Input.Keys.key[71];
            }
            if (letter == "h") {
                return HYPER.Input.Keys.key[72];
            }
            if (letter == "i") {
                return HYPER.Input.Keys.key[73];
            }
            if (letter == "j") {
                return HYPER.Input.Keys.key[74];
            }
            if (letter == "k") {
                return HYPER.Input.Keys.key[75];
            }
            if (letter == "l") {
                return HYPER.Input.Keys.key[76];
            }
            if (letter == "m") {
                return HYPER.Input.Keys.key[77];
            }
            if (letter == "n") {
                return HYPER.Input.Keys.key[78];
            }
            if (letter == "o") {
                return HYPER.Input.Keys.key[79];
            }
            if (letter == "p") {
                return HYPER.Input.Keys.key[80];
            }
            if (letter == "q") {
                return HYPER.Input.Keys.key[81];
            }
            if (letter == "r") {
                return HYPER.Input.Keys.key[82];
            }
            if (letter == "s") {
                return HYPER.Input.Keys.key[83];
            }
            if (letter == "t") {
                return HYPER.Input.Keys.key[84];
            }
            if (letter == "u") {
                return HYPER.Input.Keys.key[85];
            }
            if (letter == "v") {
                return HYPER.Input.Keys.key[86];
            }
            if (letter == "w") {
                return HYPER.Input.Keys.key[87];
            }
            if (letter == "x") {
                return HYPER.Input.Keys.key[88];
            }
            if (letter == "y") {
                return HYPER.Input.Keys.key[89];
            }
            if (letter == "z") {
                return HYPER.Input.Keys.key[90];
            }
            if (letter == "left window key") {
                return HYPER.Input.Keys.key[91];
            }
            if (letter == "right window key") {
                return HYPER.Input.Keys.key[92];
            }
            if (letter == "select key") {
                return HYPER.Input.Keys.key[93];
            }
            if (letter == "numpad 0") {
                return HYPER.Input.Keys.key[96];
            }
            if (letter == "numpad 1") {
                return HYPER.Input.Keys.key[97];
            }
            if (letter == "numpad 2") {
                return HYPER.Input.Keys.key[98];
            }
            if (letter == "numpad 3") {
                return HYPER.Input.Keys.key[99];
            }
            if (letter == "numpad 4") {
                return HYPER.Input.Keys.key[100];
            }
            if (letter == "numpad 5") {
                return HYPER.Input.Keys.key[101];
            }
            if (letter == "numpad 6") {
                return HYPER.Input.Keys.key[102];
            }
            if (letter == "numpad 7") {
                return HYPER.Input.Keys.key[103];
            }
            if (letter == "numpad 8") {
                return HYPER.Input.Keys.key[104];
            }
            if (letter == "numpad 9") {
                return HYPER.Input.Keys.key[105];
            }
            if (letter == "multiply") {
                return HYPER.Input.Keys.key[106];
            }
            if (letter == "add") {
                return HYPER.Input.Keys.key[107];
            }
            if (letter == "subtract") {
                return HYPER.Input.Keys.key[109];
            }
            if (letter == "decimal point") {
                return HYPER.Input.Keys.key[110];
            }
            if (letter == "divide") {
                return HYPER.Input.Keys.key[111];
            }
            if (letter == "f1") {
                return HYPER.Input.Keys.key[112];
            }
            if (letter == "f2") {
                return HYPER.Input.Keys.key[113];
            }
            if (letter == "f3") {
                return HYPER.Input.Keys.key[114];
            }
            if (letter == "f4") {
                return HYPER.Input.Keys.key[115];
            }
            if (letter == "f5") {
                return HYPER.Input.Keys.key[116];
            }
            if (letter == "f6") {
                return HYPER.Input.Keys.key[117];
            }
            if (letter == "f7") {
                return HYPER.Input.Keys.key[118];
            }
            if (letter == "f8") {
                return HYPER.Input.Keys.key[119];
            }
            if (letter == "f9") {
                return HYPER.Input.Keys.key[120];
            }
            if (letter == "f10") {
                return HYPER.Input.Keys.key[121];
            }
            if (letter == "f11") {
                return HYPER.Input.Keys.key[122];
            }
            if (letter == "f12") {
                return HYPER.Input.Keys.key[123];
            }
            if (letter == "num lock") {
                return HYPER.Input.Keys.key[144];
            }
            if (letter == "scroll lock") {
                return HYPER.Input.Keys.key[145];
            }
            if (letter == "semi-colon") {
                return HYPER.Input.Keys.key[186];
            }
            if (letter == "equal sign") {
                return HYPER.Input.Keys.key[187];
            }
            if (letter == "comma") {
                return HYPER.Input.Keys.key[188];
            }
            if (letter == "dash") {
                return HYPER.Input.Keys.key[189];
            }
            if (letter == "period") {
                return HYPER.Input.Keys.key[190];
            }
            if (letter == "forward slash") {
                return HYPER.Input.Keys.key[191];
            }
            if (letter == "grave accent") {
                return HYPER.Input.Keys.key[192];
            }
            if (letter == "open bracket") {
                return HYPER.Input.Keys.key[219];
            }
            if (letter == "back slash") {
                return HYPER.Input.Keys.key[220];
            }
            if (letter == "close braket") {
                return HYPER.Input.Keys.key[221];
            }
            if (letter == "single quote") {
                return HYPER.Input.Keys.key[222];
            }
        },
    };

    HYPER.Input._addEventListeners = function () {
        document.addEventListener("mousemove", HYPER.Input.Pointer._listeners.mousemove);
        document.addEventListener("mousedown", HYPER.Input.Pointer._listeners.mousedown);
        document.addEventListener("mouseup", HYPER.Input.Pointer._listeners.mouseup);
        document.addEventListener("dblclick", HYPER.Input.Pointer._listeners.dblclick);

        document.addEventListener("touchmove", HYPER.Input.Pointer._listeners.touchmove);
        document.addEventListener("touchstart", HYPER.Input.Pointer._listeners.touchstart);
        document.addEventListener("touchend", HYPER.Input.Pointer._listeners.touchend);
        document.addEventListener("touchcancel", HYPER.Input.Pointer._listeners.touchend);

        window.addEventListener("keydown", HYPER.Input.Keys._listeners.keydown);
        window.addEventListener("keyup", HYPER.Input.Keys._listeners.keyup);

        window.addEventListener("drag", HYPER.Input.Pointer._listeners.preventDefault);

    };

    HYPER.Input.init = function () {
        for (i = 0; i < 10; i++) {
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
        for (i = 0; i < 300; i++) {
            HYPER.Input.Keys.key[i] = {
                up: false,
                down: false,
                hold: false,
                _up: false,
                _down: false,
                _hold: false,
            };
        };
        HYPER.Input._addEventListeners();

        function updateInput() {
            for (i = 0; i < 10; i++) {
                HYPER.Input.Pointer.point[i].x = HYPER.Input.Pointer.point[i]._x;
                HYPER.Input.Pointer.point[i].y = HYPER.Input.Pointer.point[i]._y;
                HYPER.Input.Pointer.point[i].up = HYPER.Input.Pointer.point[i]._up;
                HYPER.Input.Pointer.point[i].down = HYPER.Input.Pointer.point[i]._down;
                HYPER.Input.Pointer.point[i].hold = HYPER.Input.Pointer.point[i]._hold;
                HYPER.Input.Pointer.point[i].dblclick = HYPER.Input.Pointer.point[i]._dblclick;

                HYPER.Input.Pointer.point[i]._up = false;
                HYPER.Input.Pointer.point[i]._down = false;
                HYPER.Input.Pointer.point[i]._dblclick = false;

            };
            for (i = 0; i < 225; i++) {
                HYPER.Input.Keys.key[i].up = HYPER.Input.Keys.key[i]._up;
                HYPER.Input.Keys.key[i].down = HYPER.Input.Keys.key[i]._down;
                HYPER.Input.Keys.key[i].hold = HYPER.Input.Keys.key[i]._hold;

                HYPER.Input.Keys.key[i]._up = false;
                HYPER.Input.Keys.key[i]._down = false;
            };
        };

        HYPER.Timer.addEventListener("tick", updateInput);

    };
})();