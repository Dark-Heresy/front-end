import { dhIsDisabled } from '@dh/functions/states/dh-is-disabled';
import { DhOptional } from '@dh/types/dh-optional';

describe('DhIsDisabled', () => {
  describe('dhIsDisabled()', () => {
    let isDisabled: DhOptional<boolean | string>;

    describe('when the given disabled state is undefined', () => {
      beforeEach(() => {
        isDisabled = undefined;
      });

      it('should return true', () => {
        const result = dhIsDisabled(isDisabled);

        expect(result).toEqual(true);
      });
    });

    describe('when the given disabled state is null', () => {
      beforeEach(() => {
        isDisabled = null;
      });

      it('should return true', () => {
        const result = dhIsDisabled(isDisabled);

        expect(result).toEqual(true);
      });
    });

    describe('when the given disabled state is an empty string', () => {
      beforeEach(() => {
        isDisabled = '';
      });

      it('should return true', () => {
        const result = dhIsDisabled(isDisabled);

        expect(result).toEqual(true);
      });
    });

    describe('when the given disabled state is true as a string', () => {
      beforeEach(() => {
        isDisabled = 'true';
      });

      it('should return true', () => {
        const result = dhIsDisabled(isDisabled);

        expect(result).toEqual(true);
      });
    });

    describe('when the given disabled state is false as a string', () => {
      beforeEach(() => {
        isDisabled = 'false';
      });

      it('should return false', () => {
        const result = dhIsDisabled(isDisabled);

        expect(result).toEqual(false);
      });
    });

    describe('when the given disabled state is true', () => {
      beforeEach(() => {
        isDisabled = true;
      });

      it('should return true', () => {
        const result = dhIsDisabled(isDisabled);

        expect(result).toEqual(true);
      });
    });

    describe('when the given disabled state is false', () => {
      beforeEach(() => {
        isDisabled = false;
      });

      it('should return false', () => {
        const result = dhIsDisabled(isDisabled);

        expect(result).toEqual(false);
      });
    });
  });
});
