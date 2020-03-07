import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  ServerModule,
  ServerTransferStateModule
} from '@angular/platform-server';
import { AppComponent } from '@app/component';
import { TRANSLOCO_LOADER_PROVIDER } from '@app/features/translation/providers/transloco-loader.provider';
import { AppModule } from '@app/module';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    AppModule,
    NoopAnimationsModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule
  ],
  providers: [
    TRANSLOCO_LOADER_PROVIDER
  ]
})
export class AppServerModule {
}
