"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Chart {
    constructor() {
        this.id = Symbol("observer");
    }
    update(value) {
        console.log("Chart got notified", value);
    }
}
exports.Chart = Chart;
