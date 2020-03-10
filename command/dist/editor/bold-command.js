"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BoldCommand = /** @class */ (function () {
    function BoldCommand(document, history) {
        this.document = document;
        this.history = history;
    }
    BoldCommand.prototype.undo = function () {
        this.document.setContent(this.prevContent);
    };
    BoldCommand.prototype.execute = function () {
        this.prevContent = this.document.getContent();
        this.document.makeBold();
        this.history.push(this);
    };
    return BoldCommand;
}());
exports.BoldCommand = BoldCommand;
