"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_service_1 = require("./customer-service");
const add_customer_command_1 = require("./add-customer-command");
const button_1 = require("./framework/button");
const html_document_1 = require("./editor/html-document");
const history_1 = require("./editor/history");
const bold_command_1 = require("./editor/bold-command");
const undo_command_1 = require("./editor/undo-command");
class Main1 {
    constructor() {
        const service = new customer_service_1.CustomerService();
        const command = new add_customer_command_1.AddCustomerCommand(service);
        const button = new button_1.Button(command);
        button.click(); // prints Add customer
    }
}
class Main2 {
    constructor() {
        console.log('---- MAIN 2 -----');
        const history = new history_1.History();
        const document = new html_document_1.HtmlDocument();
        document.setContent("Hello World");
        const boldCommand = new bold_command_1.BoldCommand(document, history);
        boldCommand.execute();
        console.log(document.getContent()); // <b>Hello World</b>
        /* We can call undo directly on the command... **/
        // boldCommand.undo()
        // console.log(document.getContent()) // Hello World
        /* But a better/another way is to use the undoCommand on the history. **/
        const undoCommand = new undo_command_1.UndoCommand(history);
        undoCommand.execute();
        console.log(document.getContent()); // Hello World
    }
}
new Main1();
new Main2();
