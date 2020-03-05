import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2
} from '@angular/core';
import { DhDisabledTabindexEnum } from '@dh/directives/disabled/enums/dh-disabled-tabindex.enum';
import { dhIsDisabled } from '@dh/functions/states/dh-is-disabled';
import { DhOptional } from '@dh/types/dh-optional';
import _ from 'lodash';

@Directive({
  selector: '[dhDisabled]'
})
export class DhDisabledDirective implements AfterViewInit {
  public _isDisabled = false;

  /**
   * @description
   * Default to false
   *
   * Conversion table:
   * undefined        = true
   * null             = true
   * true (string)    = true
   * false (string)   = false
   * any other string = true
   *
   * @example
   * <div dhDisabled></div>          = disabled
   * <div dhDisabled="true"></div>   = disabled
   * <div dhDisabled="[true]"></div> = disabled
   *
   * <div dhDisabled="false"></div>   = not disabled
   * <div dhDisabled="[false]"></div> = not disabled
   */
  @Input('dhDisabled')
  public set isDisabled(isDisabled: Readonly<DhOptional<boolean | string>>) {
    this._isDisabled = dhIsDisabled(isDisabled);

    this.updateTabindexAttribute();
    this.updateDisabledAttribute();
    this.updateDisabledClass(this._disabledClass);
  }

  public _disabledClass: DhOptional<string> = undefined;

  /**
   * @description
   * Default to undefined
   *
   * Custom class to add when:
   * - [disabled class]{@link DhDisabledDirective#disabledClass} is not empty
   * - [disabled state]{@link DhDisabledDirective#isDisabled} is true
   */
  @Input('dhDisabledClass')
  public set disabledClass(disabledClass: Readonly<DhOptional<string>>) {
    this.updateDisabledClass(disabledClass);

    this._disabledClass = disabledClass;
  }

  public constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) {
  }

  public ngAfterViewInit(): void {
    this.updateTabindexAttribute();
  }

  private updateTabindexAttribute(): void {
    const tabindexValue: DhDisabledTabindexEnum = this._isDisabled ? DhDisabledTabindexEnum.DISABLED : DhDisabledTabindexEnum.ENABLED;

    this.renderer.setAttribute(this.elementRef.nativeElement, 'tabindex', tabindexValue);
  }

  private updateDisabledAttribute(): void {
    if (this._isDisabled) {
      this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', '');
    } else {
      this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
    }
  }

  private updateDisabledClass(newDisabledClass: Readonly<DhOptional<string>>): void {
    this.removeOldDisabledClass();

    if (!_.isNil(newDisabledClass) && !_.isEmpty(newDisabledClass)) {
      if (this._isDisabled) {
        this.renderer.addClass(this.elementRef.nativeElement, newDisabledClass);
      }
    }
  }

  private removeOldDisabledClass(): void {
    if (!_.isNil(this._disabledClass) && !_.isEmpty(this._disabledClass)) {
      this.renderer.removeClass(this.elementRef.nativeElement, this._disabledClass);
    }
  }
}
