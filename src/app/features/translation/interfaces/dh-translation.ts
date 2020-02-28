import { IDhTranslationParams } from '@dh/features/translation/interfaces/dh-translation-params';
import { DhOptional } from '@dh/types/dh-optional';

export interface IDhTranslation {
  key: string;
  params?: DhOptional<IDhTranslationParams>;
  scope?: DhOptional<string>;
}
