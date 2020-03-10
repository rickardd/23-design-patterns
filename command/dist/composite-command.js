"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CompositeCommand = /** @class */ (function () {
    function CompositeCommand() {
        this.commands = [];
    }
    CompositeCommand.prototype.add = function (command) {
        this.commands.push(command);
    };
    CompositeCommand.prototype.execute = function () {
        this.commands.forEach(function (c) { return c.execute(); });
    };
    return CompositeCommand;
}());
exports.CompositeCommand = CompositeCommand;
