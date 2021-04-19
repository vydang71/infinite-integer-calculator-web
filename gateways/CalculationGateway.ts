import { AxiosInstance } from 'axios';
import { Calculation, WritableCalculationField } from '../models/Calculation';

export class CalculationGateway {
  private restConnector: AxiosInstance;

  constructor(options: { restConnector: AxiosInstance }) {
    this.restConnector = options.restConnector;
  }

  public async calculate(values: WritableCalculationField): Promise<Calculation> {
    return this.restConnector.post('/calculations', values)
  }
}
