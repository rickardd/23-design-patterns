"use strict";
// import { History } from './history'
// export class HistoryStorage {
//   public save(history: History): void {
//     try {
//       var fileStream = new FileOutputStream("history.txt");
//       var objectStream = new ObjectOutputStream(fileStream);
//       objectStream.writeObject(history);
//       objectStream.close();
//     } catch (IOException e) {
//       e.printStackTrace();
//     }
//   }
//   public History restore() {
//     try {
//       var fileStream = new FileInputStream("history.txt");
//       var objectStream = new ObjectInputStream(fileStream);
//       var history = (History) objectStream.readObject();
//       return history;
//     } catch (IOException | ClassNotFoundException e) {
//       e.printStackTrace();
//       return null;
//     }
//   }
// }
