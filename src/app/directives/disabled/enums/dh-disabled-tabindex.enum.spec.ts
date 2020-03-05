import { DhDisabledTabindexEnum } from '@dh/directives/disabled/enums/dh-disabled-tabindex.enum';

describe('DhDisabledTabindexEnum', () => {
  it('should have a member "DISABLED"', () => {
    expect(DhDisabledTabindexEnum.DISABLED).toEqual('-1');
  });

  it('should have a member "ENABLED"', () => {
    expect(DhDisabledTabindexEnum.ENABLED).toEqual('0');
  });
});
