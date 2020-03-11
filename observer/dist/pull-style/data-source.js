"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const observable_1 = require("./observable");
class DataSource extends observable_1.Observable {
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
        this.notifyObservers();
    }
}
exports.DataSource = DataSource;
