
import { Command } from './command'

export class Button {
  private label!: string;
  private command: Command;

  constructor(command: Command) {
    this.command = command;
  }

  public click(): void {
    this.command.execute();
  }

  public getLabel(): string {
    return this.label;
  }

  public setLabel(label: string): void {
    this.label = label;
  }
}
