import { DhButtonRouterComponent } from '@dh/components/buttons/button-router/component/dh-button-router.component';
import { DhButtonRouterTestingModule } from '@dh/components/buttons/button-router/dh-button-router.testing.module';
import { DhButtonSizeEnum } from '@dh/components/buttons/button/enums/dh-button-size.enum';
import { DhButtonTypeEnum } from '@dh/components/buttons/button/enums/dh-button-type-enum';
import { IDhButtonClickEvent } from '@dh/components/buttons/button/interfaces/dh-button-click-event';
import { DhOptional } from '@dh/types/dh-optional';
import {
  createComponentFactory,
  Spectator,
  SpectatorFactory
} from '@ngneat/spectator';
import { cleanStylesFromDom } from '@test/test';

describe('DhButtonRouterComponent', (): void => {
  const componentRootClass = '.dh-button';
  const componentFactory: SpectatorFactory<DhButtonRouterComponent> = createComponentFactory({
    component: DhButtonRouterComponent,
    imports: [
      DhButtonRouterTestingModule
    ]
  });
  let spectator: Spectator<DhButtonRouterComponent>;

  beforeEach((): void => {
    spectator = componentFactory();
  });

  it('should create', (): void => {
    expect(spectator.component).toBeDefined();
  });

  it('should have a medium size class by default', (): void => {
    expect(spectator.query(componentRootClass)).toHaveClass(DhButtonSizeEnum.MEDIUM);
  });

  it('should have a primary type class by default', (): void => {
    expect(spectator.query(componentRootClass)).toHaveClass(DhButtonTypeEnum.PRIMARY);
  });

  it('should not have a disabled attribute by default', (): void => {
    expect(spectator.query(componentRootClass)).not.toHaveAttribute('disabled');
  });

  it('should not have a disabled class by default', (): void => {
    expect(spectator.query(componentRootClass)).not.toHaveClass('dh-button-disabled');
  });

  it('should have a tabindex at 0 by default', (): void => {
    expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '0');
  });

  describe('when the size input change', (): void => {
    beforeEach((): void => {
      spectator.setInput('size', DhButtonSizeEnum.MEDIUM);
      spectator.setInput('size', DhButtonSizeEnum.SMALL);
    });

    it('should change the size class', (): void => {
      expect(spectator.query(componentRootClass)).not.toHaveClass(DhButtonSizeEnum.MEDIUM);
      expect(spectator.query(componentRootClass)).toHaveClass(DhButtonSizeEnum.SMALL);
    });
  });

  describe('when the type input change', (): void => {
    beforeEach((): void => {
      spectator.setInput('type', DhButtonTypeEnum.PRIMARY);
      spectator.setInput('type', DhButtonTypeEnum.ERROR);
    });

    it('should change the type class', (): void => {
      expect(spectator.query(componentRootClass)).not.toHaveClass(DhButtonTypeEnum.PRIMARY);
      expect(spectator.query(componentRootClass)).toHaveClass(DhButtonTypeEnum.ERROR);
    });
  });

  describe('when the isDisabled input change', (): void => {
    beforeEach((): void => {
      spectator.setInput('routerLink', 'dummy-page');
    });

    describe('when the isDisabled new value is undefined', (): void => {
      beforeEach((): void => {
        spectator.setInput('isDisabled', undefined);
      });

      it('should have a disabled attribute', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('disabled');
      });

      it('should have a disabled class', (): void => {
        expect(spectator.query(componentRootClass)).toHaveClass('dh-button-disabled');
      });

      it('should have a tabindex at -1', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '-1');
      });

      it('should have a page relative href', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('href', '/');
      });
    });

    describe('when the isDisabled new value is null', (): void => {
      beforeEach((): void => {
        spectator.setInput('isDisabled', null);
      });

      it('should have a disabled attribute', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('disabled');
      });

      it('should have a disabled class', (): void => {
        expect(spectator.query(componentRootClass)).toHaveClass('dh-button-disabled');
      });

      it('should have a tabindex at -1', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '-1');
      });

      it('should have a page relative href', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('href', '/');
      });
    });

    describe('when the isDisabled new value is an empty string', (): void => {
      beforeEach((): void => {
        spectator.setInput('isDisabled', '');
      });

      it('should have a disabled attribute', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('disabled');
      });

      it('should have a disabled class', (): void => {
        expect(spectator.query(componentRootClass)).toHaveClass('dh-button-disabled');
      });

      it('should have a tabindex at -1', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '-1');
      });

      it('should have a page relative href', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('href', '/');
      });
    });

    describe('when the isDisabled new value is true as a string', (): void => {
      beforeEach((): void => {
        spectator.setInput('isDisabled', 'true');
      });

      it('should have a disabled attribute', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('disabled');
      });

      it('should have a disabled class', (): void => {
        expect(spectator.query(componentRootClass)).toHaveClass('dh-button-disabled');
      });

      it('should have a tabindex at -1', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '-1');
      });

      it('should have a page relative href', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('href', '/');
      });
    });

    describe('when the isDisabled new value is false as a string', (): void => {
      beforeEach((): void => {
        spectator.setInput('isDisabled', 'false');
      });

      it('should not have a disabled attribute', (): void => {
        expect(spectator.query(componentRootClass)).not.toHaveAttribute('disabled');
      });

      it('should not have a disabled class', (): void => {
        expect(spectator.query(componentRootClass)).not.toHaveClass('dh-button-disabled');
      });

      it('should have a tabindex at 0', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '0');
      });

      it('should have a complete href', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('href', '/dummy-page');
      });
    });

    describe('when the isDisabled new value is true', (): void => {
      beforeEach((): void => {
        spectator.setInput('isDisabled', true);
      });

      it('should have a disabled attribute', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('disabled');
      });

      it('should have a disabled class', (): void => {
        expect(spectator.query(componentRootClass)).toHaveClass('dh-button-disabled');
      });

      it('should have a tabindex at -1', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '-1');
      });

      it('should have a page relative href', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('href', '/');
      });
    });

    describe('when the isDisabled new value is false', (): void => {
      beforeEach((): void => {
        spectator.setInput('isDisabled', false);
      });

      it('should not have a disabled attribute', (): void => {
        expect(spectator.query(componentRootClass)).not.toHaveAttribute('disabled');
      });

      it('should not have a disabled class', (): void => {
        expect(spectator.query(componentRootClass)).not.toHaveClass('dh-button-disabled');
      });

      it('should have a tabindex at 0', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '0');
      });

      it('should have a complete href', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('href', '/dummy-page');
      });
    });
  });

  describe('when the button is clicked', (): void => {
    let output: DhOptional<IDhButtonClickEvent>;

    beforeEach((): void => {
      output = undefined;
    });

    describe('when the isDisabled value is undefined', (): void => {
      beforeEach((): void => {
        spectator.setInput('isDisabled', undefined);
      });

      it('should not notify the click', (): void => {
        spectator.output('clickEvent').subscribe((result: any): void => (output = result));

        spectator.click(spectator.query(componentRootClass) as Element);

        expect(output).toBeUndefined();
      });
    });

    describe('when the isDisabled value is null', (): void => {
      beforeEach((): void => {
        spectator.setInput('isDisabled', null);
      });

      it('should not notify the click', (): void => {
        spectator.output('clickEvent').subscribe((result: any): void => (output = result));

        spectator.click(spectator.query(componentRootClass) as Element);

        expect(output).toBeUndefined();
      });
    });

    describe('when the isDisabled value is an empty string', (): void => {
      beforeEach((): void => {
        spectator.setInput('isDisabled', '');
      });

      it('should not notify the click', (): void => {
        spectator.output('clickEvent').subscribe((result: any): void => (output = result));

        spectator.click(spectator.query(componentRootClass) as Element);

        expect(output).toBeUndefined();
      });
    });

    describe('when the isDisabled value is true as string', (): void => {
      beforeEach((): void => {
        spectator.setInput('isDisabled', 'true');
      });

      it('should not notify the click', (): void => {
        spectator.output('clickEvent').subscribe((result: any): void => (output = result));

        spectator.click(spectator.query(componentRootClass) as Element);

        expect(output).toBeUndefined();
      });
    });

    describe('when the isDisabled value is false as string', (): void => {
      beforeEach((): void => {
        spectator.setInput('isDisabled', 'false');
      });

      it('should notify the click', (): void => {
        spectator.output('clickEvent').subscribe((result: any): void => (output = result));

        spectator.click(spectator.query(componentRootClass) as Element);

        expect(output).toBeDefined();
        expect(output?.mouseEvent).toEqual(jasmine.any(MouseEvent));
      });
    });

    describe('when the isDisabled value is true', (): void => {
      beforeEach((): void => {
        spectator.setInput('isDisabled', true);
      });

      it('should not notify the click', (): void => {
        spectator.output('clickEvent').subscribe((result: any): void => (output = result));

        spectator.click(spectator.query(componentRootClass) as Element);

        expect(output).toBeUndefined();
      });
    });

    describe('when the isDisabled value is false', (): void => {
      beforeEach((): void => {
        spectator.setInput('isDisabled', false);
      });

      it('should notify the click', (): void => {
        spectator.output('clickEvent').subscribe((result: any): void => (output = result));

        spectator.click(spectator.query(componentRootClass) as Element);

        expect(output).toBeDefined();
        expect(output?.mouseEvent).toEqual(jasmine.any(MouseEvent));
      });
    });
  });

  describe('when the routerLink new value change', (): void => {
    describe('when the button is disabled', (): void => {
      beforeEach((): void => {
        spectator.setInput('isDisabled', true);
      });

      describe('when the routerLink new value is an empty string', (): void => {
        beforeEach((): void => {
          spectator.setInput('routerLink', '');
        });

        describe('when the queryParams is an empty object', (): void => {
          beforeEach((): void => {
            spectator.setInput('queryParams', {});
          });

          it('should have a page relative href', (): void => {
            expect(spectator.query(componentRootClass)).toHaveAttribute('href', '/');
          });
        });

        describe('when the queryParams is an object', (): void => {
          beforeEach((): void => {
            spectator.setInput('queryParams', {
              param1: 'value1',
              param2: 'value2'
            });
          });

          it('should have a page relative href', (): void => {
            expect(spectator.query(componentRootClass)).toHaveAttribute('href', '/');
          });
        });
      });

      describe('when the routerLink new value is a string', (): void => {
        beforeEach((): void => {
          spectator.setInput('routerLink', 'dummy-route');
        });

        describe('when the queryParams is an empty object', (): void => {
          beforeEach((): void => {
            spectator.setInput('queryParams', {});
          });

          it('should have a page relative href', (): void => {
            expect(spectator.query(componentRootClass)).toHaveAttribute('href', '/');
          });
        });

        describe('when the queryParams is an object', (): void => {
          beforeEach((): void => {
            spectator.setInput('queryParams', {
              param1: 'value1',
              param2: 'value2'
            });
          });

          it('should have a page relative href', (): void => {
            expect(spectator.query(componentRootClass)).toHaveAttribute('href', '/');
          });
        });
      });

      describe('when the routerLink new value is an array of string', (): void => {
        beforeEach((): void => {
          spectator.setInput('routerLink', [
            'dummy-route',
            'dummy-sub-route'
          ]);
        });

        describe('when the queryParams is an empty object', (): void => {
          beforeEach((): void => {
            spectator.setInput('queryParams', {});
          });

          it('should have a page relative href', (): void => {
            expect(spectator.query(componentRootClass)).toHaveAttribute('href', '/');
          });
        });

        describe('when the queryParams is an object', (): void => {
          beforeEach((): void => {
            spectator.setInput('queryParams', {
              param1: 'value1',
              param2: 'value2'
            });
          });

          it('should have a page relative href', (): void => {
            expect(spectator.query(componentRootClass)).toHaveAttribute('href', '/');
          });
        });
      });
    });

    describe('when the button is enabled', (): void => {
      beforeEach((): void => {
        spectator.setInput('isDisabled', false);
      });

      describe('when the routerLink new value is an empty string', (): void => {
        beforeEach((): void => {
          spectator.setInput('routerLink', '');
        });

        describe('when the queryParams is an empty object', (): void => {
          beforeEach((): void => {
            spectator.setInput('queryParams', {});
          });

          it('should have a page relative href', (): void => {
            expect(spectator.query(componentRootClass)).toHaveAttribute('href', '/');
          });
        });

        describe('when the queryParams is an object', (): void => {
          beforeEach((): void => {
            spectator.setInput('queryParams', {
              param1: 'value1',
              param2: 'value2'
            });
          });

          it('should have a page relative href', (): void => {
            expect(spectator.query(componentRootClass)).toHaveAttribute('href', '/?param1=value1&param2=value2');
          });
        });
      });

      describe('when the routerLink new value is a string', (): void => {
        beforeEach((): void => {
          spectator.setInput('routerLink', 'dummy-route');
        });

        describe('when the queryParams is an empty object', (): void => {
          beforeEach((): void => {
            spectator.setInput('queryParams', {});
          });

          it('should have a complete href', (): void => {
            expect(spectator.query(componentRootClass)).toHaveAttribute('href', '/dummy-route');
          });
        });

        describe('when the queryParams is an object', (): void => {
          beforeEach((): void => {
            spectator.setInput('queryParams', {
              param1: 'value1',
              param2: 'value2'
            });
          });

          it('should have a page relative href', (): void => {
            expect(spectator.query(componentRootClass)).toHaveAttribute('href', '/dummy-route?param1=value1&param2=value2');
          });
        });
      });

      describe('when the routerLink new value is an array of string', (): void => {
        beforeEach((): void => {
          spectator.setInput('routerLink', [
            'dummy-route',
            'dummy-sub-route'
          ]);
        });

        describe('when the queryParams is an empty object', (): void => {
          beforeEach((): void => {
            spectator.setInput('queryParams', {});
          });

          it('should have a complete href', (): void => {
            expect(spectator.query(componentRootClass)).toHaveAttribute('href', '/dummy-route/dummy-sub-route');
          });
        });

        describe('when the queryParams is an object', (): void => {
          beforeEach((): void => {
            spectator.setInput('queryParams', {
              param1: 'value1',
              param2: 'value2'
            });
          });

          it('should have a complete href', (): void => {
            expect(spectator.query(componentRootClass)).toHaveAttribute('href', '/dummy-route/dummy-sub-route?param1=value1&param2=value2');
          });
        });
      });
    });
  });

  describe('when the queryParams new value change', (): void => {
    beforeEach((): void => {
      spectator.setInput('routerLink', 'dummy-route');
    });

    describe('when the button is disabled', (): void => {
      beforeEach((): void => {
        spectator.setInput('isDisabled', true);
      });

      describe('when the queryParams new value is an empty object', (): void => {
        beforeEach((): void => {
          spectator.setInput('queryParams', {});
        });

        it('should have a page relative href', (): void => {
          expect(spectator.query(componentRootClass)).toHaveAttribute('href', '/');
        });
      });

      describe('when the queryParams new value is an object', (): void => {
        beforeEach((): void => {
          spectator.setInput('queryParams', {
            param1: 'value1',
            param2: 'value2'
          });
        });

        it('should have a page relative href', (): void => {
          expect(spectator.query(componentRootClass)).toHaveAttribute('href', '/');
        });
      });
    });

    describe('when the button is enabled', (): void => {
      beforeEach((): void => {
        spectator.setInput('isDisabled', false);
      });

      describe('when the queryParams new value is an empty object', (): void => {
        beforeEach((): void => {
          spectator.setInput('queryParams', {});
        });

        it('should have a page relative href', (): void => {
          expect(spectator.query(componentRootClass)).toHaveAttribute('href', '/dummy-route');
        });
      });

      describe('when the queryParams new value is an object', (): void => {
        beforeEach((): void => {
          spectator.setInput('queryParams', {
            param1: 'value1',
            param2: 'value2'
          });
        });

        it('should have a complete href', (): void => {
          expect(spectator.query(componentRootClass)).toHaveAttribute('href', '/dummy-route?param1=value1&param2=value2');
        });
      });
    });
  });

  afterAll((): void => {
    cleanStylesFromDom();
  });
});
