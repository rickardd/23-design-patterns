"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ui_control_1 = require("./ui-control");
class TextBox extends ui_control_1.UIControl {
    getContent() {
        return this.content;
    }
    setContent(content) {
        this.content = content;
        this.notifyEventHandlers();
    }
}
exports.TextBox = TextBox;
