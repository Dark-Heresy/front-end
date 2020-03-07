import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  ServerModule,
  ServerTransferStateModule
} from '@angular/platform-server';
import { DhRootComponent } from '@dh/component';
import { DH_TRANSLOCO_LOADER_PROVIDER } from '@dh/features/translation/providers/dh-transloco-loader.provider';
import { DhRootModule } from '@dh/module';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

@NgModule({
  bootstrap: [
    DhRootComponent
  ],
  imports: [
    DhRootModule,
    NoopAnimationsModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule
  ],
  providers: [
    DH_TRANSLOCO_LOADER_PROVIDER
  ]
})
export class DhRootServerModule {
}
