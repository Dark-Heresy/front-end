import { DhDisabledControlStateEnum } from '@dh/directives/disabled-control/enums/dh-disabled-control-state.enum';

describe('DhDisabledControlStateEnum', () => {
  it('should have a member "DISABLED"', () => {
    expect(DhDisabledControlStateEnum.DISABLED).toEqual('disable');
  });

  it('should have a member "ENABLED"', () => {
    expect(DhDisabledControlStateEnum.ENABLED).toEqual('enable');
  });
});
