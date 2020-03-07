import {
  APP_INITIALIZER,
  FactoryProvider
} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { dhTranslationInitializer } from '@dh/features/translation/initializers/dh-translation.initializer';
import { TranslocoService } from '@ngneat/transloco';

export const DH_TRANSLATION_SERVICE_PROVIDER: FactoryProvider = {
  deps: [
    TranslocoService,
    Meta
  ],
  multi: true,
  provide: APP_INITIALIZER,
  useFactory: (dhTranslationInitializer)
};
