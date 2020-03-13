import { dhIsDisabled } from '@dh/functions/states/dh-is-disabled';
import { DhOptional } from '@dh/types/dh-optional';

describe('DhIsDisabled', (): void => {
  describe('dhIsDisabled()', (): void => {
    let isDisabled: DhOptional<boolean | string>;

    describe('when the given disabled state is undefined', (): void => {
      beforeEach((): void => {
        isDisabled = undefined;
      });

      it('should return true', (): void => {
        const result = dhIsDisabled(isDisabled);

        expect(result).toEqual(true);
      });
    });

    describe('when the given disabled state is null', (): void => {
      beforeEach((): void => {
        isDisabled = null;
      });

      it('should return true', (): void => {
        const result = dhIsDisabled(isDisabled);

        expect(result).toEqual(true);
      });
    });

    describe('when the given disabled state is an empty string', (): void => {
      beforeEach((): void => {
        isDisabled = '';
      });

      it('should return true', (): void => {
        const result = dhIsDisabled(isDisabled);

        expect(result).toEqual(true);
      });
    });

    describe('when the given disabled state is true as a string', (): void => {
      beforeEach((): void => {
        isDisabled = 'true';
      });

      it('should return true', (): void => {
        const result = dhIsDisabled(isDisabled);

        expect(result).toEqual(true);
      });
    });

    describe('when the given disabled state is false as a string', (): void => {
      beforeEach((): void => {
        isDisabled = 'false';
      });

      it('should return false', (): void => {
        const result = dhIsDisabled(isDisabled);

        expect(result).toEqual(false);
      });
    });

    describe('when the given disabled state is true', (): void => {
      beforeEach((): void => {
        isDisabled = true;
      });

      it('should return true', (): void => {
        const result = dhIsDisabled(isDisabled);

        expect(result).toEqual(true);
      });
    });

    describe('when the given disabled state is false', (): void => {
      beforeEach((): void => {
        isDisabled = false;
      });

      it('should return false', (): void => {
        const result = dhIsDisabled(isDisabled);

        expect(result).toEqual(false);
      });
    });
  });
});
