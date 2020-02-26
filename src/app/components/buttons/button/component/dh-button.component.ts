import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { DhButtonSizeEnum } from '@dh/components/buttons/button/enums/dh-button-size.enum';
import { DhButtonTypeEnum } from '@dh/components/buttons/button/enums/dh-button-type-enum';
import _ from 'lodash';

@Component({
  selector: 'dh-button',
  styleUrls: [
    './dh-button.component.scss'
  ],
  templateUrl: './dh-button.component.html'
})
export class DhButtonComponent {

  /**
   * @description
   * Default to [medium]{@link DhButtonSizeEnum#MEDIUM}
   */
  @Input('dhButtonSize')
  public size: DhButtonSizeEnum = DhButtonSizeEnum.MEDIUM;

  /**
   * @description
   * Default to false
   */
  @Input('dhButtonIsDisabled')
  public isDisabled = false;

  /**
   * @description
   * Default to [primary]{@link DhButtonTypeEnum#PRIMARY}
   */
  @Input('dhButtonType')
  public type: DhButtonTypeEnum = DhButtonTypeEnum.PRIMARY;

  /**
   * @description
   * Emit on button click when:
   * - [disabled state]{@link DhButtonComponent#isDisabled} is false
   */
  @Output('dhButtonOnClick')
  public clickEvent = new EventEmitter<MouseEvent>();

  public onButtonClick(mouseEvent: Readonly<MouseEvent>): void {
    if (!_.isNil(mouseEvent)) {
      mouseEvent.preventDefault();
    }

    if (!this.isDisabled) {
      this.clickEvent.emit(mouseEvent);
    }
  }
}
