import { NgModule } from '@angular/core';
import { TranslocoHttpLoader } from '@app/features/translation/loaders/transloco-http-loader';
import { TRANSLATION_SERVICE_PROVIDER } from '@app/features/translation/providers/translation-service.provider';
import { TRANSLOCO_CONFIG_PROVIDER } from '@app/features/translation/providers/transloco-config.provider';
import { TRANSLOCO_LOADING_TEMPLATE_PROVIDER } from '@app/features/translation/providers/transloco-loading-template.provider';
import { TranslocoModule } from '@ngneat/transloco';
import { TranslocoMessageFormatModule } from '@ngneat/transloco-messageformat';
import {
  TRANSLOCO_PERSIST_LANG_STORAGE,
  TranslocoPersistLangModule
} from '@ngneat/transloco-persist-lang';
import {
  PERSIST_TRANSLATIONS_STORAGE,
  TranslocoPersistTranslationsModule
} from '@ngneat/transloco-persist-translations';
import localForage from 'localforage';

const i18nLocalForage: LocalForage = localForage.createInstance({
  description: 'storage for the translation files',
  driver: [
    localForage.INDEXEDDB,
    localForage.LOCALSTORAGE,
    localForage.WEBSQL
  ],
  name: 'app_i18n',
  size: 4980736,
  storeName: 'app_i18n',
  version: 1.0
});

const langLocalForage: LocalForage = localForage.createInstance({
  description: 'storage for the lang',
  driver: [
    localForage.INDEXEDDB,
    localForage.LOCALSTORAGE,
    localForage.WEBSQL
  ],
  name: 'app_lang',
  size: 4980736,
  storeName: 'app_lang',
  version: 1.0
});

@NgModule({
  exports: [
    TranslocoModule
  ],
  imports: [
    TranslocoModule,
    TranslocoPersistTranslationsModule.init({
      loader: TranslocoHttpLoader,
      storage: {
        provide: PERSIST_TRANSLATIONS_STORAGE,
        useValue: i18nLocalForage
      },
      storageKey: 'app_i18n',
      ttl: 3600
    }),
    TranslocoPersistLangModule.init({
      storage: {
        provide: TRANSLOCO_PERSIST_LANG_STORAGE,
        useValue: langLocalForage
      }
    }),
    TranslocoMessageFormatModule.init({
      locales: 'fr-FR'
    })
  ],
  providers: [
    TRANSLATION_SERVICE_PROVIDER,
    TRANSLOCO_CONFIG_PROVIDER,
    TRANSLOCO_LOADING_TEMPLATE_PROVIDER
  ]
})
export class TranslationRootModule {
}
