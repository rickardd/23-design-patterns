"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SpreadSheet {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.id = Symbol("observer");
    }
    update() {
        console.log("SpreadSheet got notified: " + this.dataSource.getValue());
    }
}
exports.SpreadSheet = SpreadSheet;
