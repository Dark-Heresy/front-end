import { NgModule } from '@angular/core';
import { DhDisabledDirective } from '@dh/directives/disabled/directive/dh-disabled.directive';

@NgModule({
  declarations: [
    DhDisabledDirective
  ],
  exports: [
    DhDisabledDirective
  ]
})
export class DhDisabledTestingModule {
}
