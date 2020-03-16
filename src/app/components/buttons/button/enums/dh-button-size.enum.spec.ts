import { DhButtonSizeEnum } from '@dh/components/buttons/button/enums/dh-button-size.enum';

describe('DhButtonSizeEnum', (): void => {
  it('should have a member "SMALL"', (): void => {
    expect(DhButtonSizeEnum.SMALL).toEqual('dh-button-size-small');
  });

  it('should have a member "MEDIUM"', (): void => {
    expect(DhButtonSizeEnum.MEDIUM).toEqual('dh-button-size-medium');
  });

  it('should have a member "LARGE"', (): void => {
    expect(DhButtonSizeEnum.LARGE).toEqual('dh-button-size-large');
  });
});
