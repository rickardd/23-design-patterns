"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ui_control_1 = require("./ui-control");
class ListBox extends ui_control_1.UIControl {
    getSelection() {
        return this.selection;
    }
    setSelection(selection) {
        this.selection = selection;
        this.notifyEventHandlers();
    }
}
exports.ListBox = ListBox;
