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
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { DhRootComponent } from '@dh/component';
import { DhNavbarModule } from '@dh/components/navbar/dh-navbar.module';
import { DH_ENVIRONMENT } from '@dh/environments/dh-environment';
import { DhTranslationRootModule } from '@dh/features/translation/dh-translation-root.module';
import { DhRootRoutingModule } from '@dh/routing-module';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { StorageModule } from '@ngx-pwa/local-storage';

registerLocaleData(localeFr, 'fr', localeFrExtra);

@NgModule({
  bootstrap: [
    DhRootComponent
  ],
  declarations: [
    DhRootComponent
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({
      appId: 'darkHeresyApp'
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    TransferHttpCacheModule,
    DH_ENVIRONMENT.isProduction ? [] : AkitaNgDevtools.forRoot(),
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: DH_ENVIRONMENT.isProduction
    }),
    StorageModule.forRoot({
      IDBDBName: 'dh_storage',
      IDBDBVersion: 1,
      IDBNoWrap: true,
      LSPrefix: 'dh'
    }),
    HammerModule,
    DhTranslationRootModule,
    DhRootRoutingModule,
    DhNavbarModule
  ]
})
export class DhRootModule {
}
