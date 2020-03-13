"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const articles_dialog_box_1 = require("./articles-dialog-box");
class Main {
    constructor() {
        const dialog = new articles_dialog_box_1.ArticlesDialogBox();
        dialog.simulateUserInteraction();
    }
}
new Main();
