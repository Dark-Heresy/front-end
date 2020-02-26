import {
  ElementRef,
  Renderer2
} from '@angular/core';
import { DhDisabledDirective } from '@dh/directives/disabled/directive/dh-disabled.directive';
import {
  createDirectiveFactory,
  mockProvider,
  SpectatorDirective
} from '@ngneat/spectator';

describe('DhDisabledDirective', () => {
  const createDirective = createDirectiveFactory({
    directive: DhDisabledDirective,
    mocks: [
      ElementRef
    ],
    providers: [
      mockProvider(Renderer2)
    ]
  });
  let spectator: SpectatorDirective<DhDisabledDirective>;

  beforeEach(() => {
    spectator = createDirective('<div dhDisabled></div>');
  });

  it('should create', () => {
    expect(spectator.directive).toBeDefined();
  });

  it('should not have a default disabled class', () => {
    expect(spectator.directive.disabledClass).toBeUndefined();
  });

  it('should be enabled', () => {
    expect(spectator.directive.isDisabled).toBe(false);
  });

  describe('ngAfterViewInit()', () => {
    it('', () => {
      spectator.directive.ngAfterViewInit();
    });
  });
});
