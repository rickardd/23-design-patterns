"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ui_control_1 = require("./ui-control");
class Button extends ui_control_1.UIControl {
    isEnabled() {
        return this.enabled;
    }
    setEnabled(enabled) {
        this.enabled = enabled;
        this.notifyEventHandlers();
    }
}
exports.Button = Button;
