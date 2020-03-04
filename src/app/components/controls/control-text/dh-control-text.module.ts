import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { DhControlTextComponent } from '@dh/components/controls/control-text/component/dh-control-text.component';

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
    FormsModule
  ]
})
export class DhControlTextModule {
}
