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