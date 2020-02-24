import { ClassProvider } from '@angular/core';
import { TranslocoHttpLoader } from '@app/features/translation/loaders/transloco-http-loader';
import { TRANSLOCO_LOADER } from '@ngneat/transloco';

export const TRANSLOCO_LOADER_PROVIDER: ClassProvider = {
  provide: TRANSLOCO_LOADER,
  useClass: TranslocoHttpLoader
};
