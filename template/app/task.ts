import { AuditTrail } from "./audit-trail";

export abstract class Task {
  private auditTrail!: AuditTrail;

  // public constructor() {
  //   this.auditTrail = new AuditTrail();
  // }

  public constructor(auditTrail: AuditTrail) {
    this.auditTrail = auditTrail;
  }

  public execute(): void {
    this.auditTrail.record();

    this.doExecute();
  }

  protected abstract doExecute(): void;
}
