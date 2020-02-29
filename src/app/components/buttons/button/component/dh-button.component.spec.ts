import { DhButtonComponent } from '@dh/components/buttons/button/component/dh-button.component';
import { DhButtonSizeEnum } from '@dh/components/buttons/button/enums/dh-button-size.enum';
import { DhButtonTypeEnum } from '@dh/components/buttons/button/enums/dh-button-type-enum';
import { IDhButtonClickEvent } from '@dh/components/buttons/button/interfaces/dh-button-click-event';
import { DhDisabledTestingModule } from '@dh/directives/disabled/dh-disabled.testing.module';
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
    expect(spectator.query(componentRootClass)).not.toHaveAttribute('dh-button-disabled');
  });

  it('should have a tabindex at 0 by default', () => {
    expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '0');
  });

  describe('when the button is clicked', () => {
    let output: IDhButtonClickEvent;

    describe('when the button is disabled', () => {
      beforeEach(() => {
        spectator.setInput('isDisabled', true);
      });

      it('should not notify the click', () => {
        spectator.output('clickEvent').subscribe((result: any) => (output = result));

        spectator.click(spectator.query(componentRootClass) as Element);
        expect(output).toBeUndefined();
      });
    });

    describe('when the button is not disabled', () => {
      beforeEach(() => {
        spectator.setInput('isDisabled', false);
      });

      it('should notify the click', () => {
        spectator.output('clickEvent').subscribe((result: any) => (output = result));

        spectator.click(spectator.query(componentRootClass) as Element);
        expect(output).toBeDefined();
        expect(output.mouseEvent).toEqual(jasmine.any(MouseEvent));
      });
    });
  });

  describe('when the button is disabled', () => {
    beforeEach(() => {
      spectator.setInput('isDisabled', true);
    });

    it('should have a disabled attribute', () => {
      expect(spectator.query(componentRootClass)).toHaveAttribute('disabled');
    });

    it('should have a disabled class', () => {
      expect(spectator.query(componentRootClass)).toHaveClass('dh-button-disabled');
    });

    it('should have a negative tabindex', () => {
      expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '-1');
    });
  });

  describe('when the button is enabled', () => {
    beforeEach(() => {
      spectator.setInput('isDisabled', false);
    });

    it('should not have a disabled attribute', () => {
      expect(spectator.query(componentRootClass)).not.toHaveAttribute('disabled');
    });

    it('should not have a disabled class', () => {
      expect(spectator.query(componentRootClass)).not.toHaveClass('dh-button-disabled');
    });

    it('should have a positive tabindex', () => {
      expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '0');
    });
  });

  afterAll(() => {
    cleanStylesFromDom();
  });
});
