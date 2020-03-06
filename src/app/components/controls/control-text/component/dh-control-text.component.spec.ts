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
  SpectatorHost
} from '@ngneat/spectator';
import { cleanStylesFromDom } from '@test/test';
import _ from 'lodash';

@Component({
  selector: 'dh-custom-host',
  template: ''
})
class DhCustomHostComponent {
  public formGroup = new FormGroup({
    text: new FormControl('dummy-text')
  });
}

describe('DhControlTextComponent', (): void => {
  const componentRootClass = '.dh-input-text';
  const createHost = createHostFactory({
    component: DhControlTextComponent,
    host: DhCustomHostComponent,
    imports: [
      DhControlTextTestingModule
    ]
  });
  let spectator: SpectatorHost<DhControlTextComponent, DhCustomHostComponent>;

  beforeEach((): void => {
    spectator = createHost('<form [formGroup]="formGroup"><dh-control-text formControlName="text"></dh-control-text></form>');
  });

  it('should create', (): void => {
    expect(spectator.component).toBeDefined();
  });

  it('should have a default value in the input based on the given form control', (): void => {
    expect(spectator.query(componentRootClass)).toHaveValue('dummy-text');
  });

  it('should have a type to text by default', (): void => {
    expect(spectator.query(componentRootClass)).toHaveAttribute('type', 'text');
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
