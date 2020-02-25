import { IEnvironment } from '@app/environments/models/environment';

export const ENVIRONMENT: IEnvironment = {
  baseUrl: 'https://dark-heresy:3100',
  hmr: {
    isEnabled: true
  },
  isProduction: false
};
