import { Command } from './editor/command'
import { CustomerService } from './customer-service'

export class AddCustomerCommand implements Command {
  private service: CustomerService;

  constructor(service: CustomerService) {
    this.service = service;
  }

  public execute(): void {
    this.service.addCustomer();
  }
}
