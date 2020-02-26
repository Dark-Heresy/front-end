import { DhButtonSizeEnum } from '@dh/components/buttons/button/enums/dh-button-size.enum';

describe('DhButtonSizeEnum', () => {
  it('should have a member "MEDIUM"', () => {
    expect(DhButtonSizeEnum.MEDIUM).toEqual('dh-button-component-size-medium');
  });

  it('should have a member "LARGE"', () => {
    expect(DhButtonSizeEnum.LARGE).toEqual('dh-button-component-size-large');
  });
});
