import { IDhEnvironmentHmr } from '@dh/environments/interfaces/dh-environment-hmr';

export interface IDhEnvironment {
  baseUrl: string;
  isProduction: boolean;
  hmr: IDhEnvironmentHmr;
}
