import { BrowseHistory } from "./browse-history";
import { Iterator } from "./iterator";

class Main {
  constructor() {
    const history = new BrowseHistory();
    history.push("a");
    history.push("b");
    history.pop();
    history.push("c");
    history.push("d");
    history.pop();
    history.push("e");
    history.push("f");

    const iterator: Iterator<string> = history.createIterator();

    /**
     * Outputs:
     *
     * a
     * c
     * e
     * f
     */
    while (iterator.hasNext()) {
      const url = iterator.current();
      console.log(url);
      iterator.next();
    }
  }
}

new Main();
