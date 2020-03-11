"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// AKA. Subject
var Observable = /** @class */ (function () {
    function Observable() {
        this.observers = [];
    }
    Observable.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    Observable.prototype.removeObserver = function (observer) {
        // this.observers.remove(observer);
        this.observers.filter(function (o) { return o !== observer; });
    };
    Observable.prototype.notifyObservers = function () {
        this.observers.forEach(function (observer) {
            observer.update();
        });
    };
    return Observable;
}());
exports.Observable = Observable;
