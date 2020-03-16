import {
  ChangeDetectionStrategy,
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
import { IDhQueryParams } from '../../../../interfaces/dh-query-params';

/**
 * @description
 * Could contains:
 * - a dh-button-label
 *
 * @example
 * ```html
 * <dh-button-router>
 *   <dh-button-label></dh-button-label>
 * </dh-button>
 * ```
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'dh-button-router',
  styleUrls: [
    './dh-button-router.component.scss'
  ],
  templateUrl: './dh-button-router.component.html'
})
export class DhButtonRouterComponent {

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
   * Default to an empty array
   *
   * Will be used by the [routerLink] directive
   */
  @Input('dhButtonRouterLink')
  public routerLink: any[] | string = [];

  /**
   * @description
   * Default to an empty array
   *
   * Will be used by the [queryParams] directive
   */
  @Input('dhButtonQueryParams')
  public queryParams: IDhQueryParams = [];

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
