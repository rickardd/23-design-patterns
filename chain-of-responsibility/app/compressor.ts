import { Handler } from "./handler"
import { HttpRequest } from "./http-request"

export class Compressor extends Handler {
  constructor(next: Handler | null) {
    super(next);
  }

  public doHandle(request: HttpRequest): boolean {
    console.log("Compress");

    return false;
  }
}
