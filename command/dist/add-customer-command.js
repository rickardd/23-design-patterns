"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AddCustomerCommand {
    constructor(service) {
        this.service = service;
    }
    execute() {
        this.service.addCustomer();
    }
}
exports.AddCustomerCommand = AddCustomerCommand;
