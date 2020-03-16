import { ClassProvider } from '@angular/core';
import { DhTranslocoHttpLoader } from '@dh/features/translation/loaders/dh-transloco-http-loader';
import { TRANSLOCO_LOADER } from '@ngneat/transloco';

export const DH_TRANSLOCO_LOADER_PROVIDER: ClassProvider = {
  provide: TRANSLOCO_LOADER,
  useClass: DhTranslocoHttpLoader
};
