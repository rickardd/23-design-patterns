"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = /** @class */ (function () {
    // public constructor() {
    //   this.auditTrail = new AuditTrail();
    // }
    function Task(auditTrail) {
        this.auditTrail = auditTrail;
    }
    Task.prototype.execute = function () {
        this.auditTrail.record();
        this.doExecute();
    };
    return Task;
}());
exports.Task = Task;
