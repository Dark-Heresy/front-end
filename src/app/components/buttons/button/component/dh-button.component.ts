import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { DhButtonSizeEnum } from '@dh/components/buttons/button/enums/dh-button-size.enum';
import { DhButtonTypeEnum } from '@dh/components/buttons/button/enums/dh-button-type-enum';
import { IDhButtonClickEvent } from '@dh/components/buttons/button/interfaces/dh-button-click-event';

/**
 * @description
 * Could contains:
 * - a dh-button-label
 *
 * @example
 * ```html
 * <dh-button>
 *   <dh-button-label></dh-button-label>
 * </dh-button>
 * ```
 */
@Component({
  encapsulation: ViewEncapsulation.None,
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
   * Default to [primary]{@link DhButtonTypeEnum#PRIMARY}
   */
  @Input('dhButtonType')
  public type: DhButtonTypeEnum = DhButtonTypeEnum.PRIMARY;

  /**
   * @description
   * Default to false
   */
  @Input('dhButtonIsDisabled')
  public isDisabled = false;

  /**
   * @description
   * Emit on button click when:
   * - [disabled state]{@link DhButtonComponent#isDisabled} is false
   */
  @Output('dhButtonOnClick')
  public clickEvent = new EventEmitter<IDhButtonClickEvent>();

  public onButtonClick(mouseEvent: Readonly<MouseEvent>): void {
    if (!this.isDisabled) {
      this.clickEvent.emit({
        mouseEvent
      });
    }
  }
}
