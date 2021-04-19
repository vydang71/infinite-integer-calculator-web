import { AxiosInstance } from 'axios';
import { Account, WritableAccountField } from '../models/Account';

export class AccountGateway {
  private restConnector: AxiosInstance;

  constructor(options: { restConnector: AxiosInstance }) {
    this.restConnector = options.restConnector;
  }

  public async signUp(values: WritableAccountField): Promise<Account> {
    return this.restConnector.post('/accounts/sign-up', values)
  }

  public async login(values: { email: string; password: string; }): Promise<{ token: string }> {
    return this.restConnector.post('/accounts/login', values)
  }

  public async getMe(): Promise<Account> {
    return this.restConnector.post('/accounts/me')
  }

}
