"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handler_1 = require("./handler");
class Encryptor extends handler_1.Handler {
    constructor(next) {
        super(next);
    }
    doHandle(request) {
        console.log("Encryption");
        return false;
    }
}
exports.Encryptor = Encryptor;
