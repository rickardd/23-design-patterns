import { Observable } from "./observable"

export class DataSource extends Observable {
  private value!: number;

  public getValue(): number {
    return this.value;
  }

  /** To keep this method open for changes an object would be preferred */
  public setValue(value: number): void {
    this.value = value;
    this.notifyObservers(value);
  }
}
