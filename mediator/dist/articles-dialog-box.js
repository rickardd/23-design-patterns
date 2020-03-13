"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_box_1 = require("./list-box");
const text_box_1 = require("./text-box");
const button_1 = require("./button");
class ArticlesDialogBox {
    constructor() {
        this.articlesListBox = new list_box_1.ListBox();
        this.titleTextBox = new text_box_1.TextBox();
        this.saveButton = new button_1.Button();
        const self = this;
        const articleSelectedHandler = new class {
            handle() {
                self.articleSelected();
            }
        };
        const titleChangedHandler = new class {
            handle() {
                self.titleChanged();
            }
        };
        this.articlesListBox.addEventHandler(articleSelectedHandler);
        this.titleTextBox.addEventHandler(titleChangedHandler);
    }
    simulateUserInteraction() {
        this.articlesListBox.setSelection("Article 1");
        this.titleTextBox.setContent("");
        this.titleTextBox.setContent("Article 2");
        console.log("TextBox: " + this.titleTextBox.getContent()); // Article 2
        console.log("Button Enabled?: " + this.saveButton.isEnabled()); // true
    }
    titleChanged() {
        var content = this.titleTextBox.getContent();
        var isEmpty = (content == null || !content);
        this.saveButton.setEnabled(!isEmpty);
    }
    articleSelected() {
        this.titleTextBox.setContent(this.articlesListBox.getSelection());
        this.saveButton.setEnabled(true);
    }
}
exports.ArticlesDialogBox = ArticlesDialogBox;
