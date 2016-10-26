var screen = new HYPER.Screen({
    canvas: "canvas",
    showFPS: true,
});

var gameState = new HYPER.State({
    init: function (info) {

    },
    update: function (info) {

    },
    render: function (info) {
        /*
        for (var i = 0; i < 200; i++) {
            HYPER.Graphics.Draw(info.ctx).setFillColor("#ff0000").circle(HYPER.Math.random(0, 800), HYPER.Math.random(0, 600), HYPER.Math.random(0, 10))
        }
*/
    },
    onHover: function (info) {
        emitter.x = info.x;
        emitter.y = info.y;
        emitter.emit(0, 360, 1, 2);
    }
});
screen.setCurrentState(gameState);
var style = new HYPER.Graphics.Style({
    globalCompositeOperation: "lighter"
});
var emitter = new HYPER.Particle.Emitter({
    x: 100,
    y: 100,
    startColor: "0000ff",
    endColor: "00ff00",
    startAlpha: 1,
    endAlpha: 0.01,
    startSize: 5,
    gravity: {
        x: 0,
        y: 0.01
    },
    style: style,
});

gameState.addChild(emitter);


HYPER.init();
screen.init();