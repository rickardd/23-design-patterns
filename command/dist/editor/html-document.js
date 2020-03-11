"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HtmlDocument {
    makeBold() {
        this.content = "<b>" + this.content + "</b>";
    }
    getContent() {
        return this.content;
    }
    setContent(content) {
        this.content = content;
    }
}
exports.HtmlDocument = HtmlDocument;
