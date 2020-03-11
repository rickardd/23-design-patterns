"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// AKA. Subject
class Observable {
    constructor() {
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        this.observers = this.observers.filter((o) => o.id !== observer.id);
    }
    notifyObservers() {
        this.observers.forEach((observer) => {
            observer.update();
        });
    }
}
exports.Observable = Observable;
