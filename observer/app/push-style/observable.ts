import { Observer } from "./observer"

// AKA. Subject
export class Observable {
  private observers: Observer[] = [];

  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((o: Observer) => o.id !== observer.id)
  }

  /** To keep this method open for changes an object would be preferred */
  public notifyObservers(value: number): void {
    this.observers.forEach((observer: Observer) => {
      observer.update(value)
    })
  }
}
