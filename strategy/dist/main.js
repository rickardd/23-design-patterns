"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var image_storage_1 = require("./image-storage");
var jpeg_compressor_1 = require("./jpeg-compressor");
var png_compressor_1 = require("./png-compressor");
var black_and_white_filter_1 = require("./black-and-white-filter");
var Main = /** @class */ (function () {
    function Main() {
        var imageStore = new image_storage_1.ImageStorage();
        imageStore.store("a.jpeg", new jpeg_compressor_1.JpegCompressor(), new black_and_white_filter_1.BlackAndWhiteFilter());
        imageStore.store("b.png", new png_compressor_1.PngCompressor(), new black_and_white_filter_1.BlackAndWhiteFilter());
    }
    return Main;
}());
new Main();
