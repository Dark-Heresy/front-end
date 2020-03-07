import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DhIntroductionComponent } from './component/dh-introduction.component';

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild([
      {
        component: DhIntroductionComponent,
        path: ''
      }
    ])
  ]
})
export class DhIntroductionRoutingModule {
}
