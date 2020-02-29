import { AuditTrail } from "./audit-trail";
import { Email } from "./email";

export abstract class Task {
  private auditTrail: AuditTrail;
  private email: Email;

  // Dependency injection of an AuditTrail
  public constructor(auditTrail: AuditTrail) {
    this.auditTrail = auditTrail;
    this.email = new Email()
  }

  // Template method
  public execute(): void {

    // Code to run before task is executed
    this.auditTrail.record();

    this.doExecute();

    // Code to run after task is executed
    this.email.send()
  }

  protected abstract doExecute(): void;
}
