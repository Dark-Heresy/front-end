import { DhDisabledControlStateEnum } from '@dh/directives/disabled-control/enums/dh-disabled-control-state.enum';

describe('DhDisabledControlStateEnum', (): void => {
  it('should have a member "DISABLED"', (): void => {
    expect(DhDisabledControlStateEnum.DISABLED).toEqual('disable');
  });

  it('should have a member "ENABLED"', (): void => {
    expect(DhDisabledControlStateEnum.ENABLED).toEqual('enable');
  });
});
