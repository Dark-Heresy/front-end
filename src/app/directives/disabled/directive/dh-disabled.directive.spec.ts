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
          spectator.directive[ '_disabledClass' ] = undefined;
        });

        it('should not remove the old disabled class', () => {
          spectator.directive.disabledClass = disabledClass;

          expect(rendererRemoveClassSpy).not.toHaveBeenCalled();
        });
      });

      describe('when the old disabled class is null', () => {
        beforeEach(() => {
          spectator.directive[ '_disabledClass' ] = null;
        });

        it('should not remove the old disabled class', () => {
          spectator.directive.disabledClass = disabledClass;

          expect(rendererRemoveClassSpy).not.toHaveBeenCalled();
        });
      });

      describe('when the old disabled class is an empty string', () => {
        beforeEach(() => {
          spectator.directive[ '_disabledClass' ] = '';
        });

        it('should not remove the old disabled class', () => {
          spectator.directive.disabledClass = disabledClass;

          expect(rendererRemoveClassSpy).not.toHaveBeenCalled();
        });
      });

      describe('when the old disabled class is a string', () => {
        beforeEach(() => {
          spectator.directive[ '_disabledClass' ] = 'dummy-disabled-class';
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
            spectator.directive[ '_isDisabled' ] = false;
          });

          it('should not add the given disabled class', () => {
            spectator.directive.disabledClass = disabledClass;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });

        describe('when it is disabled', () => {
          beforeEach(() => {
            spectator.directive[ '_isDisabled' ] = true;
          });

          it('should add the given disabled class', () => {
            spectator.directive.disabledClass = disabledClass;

            expect(rendererAddClassSpy).toHaveBeenCalledTimes(1);
            expect(rendererAddClassSpy).toHaveBeenCalledWith(spectator.element, disabledClass);
          });
        });
      });
    });

    describe('get isDisabled', () => {
      it('should be disabled', () => {
        const result = spectator.directive.isDisabled;

        expect(result).toBe(true);
      });
    });

    describe('set isDisabled', () => {
      let isDisabled: DhOptional<boolean | string>;

      let rendererSetAttributeSpy: jasmine.Spy;
      let rendererRemoveAttributeSpy: jasmine.Spy;
      let rendererAddClassSpy: jasmine.Spy;

      beforeEach(() => {
        rendererSetAttributeSpy = spyOn(renderer, 'setAttribute').and.stub();
        rendererRemoveAttributeSpy = spyOn(renderer, 'removeAttribute').and.stub();
        rendererAddClassSpy = spyOn(renderer, 'addClass').and.stub();
      });

      describe('when the given disabled state is undefined', () => {
        beforeEach(() => {
          isDisabled = undefined;
        });

        it('should disallow the focus on the element', () => {
          spectator.directive.isDisabled = isDisabled;

          expect(rendererSetAttributeSpy).toHaveBeenCalledTimes(2);
          expect(rendererSetAttributeSpy.calls.argsFor(0)).toEqual([
            spectator.element,
            'tabindex',
            '-1'
          ]);
        });

        it('should disable the element', () => {
          spectator.directive.isDisabled = isDisabled;

          expect(rendererSetAttributeSpy).toHaveBeenCalledTimes(2);
          expect(rendererSetAttributeSpy.calls.argsFor(1)).toEqual([
            spectator.element,
            'disabled',
            ''
          ]);
          expect(rendererRemoveAttributeSpy).not.toHaveBeenCalled();
        });

        describe('when the disabled class is undefined', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = undefined;
          });

          it('should not add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });

        describe('when the disabled class is null', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = null;
          });

          it('should not add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });

        describe('when the disabled class is an empty string', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = '';
          });

          it('should not add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });

        describe('when the disabled class is a string', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = 'dummy-disabled-class';
          });

          it('should add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).toHaveBeenCalledTimes(1);
            expect(rendererAddClassSpy).toHaveBeenCalledWith(spectator.element, 'dummy-disabled-class');
          });
        });
      });

      describe('when the given disabled state is null', () => {
        beforeEach(() => {
          isDisabled = null;
        });

        it('should disallow the focus on the element', () => {
          spectator.directive.isDisabled = isDisabled;

          expect(rendererSetAttributeSpy).toHaveBeenCalledTimes(2);
          expect(rendererSetAttributeSpy.calls.argsFor(0)).toEqual([
            spectator.element,
            'tabindex',
            '-1'
          ]);
        });

        it('should disable the element', () => {
          spectator.directive.isDisabled = isDisabled;

          expect(rendererSetAttributeSpy).toHaveBeenCalledTimes(2);
          expect(rendererSetAttributeSpy.calls.argsFor(1)).toEqual([
            spectator.element,
            'disabled',
            ''
          ]);
          expect(rendererRemoveAttributeSpy).not.toHaveBeenCalled();
        });

        describe('when the disabled class is undefined', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = undefined;
          });

          it('should not add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });

        describe('when the disabled class is null', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = null;
          });

          it('should not add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });

        describe('when the disabled class is an empty string', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = '';
          });

          it('should not add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });

        describe('when the disabled class is a string', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = 'dummy-disabled-class';
          });

          it('should add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).toHaveBeenCalledTimes(1);
            expect(rendererAddClassSpy).toHaveBeenCalledWith(spectator.element, 'dummy-disabled-class');
          });
        });
      });

      describe('when the given disabled state is an empty string', () => {
        beforeEach(() => {
          isDisabled = '';
        });

        it('should disallow the focus on the element', () => {
          spectator.directive.isDisabled = isDisabled;

          expect(rendererSetAttributeSpy).toHaveBeenCalledTimes(2);
          expect(rendererSetAttributeSpy.calls.argsFor(0)).toEqual([
            spectator.element,
            'tabindex',
            '-1'
          ]);
        });

        it('should disable the element', () => {
          spectator.directive.isDisabled = isDisabled;

          expect(rendererSetAttributeSpy).toHaveBeenCalledTimes(2);
          expect(rendererSetAttributeSpy.calls.argsFor(1)).toEqual([
            spectator.element,
            'disabled',
            ''
          ]);
          expect(rendererRemoveAttributeSpy).not.toHaveBeenCalled();
        });

        describe('when the disabled class is undefined', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = undefined;
          });

          it('should not add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });

        describe('when the disabled class is null', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = null;
          });

          it('should not add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });

        describe('when the disabled class is an empty string', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = '';
          });

          it('should not add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });

        describe('when the disabled class is a string', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = 'dummy-disabled-class';
          });

          it('should add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).toHaveBeenCalledTimes(1);
            expect(rendererAddClassSpy).toHaveBeenCalledWith(spectator.element, 'dummy-disabled-class');
          });
        });
      });

      describe('when the given disabled state is true as a string', () => {
        beforeEach(() => {
          isDisabled = 'true';
        });

        it('should disallow the focus on the element', () => {
          spectator.directive.isDisabled = isDisabled;

          expect(rendererSetAttributeSpy).toHaveBeenCalledTimes(2);
          expect(rendererSetAttributeSpy.calls.argsFor(0)).toEqual([
            spectator.element,
            'tabindex',
            '-1'
          ]);
        });

        it('should disable the element', () => {
          spectator.directive.isDisabled = isDisabled;

          expect(rendererSetAttributeSpy).toHaveBeenCalledTimes(2);
          expect(rendererSetAttributeSpy.calls.argsFor(1)).toEqual([
            spectator.element,
            'disabled',
            ''
          ]);
          expect(rendererRemoveAttributeSpy).not.toHaveBeenCalled();
        });

        describe('when the disabled class is undefined', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = undefined;
          });

          it('should not add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });

        describe('when the disabled class is null', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = null;
          });

          it('should not add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });

        describe('when the disabled class is an empty string', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = '';
          });

          it('should not add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });

        describe('when the disabled class is a string', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = 'dummy-disabled-class';
          });

          it('should add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).toHaveBeenCalledTimes(1);
            expect(rendererAddClassSpy).toHaveBeenCalledWith(spectator.element, 'dummy-disabled-class');
          });
        });
      });

      describe('when the given disabled state is false as a string', () => {
        beforeEach(() => {
          isDisabled = 'false';
        });

        it('should allow the focus on the element', () => {
          spectator.directive.isDisabled = isDisabled;

          expect(rendererSetAttributeSpy).toHaveBeenCalledTimes(1);
          expect(rendererSetAttributeSpy.calls.argsFor(0)).toEqual([
            spectator.element,
            'tabindex',
            '0'
          ]);
        });

        it('should enable the element', () => {
          spectator.directive.isDisabled = isDisabled;

          expect(rendererRemoveAttributeSpy).toHaveBeenCalledTimes(1);
          expect(rendererRemoveAttributeSpy).toHaveBeenCalledWith(spectator.element, 'disabled',);
          expect(rendererSetAttributeSpy).toHaveBeenCalledTimes(1);
        });

        describe('when the disabled class is undefined', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = undefined;
          });

          it('should not add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });

        describe('when the disabled class is null', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = null;
          });

          it('should not add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });

        describe('when the disabled class is an empty string', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = '';
          });

          it('should not add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });

        describe('when the disabled class is a string', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = 'dummy-disabled-class';
          });

          it('should not add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });
      });

      describe('when the given disabled state is a string', () => {
        beforeEach(() => {
          isDisabled = 'dummy-is-disabled';
        });

        it('should disallow the focus on the element', () => {
          spectator.directive.isDisabled = isDisabled;

          expect(rendererSetAttributeSpy).toHaveBeenCalledTimes(2);
          expect(rendererSetAttributeSpy.calls.argsFor(0)).toEqual([
            spectator.element,
            'tabindex',
            '-1'
          ]);
        });

        it('should disable the element', () => {
          spectator.directive.isDisabled = isDisabled;

          expect(rendererSetAttributeSpy).toHaveBeenCalledTimes(2);
          expect(rendererSetAttributeSpy.calls.argsFor(1)).toEqual([
            spectator.element,
            'disabled',
            ''
          ]);
          expect(rendererRemoveAttributeSpy).not.toHaveBeenCalled();
        });

        describe('when the disabled class is undefined', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = undefined;
          });

          it('should not add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });

        describe('when the disabled class is null', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = null;
          });

          it('should not add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });

        describe('when the disabled class is an empty string', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = '';
          });

          it('should not add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });

        describe('when the disabled class is a string', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = 'dummy-disabled-class';
          });

          it('should add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).toHaveBeenCalledTimes(1);
            expect(rendererAddClassSpy).toHaveBeenCalledWith(spectator.element, 'dummy-disabled-class');
          });
        });
      });

      describe('when the given disabled state is true', () => {
        beforeEach(() => {
          isDisabled = true;
        });

        it('should disallow the focus on the element', () => {
          spectator.directive.isDisabled = isDisabled;

          expect(rendererSetAttributeSpy).toHaveBeenCalledTimes(2);
          expect(rendererSetAttributeSpy.calls.argsFor(0)).toEqual([
            spectator.element,
            'tabindex',
            '-1'
          ]);
        });

        it('should disable the element', () => {
          spectator.directive.isDisabled = isDisabled;

          expect(rendererSetAttributeSpy).toHaveBeenCalledTimes(2);
          expect(rendererSetAttributeSpy.calls.argsFor(1)).toEqual([
            spectator.element,
            'disabled',
            ''
          ]);
          expect(rendererRemoveAttributeSpy).not.toHaveBeenCalled();
        });

        describe('when the disabled class is undefined', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = undefined;
          });

          it('should not add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });

        describe('when the disabled class is null', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = null;
          });

          it('should not add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });

        describe('when the disabled class is an empty string', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = '';
          });

          it('should not add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });

        describe('when the disabled class is a string', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = 'dummy-disabled-class';
          });

          it('should add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).toHaveBeenCalledTimes(1);
            expect(rendererAddClassSpy).toHaveBeenCalledWith(spectator.element, 'dummy-disabled-class');
          });
        });
      });

      describe('when the given disabled state is false', () => {
        beforeEach(() => {
          isDisabled = false;
        });

        it('should allow the focus on the element', () => {
          spectator.directive.isDisabled = isDisabled;

          expect(rendererSetAttributeSpy).toHaveBeenCalledTimes(1);
          expect(rendererSetAttributeSpy.calls.argsFor(0)).toEqual([
            spectator.element,
            'tabindex',
            '0'
          ]);
        });

        it('should enable the element', () => {
          spectator.directive.isDisabled = isDisabled;

          expect(rendererRemoveAttributeSpy).toHaveBeenCalledTimes(1);
          expect(rendererRemoveAttributeSpy).toHaveBeenCalledWith(spectator.element, 'disabled',);
          expect(rendererSetAttributeSpy).toHaveBeenCalledTimes(1);
        });

        describe('when the disabled class is undefined', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = undefined;
          });

          it('should not add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });

        describe('when the disabled class is null', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = null;
          });

          it('should not add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });

        describe('when the disabled class is an empty string', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = '';
          });

          it('should not add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });

        describe('when the disabled class is a string', () => {
          beforeEach(() => {
            spectator.directive[ '_disabledClass' ] = 'dummy-disabled-class';
          });

          it('should not add the disabled class', () => {
            spectator.directive.isDisabled = isDisabled;

            expect(rendererAddClassSpy).not.toHaveBeenCalled();
          });
        });
      });
    });

    describe('ngAfterViewInit()', () => {
      let rendererSetAttributeSpy: jasmine.Spy;

      beforeEach(() => {
        rendererSetAttributeSpy = spyOn(renderer, 'setAttribute').and.stub();
      });

      describe('when the element is disabled', () => {
        beforeEach(() => {
          spectator.directive[ '_isDisabled' ] = true;
        });

        it('should disallow the focus on the element', () => {
          spectator.directive.ngAfterViewInit();

          expect(rendererSetAttributeSpy).toHaveBeenCalledTimes(1);
          expect(rendererSetAttributeSpy).toHaveBeenCalledWith(spectator.element, 'tabindex', '-1');
        });
      });

      describe('when the element enabled', () => {
        beforeEach(() => {
          spectator.directive[ '_isDisabled' ] = false;
        });

        it('should allow the focus on the element', () => {
          spectator.directive.ngAfterViewInit();

          expect(rendererSetAttributeSpy).toHaveBeenCalledTimes(1);
          expect(rendererSetAttributeSpy).toHaveBeenCalledWith(spectator.element, 'tabindex', '0');
        });
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
