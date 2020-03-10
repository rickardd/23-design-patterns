"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_service_1 = require("./customer-service");
var add_customer_command_1 = require("./add-customer-command");
var button_1 = require("./framework/button");
var html_document_1 = require("./editor/html-document");
var history_1 = require("./editor/history");
var bold_command_1 = require("./editor/bold-command");
var undo_command_1 = require("./editor/undo-command");
var Main1 = /** @class */ (function () {
    function Main1() {
        var service = new customer_service_1.CustomerService();
        var command = new add_customer_command_1.AddCustomerCommand(service);
        var button = new button_1.Button(command);
        button.click(); // prints Add customer
    }
    return Main1;
}());
var Main2 = /** @class */ (function () {
    function Main2() {
        console.log('---- MAIN 2 -----');
        var history = new history_1.History();
        var document = new html_document_1.HtmlDocument();
        document.setContent("Hello World");
        var boldCommand = new bold_command_1.BoldCommand(document, history);
        boldCommand.execute();
        console.log(document.getContent()); // <b>Hello World</b>
        /* We can call undo directly on the command... **/
        // boldCommand.undo()
        // console.log(document.getContent()) // Hello World
        /* But a better/another way is to use the undoCommand on the history. **/
        var undoCommand = new undo_command_1.UndoCommand(history);
        undoCommand.execute();
        console.log(document.getContent()); // Hello World
    }
    return Main2;
}());
new Main1();
new Main2();
