import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DhButtonRouterComponent } from '@dh/components/buttons/button-router/component/dh-button-router.component';
import { DhDisabledModule } from '@dh/directives/disabled/dh-disabled.module';

@NgModule({
  declarations: [
    DhButtonRouterComponent
  ],
  exports: [
    DhButtonRouterComponent
  ],
  imports: [
    CommonModule,
    DhDisabledModule,
    RouterModule
  ]
})
export class DhButtonRouterModule {
}
