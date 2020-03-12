import { DhOptional } from '@dh/types/dh-optional';
import _ from 'lodash';

/**
 * @description
 * This "utils" function should be used to convert @Inputs with multiple types to boolean
 *
 * When using @Inputs with shortcuts syntaxes,
 * This is better to allow passing multiple attributes syntaxes
 * Some of them are better for performances and to apprehend the code
 *
 * @example
 * This is useful for syntaxes like:
 * <dh-x xIsDisabled></dh-x>
 * <dh-x xIsDisabled="true"></dh-x>
 * <dh-x xIsDisabled="false"></dh-x>
 * <dh-x [xIsDisabled]="true"></dh-x>
 * <dh-x [xIsDisabled]="false"></dh-x>
 */
export function dhIsDisabled(isDisabled: Readonly<DhOptional<boolean | string>>): boolean {
  if (_.isBoolean(isDisabled)) {
    return isDisabled;
  } else if (_.isString(isDisabled)) {
    return isDisabled !== 'false';
  }

  return true;
}
