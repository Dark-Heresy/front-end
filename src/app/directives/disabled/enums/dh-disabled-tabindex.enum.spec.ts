import { DhDisabledTabindexEnum } from '@dh/directives/disabled/enums/dh-disabled-tabindex.enum';

describe('DhDisabledTabindexEnum', (): void => {
  it('should have a member "DISABLED"', (): void => {
    expect(DhDisabledTabindexEnum.DISABLED).toEqual('-1');
  });

  it('should have a member "ENABLED"', (): void => {
    expect(DhDisabledTabindexEnum.ENABLED).toEqual('0');
  });
});
