import { EventHandler } from "./event-handler"

export abstract class UIControl {
  private eventHandlers: EventHandler[] = []

  public addEventHandler(observer: EventHandler): void {
    this.eventHandlers.push(observer);
  }

  protected notifyEventHandlers(): void {
    // for (var observer : eventHandlers)
    //   observer.handle();

    this.eventHandlers.forEach((handler: EventHandler) => {
      handler.handle()
    })
  }
}
