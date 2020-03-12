import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { DhControlTextComponent } from '@dh/components/controls/control-text/component/dh-control-text.component';
import { DhDisabledControlModule } from '@dh/directives/disabled-control/dh-disabled-control.module';
import { DhDisabledModule } from '@dh/directives/disabled/dh-disabled.module';

@NgModule({
  declarations: [
    DhControlTextComponent
  ],
  exports: [
    DhControlTextComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DhDisabledControlModule,
    DhDisabledModule
  ]
})
export class DhControlTextModule {
}
