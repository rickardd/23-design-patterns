"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var brush_tool_1 = require("./brush-tool");
var canvas_1 = require("./canvas");
var Main = /** @class */ (function () {
    function Main() {
        var canvas = new canvas_1.Canvas();
        // 1. Which to Selection tool
        // canvas.setCurrentTool(new SelectionTool());
        // 2. Which to Brush tool
        canvas.setCurrentTool(new brush_tool_1.BrushTool());
        console.log("Current tool = ", canvas.getCurrentTool());
        canvas.mouseDown();
        canvas.mouseUp();
    }
    return Main;
}());
new Main();
