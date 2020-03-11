"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SpreadSheet {
    constructor() {
        this.id = Symbol("observer");
    }
    update(value) {
        console.log("SpreadSheet got notified: " + value);
    }
}
exports.SpreadSheet = SpreadSheet;
