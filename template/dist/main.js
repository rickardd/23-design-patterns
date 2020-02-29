"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transferMoneyTask_1 = require("./transferMoneyTask");
var generate_report_task_1 = require("./generate-report-task");
var audit_trail_1 = require("./audit-trail");
var Main = /** @class */ (function () {
    function Main() {
        var auditTrail = new audit_trail_1.AuditTrail();
        var transferMoney = new transferMoneyTask_1.TransferMoneyTask(auditTrail);
        var generateReportTask = new generate_report_task_1.GenerateReportTask(auditTrail);
        transferMoney.execute();
        console.log("-------------");
        generateReportTask.execute();
    }
    return Main;
}());
new Main();
