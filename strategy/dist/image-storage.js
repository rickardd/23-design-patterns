"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImageStorage = /** @class */ (function () {
    function ImageStorage() {
    }
    ImageStorage.prototype.store = function (fileName, compressor, filter) {
        compressor.compress(fileName);
        filter.apply(fileName);
        console.log("Stored", fileName);
    };
    return ImageStorage;
}());
exports.ImageStorage = ImageStorage;
