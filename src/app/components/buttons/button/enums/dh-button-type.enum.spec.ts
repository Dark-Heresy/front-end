import { DhButtonTypeEnum } from '@dh/components/buttons/button/enums/dh-button-type-enum';

describe('DhButtonTypeEnum', (): void => {
  it('should have a member "PRIMARY"', (): void => {
    expect(DhButtonTypeEnum.PRIMARY).toEqual('dh-button-type-primary');
  });

  it('should have a member "ERROR"', (): void => {
    expect(DhButtonTypeEnum.ERROR).toEqual('dh-button-type-error');
  });
});
