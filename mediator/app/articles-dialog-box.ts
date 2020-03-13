import { ListBox } from "./list-box"
import { TextBox } from "./text-box"
import { Button } from "./button"
import { EventHandler } from "./event-handler"

export class ArticlesDialogBox {
  private articlesListBox: ListBox = new ListBox();
  private titleTextBox: TextBox = new TextBox();
  private saveButton: Button = new Button();

  constructor() {
    const self = this

    const articleSelectedHandler = new class implements EventHandler {
      public handle(): void {
        self.articleSelected()
      }
    }

    const titleChangedHandler = new class implements EventHandler {
      public handle(): void {
        self.titleChanged()
      }
    }

    this.articlesListBox.addEventHandler(articleSelectedHandler);
    this.titleTextBox.addEventHandler(titleChangedHandler);
  }

  public simulateUserInteraction(): void {
    this.articlesListBox.setSelection("Article 1");
    this.titleTextBox.setContent("");
    this.titleTextBox.setContent("Article 2");
    console.log("TextBox: " + this.titleTextBox.getContent()); // Article 2
    console.log("Button Enabled?: " + this.saveButton.isEnabled()); // true
  }

  private titleChanged(): void {
    var content = this.titleTextBox.getContent();
    var isEmpty = (content == null || !content);
    this.saveButton.setEnabled(!isEmpty);
  }

  private articleSelected(): void {
    this.titleTextBox.setContent(this.articlesListBox.getSelection());
    this.saveButton.setEnabled(true);
  }
}
