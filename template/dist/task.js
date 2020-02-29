"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var email_1 = require("./email");
var Task = /** @class */ (function () {
    // Dependency injection of an AuditTrail
    function Task(auditTrail) {
        this.auditTrail = auditTrail;
        this.email = new email_1.Email();
    }
    // Template method
    Task.prototype.execute = function () {
        // Code to run before task is executed
        this.auditTrail.record();
        this.doExecute();
        // Code to run after task is executed
        this.email.send();
    };
    return Task;
}());
exports.Task = Task;
