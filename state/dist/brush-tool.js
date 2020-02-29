"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BrushTool = /** @class */ (function () {
    function BrushTool() {
    }
    BrushTool.prototype.mouseDown = function () {
        console.log("BrushTool - icon");
    };
    BrushTool.prototype.mouseUp = function () {
        console.log("BrushTool - Draw a line");
    };
    return BrushTool;
}());
exports.BrushTool = BrushTool;
