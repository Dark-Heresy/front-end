import { DhRootComponent } from '@dh/component';
import {
  createComponentFactory,
  Spectator
} from '@ngneat/spectator';
import { cleanStylesFromDom } from '@test/test';

describe('DhRootComponent', () => {
  const createComponent = createComponentFactory({
    component: DhRootComponent
  });
  let spectator: Spectator<DhRootComponent>;

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });

  afterAll(() => {
    cleanStylesFromDom();
  });
});
