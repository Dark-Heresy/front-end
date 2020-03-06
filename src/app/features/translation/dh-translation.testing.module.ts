import { ModuleWithProviders } from '@angular/core';
import { DhOptional } from '@dh/types/dh-optional';
import { DhPartial } from '@dh/types/dh-partial';
import {
  TranslocoConfig,
  TranslocoTestingModule
} from '@ngneat/transloco';
import _ from 'lodash';

export function dhGetTranslocoTestingModule(translocoConfig?: DhOptional<DhPartial<TranslocoConfig>>): ModuleWithProviders {
  return TranslocoTestingModule.withLangs(
    {
      fr: {
        helloWorld: 'hello world !'
      }
    },
    _.merge(
      {},
      translocoConfig,
      {
        availableLangs: [
          'fr'
        ],
        defaultLang: 'fr'
      }
    )
  );
}
