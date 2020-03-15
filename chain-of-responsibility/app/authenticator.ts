import { Handler } from "./handler"
import { HttpRequest } from "./http-request"

export class Authenticator extends Handler {
  constructor(next: Handler) {
    super(next);
  }

  public doHandle(request: HttpRequest): boolean {
    var isValid = (request.getUsername() == "admin" &&
      request.getPassword() == "1234");

    console.log("Authentication");

    return !isValid;
  }
}
