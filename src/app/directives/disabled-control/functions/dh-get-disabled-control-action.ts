import { DhDisabledControlStateEnum } from '@dh/directives/disabled-control/enums/dh-disabled-control-state.enum';

export function dhGetDisabledControlAction(isDisabled: Readonly<boolean>): DhDisabledControlStateEnum {
  return isDisabled ? DhDisabledControlStateEnum.DISABLED : DhDisabledControlStateEnum.ENABLED;
}
