import { Command } from './editor/command'

export class ResizeCommand implements Command {

  public execute(): void {
    console.log("Resize");
  }
}
