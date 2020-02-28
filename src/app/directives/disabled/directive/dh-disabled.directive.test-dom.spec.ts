import {
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

describe('DhDisabledDirective:TestDom', () => {
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
  let dhDisabledInput: DhOptional<boolean | string>;
  let dhDisabledClass: DhOptional<string>;

  describe('when using the directive like an attribute', () => {
    beforeEach(() => {
      spectator = createDirective(`<div dhDisabled></div>`);
    });

    it('should create', () => {
      expect(spectator.directive).toBeDefined();
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
      dhDisabledInput = 'true';
      spectator = createDirective(`<div dhDisabled="${dhDisabledInput}"></div>`);
    });

    it('should create', () => {
      expect(spectator.directive).toBeDefined();
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
      dhDisabledInput = 'false';
      spectator = createDirective(`<div dhDisabled="${dhDisabledInput}"></div>`);
    });

    it('should create', () => {
      expect(spectator.directive).toBeDefined();
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
      dhDisabledInput = undefined;
      spectator = createDirective(`<div [dhDisabled]="${dhDisabledInput}"></div>`);
    });

    it('should create', () => {
      expect(spectator.directive).toBeDefined();
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
      dhDisabledInput = null;
      spectator = createDirective(`<div [dhDisabled]="${dhDisabledInput}"></div>`);
    });

    it('should create', () => {
      expect(spectator.directive).toBeDefined();
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
      dhDisabledInput = true;
      spectator = createDirective(`<div [dhDisabled]="${dhDisabledInput}"></div>`);
    });

    it('should create', () => {
      expect(spectator.directive).toBeDefined();
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
      dhDisabledInput = false;
      spectator = createDirective(`<div [dhDisabled]="${dhDisabledInput}"></div>`);
    });

    it('should create', () => {
      expect(spectator.directive).toBeDefined();
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
      dhDisabledClass = 'dh-disabled-class';
      spectator = createDirective(`<div dhDisabled dhDisabledClass="${dhDisabledClass}"></div>`);
    });

    it('should create', () => {
      expect(spectator.directive).toBeDefined();
    });

    it('should have the disabled class', () => {
      expect(spectator.element).toHaveClass('dh-disabled-class');
    });
  });

  describe('when using the directive with a disabled class with an input', () => {
    beforeEach(() => {
      dhDisabledClass = 'dh-disabled-class';
      spectator = createDirective(`<div dhDisabled [dhDisabledClass]="${dhDisabledClass}"></div>`);
    });

    it('should create', () => {
      expect(spectator.directive).toBeDefined();
    });

    it('should have the disabled class', () => {
      expect(spectator.element).toHaveClass('dh-disabled-class');
    });
  });

  afterAll(() => {
    cleanStylesFromDom();
  });
});
