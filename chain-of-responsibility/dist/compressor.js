"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handler_1 = require("./handler");
class Compressor extends handler_1.Handler {
    constructor(next) {
        super(next);
    }
    doHandle(request) {
        console.log("Compress");
        return false;
    }
}
exports.Compressor = Compressor;
