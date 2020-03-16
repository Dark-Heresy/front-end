import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DH_ENVIRONMENT } from '@dh/environments/dh-environment';
import {
  Translation,
  TranslocoLoader
} from '@ngneat/transloco';
import { Observable } from 'rxjs';
// tslint:disable-next-line:no-default-import
import cacheBusting from '../../../../assets/i18n-cache-busting.json';

@Injectable({
  providedIn: 'root'
})
export class DhTranslocoHttpLoader implements TranslocoLoader {

  public constructor(
    private readonly httpClient: HttpClient
  ) {
  }

  // tslint:disable:rxjs-finnish
  public getTranslation(lang: Readonly<string>): Observable<Translation> {
    // tslint:enable:rxjs-finnish

    // @ts-ignore
    return this.httpClient.get<Translation>(`${DH_ENVIRONMENT.baseUrl}/assets/i18n/${lang}.json?v=${cacheBusting[ lang ]}`);
  }
}
