import { Task } from "./task";
import { AuditTrail } from "./audit-trail";

export class TransferMoneyTask extends Task {

  constructor(auditTrail: AuditTrail) {
    super(auditTrail);
  }

  protected doExecute(): void {
    console.log("Transfer Money");
  }

}
