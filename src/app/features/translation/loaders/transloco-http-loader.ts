import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Translation,
  TranslocoLoader
} from '@ngneat/transloco';
import { Observable } from 'rxjs';
import cacheBusting from '../../../../assets/i18n-cache-busting.json';

@Injectable({
  providedIn: 'root'
})
export class TranslocoHttpLoader implements TranslocoLoader {

  public constructor(
    private httpClient: HttpClient
  ) {
  }

  // tslint:disable:rxjs-finnish
  public getTranslation(lang: string): Observable<Translation> {
    // tslint:enable:rxjs-finnish

    return this.httpClient.get<Translation>(`./assets/i18n/${lang}.json?v=${cacheBusting[ lang ]}`);
  }
}