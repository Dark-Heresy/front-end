import { NgModule } from '@angular/core';
import { DhTranslocoHttpLoader } from '@dh/features/translation/loaders/dh-transloco-http-loader';
import { DH_TRANSLATION_SERVICE_PROVIDER } from '@dh/features/translation/providers/dh-translation-service.provider';
import { DH_TRANSLOCO_CONFIG_PROVIDER } from '@dh/features/translation/providers/dh-transloco-config.provider';
import { DH_TRANSLOCO_LOADING_TEMPLATE_PROVIDER } from '@dh/features/translation/providers/dh-transloco-loading-template.provider';
import { TranslocoModule } from '@ngneat/transloco';
import { TranslocoMessageFormatModule } from '@ngneat/transloco-messageformat';
import {
  cookiesStorage,
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
  name: 'dh_i18n',
  size: 4980736,
  storeName: 'dh_i18n',
  version: 1.0
});

@NgModule({
  exports: [
    TranslocoModule
  ],
  imports: [
    TranslocoModule,
    TranslocoPersistTranslationsModule.init({
      loader: DhTranslocoHttpLoader,
      storage: {
        provide: PERSIST_TRANSLATIONS_STORAGE,
        useValue: i18nLocalForage
      },
      storageKey: 'dh_i18n',
      ttl: 3600
    }),
    TranslocoPersistLangModule.init({
      storage: {
        provide: TRANSLOCO_PERSIST_LANG_STORAGE,
        useValue: cookiesStorage()
      }
    }),
    TranslocoMessageFormatModule.init({
      locales: 'fr-FR'
    })
  ],
  providers: [
    DH_TRANSLATION_SERVICE_PROVIDER,
    DH_TRANSLOCO_CONFIG_PROVIDER,
    DH_TRANSLOCO_LOADING_TEMPLATE_PROVIDER
  ]
})
export class DhTranslationRootModule {
}
