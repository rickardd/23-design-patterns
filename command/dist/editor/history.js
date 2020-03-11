"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class History {
    constructor() {
        this.commands = [];
    }
    push(command) {
        this.commands.push(command);
    }
    pop() {
        return this.commands.pop();
    }
    size() {
        return this.commands.length;
    }
}
exports.History = History;
