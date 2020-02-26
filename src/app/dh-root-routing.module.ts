import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot([], {
      paramsInheritanceStrategy: 'always'
    })
  ]
})
export class DhRootRoutingModule {
}
