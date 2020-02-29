import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '**',
        redirectTo: 'error/page-not-found'
      },
      {
        loadChildren: (): Promise<any> => import('./views/home/dh-home.module').then((m) => m.DhHomeModule),
        path: ''
      }
    ], {
      paramsInheritanceStrategy: 'always'
    })
  ]
})
export class DhRootRoutingModule {
}
