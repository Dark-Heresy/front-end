import {
  CommonModule,
  registerLocaleData
} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeFrExtra from '@angular/common/locales/extra/fr';
import localeFr from '@angular/common/locales/fr';
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  HammerModule
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from '@app/component';
import { ENVIRONMENT } from '@app/environments/environment';
import { TranslocoHttpLoader } from '@app/features/translation/loaders/transloco-http-loader';
import { TRANSLATION_SERVICE_PROVIDER } from '@app/features/translation/providers/translation-service.provider';
import { TRANSLOCO_CONFIG_PROVIDER } from '@app/features/translation/providers/transloco-config.provider';
import { AppRoutingModule } from '@app/routing-module';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
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
import { TransferHttpCacheModule } from '@nguniversal/common';
import { StorageModule } from '@ngx-pwa/local-storage';
import localForage from 'localforage';

// Angular i18n
registerLocaleData(localeFr, 'fr', localeFrExtra);

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
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({
      appId: 'darkHeresyApp'
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    TransferHttpCacheModule,
    ENVIRONMENT.isProduction ? [] : AkitaNgDevtools.forRoot(),
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: ENVIRONMENT.isProduction
    }),
    StorageModule.forRoot({
      IDBDBName: 'app_storage',
      IDBDBVersion: 1,
      IDBNoWrap: true,
      LSPrefix: 'app'
    }),
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
    }),
    HammerModule,
    AppRoutingModule
  ],
  providers: [
    TRANSLATION_SERVICE_PROVIDER,
    TRANSLOCO_CONFIG_PROVIDER
  ]
})
export class AppModule {
}
