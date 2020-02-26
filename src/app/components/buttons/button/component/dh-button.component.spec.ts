import { EventEmitter } from '@angular/core';
import { DhButtonComponent } from '@dh/components/buttons/button/component/dh-button.component';
import { DhButtonTestingModule } from '@dh/components/buttons/button/dh-button-testing.module';
import { DhButtonSizeEnum } from '@dh/components/buttons/button/enums/dh-button-size.enum';
import { DhButtonTypeEnum } from '@dh/components/buttons/button/enums/dh-button-type-enum';
import { IDhButtonClickEvent } from '@dh/components/buttons/button/interfaces/dh-button-click-event';
import {
  createComponentFactory,
  Spectator
} from '@ngneat/spectator';
import { cleanStylesFromDom } from '@test/test';

describe('DhButtonComponent', () => {
  const componentRootClass = '.dh-button-component';
  const createComponent = createComponentFactory({
    component: DhButtonComponent,
    imports: [
      DhButtonTestingModule
    ]
  });
  let spectator: Spectator<DhButtonComponent>;

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });

  it('should have a medium size', () => {
    expect(spectator.component.size).toEqual(DhButtonSizeEnum.MEDIUM);
  });

  it('should have a medium size class', () => {
    expect(spectator.query(componentRootClass)).toHaveClass(DhButtonSizeEnum.MEDIUM);
  });

  it('should have a primary type', () => {
    expect(spectator.component.type).toBe(DhButtonTypeEnum.PRIMARY);
  });

  it('should have a primary type class', () => {
    expect(spectator.query(componentRootClass)).toHaveClass(DhButtonTypeEnum.PRIMARY);
  });

  it('should be enabled', () => {
    expect(spectator.component.isDisabled).toBe(false);
  });

  it('should be able to notify when clicked', () => {
    expect(spectator.component.clickEvent).toEqual(new EventEmitter());
  });

  describe('onButtonClick()', () => {
    let mouseEvent: MouseEvent;

    let clickEventEmitSpy: jasmine.Spy;

    beforeEach(() => {
      mouseEvent = spectator.dispatchMouseEvent(document, 'click');

      clickEventEmitSpy = spyOn(spectator.component.clickEvent, 'emit').and.stub();
    });

    describe('when the button is disabled', () => {
      beforeEach(() => {
        spectator.component.isDisabled = true;
      });

      it('should not notify that the button has been clicked', () => {
        spectator.component.onButtonClick(mouseEvent);

        expect(clickEventEmitSpy).not.toHaveBeenCalled();
      });
    });

    describe('when the button is not disabled', () => {
      beforeEach(() => {
        spectator.component.isDisabled = false;
      });

      it('should notify that the button has been clicked', () => {
        spectator.component.onButtonClick(mouseEvent);

        expect(clickEventEmitSpy).toHaveBeenCalledTimes(1);
        expect(clickEventEmitSpy).toHaveBeenCalledWith(<IDhButtonClickEvent>{
          mouseEvent
        });
      });
    });
  });

  afterAll(() => {
    cleanStylesFromDom();
  });
});
