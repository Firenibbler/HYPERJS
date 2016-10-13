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
    // on every click
    onClick: function (info) {
        starGroup.create({
            
            // Set position th the mouse position
            
            // x position of new star
            x: info.x - 16,
            // y position of new star
            y: info.y - 16
        });
    }
});
screen.setCurrentState(gameState);

// Load star image.

var starImage = new HYPER.Preload.Bitmap({
    src: "star.png",
    onload: function () {
        starGroup.texture = starImage;
        gameState.addChild(starGroup);
    }
});

var starGroup = new HYPER.Group({
    x: 10,
    y: 10,
});



screen.init();
HYPER.init();