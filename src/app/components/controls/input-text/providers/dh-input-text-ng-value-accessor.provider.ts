import {
  ExistingProvider,
  forwardRef
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DhInputTextComponent } from '@dh/components/controls/input-text/component/dh-input-text.component';

export const DH_INPUT_TEXT_NG_VALUE_ACCESSOR_PROVIDER = <ExistingProvider> {
  multi: true,
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DhInputTextComponent)
};
