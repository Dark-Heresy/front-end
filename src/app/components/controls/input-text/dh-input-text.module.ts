import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { DhInputTextComponent } from '@dh/components/controls/input-text/component/dh-input-text.component';

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
  ]
})
export class DhInputTextModule {
}
