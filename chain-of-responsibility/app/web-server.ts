import { Handler } from "./handler"
import { HttpRequest } from "./http-request"

export class WebServer {
  private handler: Handler;

  constructor(handler: Handler) {
    this.handler = handler;
  }

  public handle(request: HttpRequest): void {
    this.handler.handle(request);
  }
}
