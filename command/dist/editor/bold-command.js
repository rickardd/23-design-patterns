"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BoldCommand {
    constructor(document, history) {
        this.document = document;
        this.history = history;
    }
    undo() {
        this.document.setContent(this.prevContent);
    }
    execute() {
        this.prevContent = this.document.getContent();
        this.document.makeBold();
        this.history.push(this);
    }
}
exports.BoldCommand = BoldCommand;
