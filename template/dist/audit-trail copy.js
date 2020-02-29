"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuditTrail = /** @class */ (function () {
    function AuditTrail() {
    }
    AuditTrail.prototype.record = function () {
        console.log("Audit");
    };
    return AuditTrail;
}());
exports.AuditTrail = AuditTrail;
