"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UndoCommand = /** @class */ (function () {
    function UndoCommand(history) {
        this.history = history;
    }
    UndoCommand.prototype.execute = function () {
        if (this.history.size() > 0)
            this.history.pop().undo(); // The exclamation mark tells TS that history.pop will never return undefined, since history.size() is checking that. 
    };
    return UndoCommand;
}());
exports.UndoCommand = UndoCommand;
