import { NgModule } from '@angular/core';
import { DhDisabledControlDirective } from './directive/dh-disabled-control.directive';

@NgModule({
  declarations: [
    DhDisabledControlDirective
  ],
  exports: [
    DhDisabledControlDirective
  ]
})
export class DhDisabledControlModule {
}
