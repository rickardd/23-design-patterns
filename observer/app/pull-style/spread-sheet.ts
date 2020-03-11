import { Observer } from "./observer"
import { DataSource } from "./data-source"

export class SpreadSheet implements Observer {
  private dataSource!: DataSource;
  public id: symbol

  public constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
    this.id = Symbol("observer")
  }

  public update(): void {
    console.log("SpreadSheet got notified: " + this.dataSource.getValue());
  }
}
