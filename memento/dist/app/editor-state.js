"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EditorState = /** @class */ (function () {
    function EditorState(content) {
        this.content = content;
    }
    EditorState.prototype.getContent = function () {
        return this.content;
    };
    return EditorState;
}());
exports.EditorState = EditorState;
