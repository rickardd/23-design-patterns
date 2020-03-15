"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WebServer {
    constructor(handler) {
        this.handler = handler;
    }
    handle(request) {
        this.handler.handle(request);
    }
}
exports.WebServer = WebServer;
