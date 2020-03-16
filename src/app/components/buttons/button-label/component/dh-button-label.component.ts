import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation
} from '@angular/core';
import { IDhTranslation } from '@dh/features/translation/interfaces/dh-translation';
import { DhOptional } from '@dh/types/dh-optional';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'dh-button-label',
  styleUrls: [
    './dh-button-label.component.scss'
  ],
  templateUrl: './dh-button-label.component.html'
})
export class DhButtonLabelComponent {

  /**
   * @description
   * Default to undefined
   */
  @Input('dhButtonLabelTranslation')
  public labelTranslation: DhOptional<IDhTranslation> = undefined;
}
