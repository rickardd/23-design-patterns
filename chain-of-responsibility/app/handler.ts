// import { Handler } from "./handler"
import { HttpRequest } from "./http-request"

export abstract class Handler {
  private next: Handler | null;

  constructor(next: Handler | null) {
    this.next = next;
  }

  public handle(request: HttpRequest): void {
    if (this.doHandle(request))
      return;

    if (this.next != null)
      this.next.handle(request);
  }

  public abstract doHandle(request: HttpRequest): boolean;
}
