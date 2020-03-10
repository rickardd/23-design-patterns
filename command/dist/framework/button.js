"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Button = /** @class */ (function () {
    function Button(command) {
        this.command = command;
    }
    Button.prototype.click = function () {
        this.command.execute();
    };
    Button.prototype.getLabel = function () {
        return this.label;
    };
    Button.prototype.setLabel = function (label) {
        this.label = label;
    };
    return Button;
}());
exports.Button = Button;
