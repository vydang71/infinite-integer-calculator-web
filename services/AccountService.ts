import { AccountGateway } from '../gateways/AccountGateway';
import { Account, WritableAccountField } from '../models/Account';

export class AccountService {
  private accountGateway: AccountGateway;

  constructor(options: { accountGateway: AccountGateway }) {
    this.accountGateway = options.accountGateway;
  }

  public async signUp(values: WritableAccountField): Promise<Account> {
    return this.accountGateway.signUp(values)
  }

  public async login(values: { email: string; password: string; }): Promise<{ token: string }> {
    return this.accountGateway.login(values)
  }

  public async getMe(): Promise<Account> {
    return this.accountGateway.getMe()
  }
}
