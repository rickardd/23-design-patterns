"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var editor_state_1 = require("./editor-state");
var Editor = /** @class */ (function () {
    function Editor() {
        this.content = "";
    }
    Editor.prototype.createState = function () {
        return new editor_state_1.EditorState(this.content);
    };
    Editor.prototype.restore = function (state) {
        this.content = state.getContent();
    };
    Editor.prototype.getContent = function () {
        return this.content;
    };
    Editor.prototype.setContent = function (content) {
        this.content = content;
    };
    return Editor;
}());
exports.Editor = Editor;
