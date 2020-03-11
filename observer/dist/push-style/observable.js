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
    /** To keep this method open for changes an object would be preferred */
    notifyObservers(value) {
        this.observers.forEach((observer) => {
            observer.update(value);
        });
    }
}
exports.Observable = Observable;
