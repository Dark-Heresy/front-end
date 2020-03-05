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

      expect(spectator.query(componentRootClass)).toHaveValue('dummy-value');
    });
  });

  describe('when the input value change', (): void => {
    beforeEach((): void => {
      spectator.component.writeValue('a');
      spectator.component.writeValue('ab');
    });

    it('should', (): void => {
      spectator.detectChanges();

      expect(spectator.hostComponent.formGroup.controls.text.value).toEqual('ab');
    });
  });

  afterAll((): void => {
    cleanStylesFromDom();
  });
});
