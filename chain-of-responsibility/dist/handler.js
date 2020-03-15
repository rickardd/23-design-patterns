"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Handler {
    constructor(next) {
        this.next = next;
    }
    handle(request) {
        if (this.doHandle(request))
            return;
        if (this.next != null)
            this.next.handle(request);
    }
}
exports.Handler = Handler;
