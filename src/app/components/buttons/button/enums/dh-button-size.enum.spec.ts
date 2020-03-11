import { DhButtonSizeEnum } from '@dh/components/buttons/button/enums/dh-button-size.enum';

describe('DhButtonSizeEnum', () => {
  it('should have a member "SMALL"', () => {
    expect(DhButtonSizeEnum.SMALL).toEqual('dh-button-size-small');
  });

  it('should have a member "MEDIUM"', () => {
    expect(DhButtonSizeEnum.MEDIUM).toEqual('dh-button-size-medium');
  });

  it('should have a member "LARGE"', () => {
    expect(DhButtonSizeEnum.LARGE).toEqual('dh-button-size-large');
  });
});
