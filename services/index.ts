import axios from 'axios';
import getConfig from 'next/config';
import { AccountGateway } from '../gateways/AccountGateway';
import { CalculationGateway } from '../gateways/CalculationGateway';
import { AccountService } from './AccountService';
import { CalculationService } from './CalculationService';


const restConnector = axios.create({
  baseURL: getConfig().publicRuntimeConfig.BASE_API_URL,
});

const accountGateway = new AccountGateway({ restConnector })
const calculationGateway = new CalculationGateway({ restConnector });


export const accountService = new AccountService({ accountGateway })
export const calculationService = new CalculationService({ calculationGateway });

