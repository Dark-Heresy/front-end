import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DhButtonContainerComponent } from '@dh/components/buttons/button-container/component/dh-button-container.component';

@NgModule({
  declarations: [
    DhButtonContainerComponent
  ],
  exports: [
    DhButtonContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DhButtonContainerModule {
}
