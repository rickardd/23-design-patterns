import { Handler } from "./handler"
import { HttpRequest } from "./http-request"

export class Logger extends Handler {
  public constructor(next: Handler) {
    super(next);
  }

  public doHandle(request: HttpRequest): boolean {
    console.log("Log");

    return false;
  }
}
