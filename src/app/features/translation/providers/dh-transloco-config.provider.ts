import { ValueProvider } from '@angular/core';
import { DH_ENVIRONMENT } from '@dh/environments/dh-environment';
import {
  TranslocoConfig,
  TRANSLOCO_CONFIG
} from '@ngneat/transloco';

export const DH_TRANSLOCO_CONFIG_PROVIDER: ValueProvider = {
  provide: TRANSLOCO_CONFIG,
  useValue: <TranslocoConfig>{
    availableLangs: [
      'fr'
    ],
    defaultLang: 'fr',
    failedRetries: 1,
    fallbackLang: 'fr',
    flatten: {
      aot: DH_ENVIRONMENT.isProduction
    },
    missingHandler: {
      allowEmpty: DH_ENVIRONMENT.isProduction,
      logMissingKey: !DH_ENVIRONMENT.isProduction,
      useFallbackTranslation: false
    },
    prodMode: DH_ENVIRONMENT.isProduction,
    reRenderOnLangChange: true
  }
};
