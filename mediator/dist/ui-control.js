"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UIControl {
    constructor() {
        this.eventHandlers = [];
    }
    addEventHandler(observer) {
        this.eventHandlers.push(observer);
    }
    notifyEventHandlers() {
        // for (var observer : eventHandlers)
        //   observer.handle();
        this.eventHandlers.forEach((handler) => {
            handler.handle();
        });
    }
}
exports.UIControl = UIControl;
