import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { DhControlTextModule } from '@dh/components/controls/control-text/dh-control-text.module';

@NgModule({
  exports: [
    DhControlTextModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DhControlTextTestingModule {
}
