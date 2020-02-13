export class SelectionTool implements Tool {
  constructor() {}

  mouseDown() {
    console.log("SelectionTool - icon");
  }

  mouseUp() {
    console.log("SelectionTool - Draw a dashed rectangle");
  }
}
