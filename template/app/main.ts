import { TransferMoneyTask } from "./transferMoneyTask";
import { GenerateReportTask } from "./generate-report-task";
import { AuditTrail } from "./audit-trail";

class Main {
  constructor() {
    const auditTrail: AuditTrail = new AuditTrail()
    const transferMoney = new TransferMoneyTask(auditTrail);
    const generateReportTask = new GenerateReportTask(auditTrail);

    transferMoney.execute();
    console.log("-------------")
    generateReportTask.execute();
  }
}

new Main();
