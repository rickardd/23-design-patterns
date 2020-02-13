"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SelectionTool = /** @class */ (function () {
    function SelectionTool() {
    }
    SelectionTool.prototype.mouseDown = function () {
        console.log("SelectionTool - icon");
    };
    SelectionTool.prototype.mouseUp = function () {
        console.log("SelectionTool - Draw a dashed rectangle");
    };
    return SelectionTool;
}());
exports.SelectionTool = SelectionTool;
