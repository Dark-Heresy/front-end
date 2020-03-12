import {
  Component,
  ExistingProvider,
  forwardRef,
  Input,
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
      useExisting: forwardRef(() => DhControlTextComponent)
    }
  ],
  selector: 'dh-control-text',
  styleUrls: [
    './dh-control-text.component.scss'
  ],
  templateUrl: './dh-control-text.component.html'
})
export class DhControlTextComponent implements ControlValueAccessor {

  public value: DhOptional<string> = undefined;
  private onChange: DhOptional<(_value: DhOptional<string>) => void> = undefined;

  /**
   * @description
   * Default to false
   *
   * Uses the conversion table of the [disabled directive]{@link DhDisabledDirective#isDisabled}
   * To allows more syntaxes when using this @Input
   */
  @Input('dhControlTextIsDisabled')
  public isDisabled: DhOptional<boolean | string> = false;

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
