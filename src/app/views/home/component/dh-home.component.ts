import {
  Component,
  ViewEncapsulation
} from '@angular/core';
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
}
