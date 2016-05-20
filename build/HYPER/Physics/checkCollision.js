(function () {
    "use strict";
    var distX = 0;
    var distY = 0;
    var dx = 0;
    var dy = 0;
    var x = 0;
    var y = 0;

    function RectCircleAABBColliding(circle, rect) {
        distX = Math.abs((circle.x + circle.size.x) - (rect.x + rect.size.x) - rect.size.width / 2);
        distY = Math.abs((circle.y + circle.size.y) - (rect.y + rect.size.y) - rect.size.height / 2);

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
    };

    function circleCircleColliding(circle1, circle2) {
        if (Math.sqrt((circle1.x - circle2.x) * (circle1.x - circle2.x) + (circle1.y - circle2.y) * (circle1.y - circle2.y)) < circle1.radius + circle2.radius) {
            return true;
        } else {
            return false;
        }
    };

    function rectRectAABBColliding(rect1, rect2) {
        if (rect1.x + rect1.size.x <= rect2.x + rect2.size.x + rect2.size.width &&
            rect1.x + rect1.size.x + rect1.size.width >= rect2.x + rect2.size.x &&
            rect1.y + rect1.size.y <= rect2.y + rect2.size.y + rect2.size.height &&
            rect1.y + rect1.size.y + rect1.size.height >= rect2.y + rect2.size.y) {
            return true;
        } else {
            return false;
        }
    };

    function rectPointAABBColliding(point, rect) {
        if (point.x >= rect.x + rect.size.x &&
            point.x <= (rect.x + rect.size.x) + rect.size.width &&
            point.y >= rect.y + rect.size.y &&
            point.y <= (rect.y + rect.size.y) + rect.size.height) {
            return true;
        } else {
            return false;
        };
    };

    function circlePointAABBColliding(point, circle) {
        if (Math.sqrt((circle.x - point.x) * (circle.x - point.x) + (circle.y - point.y) * (circle.y - point.y)) <= circle.radius) {
            return true;
        } else {
            return false;
        }
    };

    function pointPointColliding(point1, point2) {
        if (Math.floor(point1.x) == Math.floor(point2.x) && Math.floor(point1.y) == Math.floor(point2.y)) {
            return true;
        } else {
            return false;
        }
    };

    function lineLineColliding(line1, line2) {

        x = ((line1.point1.x * line1.point2.y - line1.point1.y * line1.point2.x) *
                (line2.point1.x - line2.point2.x) - (line1.point1.x - line1.point2.x) *
                (line2.point1.x * line2.point2.y - line2.point1.y * line2.point2.x)) /
            ((line1.point1.x - line1.point2.x) * (line2.point1.y - line2.point2.y) -
                (line1.point1.y - line1.point2.y) * (line2.point1.x - line2.point2.x));

        y = ((line1.point1.x * line1.point2.y - line1.point1.y * line1.point2.x) *
                (line2.point1.y - line2.point2.y) - (line1.point1.y - line1.point2.y) *
                (line2.point1.x * line2.point2.y - line2.point1.y * line2.point2.x)) /
            ((line1.point1.x - line1.point2.x) * (line2.point1.y - line2.point2.y) -
                (line.point1.y - line1.point2.y) * (line2.point1.x - line2.point2.x));

        if (isNaN(x) || isNaN(y)) {
            return false;
        } else {
            if (line1.point1.x >= line1.point2.x) {
                if (!(line1.point1.x <= x && x <= line1.point1.x)) {
                    return false;
                }
            } else {
                if (!(line1.point1.x <= x && x <= line1.point2.x)) {
                    return false;
                }
            }
            if (line1.point1.y >= line1.point2.y) {
                if (!(line1.point2.y <= y && y <= line1.point1.y)) {
                    return false;
                }
            } else {
                if (!(line1.point1.y <= y && y <= line1.point2.y)) {
                    return false;
                }
            }
            if (line2.point1.x >= line2.point2.x) {
                if (!(line2.point2.x <= x && x <= line2.point1.x)) {
                    return false;
                }
            } else {
                if (!(line2.point1.x <= x && x <= line2.point2.x)) {
                    return false;
                }
            }
            if (line2.point1.y >= line2.point2.y) {
                if (!(line2.point2.y <= y && y <= line2.point1.y)) {
                    return false;
                }
            } else {
                if (!(line2.point1.y <= y && y <= line2.point2.y)) {
                    return false;
                }
            }
        }
        return true;


    };

    function lineRectAABBColliding(line, rect) {
        if (rectPointAABBColliding(line.point1, rect) || rectPointAABBColliding(line.point2, rect)) {
            return true;
        } else if (lineLineColliding(line, {
                point1: {
                    x: rect.x + rect.size.x,
                    y: rect.y + rect.size.y,
                },
                point2: {
                    x: rect.x + rect.size.x + rect.size.width,
                    y: rect.y + rect.size.y,
                },
            }) || lineLineColliding(line, {
                point1: {
                    x: rect.x + rect.size.x,
                    y: rect.y + rect.size.y,
                },
                point2: {
                    x: rect.x + rect.size.x,
                    y: rect.y + rect.size.y + rect.size.width,
                },
            }) || lineLineColliding(line, {
                point1: {
                    x: rect.x + rect.size.x + rect.size.width,
                    y: rect.y + rect.size.y,
                },
                point2: {
                    x: rect.x + rect.size.x,
                    y: rect.y + rect.size.y + rect.size.height,
                },
            }) || lineLineColliding(line, {
                point1: {
                    x: rect.x + rect.size.x + rect.size.height,
                    y: rect.y + rect.size.y,
                },
                point2: {
                    x: rect.x + rect.size.x + rect.size.width,
                    y: rect.y + rect.size.y,
                },
            })) {
            return true;
        } else {
            return false;
        }
    };

    function linePointColliding(line, point) {
        if (Math.floor(point.y) == Math.floor((line.lineEquation * point.x) - ((line.lineEquation * line.point1.x) - line.point1.y))) {
            return true;
        } else {
            return false;
        }
    };

    function lineCircleColliding(line, circle) {

        if (circlePointAABBColliding(line.point1, circle) || circlePointAABBColliding(line.point2, circle)) {
            return true;
        } else if (Math.floor(circle.y) >= Math.abs(Math.floor((line.lineEquation * circle.x) - ((line.lineEquation * line.point1.x) - circle.y) - circle.size.radius)) &&
            Math.floor(circle.y) <= Math.abs(Math.floor((line.lineEquation * circle.x) - ((line.lineEquation * line.point1.x) - circle.y) + circle.size.radius))) {
            return true;
        } else {
            return false;
        }

    };

    HYPER.Physics.checkCollision = function (obj1, obj2) {
        if (obj1._ShapeType == "rect") {
            if (obj2._ShapeType == "rect") {
                return rectRectAABBColliding(obj1, obj2);
            }
            if (obj2._ShapeType == "circle") {
                return RectCircleAABBColliding(obj2, obj1);

            }
            if (obj2._ShapeType == "point") {
                return rectPointAABBColliding(obj2, obj1);

            }
            if (obj2._ShapeType == "line") {
                return lineRectAABBColliding(obj2, obj1);

            }
        }
        if (obj1._ShapeType == "circle") {
            if (obj2._ShapeType == "rect") {
                return RectCircleAABBColliding(obj1, obj2);

            }
            if (obj2._ShapeType == "circle") {
                return circleCircleColliding(obj1, obj2);

            }
            if (obj2._ShapeType == "point") {
                return circlePointAABBColliding(obj2, obj1);

            }
            if (obj2._ShapeType == "line") {
                return lineCircleColliding(obj2, obj1);

            }
        }
        if (obj1._ShapeType == "line") {
            if (obj2._ShapeType == "rect") {
                return lineRectAABBColliding(obj1, obj2);

            }
            if (obj2._ShapeType == "circle") {
                return lineCircleColliding(obj1, obj2);

            }
            if (obj2._ShapeType == "point") {
                return linePointColliding(obj1, obj2);

            }
            if (obj2._ShapeType == "line") {
                return lineLineColliding(obj2, obj1);

            }
        }
        if (obj1._ShapeType == "point") {
            if (obj2._ShapeType == "rect") {
                return rectPointAABBColliding(obj1, obj2);
            }
            if (obj2._ShapeType == "circle") {
                return circlePointAABBColliding(obj1, obj2);
            }
            if (obj2._ShapeType == "point") {
                return pointPointColliding(obj1, obj2);
            }
            if (obj2._ShapeType == "line") {
                return linePointColliding(obj2, obj1);

            }
        }
    };

    HYPER.Physics.checkSimpleCollision = function (obj1, obj2) {
        var test1 = {};
        var test2 = {};

        if (obj1._ShapeType == "rect") {
            test1.x = obj1.x + obj1.size.x;
            test1.y = obj1.y + obj1.size.y;
            test1.width = obj1.size.width;
            test1.height = obj1.size.height;
        } else if (obj1._ShapeType == "circle") {
            test1.x = obj1.x - obj1.size.radius;
            test1.y = obj1.y + obj1.size.radius;
            test1.width = obj1.size.radius * 2;
            test1.height = obj1.size.radius * 2;
        } else if (obj1._ShapeType == "point") {
            test1.x = obj1.x;
            test1.y = obj1.y;
            test1.width = 1;
            test1.height = 1;
        } else if (obj1._ShapeType == "line") {
            if (obj1.point1.x <= obj1.point2.x) {
                test1.x = obj1.point1.x;
                test1.width = obj1.point2.x - test1.x;
            } else {
                test1.x = obj1.point2.x;
                test1.width = obj1.point1.x - test1.x;
            }

            if (obj1.point1.y <= obj1.point2.y) {
                test1.y = obj1.point1.y;
                test1.height = obj1.point2.y - test1.y;
            } else {
                test1.y = this.point2.y;
                test1.height = obj1.point1.y - test1.y;
            }
        }

        if (obj2._ShapeType == "rect") {
            test2.x = obj2.x + obj2.size.x;
            test2.y = obj2.y + obj2.size.y;
            test2.width = obj2.size.width;
            test2.height = obj2.size.height;
        } else if (obj2._ShapeType == "circle") {
            test2.x = obj2.x - obj2.size.radius;
            test2.y = obj2.y + obj2.size.radius;
            test2.width = obj2.size.radius * 2;
            test2.height = obj2.size.radius * 2;
        } else if (obj2._ShapeType == "point") {
            test2.x = obj2.x;
            test2.y = obj2.y;
            test2.width = 1;
            test2.height = 1;
        } else if (obj2._ShapeType == "line") {
            if (obj2.point1.x <= obj2.point2.x) {
                test2.x = obj2.point1.x;
                test2.width = obj2.point2.x - test2.x;
            } else {
                test2.x = obj2.point2.x;
                test2.width = obj2.point1.x - test2.x;
            }

            if (obj2.point1.y <= obj2.point2.y) {
                test2.y = obj2.point1.y;
                test2.height = obj2.point2.y - test2.y;
            } else {
                test2.y = obj2.point2.y;
                test2.height = obj2.point1.y - test2.y;
            }
        }

        if (test1.x < test2.x + test2.width &&
            test1.x + test1.width > test2.x &&
            test1.y < test2.y + test2.height &&
            test1.height + test1.y > test2.y) {
            return true;
        }else{
            return false;
        }

    };

})();