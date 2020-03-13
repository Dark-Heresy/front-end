import { DH_ENVIRONMENT } from '@dh/environments/dh-environment';
import { DhTranslocoHttpLoader } from '@dh/features/translation/loaders/dh-transloco-http-loader';
import {
  createHttpFactory,
  HttpMethod,
  SpectatorHttp,
  SpectatorHttpFactory
} from '@ngneat/spectator';
// tslint:disable-next-line:no-default-import
import cacheBusting from '../../../../assets/i18n-cache-busting.json';

describe('DhTranslocoHttpLoader', (): void => {
  const httpFactory: SpectatorHttpFactory<DhTranslocoHttpLoader> = createHttpFactory(DhTranslocoHttpLoader);
  let spectator: SpectatorHttp<DhTranslocoHttpLoader>;

  beforeEach((): void => {
    spectator = httpFactory();
  });

  describe('getTranslation()', (): void => {
    const lang = 'app/fr';

    it('should get the translation file from an XHR call based on the given lang', (): void => {
      spectator.service.getTranslation(lang).subscribe();

      spectator.expectOne(`${DH_ENVIRONMENT.baseUrl}/assets/i18n/${lang}.json?v=${cacheBusting[ lang ]}`, HttpMethod.GET);
    });
  });
});
