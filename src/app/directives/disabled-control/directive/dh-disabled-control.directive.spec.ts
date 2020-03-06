import {
  Component,
  ElementRef,
  Renderer2
} from '@angular/core';
import { DhDisabledControlDirective } from '@dh/directives/disabled-control/directive/dh-disabled-control.directive';
import {
  createDirectiveFactory,
  mockProvider,
  SpectatorDirective,
  SpectatorDirectiveFactory
} from '@ngneat/spectator';

@Component({
  selector: 'dh-custom-host',
  template: ''
})
class DhCustomHostComponent {
}

/**
 * @todo add coverage
 */
describe('DhDisabledControlDirective', (): void => {
  const directiveFactory: SpectatorDirectiveFactory<DhDisabledControlDirective, DhCustomHostComponent> = createDirectiveFactory({
    directive: DhDisabledControlDirective,
    host: DhCustomHostComponent,
    mocks: [
      ElementRef
    ],
    providers: [
      mockProvider(Renderer2)
    ]
  });
  // @ts-ignore
  let spectator: SpectatorDirective<DhDisabledControlDirective, DhCustomHostComponent>;

  describe('...', (): void => {
    beforeEach((): void => {
      spectator = directiveFactory('<input dhDisabledControl>');
    });
  });
});
