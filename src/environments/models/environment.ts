import { IEnvironmentHmr } from '@environment/models/environment-hmr';

export interface IEnvironment {
  isProduction: boolean;
  hmr: IEnvironmentHmr;
}
