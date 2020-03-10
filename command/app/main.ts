import { CustomerService } from "./customer-service";
import { AddCustomerCommand } from "./add-customer-command";
import { Button } from "./framework/button";
import { HtmlDocument } from "./editor/html-document";
import { History } from "./editor/history";
import { BoldCommand } from "./editor/bold-command";
import { UndoCommand } from "./editor/undo-command";

class Main1 {
  constructor() {
    const service = new CustomerService()
    const command = new AddCustomerCommand(service)
    const button = new Button(command)
    button.click() // prints Add customer
  }
}

class Main2 {
  constructor() {
    console.log('---- MAIN 2 -----')
    const history = new History()
    const document = new HtmlDocument()

    document.setContent("Hello World")

    const boldCommand = new BoldCommand(document, history)
    boldCommand.execute()
    console.log(document.getContent()) // <b>Hello World</b>

    /* We can call undo directly on the command... **/
    // boldCommand.undo()
    // console.log(document.getContent()) // Hello World

    /* But a better/another way is to use the undoCommand on the history. **/
    const undoCommand = new UndoCommand(history)
    undoCommand.execute()
    console.log(document.getContent()) // Hello World
  }
}

new Main1();
new Main2();
