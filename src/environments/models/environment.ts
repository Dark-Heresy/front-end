import { IEnvironmentHmr } from '@app/environments/models/environment-hmr';

export interface IEnvironment {
  isProduction: boolean;
  hmr: IEnvironmentHmr;
}
