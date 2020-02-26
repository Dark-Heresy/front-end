import { IEnvironmentHmr } from '@dh/environments/models/environment-hmr';

export interface IEnvironment {
  baseUrl: string;
  isProduction: boolean;
  hmr: IEnvironmentHmr;
}
