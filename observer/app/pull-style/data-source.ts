import { Observable } from "./observable"

export class DataSource extends Observable {
  private value!: number;

  public getValue(): number {
    return this.value;
  }

  public setValue(value: number): void {
    this.value = value;
    this.notifyObservers();
  }
}
