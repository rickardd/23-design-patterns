import { Handler } from "./handler"
import { HttpRequest } from "./http-request"

export class Encryptor extends Handler {
  constructor(next: Handler) {
    super(next);
  }

  public doHandle(request: HttpRequest): boolean {
    console.log("Encryption");
    return false;
  }
}
