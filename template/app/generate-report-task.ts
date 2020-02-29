import { AuditTrail } from "./audit-trail";

export class GenerateReportTask {
  private auditTrail!: AuditTrail;

  public GenerateReportTask(auditTrail: AuditTrail) {
    this.auditTrail = auditTrail;
  }

  public execute(): void {
    this.auditTrail.record();

    console.log("Generate Report");
  }
}
