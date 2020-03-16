import { ValueProvider } from '@angular/core';
import { TRANSLOCO_LOADING_TEMPLATE } from '@ngneat/transloco';

export const DH_TRANSLOCO_LOADING_TEMPLATE_PROVIDER: ValueProvider = {
  provide: TRANSLOCO_LOADING_TEMPLATE,
  useValue: '<span>Loading...</span>'
};
