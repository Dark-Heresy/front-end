import {
  Component,
  ElementRef,
  Renderer2
} from '@angular/core';
import { DhDisabledDirective } from '@dh/directives/disabled/directive/dh-disabled.directive';
import { DhOptional } from '@dh/types/dh-optional';
import {
  createDirectiveFactory,
  mockProvider,
  SpectatorDirective
} from '@ngneat/spectator';
import { cleanStylesFromDom } from '@test/test';

@Component({
  selector: 'dh-custom-host',
  template: ''
})
class DhCustomHostComponent {
  public isDisabled: DhOptional<boolean | string> = undefined;
  public disabledClass: DhOptional<string> = undefined;
}

describe('DhDisabledDirective:TestDom', () => {
  const createDirective = createDirectiveFactory({
    directive: DhDisabledDirective,
    host: DhCustomHostComponent,
    mocks: [
      ElementRef
    ],
    providers: [
      mockProvider(Renderer2)
    ]
  });
  let spectator: SpectatorDirective<DhDisabledDirective, DhCustomHostComponent>;

  describe('when using the directive like an attribute', () => {
    beforeEach(() => {
      spectator = createDirective(`<div dhDisabled></div>`);
    });

    it('should be disabled', () => {
      expect(spectator.element).toHaveAttribute('disabled');
    });

    it('should not be focusable', () => {
      expect(spectator.element).toHaveAttribute('tabindex', '-1');
    });
  });

  describe('when using the directive like an attribute with true as value', () => {
    beforeEach(() => {
      spectator = createDirective(`<div dhDisabled="{{ isDisabled }}"></div>`);
      spectator.setHostInput('isDisabled', 'true');
    });

    it('should be disabled', () => {
      expect(spectator.element).toHaveAttribute('disabled');
    });

    it('should not be focusable', () => {
      expect(spectator.element).toHaveAttribute('tabindex', '-1');
    });
  });

  describe('when using the directive like an attribute with false as value', () => {
    beforeEach(() => {
      spectator = createDirective(`<div dhDisabled="{{ isDisabled }}"></div>`);
      spectator.setHostInput('isDisabled', 'false');
    });

    it('should be enabled', () => {
      expect(spectator.element).not.toHaveAttribute('disabled');
    });

    it('should be focusable', () => {
      expect(spectator.element).toHaveAttribute('tabindex', '0');
    });
  });

  describe('when using the directive with an input and undefined as value', () => {
    beforeEach(() => {
      spectator = createDirective(`<div [dhDisabled]="isDisabled"></div>`);
      spectator.setHostInput('isDisabled', undefined);
    });

    it('should be disabled', () => {
      expect(spectator.element).toHaveAttribute('disabled');
    });

    it('should not be focusable', () => {
      expect(spectator.element).toHaveAttribute('tabindex', '-1');
    });
  });

  describe('when using the directive with an input and null as value', () => {
    beforeEach(() => {
      spectator = createDirective(`<div [dhDisabled]="isDisabled"></div>`);
      spectator.setHostInput('isDisabled', null);
    });

    it('should be disabled', () => {
      expect(spectator.element).toHaveAttribute('disabled');
    });

    it('should not be focusable', () => {
      expect(spectator.element).toHaveAttribute('tabindex', '-1');
    });
  });

  describe('when using the directive with an input and true as value', () => {
    beforeEach(() => {
      spectator = createDirective(`<div [dhDisabled]="isDisabled"></div>`);
      spectator.setHostInput('isDisabled', true);
    });

    it('should be disabled', () => {
      expect(spectator.element).toHaveAttribute('disabled');
    });

    it('should not be focusable', () => {
      expect(spectator.element).toHaveAttribute('tabindex', '-1');
    });
  });

  describe('when using the directive with an input and false as value', () => {
    beforeEach(() => {
      spectator = createDirective(`<div [dhDisabled]="isDisabled"></div>`);
      spectator.setHostInput('isDisabled', false);
    });

    it('should be enabled', () => {
      expect(spectator.element).not.toHaveAttribute('disabled');
    });

    it('should be focusable', () => {
      expect(spectator.element).toHaveAttribute('tabindex', '0');
    });
  });

  describe('when using the directive with a disabled class like an attribute', () => {
    beforeEach(() => {
      spectator = createDirective(`<div dhDisabled dhDisabledClass="{{ disabledClass }}"></div>`);
      spectator.setHostInput('disabledClass', 'dh-disabled');
    });

    it('should have the disabled class', () => {
      expect(spectator.element).toHaveClass('dh-disabled');
    });
  });

  describe('when using the directive with a disabled class with an input', () => {
    beforeEach(() => {
      spectator = createDirective(`<div dhDisabled [dhDisabledClass]="disabledClass"></div>`);
      spectator.setHostInput('disabledClass', 'dh-disabled');
    });

    it('should have the disabled class', () => {
      expect(spectator.element).toHaveClass('dh-disabled');
    });
  });

  afterAll(() => {
    cleanStylesFromDom();
  });
});
