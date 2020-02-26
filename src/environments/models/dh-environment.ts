import { IDhEnvironmentHmr } from '@dh/environments/models/dh-environment-hmr';

export interface IDhEnvironment {
  baseUrl: string;
  isProduction: boolean;
  hmr: IDhEnvironmentHmr;
}
