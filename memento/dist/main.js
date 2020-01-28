"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var editor_1 = require("./editor");
var history_1 = require("./history");
var Main = /** @class */ (function () {
    function Main() {
        var editor = new editor_1.Editor();
        var history = new history_1.History();
        editor.setContent("a");
        history.push(editor.createState());
        editor.setContent("b");
        history.push(editor.createState());
        editor.setContent("c");
        editor.restore(history.pop());
        editor.restore(history.pop());
        console.log('OUTPUT', editor.getContent());
    }
    return Main;
}());
new Main();
