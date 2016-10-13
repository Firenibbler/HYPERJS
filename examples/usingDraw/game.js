// make a screen
var screen = new HYPER.Screen({
    canvas: "canvas"
});
// Make a game state.
var gameState = new HYPER.State({
    init: function (info) {

    },
    update: function (info) {

    },
    render: function (info) {
        // draw a rectangle
        HYPER.Graphics.Draw(info.ctx).setFillColor("#ff0000").rect(10, 10, 32, 32);
        // draw a triangle
        HYPER.Graphics.Draw(info.ctx).setFillColor("#ff0000").triangle(50, 50, 50, 100, 100, 100);
        // draw a line
        HYPER.Graphics.Draw(info.ctx).setStrokeColor("#ff0000").line(100, 50, 150, 100).strokePath();
    },
});
screen.setCurrentState(gameState);
screen.init();
HYPER.init();