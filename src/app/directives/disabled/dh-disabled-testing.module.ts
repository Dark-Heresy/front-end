import {
  NgModule,
  Renderer2,
  ValueProvider
} from '@angular/core';
import { DhRenderer2Mock } from '@dh/mocks/angular/dh-renderer2.mock';

@NgModule({
  providers: [
    <ValueProvider>{
      provide: Renderer2,
      useValue: DhRenderer2Mock
    }
  ]
})
export class DhDisabledTestingModule {
}
