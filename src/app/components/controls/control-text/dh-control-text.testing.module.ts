import { NgModule } from '@angular/core';
import { DhControlTextModule } from '@dh/components/controls/control-text/dh-control-text.module';

@NgModule({
  exports: [
    DhControlTextModule
  ],
  imports: [
    DhControlTextModule
  ]
})
export class DhControlTextTestingModule {
}
