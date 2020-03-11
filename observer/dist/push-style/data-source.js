"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const observable_1 = require("./observable");
class DataSource extends observable_1.Observable {
    getValue() {
        return this.value;
    }
    /** To keep this method open for changes an object would be preferred */
    setValue(value) {
        this.value = value;
        this.notifyObservers(value);
    }
}
exports.DataSource = DataSource;
