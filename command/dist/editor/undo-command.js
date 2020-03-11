"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UndoCommand {
    constructor(history) {
        this.history = history;
    }
    execute() {
        if (this.history.size() > 0)
            this.history.pop().undo(); // The exclamation mark tells TS that history.pop will never return undefined, since history.size() is checking that. 
    }
}
exports.UndoCommand = UndoCommand;
