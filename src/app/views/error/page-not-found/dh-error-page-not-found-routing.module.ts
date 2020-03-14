import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DhErrorPageNotFoundComponent } from './component/dh-error-page-not-found.component';

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild([
      {
        component: DhErrorPageNotFoundComponent,
        path: ''
      }
    ])
  ]
})
export class DhErrorPageNotFoundRoutingModule {
}
