import { UndoableCommand } from './undoable-command'
import { HtmlDocument } from './html-document'
import { History } from './history'

export class BoldCommand implements UndoableCommand {
  private prevContent!: string;
  private document: HtmlDocument;
  private history: History;

  constructor(document: HtmlDocument, history: History) {
    this.document = document;
    this.history = history;
  }

  public undo(): void {
    this.document.setContent(this.prevContent);
  }

  public execute(): void {
    this.prevContent = this.document.getContent();
    this.document.makeBold();
    this.history.push(this);
  }
}
