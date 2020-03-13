import { DhDisabledControlStateEnum } from '@dh/directives/disabled-control/enums/dh-disabled-control-state.enum';
import { dhGetDisabledControlAction } from '@dh/directives/disabled-control/functions/dh-get-disabled-control-action';

describe('DhGetDisabledControlAction', (): void => {
  describe('dhGetDisabledControlAction()', (): void => {
    let isDisabled: boolean;

    describe('when the given disabled state is false', (): void => {
      beforeEach((): void => {
        isDisabled = false;
      });

      it('should return an enabled state', (): void => {
        const result = dhGetDisabledControlAction(isDisabled);

        expect(result).toEqual(DhDisabledControlStateEnum.ENABLED);
      });
    });

    describe('when the given disabled state is true', (): void => {
      beforeEach((): void => {
        isDisabled = true;
      });

      it('should return a disabled state', (): void => {
        const result = dhGetDisabledControlAction(isDisabled);

        expect(result).toEqual(DhDisabledControlStateEnum.DISABLED);
      });
    });
  });
});
