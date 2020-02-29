"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BrowseHistory = /** @class */ (function () {
    function BrowseHistory() {
        this.urls = new Array(10);
        this.count = 0;
        /** TypeScript way to create nested classes, has to be declared as a variable */
        this.ArrayIterator = /** @class */ (function () {
            function class_1(history) {
                this.index = 0;
                this.history = history;
            }
            class_1.prototype.hasNext = function () {
                return this.index < this.history.count;
            };
            class_1.prototype.current = function () {
                return this.history.urls[this.index];
            };
            class_1.prototype.next = function () {
                this.index++;
            };
            return class_1;
        }());
    }
    BrowseHistory.prototype.push = function (url) {
        this.urls[this.count] = url;
        this.count++;
    };
    BrowseHistory.prototype.pop = function () {
        this.count--;
        return this.urls[this.count];
    };
    BrowseHistory.prototype.createIterator = function () {
        return new this.ArrayIterator(this);
    };
    return BrowseHistory;
}());
exports.BrowseHistory = BrowseHistory;
