import { DhButtonComponent } from '@dh/components/buttons/button/component/dh-button.component';
import { DhButtonSizeEnum } from '@dh/components/buttons/button/enums/dh-button-size.enum';
import { DhButtonTypeEnum } from '@dh/components/buttons/button/enums/dh-button-type-enum';
import { IDhButtonClickEvent } from '@dh/components/buttons/button/interfaces/dh-button-click-event';
import { DhDisabledModule } from '@dh/directives/disabled/dh-disabled.module';
import {
  createComponentFactory,
  Spectator
} from '@ngneat/spectator';
import { cleanStylesFromDom } from '@test/test';

describe('DhButtonComponent:TestDOM', () => {
  const componentRootClass = '.dh-button';
  const createComponent = createComponentFactory({
    component: DhButtonComponent,
    imports: [
      DhDisabledModule
    ]
  });
  let spectator: Spectator<DhButtonComponent>;

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should have a medium size by default', () => {
    expect(spectator.query(componentRootClass)).toHaveClass(DhButtonSizeEnum.MEDIUM);
  });

  it('should have a primary type by default', () => {
    expect(spectator.query(componentRootClass)).toHaveClass(DhButtonTypeEnum.PRIMARY);
  });

  it('should not be disabled by default', () => {
    expect(spectator.query(componentRootClass)).not.toHaveAttribute('disabled');
    expect(spectator.query(componentRootClass)).not.toHaveAttribute('dh-button-disabled');
  });

  it('should be focusable by default', () => {
    expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '0');
  });

  describe('when the button is clicked', () => {
    let output: IDhButtonClickEvent;

    describe('when the button is disabled', () => {
      beforeEach(() => {
        spectator.component.isDisabled = true;
      });

      it('should not notify the click', () => {
        spectator.output('clickEvent').subscribe((result: any) => (output = result));

        spectator.click(spectator.query(componentRootClass) as Element);
        expect(output).toBeUndefined();
      });
    });

    describe('when the button is not disabled', () => {
      beforeEach(() => {
        spectator.component.isDisabled = false;
      });

      it('should notify the click', () => {
        spectator.output('clickEvent').subscribe((result: any) => (output = result));

        spectator.click(spectator.query(componentRootClass) as Element);
        expect(output).toBeDefined();
        expect(output.mouseEvent).toEqual(jasmine.any(MouseEvent));
      });
    });
  });

  afterAll(() => {
    cleanStylesFromDom();
  });
});
