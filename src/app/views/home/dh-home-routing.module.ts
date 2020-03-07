import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DhHomeComponent } from './component/dh-home.component';

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild([
      {
        component: DhHomeComponent,
        path: ''
      }
    ])
  ]
})
export class DhHomeRoutingModule {
}
