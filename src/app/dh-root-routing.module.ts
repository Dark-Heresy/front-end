import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DhHomeModule } from './views/home/dh-home.module';

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
        loadChildren: (): Promise<any> => import('./views/home/dh-home.module').then((m): DhHomeModule => m.DhHomeModule),
        path: ''
      }
    ], {
      paramsInheritanceStrategy: 'always'
    })
  ]
})
export class DhRootRoutingModule {
}
