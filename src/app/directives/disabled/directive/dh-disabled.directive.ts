import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2
} from '@angular/core';
import { dhIsDisabled } from '@dh/functions/states/dh-is-disabled';
import { DhOptional } from '@dh/types/dh-optional';
import _ from 'lodash';

@Directive({
  selector: '[dhDisabled]'
})
export class DhDisabledDirective implements AfterViewInit {
  private _disabledClass: DhOptional<string> = undefined;

  /**
   * @description
   * Default to undefined
   *
   * Custom class to add when:
   * - [disabled class]{@link DhDisabledDirective#disabledClass} is not empty
   * - [disabled state]{@link DhDisabledDirective#isDisabled} is true
   */
  @Input('dhDisabledClass')
  public get disabledClass(): DhOptional<string> {
    return this._disabledClass;
  }

  public set disabledClass(disabledClass: Readonly<DhOptional<string>>) {
    this.updateDisabledClass(disabledClass);

    this._disabledClass = disabledClass;
  }

  private _isDisabled: DhOptional<boolean | string> = false;

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
  public get isDisabled(): DhOptional<boolean | string> {
    return dhIsDisabled(this._isDisabled);
  }

  public set isDisabled(isDisabled: Readonly<DhOptional<boolean | string>>) {
    this._isDisabled = isDisabled;

    this.updateTabindexAttribute();
    this.updateDisabledAttribute();
    this.updateDisabledClass(this.disabledClass);
  }

  public constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
  }

  public ngAfterViewInit(): void {
    this.updateTabindexAttribute();
  }

  private updateTabindexAttribute(): void {
    const tabindexValue = this.isDisabled ? '-1' : '0';

    this.renderer.setAttribute(this.elementRef.nativeElement, 'tabindex', tabindexValue);
  }

  private updateDisabledAttribute(): void {
    if (this.isDisabled) {
      this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', '');
    } else {
      this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
    }
  }

  private updateDisabledClass(newDisabledClass: Readonly<DhOptional<string>>): void {
    this.removeOldDisabledClass();

    if (!_.isNil(newDisabledClass) && !_.isEmpty(newDisabledClass)) {
      if (this.isDisabled) {
        this.renderer.addClass(this.elementRef.nativeElement, newDisabledClass);
      }
    }
  }

  private removeOldDisabledClass(): void {
    if (!_.isNil(this.disabledClass) && !_.isEmpty(this.disabledClass)) {
      this.renderer.removeClass(this.elementRef.nativeElement, this.disabledClass);
    }
  }
}
