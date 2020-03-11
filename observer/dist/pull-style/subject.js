"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Observable
var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    Subject.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    Subject.prototype.removeObserver = function (observer) {
        // this.observers.remove(observer);
        this.observers.filter(function (o) { return o !== observer; });
    };
    Subject.prototype.notifyObservers = function () {
        this.observers.forEach(function (observer) {
            observer.update();
        });
    };
    return Subject;
}());
exports.Subject = Subject;
