import { NgModule } from '@angular/core';
import { DhDisabledModule } from '@dh/directives/disabled/dh-disabled.module';

@NgModule({
  exports: [
    DhDisabledModule
  ],
  imports: [
    DhDisabledModule
  ]
})
export class DhDisabledTestingModule {
}
