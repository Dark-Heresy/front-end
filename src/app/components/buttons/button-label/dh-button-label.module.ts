import { CommonModule } from '@angular/common';
import {
  Injector,
  NgModule
} from '@angular/core';
import { createCustomElement } from '@angular/elements';
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
  public constructor(readonly injector: Injector) {
    if (!customElements.get('dh-button-label')) {
      customElements.define('dh-button-label', createCustomElement(DhButtonLabelComponent, {
        injector
      }));
    }
  }
}
