import { Iterator } from "./iterator";

export class BrowseHistory {
  private urls: string[] = new Array(10);
  private count: number = 0;

  public push(url: string): void {
    this.urls[this.count] = url;
    this.count++;
  }

  public pop(): string {
    this.count--;
    return this.urls[this.count];
  }

  public createIterator(): Iterator<string> {
    return new this.ArrayIterator(this);
  }

  /** TypeScript way to create nested classes, has to be declared as a variable */
  public ArrayIterator = class implements Iterator<string> {
    private history!: BrowseHistory;
    private index: number = 0;

    constructor(history: BrowseHistory) {
      this.history = history;
    }

    public hasNext(): boolean {
      return this.index < this.history.count;
    }

    public current(): string {
      return this.history.urls[this.index];
    }

    public next(): void {
      this.index++;
    }
  };
}
