import { UIControl } from "./ui-control"

export class TextBox extends UIControl {
  private content!: string

  public getContent(): string {
    return this.content;
  }

  public setContent(content: string): void {
    this.content = content;
    this.notifyEventHandlers();
  }

}
