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

  public notifyObservers(): void {
    this.observers.forEach((observer: Observer) => {
      observer.update()
    })
  }
}
