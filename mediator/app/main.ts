import { ArticlesDialogBox } from "./articles-dialog-box";

class Main {
  constructor() {
    const dialog = new ArticlesDialogBox()
    dialog.simulateUserInteraction()
  }
}

new Main();
