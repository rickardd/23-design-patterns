import { Command } from './editor/command'

export class BlackAndWhiteCommand implements Command {

  public execute(): void {
    console.log("Black and white");
  }
}
