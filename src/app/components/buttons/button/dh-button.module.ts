import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DhButtonComponent } from '@dh/components/buttons/button/component/dh-button.component';
import { DhDisabledModule } from '@dh/directives/disabled/dh-disabled.module';

@NgModule({
  declarations: [
    DhButtonComponent
  ],
  exports: [
    DhButtonComponent
  ],
  imports: [
    CommonModule,
    DhDisabledModule
  ]
})
export class DhButtonModule {
}
