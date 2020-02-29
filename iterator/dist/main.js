"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var browse_history_1 = require("./browse-history");
var Main = /** @class */ (function () {
    function Main() {
        var history = new browse_history_1.BrowseHistory();
        history.push("a");
        history.push("b");
        history.pop();
        history.push("c");
        history.push("d");
        history.pop();
        history.push("e");
        history.push("f");
        var iterator = history.createIterator();
        /**
         * Outputs:
         *
         * a
         * c
         * e
         * f
         */
        while (iterator.hasNext()) {
            var url = iterator.current();
            console.log(url);
            iterator.next();
        }
    }
    return Main;
}());
new Main();
