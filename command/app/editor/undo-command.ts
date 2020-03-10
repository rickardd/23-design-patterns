import { History } from './history'
import { Command } from './command'

export class UndoCommand implements Command {
  private history: History;

  constructor(history: History) {
    this.history = history;
  }

  public execute(): void {
    if (this.history.size() > 0)
      this.history.pop()!.undo(); // The exclamation mark tells TS that history.pop will never return undefined, since history.size() is checking that. 
  }
}
