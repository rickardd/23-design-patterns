// abstract class Tool {
//   abstract mouseUp(): void;
//   abstract mouseDown(): void;
// }

export interface Tool {
  mouseDown(): void;
  mouseUp(): void;
}
