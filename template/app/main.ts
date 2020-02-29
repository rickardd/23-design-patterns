import { TransferMoneyTask } from "./transferMoneyTask";
import { AuditTrail } from "./audit-trail";

class Main {
  constructor() {
    console.log("INIT MAIN");

    // const auditTrail : AuditTrail = new AuditTrail()

    const task = new TransferMoneyTask(auditTrail: AuditTrail);
    task.execute();
  }
}

new Main();
