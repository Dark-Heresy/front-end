import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2
} from '@angular/core';
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
    this._disabledClass = disabledClass;

    this.updateDisabledClass();
  }

  private _isDisabled = false;

  /**
   * @description
   * Default to false
   */
  @Input('dhDisabled')
  public get isDisabled(): boolean {
    return this._isDisabled;
  }

  public set isDisabled(isDisabled: Readonly<boolean>) {
    this._isDisabled = isDisabled;

    this.updateTabindexAttribute();
    this.updateDisabledAttribute();
    this.updateDisabledClass();
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

    this.renderer.setAttribute(this.elementRef, 'tabindex', tabindexValue);
  }

  private updateDisabledAttribute(): void {
    if (this.isDisabled) {
      this.renderer.setAttribute(this.elementRef, 'disabled', '');
    } else {
      this.renderer.removeAttribute(this.elementRef, 'disabled');
    }
  }

  private updateDisabledClass(): void {
    if (!_.isNil(this.disabledClass) && !_.isEmpty(this.disabledClass)) {
      if (this.isDisabled) {
        this.renderer.addClass(this.elementRef, this.disabledClass);
      } else {
        this.renderer.removeClass(this.elementRef, this.disabledClass);
      }
    }
  }
}
