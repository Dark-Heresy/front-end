import { Meta } from '@angular/platform-browser';
import { TranslocoService } from '@ngneat/transloco';

export function translationInitializer(
  translocoService: TranslocoService,
  meta: Meta
): () => Promise<void> {
  return (): Promise<void> => {
    const lang = 'fr';
    const langWithTerritory = 'fr_FR';

    translocoService.setDefaultLang(lang);
    translocoService.setActiveLang(lang);
    meta.updateTag({
      content: langWithTerritory,
      property: 'og:locale'
    });

    return Promise.resolve();
  };
}
