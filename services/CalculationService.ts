import { CalculationGateway } from '../gateways/CalculationGateway';
import { Calculation, WritableCalculationField } from '../models/Calculation';

export class CalculationService {
  private calculationGateway: CalculationGateway;

  constructor(options: { calculationGateway: CalculationGateway }) {
    this.calculationGateway = options.calculationGateway;
  }

  public async calculate(values: WritableCalculationField): Promise<Calculation> {
    return this.calculationGateway.calculate(values)
  }
}