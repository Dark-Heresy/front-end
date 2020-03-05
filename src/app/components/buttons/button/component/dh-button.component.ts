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
import { dhIsDisabled } from '@dh/functions/states/dh-is-disabled';
import { DhOptional } from '@dh/types/dh-optional';

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
   * Emit on button click when:
   * - [disabled state]{@link DhButtonComponent#isDisabled} is false
   */
  @Output('dhButtonOnClick')
  public clickEvent = new EventEmitter<IDhButtonClickEvent>();

  public _isDisabled = false;

  /**
   * @description
   * Default to false
   *
   * Uses the conversion table of the [disabled directive]{@link DhDisabledDirective#isDisabled}
   * To allows more syntaxes when using this @Input
   */
  @Input('dhButtonIsDisabled')
  public set isDisabled(isDisabled: DhOptional<boolean | string>) {
    this._isDisabled = dhIsDisabled(isDisabled);
  }

  public onButtonClick(mouseEvent: Readonly<MouseEvent>): void {
    if (!this._isDisabled) {
      this.clickEvent.emit({
        mouseEvent
      });
    }
  }
}
