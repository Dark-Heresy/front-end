import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DhButtonLabelModule } from '@dh/components/buttons/button-label/dh-button-label.module';
import { DhButtonModule } from '@dh/components/buttons/button/dh-button.module';
import { DhHomeComponent } from './component/dh-home.component';

@NgModule({
  declarations: [
    DhHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        component: DhHomeComponent,
        path: ''
      }
    ]),
    DhButtonLabelModule,
    DhButtonModule
  ]
})
export class DhHomeModule {
}
