import { Observer } from "./observer"

export class SpreadSheet implements Observer {
  public id: symbol

  constructor() {
    this.id = Symbol("observer")
  }

  public update(value: number): void {
    console.log("SpreadSheet got notified: " + value);
  }
}
