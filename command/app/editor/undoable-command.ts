import { Command } from './command'

export interface UndoableCommand extends Command {
  undo(): void;
}
