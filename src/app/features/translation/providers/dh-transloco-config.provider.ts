import { ValueProvider } from '@angular/core';
import { ENVIRONMENT } from '@dh/environments/environment';
import {
  TRANSLOCO_CONFIG,
  TranslocoConfig
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
      aot: ENVIRONMENT.isProduction
    },
    missingHandler: {
      allowEmpty: ENVIRONMENT.isProduction,
      logMissingKey: !ENVIRONMENT.isProduction,
      useFallbackTranslation: false
    },
    prodMode: ENVIRONMENT.isProduction,
    reRenderOnLangChange: true
  }
};
