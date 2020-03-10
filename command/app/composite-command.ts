import { Command } from './framework/command'

export class CompositeCommand implements Command {
  private commands: Command[] = [];

  public add(command: Command): void {
    this.commands.push(command);
  }

  public execute(): void {
    this.commands.forEach((c: Command) => c.execute())
  }
}
