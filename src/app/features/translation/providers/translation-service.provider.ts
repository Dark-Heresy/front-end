import {
  APP_INITIALIZER,
  FactoryProvider
} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { translationInitializer } from '@app/features/translation/initializers/translation.initializer';
import { TranslocoService } from '@ngneat/transloco';

export const TRANSLATION_SERVICE_PROVIDER: FactoryProvider = {
  deps: [
    TranslocoService,
    Meta
  ],
  multi: true,
  provide: APP_INITIALIZER,
  useFactory: (translationInitializer)
};
