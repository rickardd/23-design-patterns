"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handler_1 = require("./handler");
class Authenticator extends handler_1.Handler {
    constructor(next) {
        super(next);
    }
    doHandle(request) {
        var isValid = (request.getUsername() == "admin" &&
            request.getPassword() == "1234");
        console.log("Authentication");
        return !isValid;
    }
}
exports.Authenticator = Authenticator;
