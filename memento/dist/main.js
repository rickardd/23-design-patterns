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
        editor.setContent("e");
        editor.restore(history.pop());
<<<<<<< HEAD
        // editor.restore(history.pop())
        console.log('OUTPUT', editor.getContent());
=======
        console.log("OUTPUT", editor.getContent());
>>>>>>> 4d55be1fffaf8c177d9681911e3c01854a093154
    }
    return Main;
}());
new Main();
