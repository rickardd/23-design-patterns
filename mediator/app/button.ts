import { UIControl } from "./ui-control"

export class Button extends UIControl {
  private enabled!: boolean;

  public isEnabled(): boolean {
    return this.enabled;
  }

  public setEnabled(enabled: boolean): void {
    this.enabled = enabled;
    this.notifyEventHandlers();
  }
}
