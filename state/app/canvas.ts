import { Tool } from "./tool";

export class Canvas {
  private currentTool!: Tool;

  constructor() {}

  mouseDown() {
    this.currentTool.mouseDown();
  }

  mouseUp() {
    this.currentTool.mouseUp();
  }

  public getCurrentTool(): Tool {
    return this.currentTool;
  }

  public setCurrentTool(currentTool: Tool): void {
    this.currentTool = currentTool;
  }
}
