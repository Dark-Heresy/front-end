import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { DhIntroductionComponent } from './component/dh-introduction.component';
import { DhIntroductionRoutingModule } from './dh-introduction-routing.module';

@NgModule({
  declarations: [
    DhIntroductionComponent
  ],
  imports: [
    DhIntroductionRoutingModule,
    TranslocoModule
  ]
})
export class DhIntroductionModule {
}
