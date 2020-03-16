import { DhOptional } from '@dh/types/dh-optional';

export type DhPartial<T> = {
  [P in keyof T]: DhOptional<T[P]>;
};
