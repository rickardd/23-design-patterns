"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transferMoneyTask_1 = require("./transferMoneyTask");
var audit_trail_1 = require("./audit-trail");
var Main = /** @class */ (function () {
    function Main() {
        console.log("INIT MAIN");
        // const auditTrail : AuditTrail = new AuditTrail()
        var task = new transferMoneyTask_1.TransferMoneyTask(auditTrail, audit_trail_1.AuditTrail);
        task.execute();
    }
    return Main;
}());
new Main();
