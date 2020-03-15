# Chain Of Responsibility - A web server with chained tasks

## UML

![Pattern UML](./img/example.png)

## Implementation

This implementation demonstrates how a HTTP web server could be set up with the chain of responsibility pattern. 

The abstract Handler class takes a handler to be executed if the subclass allows. If the subclass rejects the chain will stop. 

The benefit of this pattern is that handlers can be passed around and changes easily. E.g changing the order form ``Authentication -> Logger -> Compressor`` to ``Logger -> Authentication -> Encryptor -> Compressor`` could be easily done. 

```ts
export abstract class Handler {
  private next: Handler | null;

  constructor(next: Handler | null) {
    this.next = next;
  }

  public handle(request: HttpRequest): void {
    if (this.doHandle(request))
      return;

    if (this.next != null) // If not last in chain
      this.next.handle(request);
  }

  public abstract doHandle(request: HttpRequest): boolean;
}
```

Example of a Handler class

```ts
export class Logger extends Handler {
  public constructor(next: Handler) {
    super(next);
  }

  public doHandle(request: HttpRequest): boolean {
    console.log("Log");
    // If false, the next handler will be executed, if true the chain will brake
    return false;
  }
}
```

```ts
  /** Execute the chain */

  const compressor = new Compressor(null) 
  const encryptor = new Encryptor(compressor) 
  const logger = new Logger(encryptor) 
  const authenticator = new Authenticator(logger) 
  const server = new WebServer(authenticator) 

  server.handle(new HttpRequest("admin", "1234")) 
  // If username and password is not passing the authenticator the chain will stop immediately. 
```


