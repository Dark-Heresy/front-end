import { IDhTranslation } from '@dh/features/translation/interfaces/dh-translation';
import { DhOptional } from '@dh/types/dh-optional';
import { DhPartial } from '@dh/types/dh-partial';
import _ from 'lodash';

export function dhGetFakeTranslation(translation?: Readonly<DhOptional<DhPartial<IDhTranslation>>>): IDhTranslation {
  return _.merge(
    {
      key: 'dummy-key',
      scope: 'dummy-scope'
    },
    translation
  );
}
