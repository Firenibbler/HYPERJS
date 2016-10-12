var screen = new HYPER.Screen({
    canvas: "canvas"
});

var gameState = new HYPER.State({
    init: function (info) {

    },
    update: function (info) {

    },
    render: function (info) {

    },
});
screen.setCurrentState(gameState);
var starImage = new HYPER.Preload.Bitmap({
    src: "star.png",
    onload: function () {
        starSprite.texture = starImage;
        gameState.addChild(starSprite);
    }
});

var starSprite = new HYPER.Sprite({
    x: 10,
    y: 10,
});

screen.init();
HYPER.init();