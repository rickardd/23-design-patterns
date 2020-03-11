"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CompositeCommand {
    constructor() {
        this.commands = [];
    }
    add(command) {
        this.commands.push(command);
    }
    execute() {
        this.commands.forEach((c) => c.execute());
    }
}
exports.CompositeCommand = CompositeCommand;
