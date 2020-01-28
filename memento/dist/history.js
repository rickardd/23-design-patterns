"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var History = /** @class */ (function () {
    function History() {
        this.state = [];
    }
    History.prototype.push = function (state) {
        this.state.push(state);
    };
    History.prototype.pop = function () {
        return this.state.pop();
    };
    return History;
}());
exports.History = History;
