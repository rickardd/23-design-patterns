import { Observer } from "./observer"

export class Chart implements Observer {

  public id: symbol

  constructor() {
    this.id = Symbol("observer")
  }

  public update(value: number): void {
    console.log("Chart got notified", value);
  }
}
