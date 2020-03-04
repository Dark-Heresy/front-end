import {
  Directive,
  Input
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { DhDisabledControlStateEnum } from '@dh/directives/disabled-control/enums/dh-disabled-control-state.enum';
import { DhOptional } from '@dh/types/dh-optional';
import _ from 'lodash';

@Directive({
  selector: '[dhDisabledControl]'
})
export class DhDisabledControlDirective {

  @Input('dhDisabledControl')
  public set disabledControl(isDisabled: Readonly<DhOptional<boolean | string>>) {
    const action: DhDisabledControlStateEnum = this.getControlAction(isDisabled);

    if (!_.isNil(this.ngControl.control)) {
      if (action === DhDisabledControlStateEnum.ENABLED) {
        this.ngControl.control.enable();
      } else {
        this.ngControl.control.disable();
      }
    }
  }

  public constructor(
    private ngControl: NgControl
  ) {
  }

  private getControlAction(isDisabled: Readonly<DhOptional<boolean | string>>): DhDisabledControlStateEnum {
    return _.isEqual(isDisabled, true) ? DhDisabledControlStateEnum.DISABLED : DhDisabledControlStateEnum.ENABLED;
  }
}
