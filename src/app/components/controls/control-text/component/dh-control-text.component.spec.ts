import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup
} from '@angular/forms';
import { DhControlTextComponent } from '@dh/components/controls/control-text/component/dh-control-text.component';
import { DhControlTextTestingModule } from '@dh/components/controls/control-text/dh-control-text.testing.module';
import { DhOptional } from '@dh/types/dh-optional';
import {
  createHostFactory,
  SpectatorHost,
  SpectatorHostFactory
} from '@ngneat/spectator';
import { cleanStylesFromDom } from '@test/test';
import _ from 'lodash';

@Component({
  selector: 'dh-custom-host',
  template: ''
})
class DhCustomHostComponent {
  public formGroup = new FormGroup({
    text: new FormControl(null)
  });
}

/**
 * @todo add DOM coverage for:
 * - value change
 */
describe('DhControlTextComponent', (): void => {
  const componentRootClass = '.dh-control-text';
  const hostFactory: SpectatorHostFactory<DhControlTextComponent, DhCustomHostComponent> = createHostFactory({
    component: DhControlTextComponent,
    host: DhCustomHostComponent,
    imports: [
      DhControlTextTestingModule
    ]
  });
  let spectator: SpectatorHost<DhControlTextComponent, DhCustomHostComponent>;

  beforeEach((): void => {
    spectator = hostFactory('<form [formGroup]="formGroup"><dh-control-text formControlName="text"></dh-control-text></form>');
  });

  it('should create', (): void => {
    expect(spectator.component).toBeDefined();
  });

  it('should have an empty string as default value', (): void => {
    expect(spectator.query(componentRootClass)).toHaveValue('');
  });

  it('should have a type to text by default', (): void => {
    expect(spectator.query(componentRootClass)).toHaveAttribute('type', 'text');
  });

  it('should not have a disabled attribute by default', (): void => {
    expect(spectator.query(componentRootClass)).not.toHaveAttribute('disabled');
  });

  it('should not have a disabled class by default', (): void => {
    expect(spectator.query(componentRootClass)).not.toHaveClass('dh-control-text-disabled');
  });

  it('should have a tabindex at 0 by default', (): void => {
    expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '0');
  });

  describe('when the isDisabled input change', (): void => {
    describe('when the isDisabled new value is undefined', (): void => {
      beforeEach((): void => {
        spectator.setInput('isDisabled', undefined);
      });

      it('should have a disabled attribute', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('disabled');
      });

      it('should have a disabled class', (): void => {
        expect(spectator.query(componentRootClass)).toHaveClass('dh-control-text-disabled');
      });

      it('should have a tabindex at -1', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '-1');
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
        expect(spectator.query(componentRootClass)).toHaveClass('dh-control-text-disabled');
      });

      it('should have a tabindex at -1', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '-1');
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
        expect(spectator.query(componentRootClass)).toHaveClass('dh-control-text-disabled');
      });

      it('should have a tabindex at -1', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '-1');
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
        expect(spectator.query(componentRootClass)).toHaveClass('dh-control-text-disabled');
      });

      it('should have a tabindex at -1', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '-1');
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
        expect(spectator.query(componentRootClass)).not.toHaveClass('dh-control-text-disabled');
      });

      it('should have a tabindex at 0', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '0');
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
        expect(spectator.query(componentRootClass)).toHaveClass('dh-control-text-disabled');
      });

      it('should have a tabindex at -1', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '-1');
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
        expect(spectator.query(componentRootClass)).not.toHaveClass('dh-control-text-disabled');
      });

      it('should have a tabindex at 0', (): void => {
        expect(spectator.query(componentRootClass)).toHaveAttribute('tabindex', '0');
      });
    });
  });

  describe('when the form control value change', (): void => {
    beforeEach((): void => {
      spectator.hostComponent.formGroup.controls.text.setValue('dummy-text');
    });

    /**
     * @todo fix this test
     */
    xit('should update the input value with the form control value', (): void => {
      expect(spectator.query(componentRootClass)).toHaveValue('dummy-text');
    });
  });

  describe('writeValue()', (): void => {
    let value: DhOptional<string>;

    beforeEach((): void => {
      value = 'dummy-value';
    });

    it('should update the value with the given one', (): void => {
      spectator.component.writeValue(value);

      expect(spectator.component.value).toEqual('dummy-value');
    });
  });

  describe('registerOnChange()', (): void => {
    let onChange: DhOptional<(_value: DhOptional<string>) => void>;

    beforeEach((): void => {
      onChange = _.noop;
    });

    it('should update the onChange method with the given one', (): void => {
      spectator.component[ 'onChange' ] = null;

      spectator.component.registerOnChange(onChange);

      expect(spectator.component[ 'onChange' ]).toEqual(_.noop);
    });
  });

  describe('onTextChange()', (): void => {
    let text: DhOptional<string>;

    let onChangeSpy: jasmine.Spy;
    let isFunctionSpy: jasmine.Spy;

    beforeEach((): void => {
      text = 'dummy-text';
      spectator.component[ 'onChange' ] = _.noop;

      onChangeSpy = spyOn<any>(spectator.component, 'onChange').and.stub();
      isFunctionSpy = spyOn(_, 'isFunction').and.returnValue(false);
    });

    describe('when the onChange method is not a function', (): void => {
      beforeEach((): void => {
        isFunctionSpy.and.returnValue(false);
      });

      it('should not call the onChange method', (): void => {
        spectator.component.onTextChange(text);

        expect(onChangeSpy).not.toHaveBeenCalled();
      });
    });

    describe('when the onChange method is a function', (): void => {
      beforeEach((): void => {
        isFunctionSpy.and.returnValue(true);
      });

      it('should call the onChange method with the given text', (): void => {
        spectator.component.onTextChange(text);

        expect(onChangeSpy).toHaveBeenCalledTimes(1);
        expect(onChangeSpy).toHaveBeenCalledWith('dummy-text');
      });
    });
  });

  afterAll((): void => {
    cleanStylesFromDom();
  });
});
