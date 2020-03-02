import { NgModule } from '@angular/core';
import { DhInputTextModule } from '@dh/components/controls/input-text/dh-input-text.module';

@NgModule({
  exports: [
    DhInputTextModule
  ],
  imports: [
    DhInputTextModule
  ]
})
export class DhInputTextTestingModule {
}
