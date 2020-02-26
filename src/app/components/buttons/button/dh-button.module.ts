import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DhButtonComponent } from '@dh/components/buttons/button/component/dh-button.component';

@NgModule({
  declarations: [
    DhButtonComponent
  ],
  exports: [
    DhButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DhButtonModule {
}
