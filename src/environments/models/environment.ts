import { IEnvironmentHmr } from '@environment/environment-hmr';

export interface IEnvironment {
  isProduction: boolean;
  hmr: IEnvironmentHmr;
}
