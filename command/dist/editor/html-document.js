"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlDocument = /** @class */ (function () {
    function HtmlDocument() {
    }
    HtmlDocument.prototype.makeBold = function () {
        this.content = "<b>" + this.content + "</b>";
    };
    HtmlDocument.prototype.getContent = function () {
        return this.content;
    };
    HtmlDocument.prototype.setContent = function (content) {
        this.content = content;
    };
    return HtmlDocument;
}());
exports.HtmlDocument = HtmlDocument;
