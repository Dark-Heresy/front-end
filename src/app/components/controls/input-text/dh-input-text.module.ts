import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { DhInputTextComponent } from '@dh/components/controls/input-text/component/dh-input-text.component';
import { DH_INPUT_TEXT_NG_VALUE_ACCESSOR_PROVIDER } from '@dh/components/controls/input-text/providers/dh-input-text-ng-value-accessor.provider';

@NgModule({
  declarations: [
    DhInputTextComponent
  ],
  exports: [
    DhInputTextComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    DH_INPUT_TEXT_NG_VALUE_ACCESSOR_PROVIDER
  ]
})
export class DhInputTextModule {
}
