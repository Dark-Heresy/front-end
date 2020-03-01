import {
  Component,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
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
  selector: 'dh-input-text',
  styleUrls: [
    './dh-input-text.component.scss'
  ],
  templateUrl: './dh-input-text.component.html'
})
export class DhInputTextComponent implements ControlValueAccessor {

  public value: any = undefined;
  public onChange: DhOptional<(_: any) => void> = undefined;

  public writeValue(value: any): void {
    this.value = value;
  }

  public registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  // tslint:disable-next-line:no-empty
  public registerOnTouched(): void {
  }

  public onTextChange(text: any): void {
    if (!_.isNil(this.onChange)) {
      this.onChange(text);
    }
  }
}
