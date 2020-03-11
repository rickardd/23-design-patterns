"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Chart {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.id = Symbol("observer");
    }
    update() {
        console.log("Chart got updated: " + this.dataSource.getValue());
    }
}
exports.Chart = Chart;
