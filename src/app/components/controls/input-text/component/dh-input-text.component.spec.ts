import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup
} from '@angular/forms';
import { DhInputTextComponent } from '@dh/components/controls/input-text/component/dh-input-text.component';
import { DhInputTextTestingModule } from '@dh/components/controls/input-text/dh-input-text.testing.module';
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

describe('DhInputTextComponent', () => {
  const componentRootClass = '.dh-input-text';
  const createHost = createHostFactory({
    component: DhInputTextComponent,
    host: DhCustomHostComponent,
    imports: [
      DhInputTextTestingModule
    ]
  });
  let spectator: SpectatorHost<DhInputTextComponent, DhCustomHostComponent>;

  beforeEach(() => {
    spectator = createHost(`<form [formGroup]="formGroup"><dh-input-text formControlName="text"></dh-input-text></form>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });

  it('should have a default value in the input based on the form control given', () => {
    expect('input').toHaveValue('dummy-text');
  });

  it('should have a type to text by default', () => {
    expect(spectator.query(componentRootClass)).toHaveAttribute('type', 'text');
  });

  afterAll(() => {
    cleanStylesFromDom();
  });
});
