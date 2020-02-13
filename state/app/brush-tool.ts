import { Tool } from "./tool";

export class BrushTool implements Tool {
  mouseDown(): void {
    console.log("BrushTool - icon");
  }
  mouseUp(): void {
    console.log("BrushTool - Draw a line");
  }
  constructor() {}
}
