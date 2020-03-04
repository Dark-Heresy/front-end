import { NgModule } from '@angular/core';
import { DhDisabledControlModule } from '@dh/directives/disabled-control/dh-disabled-control.module';

@NgModule({
  imports: [
    DhDisabledControlModule
  ],
  exports: [
    DhDisabledControlModule
  ]
})
export class DhDisabledControlTestingModule {
}
