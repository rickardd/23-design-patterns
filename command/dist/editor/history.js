"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var History = /** @class */ (function () {
    function History() {
        this.commands = [];
    }
    History.prototype.push = function (command) {
        this.commands.push(command);
    };
    History.prototype.pop = function () {
        return this.commands.pop();
    };
    History.prototype.size = function () {
        return this.commands.length;
    };
    return History;
}());
exports.History = History;
