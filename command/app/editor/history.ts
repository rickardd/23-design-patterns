import { UndoableCommand } from "./undoable-command"

export class History {
  private commands: UndoableCommand[] = [];

  public push(command: UndoableCommand): void {
    this.commands.push(command);
  }

  public pop(): UndoableCommand | undefined {
    return this.commands.pop();
  }

  public size(): number {
    return this.commands.length;
  }
}
