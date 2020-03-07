import { DhButtonTypeEnum } from '@dh/components/buttons/button/enums/dh-button-type-enum';

describe('DhButtonTypeEnum', () => {
  it('should have a member "PRIMARY"', () => {
    expect(DhButtonTypeEnum.PRIMARY).toEqual('dh-button-type-primary');
  });
});
