import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { DhDisabledTestingModule } from '@dh/directives/disabled/dh-disabled.testing.module';

@NgModule({
  exports: [
    DhDisabledTestingModule,
    RouterTestingModule
  ]
})
export class DhButtonRouterTestingModule {
}
