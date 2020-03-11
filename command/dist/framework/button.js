"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Button {
    constructor(command) {
        this.command = command;
    }
    click() {
        this.command.execute();
    }
    getLabel() {
        return this.label;
    }
    setLabel(label) {
        this.label = label;
    }
}
exports.Button = Button;
