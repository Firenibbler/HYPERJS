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