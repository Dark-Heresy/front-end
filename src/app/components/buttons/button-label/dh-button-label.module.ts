import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DhButtonLabelComponent } from '@dh/components/buttons/button-label/component/dh-button-label.component';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [
    DhButtonLabelComponent
  ],
  exports: [
    DhButtonLabelComponent
  ],
  imports: [
    CommonModule,
    TranslocoModule
  ]
})
export class DhButtonLabelModule {
}
