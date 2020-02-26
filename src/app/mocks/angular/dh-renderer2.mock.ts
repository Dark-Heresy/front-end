import { Renderer2 } from '@angular/core';
import _ from 'lodash';

// tslint:disable:no-empty
export class DhRenderer2Mock implements Renderer2 {

  public destroyNode: any;

  public get data(): { [ p: string ]: any } {
    return {};
  }

  public setAttribute(): void {
  }

  public removeAttribute(): void {
  }

  public addClass(): void {
  }

  public removeClass(): void {
  }

  public appendChild(): void {
  }

  public createComment(): void {
  }

  public createElement(): void {
  }

  public setValue(): void {
  }

  public setStyle(): void {
  }

  public setProperty(): void {
  }

  public selectRootElement(): void {
  }

  public removeStyle(): void {
  }

  public removeChild(): void {
  }

  public parentNode(): void {
  }

  public nextSibling(): void {
  }

  public listen(): () => void {
    return _.noop;
  }

  public insertBefore(): void {
  }

  public destroy(): void {
  }

  public createText(): void {
  }
}
