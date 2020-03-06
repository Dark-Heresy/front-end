import {
  Component,
  ViewEncapsulation
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { DhButtonSizeEnum } from '@dh/components/buttons/button/enums/dh-button-size.enum';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'dh-home',
  styleUrls: [
    './dh-home.component.scss'
  ],
  templateUrl: './dh-home.component.html'
})
export class DhHomeComponent {
  public buttonSizeSmall = DhButtonSizeEnum.SMALL;
  public formGroup = new FormGroup({
    name: new FormControl('name', [
      Validators.required
    ]),
    name1: new FormControl('name1', [
      Validators.required
    ])
  });

  public setName(): void {
    this.formGroup.controls.name.setValue('dummy-name');
  }
}
