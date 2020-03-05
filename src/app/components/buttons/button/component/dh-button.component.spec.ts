import { DhButtonComponent } from '@dh/components/buttons/button/component/dh-button.component';
import { DhButtonSizeEnum } from '@dh/components/buttons/button/enums/dh-button-size.enum';
import { DhButtonTypeEnum } from '@dh/components/buttons/button/enums/dh-button-type-enum';
import { IDhButtonClickEvent } from '@dh/components/buttons/button/interfaces/dh-button-click-event';
import { DhDisabledTestingModule } from '@dh/directives/disabled/dh-disabled.testing.module';
import { DhOptional } from '@dh/types/dh-optional';
import {
  createComponentFactory,
  Spectator
} from '@ngneat/spectator';
import { cleanStylesFromDom } from '@test/test';

describe('DhButtonComponent', () => {
  const componentRootClass = '.dh-button';
  const createComponent = createComponentFactory({
    component: DhButtonComponent,
    imports: [
      DhDisabledTestingModule
    ]
  });
  let spectator: Spectator<DhButtonComponent>;

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });

  it('should have a medium size class by default', () => {
    expect(spectator.query(componentRootClass)).toHaveClass(DhButtonSizeEnum.MEDIUM);
  });

  it('should have a primary type class by default', () => {
    expect(spectator.query(componentRootClass)).toHaveClass(DhButtonTypeEnum.PRIMARY);
  });

  it('should not have a disabled attribute by default', () => {
    expect(spectator.query(componentRootClass)).not.toHaveAttribute('disabled');
  });

  it('should not have a disabled class by default', () => {
    expect(spectator.query(componentRootClass)).not.toHaveClass('dh-button-disabled');
  });

  it('should have a tabindex at 0 by default', () => {
    expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '0');
  });

  describe('when the size input change', () => {
    beforeEach(() => {
      spectator.setInput('size', DhButtonSizeEnum.MEDIUM);
      spectator.setInput('size', DhButtonSizeEnum.SMALL);
    });

    it('should change the size class', () => {
      expect(spectator.query(componentRootClass)).not.toHaveClass(DhButtonSizeEnum.MEDIUM);
      expect(spectator.query(componentRootClass)).toHaveClass(DhButtonSizeEnum.SMALL);
    });
  });

  describe('when the type input change', () => {
    beforeEach(() => {
      spectator.setInput('type', DhButtonTypeEnum.PRIMARY);
      spectator.setInput('type', DhButtonTypeEnum.ERROR);
    });

    it('should change the type class', () => {
      expect(spectator.query(componentRootClass)).not.toHaveClass(DhButtonTypeEnum.PRIMARY);
      expect(spectator.query(componentRootClass)).toHaveClass(DhButtonTypeEnum.ERROR);
    });
  });

  describe('when the isDisabled input change', () => {
    describe('when the isDisabled new value is undefined', () => {
      beforeEach(() => {
        spectator.setInput('isDisabled', undefined);
      });

      it('should have a disabled attribute', () => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('disabled');
      });

      it('should have a disabled class', () => {
        expect(spectator.query(componentRootClass)).toHaveClass('dh-button-disabled');
      });

      it('should have a tabindex at -1', () => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '-1');
      });
    });

    describe('when the isDisabled new value is null', () => {
      beforeEach(() => {
        spectator.setInput('isDisabled', null);
      });

      it('should have a disabled attribute', () => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('disabled');
      });

      it('should have a disabled class', () => {
        expect(spectator.query(componentRootClass)).toHaveClass('dh-button-disabled');
      });

      it('should have a tabindex at -1', () => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '-1');
      });
    });

    describe('when the isDisabled new value is an empty string', () => {
      beforeEach(() => {
        spectator.setInput('isDisabled', '');
      });

      it('should have a disabled attribute', () => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('disabled');
      });

      it('should have a disabled class', () => {
        expect(spectator.query(componentRootClass)).toHaveClass('dh-button-disabled');
      });

      it('should have a tabindex at -1', () => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '-1');
      });
    });

    describe('when the isDisabled new value is true as a string', () => {
      beforeEach(() => {
        spectator.setInput('isDisabled', 'true');
      });

      it('should have a disabled attribute', () => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('disabled');
      });

      it('should have a disabled class', () => {
        expect(spectator.query(componentRootClass)).toHaveClass('dh-button-disabled');
      });

      it('should have a tabindex at -1', () => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '-1');
      });
    });

    describe('when the isDisabled new value is false as a string', () => {
      beforeEach(() => {
        spectator.setInput('isDisabled', 'false');
      });

      it('should not have a disabled attribute', () => {
        expect(spectator.query(componentRootClass)).not.toHaveAttribute('disabled');
      });

      it('should not have a disabled class', () => {
        expect(spectator.query(componentRootClass)).not.toHaveClass('dh-button-disabled');
      });

      it('should have a tabindex at 0', () => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '0');
      });
    });

    describe('when the isDisabled new value is true', () => {
      beforeEach(() => {
        spectator.setInput('isDisabled', true);
      });

      it('should have a disabled attribute', () => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('disabled');
      });

      it('should have a disabled class', () => {
        expect(spectator.query(componentRootClass)).toHaveClass('dh-button-disabled');
      });

      it('should have a tabindex at -1', () => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '-1');
      });
    });

    describe('when the isDisabled new value is false', () => {
      beforeEach(() => {
        spectator.setInput('isDisabled', false);
      });

      it('should not have a disabled attribute', () => {
        expect(spectator.query(componentRootClass)).not.toHaveAttribute('disabled');
      });

      it('should not have a disabled class', () => {
        expect(spectator.query(componentRootClass)).not.toHaveClass('dh-button-disabled');
      });

      it('should have a tabindex at 0', () => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '0');
      });
    });
  });

  describe('when the button is clicked', () => {
    let output: DhOptional<IDhButtonClickEvent>;

    beforeEach(() => {
      output = undefined;
    });

    describe('when the isDisabled value is undefined', () => {
      beforeEach(() => {
        spectator.setInput('isDisabled', undefined);
      });

      it('should not notify the click', () => {
        spectator.output('clickEvent').subscribe((result: any) => (output = result));

        spectator.click(spectator.query(componentRootClass) as Element);

        expect(output).toBeUndefined();
      });
    });

    describe('when the isDisabled value is null', () => {
      beforeEach(() => {
        spectator.setInput('isDisabled', null);
      });

      it('should not notify the click', () => {
        spectator.output('clickEvent').subscribe((result: any) => (output = result));

        spectator.click(spectator.query(componentRootClass) as Element);

        expect(output).toBeUndefined();
      });
    });

    describe('when the isDisabled value is an empty string', () => {
      beforeEach(() => {
        spectator.setInput('isDisabled', '');
      });

      it('should not notify the click', () => {
        spectator.output('clickEvent').subscribe((result: any) => (output = result));

        spectator.click(spectator.query(componentRootClass) as Element);

        expect(output).toBeUndefined();
      });
    });

    describe('when the isDisabled value is true as string', () => {
      beforeEach(() => {
        spectator.setInput('isDisabled', 'true');
      });

      it('should not notify the click', () => {
        spectator.output('clickEvent').subscribe((result: any) => (output = result));

        spectator.click(spectator.query(componentRootClass) as Element);

        expect(output).toBeUndefined();
      });
    });

    describe('when the isDisabled value is false as string', () => {
      beforeEach(() => {
        spectator.setInput('isDisabled', 'false');
      });

      it('should notify the click', () => {
        spectator.output('clickEvent').subscribe((result: any) => (output = result));

        spectator.click(spectator.query(componentRootClass) as Element);

        expect(output).toBeDefined();
        expect(output?.mouseEvent).toEqual(jasmine.any(MouseEvent));
      });
    });

    describe('when the isDisabled value is true', () => {
      beforeEach(() => {
        spectator.setInput('isDisabled', true);
      });

      it('should not notify the click', () => {
        spectator.output('clickEvent').subscribe((result: any) => (output = result));

        spectator.click(spectator.query(componentRootClass) as Element);

        expect(output).toBeUndefined();
      });
    });

    describe('when the isDisabled value is false', () => {
      beforeEach(() => {
        spectator.setInput('isDisabled', false);
      });

      it('should notify the click', () => {
        spectator.output('clickEvent').subscribe((result: any) => (output = result));

        spectator.click(spectator.query(componentRootClass) as Element);

        expect(output).toBeDefined();
        expect(output?.mouseEvent).toEqual(jasmine.any(MouseEvent));
      });
    });
  });

  afterAll(() => {
    cleanStylesFromDom();
  });
});
