import { CommonModule } from '@angular/common';
import {
  Injector,
  NgModule
} from '@angular/core';
import { createCustomElement } from '@angular/elements';
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
  public constructor(readonly injector: Injector) {
    customElements.define('dh-button', createCustomElement(DhButtonComponent, {
      injector
    }));
  }
}
