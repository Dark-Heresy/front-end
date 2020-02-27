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

  describe('TypeScript testing', () => {
    let renderer: Renderer2;

    beforeEach(() => {
      spectator = createDirective('<div dhDisabled></div>');
      renderer = spectator.inject(Renderer2, true);
    });

    it('should create', () => {
      expect(spectator.directive).toBeDefined();
    });

    describe('get disabledClass', () => {
      it('should not have a default disabled class', () => {
        const result = spectator.directive.disabledClass;

        expect(result).toBeUndefined();
      });
    });

    describe('set disabledClass', () => {
      let disabledClass: DhOptional<string>;

      let rendererRemoveClassSpy: jasmine.Spy;
      let rendererAddClassSpy: jasmine.Spy;

      beforeEach(() => {
        rendererRemoveClassSpy = spyOn(renderer, 'removeClass').and.stub();
        rendererAddClassSpy = spyOn(renderer, 'addClass').and.stub();
      });

      describe('when the old disabled class is undefined', () => {
        beforeEach(() => {
          spectator.directive.disabledClass = undefined;
        });

        it('should not remove the old disabled class', () => {
          spectator.directive.disabledClass = disabledClass;

          expect(rendererRemoveClassSpy).not.toHaveBeenCalled();
        });
      });

      describe('when the old disabled class is null', () => {
        beforeEach(() => {
          spectator.directive.disabledClass = null;
        });

        it('should not remove the old disabled class', () => {
          spectator.directive.disabledClass = disabledClass;

          expect(rendererRemoveClassSpy).not.toHaveBeenCalled();
        });
      });

      describe('when the old disabled class is an empty string', () => {
        beforeEach(() => {
          spectator.directive.disabledClass = '';
        });

        it('should not remove the old disabled class', () => {
          spectator.directive.disabledClass = disabledClass;

          expect(rendererRemoveClassSpy).not.toHaveBeenCalled();
        });
      });

      describe('when the old disabled class is a string', () => {
        beforeEach(() => {
          spectator.directive.disabledClass = 'dummy-disabled-class';
        });

        it('should remove the old disabled class', () => {
          spectator.directive.disabledClass = disabledClass;

          expect(rendererRemoveClassSpy).toHaveBeenCalledTimes(1);
          expect(rendererRemoveClassSpy).toHaveBeenCalledWith(spectator.element, 'dummy-disabled-class');
        });
      });

      describe('when the given disabled class is undefined', () => {
        beforeEach(() => {
          disabledClass = undefined;
        });

        it('should not add the given disabled class', () => {
          spectator.directive.disabledClass = disabledClass;

          expect(rendererAddClassSpy).not.toHaveBeenCalled();
        });
      });

      describe('when the given disabled class is null', () => {
        beforeEach(() => {
          disabledClass = null;
        });

        it('should not add the given disabled class', () => {
          spectator.directive.disabledClass = disabledClass;

          expect(rendererAddClassSpy).not.toHaveBeenCalled();
        });
      });

      describe('when the given disabled class is an empty string', () => {
        beforeEach(() => {
          disabledClass = '';
        });

        it('should not add the given disabled class', () => {
          spectator.directive.disabledClass = disabledClass;

          expect(rendererAddClassSpy).not.toHaveBeenCalled();
        });
      });

      describe('when the given disabled class is a string', () => {
        beforeEach(() => {
          disabledClass = 'dummy-disabled-class';
        });

        describe('when it is enabled', () => {
          beforeEach(() => {
            spectator.directive.isDisabled = false;
          });

          it('should not add the given disabled class', () => {
            spectator.directive.disabledClass = disabledClass;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });

        describe('when it is disabled', () => {
          beforeEach(() => {
            spectator.directive.isDisabled = true;
          });

          it('should add the given disabled class', () => {
            spectator.directive.disabledClass = disabledClass;

            expect(rendererAddClassSpy).toHaveBeenCalledTimes(1);
            expect(rendererAddClassSpy).toHaveBeenCalledWith(spectator.element, disabledClass);
          });
        });
      });
    });

    it('should be disabled', () => {
      expect(spectator.directive.isDisabled).toBe(true);
    });

    describe('ngAfterViewInit()', () => {
      it('', () => {
        spectator.directive.ngAfterViewInit();
      });
    });
  });

  describe('DOM testing', () => {
    beforeEach(() => {
      spectator = createDirective('<div dhDisabled></div>');
    });

    it('should create', () => {
      expect(spectator.directive).toBeDefined();
    });
  });

  afterAll(() => {
    cleanStylesFromDom();
  });
});
