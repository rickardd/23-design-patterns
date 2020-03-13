import { UIControl } from "./ui-control"

export class ListBox extends UIControl {
  private selection!: string

  public getSelection(): string {
    return this.selection;
  }

  public setSelection(selection: string): void {
    this.selection = selection;
    this.notifyEventHandlers();
  }
}
