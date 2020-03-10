"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddCustomerCommand = /** @class */ (function () {
    function AddCustomerCommand(service) {
        this.service = service;
    }
    AddCustomerCommand.prototype.execute = function () {
        this.service.addCustomer();
    };
    return AddCustomerCommand;
}());
exports.AddCustomerCommand = AddCustomerCommand;
