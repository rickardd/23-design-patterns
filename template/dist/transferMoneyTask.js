"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var task_1 = require("./task");
var TransferMoneyTask = /** @class */ (function (_super) {
    __extends(TransferMoneyTask, _super);
    function TransferMoneyTask(auditTrail) {
        return _super.call(this, auditTrail) || this;
    }
    TransferMoneyTask.prototype.doExecute = function () {
        console.log("Transfer Money");
    };
    return TransferMoneyTask;
}(task_1.Task));
exports.TransferMoneyTask = TransferMoneyTask;
