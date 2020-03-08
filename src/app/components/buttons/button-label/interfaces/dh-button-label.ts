import { IDhTranslation } from '@dh/features/translation/interfaces/dh-translation';
import { DhOptional } from '@dh/types/dh-optional';

export interface IDhButtonLabel {
  labelTranslation: DhOptional<IDhTranslation>;
}
