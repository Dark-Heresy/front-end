import {
  Directive,
  Input
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { DhDisabledControlStateEnum } from '@dh/directives/disabled-control/enums/dh-disabled-control-state.enum';
import { dhGetDisabledControlAction } from '@dh/directives/disabled-control/functions/dh-get-disabled-control-action';
import { dhIsDisabled } from '@dh/functions/states/dh-is-disabled';
import { DhOptional } from '@dh/types/dh-optional';
import _ from 'lodash';

@Directive({
  selector: 'input[dhDisabledControl]'
})
export class DhDisabledControlDirective {
  public _disabledControl = false;

  @Input('dhDisabledControl')
  public set disabledControl(isDisabled: Readonly<DhOptional<boolean | string>>) {
    this._disabledControl = dhIsDisabled(isDisabled);

    this.setControlState();
  }

  public constructor(
    private readonly ngControl: NgControl
  ) {
  }

  private setControlState(): void {
    const action: DhDisabledControlStateEnum = dhGetDisabledControlAction(this._disabledControl);

    if (!_.isNil(this.ngControl.control)) {
      if (action === DhDisabledControlStateEnum.ENABLED) {
        this.ngControl.control.enable();
      } else {
        this.ngControl.control.disable();
      }
    }
  }
}
