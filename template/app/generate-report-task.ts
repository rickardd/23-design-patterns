import { AuditTrail } from "./audit-trail";
import { Task } from "./task";

export class GenerateReportTask extends Task {

  constructor(auditTrail: AuditTrail) {
    super(auditTrail);
  }

  protected doExecute(): void {
    console.log("Generate Report");
  }

}
