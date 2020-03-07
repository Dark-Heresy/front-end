import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  QuicklinkModule,
  QuicklinkStrategy
} from 'ngx-quicklink';
import { DhErrorPageNotFoundModule } from './views/error/page-not-found/dh-error-page-not-found.module';
import { DhHomeModule } from './views/home/dh-home.module';
import { DhIntroductionModule } from './views/introduction/dh-introduction.module';

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    QuicklinkModule,
    RouterModule.forRoot([
      {
        loadChildren: (): Promise<any> => import('./views/error/page-not-found/dh-error-page-not-found.module').then((m): DhErrorPageNotFoundModule => m.DhErrorPageNotFoundModule),
        path: 'error/page-not-found'
      },
      {
        loadChildren: (): Promise<any> => import('./views/home/dh-home.module').then((m): DhHomeModule => m.DhHomeModule),
        path: ''
      },
      {
        loadChildren: (): Promise<any> => import('./views/introduction/dh-introduction.module').then((m): DhIntroductionModule => m.DhIntroductionModule),
        path: 'introduction'
      },
      {
        path: '**',
        redirectTo: 'error/page-not-found'
      }
    ], {
      paramsInheritanceStrategy: 'always',
      preloadingStrategy: QuicklinkStrategy
    })
  ]
})
export class DhRootRoutingModule {
}
