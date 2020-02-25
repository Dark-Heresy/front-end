import { IEnvironmentHmr } from '@app/environments/models/environment-hmr';

export interface IEnvironment {
  baseUrl: string;
  isProduction: boolean;
  hmr: IEnvironmentHmr;
}
