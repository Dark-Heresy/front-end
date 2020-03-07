import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DhHomeModule } from './views/home/dh-home.module';
import { DhIntroductionModule } from './views/introduction/dh-introduction.module';

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
      },
      {
        loadChildren: (): Promise<any> => import('./views/introduction/dh-introduction.module').then((m): DhIntroductionModule => m.DhIntroductionModule),
        path: 'introduction'
      }
    ], {
      paramsInheritanceStrategy: 'always'
    })
  ]
})
export class DhRootRoutingModule {
}
