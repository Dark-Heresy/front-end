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
import { TranslationRootModule } from '@app/features/translation/translation-root.module';
import { AppRoutingModule } from '@app/routing-module';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { StorageModule } from '@ngx-pwa/local-storage';

registerLocaleData(localeFr, 'fr', localeFrExtra);

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
    TranslationRootModule,
    HammerModule,
    AppRoutingModule
  ]
})
export class AppModule {
}
