import {
  Component,
  ExistingProvider,
  forwardRef,
  ViewEncapsulation
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { DhOptional } from '@dh/types/dh-optional';
import _ from 'lodash';

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
  providers: [
    <ExistingProvider> {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DhInputTextComponent)
    }
  ],
  selector: 'dh-input-text',
  styleUrls: [
    './dh-input-text.component.scss'
  ],
  templateUrl: './dh-input-text.component.html'
})
export class DhInputTextComponent implements ControlValueAccessor {

  public value: DhOptional<string> = undefined;
  public onChange: DhOptional<(_value: DhOptional<string>) => void> = undefined;

  public writeValue(value: Readonly<DhOptional<string>>): void {
    this.value = value;
  }

  public registerOnChange(onChange: DhOptional<(_value: DhOptional<string>) => void>): void {
    this.onChange = onChange;
  }

  // tslint:disable-next-line:no-empty
  public registerOnTouched(): void {
  }

  public onTextChange(text: Readonly<DhOptional<string>>): void {
    if (_.isFunction(this.onChange)) {
      this.onChange(text);
    }
  }
}
