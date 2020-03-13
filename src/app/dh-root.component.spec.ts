import { DhRootComponent } from '@dh/component';
import { DhRootRoutingModule } from '@dh/routing-module';
import {
  createComponentFactory,
  Spectator
} from '@ngneat/spectator';
import { cleanStylesFromDom } from '@test/test';

describe('DhRootComponent', (): void => {
  const createComponent = createComponentFactory({
    component: DhRootComponent,
    imports: [
      DhRootRoutingModule
    ]
  });
  let spectator: Spectator<DhRootComponent>;

  beforeEach((): void => {
    spectator = createComponent();
  });

  it('should create', (): void => {
    expect(spectator.component).toBeDefined();
  });

  afterAll((): void => {
    cleanStylesFromDom();
  });
});
