import { Meta } from '@angular/platform-browser';
import { TranslocoService } from '@ngneat/transloco';

export function dhTranslationInitializer(
  translocoService: Readonly<TranslocoService>,
  meta: Readonly<Meta>
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
