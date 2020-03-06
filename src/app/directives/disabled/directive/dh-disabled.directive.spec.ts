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
  SpectatorDirective,
  SpectatorDirectiveFactory
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

describe('DhDisabledDirective', (): void => {
  const directiveFactory: SpectatorDirectiveFactory<DhDisabledDirective, DhCustomHostComponent> = createDirectiveFactory({
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

  describe('when using the directive like an attribute', (): void => {
    beforeEach((): void => {
      spectator = directiveFactory('<div dhDisabled></div>');
    });

    it('should be disabled', (): void => {
      expect(spectator.element).toHaveAttribute('disabled');
    });

    it('should not be focusable', (): void => {
      expect(spectator.element).toHaveAttribute('tabindex', '-1');
    });
  });

  describe('when using the directive with an input and undefined as value', (): void => {
    beforeEach((): void => {
      spectator = directiveFactory('<div [dhDisabled]="isDisabled"></div>');
      spectator.setHostInput('isDisabled', undefined);
    });

    it('should be disabled', (): void => {
      expect(spectator.element).toHaveAttribute('disabled');
    });

    it('should not be focusable', (): void => {
      expect(spectator.element).toHaveAttribute('tabindex', '-1');
    });
  });

  describe('when using the directive with an input and null as value', (): void => {
    beforeEach((): void => {
      spectator = directiveFactory('<div [dhDisabled]="isDisabled"></div>');
      spectator.setHostInput('isDisabled', null);
    });

    it('should be disabled', (): void => {
      expect(spectator.element).toHaveAttribute('disabled');
    });

    it('should not be focusable', (): void => {
      expect(spectator.element).toHaveAttribute('tabindex', '-1');
    });
  });

  describe('when using the directive like an attribute with true as value', (): void => {
    beforeEach((): void => {
      spectator = directiveFactory('<div dhDisabled="{{ isDisabled }}"></div>');
      spectator.setHostInput('isDisabled', 'true');
    });

    it('should be disabled', (): void => {
      expect(spectator.element).toHaveAttribute('disabled');
    });

    it('should not be focusable', (): void => {
      expect(spectator.element).toHaveAttribute('tabindex', '-1');
    });
  });

  describe('when using the directive like an attribute with false as value', (): void => {
    beforeEach((): void => {
      spectator = directiveFactory('<div dhDisabled="{{ isDisabled }}"></div>');
      spectator.setHostInput('isDisabled', 'false');
    });

    it('should be enabled', (): void => {
      expect(spectator.element).not.toHaveAttribute('disabled');
    });

    it('should be focusable', (): void => {
      expect(spectator.element).toHaveAttribute('tabindex', '0');
    });
  });

  describe('when using the directive with an input and true as value', (): void => {
    beforeEach((): void => {
      spectator = directiveFactory('<div [dhDisabled]="isDisabled"></div>');
      spectator.setHostInput('isDisabled', true);
    });

    it('should be disabled', (): void => {
      expect(spectator.element).toHaveAttribute('disabled');
    });

    it('should not be focusable', (): void => {
      expect(spectator.element).toHaveAttribute('tabindex', '-1');
    });
  });

  describe('when using the directive with an input and false as value', (): void => {
    beforeEach((): void => {
      spectator = directiveFactory('<div [dhDisabled]="isDisabled"></div>');
      spectator.setHostInput('isDisabled', false);
    });

    it('should be enabled', (): void => {
      expect(spectator.element).not.toHaveAttribute('disabled');
    });

    it('should be focusable', (): void => {
      expect(spectator.element).toHaveAttribute('tabindex', '0');
    });
  });

  describe('when using the directive with a disabled class like an attribute', (): void => {
    beforeEach((): void => {
      spectator = directiveFactory('<div dhDisabled dhDisabledClass="{{ disabledClass }}"></div>');
      spectator.setHostInput('disabledClass', 'dh-disabled');
    });

    it('should have the disabled class', (): void => {
      expect(spectator.element).toHaveClass('dh-disabled');
    });
  });

  describe('when using the directive with a disabled class with an input', (): void => {
    beforeEach((): void => {
      spectator = directiveFactory('<div dhDisabled [dhDisabledClass]="disabledClass"></div>');
      spectator.setHostInput('disabledClass', 'dh-disabled');
    });

    it('should have the disabled class', (): void => {
      expect(spectator.element).toHaveClass('dh-disabled');
    });
  });

  describe('when using the directive with a disabled class and the disabled class change once again', (): void => {
    beforeEach((): void => {
      spectator = directiveFactory('<div dhDisabled [dhDisabledClass]="disabledClass"></div>');
      spectator.setHostInput('disabledClass', 'dh-disabled-old-class');
      spectator.setHostInput('disabledClass', 'dh-disabled-new-class');
    });

    it('should not have the old disabled class', (): void => {
      expect(spectator.element).not.toHaveClass('dh-disabled-old-class');
    });

    it('should have the new disabled class', (): void => {
      expect(spectator.element).toHaveClass('dh-disabled-new-class');
    });
  });

  afterAll((): void => {
    cleanStylesFromDom();
  });
});
