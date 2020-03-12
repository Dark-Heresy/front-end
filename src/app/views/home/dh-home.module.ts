import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DhButtonContainerModule } from '@dh/components/buttons/button-container/dh-button-container.module';
import { DhButtonLabelModule } from '@dh/components/buttons/button-label/dh-button-label.module';
import { DhButtonModule } from '@dh/components/buttons/button/dh-button.module';
import { DhControlTextModule } from '@dh/components/controls/control-text/dh-control-text.module';
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
    DhButtonModule,
    DhButtonContainerModule,
    ReactiveFormsModule,
    FormsModule,
    DhControlTextModule
  ]
})
export class DhHomeModule {
}