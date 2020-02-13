import { SelectionTool } from "./selection-tool";
import { BrushTool } from "./brush-tool";
import { Canvas } from "./canvas";

class Main {
  constructor() {
    const canvas = new Canvas();
    // 1. Which to Selection tool
    // canvas.setCurrentTool(new SelectionTool());

    // 2. Which to Brush tool
    canvas.setCurrentTool(new BrushTool());

    console.log("Current tool = ", canvas.getCurrentTool());
    canvas.mouseDown();
    canvas.mouseUp();
  }
}

new Main();
