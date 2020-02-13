"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Canvas = /** @class */ (function () {
    function Canvas() {
    }
    Canvas.prototype.mouseDown = function () {
        this.currentTool.mouseDown();
    };
    Canvas.prototype.mouseUp = function () {
        this.currentTool.mouseUp();
    };
    Canvas.prototype.getCurrentTool = function () {
        return this.currentTool;
    };
    Canvas.prototype.setCurrentTool = function (currentTool) {
        this.currentTool = currentTool;
    };
    return Canvas;
}());
exports.Canvas = Canvas;
