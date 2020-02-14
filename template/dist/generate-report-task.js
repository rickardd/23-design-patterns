"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GenerateReportTask = /** @class */ (function () {
    function GenerateReportTask() {
    }
    GenerateReportTask.prototype.GenerateReportTask = function (auditTrail) {
        this.auditTrail = auditTrail;
    };
    GenerateReportTask.prototype.execute = function () {
        this.auditTrail.record();
        console.log("Generate Report");
    };
    return GenerateReportTask;
}());
exports.GenerateReportTask = GenerateReportTask;
