(function () {
    "use strict";
    /**
     * Used to draw or create graphicle objects for particles sprites.
     * @class HYPER.Graphics.Draw
     * @param {object} ctx The context to draw to.
     * @param {object} style The style that will be drawn, use a Graphics.Style or pass your own information in the form of a object.
     * @param {boolean} autoStart If the path will automaticaly begin.
     * @return {object} self
     */

    HYPER.Graphics.Draw = function (ctx, style, autoStart) {

        /**
         * @property {object} ctx - The context that will be rendered to.
         */

        this.ctx = ctx;

        /**
         * @property {boolean} autoStart - If a drawing path should begin.
         */

        this.autoStart = autoStart || true;

        /**
         * @property {HYPER.Graphics.Style} style - The style all objects will bew rendered with.
         */

        this.style = style || HYPER.Graphics.DEFAULT_STYLE;

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

        this.beginPath = function () {
            this.ctx.beginPath();
            return this;
        };

        /**
         * closes a path.
         * @method HYPER.Graphics.Draw.closePath
         */

        this.closePath = function () {
            this.ctx.closePath();
            return this;
        };

        /**
         * Fills a path.
         * @method HYPER.Graphics.Draw.fillPath
         */

        this.fillPath = function () {
            this.ctx.fill();
            return this;
        };

        /**
         * Strokes a path.
         * @method HYPER.Graphics.Draw.strokePath
         */

        this.strokePath = function () {
            this.ctx.stroke();
            return this;
        };

        /**
         * Sets the fill color.
         * @method HYPER.Graphics.Draw.setFillColor
         * @param {string} color - New fill color.
         */

        this.setFillColor = function (color) {
            this.ctx.fillStyle = color || this.ctx.fillStyle;
            return this;
        };

        /**
         * Sets the stroke color.
         * @method HYPER.Graphics.Draw.setStrokeColor
         * @param {string} color - New stroke color.
         */

        this.setStrokeColor = function (color) {
            this.ctx.strokeStyle = color || this.ctx.strokeStyle;
            return this;
        };

        /**
         * Sets the alpha value.
         * @method HYPER.Graphics.Draw.setAlpha
         * @param {number} alpha - New alpha value.
         */

        this.setAlpha = function (alpha) {
            this.ctx.globalAlpha = alpha;
            return this;
        };

        /**
         * Sets a new rendering style.
         * @method HYPER.Graphics.Draw.setStyle
         * @param {HYPER.Graphics.Style} style - New style.
         */

        this.setStyle = function (style) {
            if (style._ID.split(" ")[0] === "style") {
                this.style = style || {};
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

        this.clearRect = function (x, y, width, height) {
            this.ctx.clearRect(x, y, width, height);
        };

        /**
         * Draws a line.
         * @method HYPER.Graphics.Draw.line
         * @param {number} startX - X position to start the line.
         * @param {number} startY - Y position to start the line.
         * @param {number} endX - X position to end the line.
         * @param {number} endY - Y position to end the line.
         */

        this.line = function (startX, startY, endX, endY) {
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            this.ctx.moveTo(startX, startY);
            this.ctx.lineTo(endX, endY);

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

        this.circle = function (x, y, radius, startAngle, endAngle, counterClockwise) {
            startAngle = startAngle || 0;
            endAngle = endAngle || 360;
            counterClockwise = counterClockwise || false;
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            this.ctx.arc(x, y, radius, HYPER.Math.degreesToRadians(startAngle), HYPER.Math.degreesToRadians(endAngle), counterClockwise);
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

        this.quadraticCurve = function (startX, startY, endX, endY, cpx, cpy) {
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            this.ctx.moveTo(startX, startY);
            this.ctx.quadraticCurveTo(endX, endY, cpx, cpy);
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

        this.bezierCurve = function (startX, startY, endX, endY, cpx1, cpy1, cpx2, cpy2) {
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            this.ctx.moveTo(startX, startY);
            this.ctx.bezierCurveTo(endX, endY, cpx1, cpy1, cpx2, cpy2);
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

        this.arcTo = function (startX, startY, endX, endY, tanX, tanY, radius) {
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            this.ctx.moveTo(startX, startY);
            this.ctx.arcTo(endX, endY, tanX, tanY, radius);
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

        this.rect = function (x, y, width, height, angle, rotX, rotY) {
            angle = angle || 0;
            rotX = rotX || 0;
            rotY = rotY || 0;
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            if (angle != 0) {
                this.ctx.translate(x + rotX, y + rotY);
                this.ctx.rotate(HYPER.Math.degreesToRadians(angle));
                this.ctx.rect(-rotX, -rotY, width, height);
                this.ctx.rotate(-HYPER.Math.degreesToRadians(angle));
                this.ctx.translate(-(x + rotX), -(y + rotY));
            } else {
                this.ctx.rect(x, y, width, height);
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

        this.triangle = function (x1, y1, x2, y2, x3, y3, angle, rotX, rotY) {
            angle = angle || 0;
            rotX = rotX || 0;
            rotY = rotY || 0;
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            if (angle != 0) {
                this.ctx.translate(x1 + rotX, y1 + rotY);
                this.ctx.rotate(HYPER.Math.degreesToRadians(angle));
                this.ctx.moveTo(x1 - x1 - rotX, y1 - x1 - rotY);
                this.ctx.lineTo(x2 - x1 - rotX, y2 - y1 - rotY);
                this.ctx.lineTo(x3 - x1 - rotX, y3 - y1 - rotY);
                this.ctx.lineTo(x1 - x1 - rotX, y1 - y1 - rotY);
                this.ctx.rotate(-HYPER.Math.degreesToRadians(angle));
                this.ctx.translate(-(x1 + rotX), -(y1 + rotY));
            } else {
                this.ctx.moveTo(x1, y1);
                this.ctx.lineTo(x2, y2);
                this.ctx.lineTo(x3, y3);
                //this.ctx.lineTo(x1, y1);
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

        this.polygon = function (pos, angle, rotX, rotY) {
            angle = angle || 0;
            rotX = rotX || 0;
            rotY = rotY || 0;
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            if (angle != 0) {
                this.ctx.translate(pos[0] + rotX, pos[1] + rotY);
                this.ctx.rotate(HYPER.Math.degreesToRadians(angle));
                this.ctx.moveTo(pos[0] - pos[0] - rotX, pos[1] - pos[1] - rotY);
                for (let i = 0; i < pos.length; i += 2) {
                    this.ctx.lineTo(pos[i] - pos[0] - rotX, pos[i + 1] - pos[1] - rotY);
                }
                this.ctx.lineTo(pos[0] - pos[0] - rotX, pos[1] - pos[1] - rotY);
                this.ctx.rotate(-HYPER.Math.degreesToRadians(angle));
                this.ctx.translate(-(pos[0] + rotX), -(pos[1] + rotY));
            } else {
                this.ctx.moveTo(pos[0], pos[1]);
                for (let i = 0; i < pos.length; i += 2) {
                    this.ctx.lineTo(pos[i], pos[i + 1]);
                }
                this.ctx.lineTo(pos[0], pos[1]);
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

        this.text = function (text, x, y, angle, rotX, rotY) {
            angle = angle || 0;
            rotX = rotX || 0;
            rotY = rotY || 0;
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }
            if (angle != 0) {
                this.ctx.translate(x + rotX, y + rotY);
                this.ctx.rotate(HYPER.Math.degreesToRadians(angle));
                if (this.style.fill) {
                    this.ctx.fillText(text, -rotX, -rotY);
                }
                if (this.style.stroke) {
                    this.ctx.strokeText(text, -rotX, -rotY);
                }
                this.ctx.rotate(-HYPER.Math.degreesToRadians(angle));
                this.ctx.translate(-(x + rotX), -(y + rotY));
            } else {
                if (this.style.fill) {
                    this.ctx.fillText(text, x, y);
                }
                if (this.style.stroke) {
                    this.ctx.strokeText(text, x, y);
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

        this.bitmap = function (image, x, y, width, height, sx, sy, swidth, sheight, angle, rotX, rotY, scaleX, scaleY) {
            angle = angle || 0;
            rotX = rotX || 0;
            rotY = rotY || 0;
            if (image.bitmap) {
                image = image.bitmap;
            }
            sx = sx || 0;
            sy = sy || 0;
            scaleX = scaleX || 1;
            scaleY = scaleY || 1;
            swidth = swidth || image.width;
            sheight = sheight || image.height;
            if (this.autoStart === true) {
                this.ctx.beginPath();
            }

            if (angle != 0 || scaleX != 1 || scaleY != 1) {
                //this.ctx.save();
                this.ctx.translate(x + rotX, y + rotY);

                this.ctx.rotate(HYPER.Math.degreesToRadians(angle));
                this.ctx.scale(scaleX, scaleY);
                this.ctx.drawImage(image, sx, sy, swidth, sheight, -rotX, -rotY, width, height);
                this.ctx.scale(1 / scaleX, 1 / scaleY);
                this.ctx.rotate(-HYPER.Math.degreesToRadians(angle));

                this.ctx.translate(-(x + rotX), -(y + rotY));
                //this.ctx.restore();
            } else {
                this.ctx.drawImage(image, sx, sy, swidth, sheight, x, y, width, height);
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