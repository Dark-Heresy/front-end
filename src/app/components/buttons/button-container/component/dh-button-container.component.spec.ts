import { DhButtonContainerComponent } from '@dh/components/buttons/button-container/component/dh-button-container.component';
import { DhButtonContainerTestingModule } from '@dh/components/buttons/button-container/dh-button-container.testing.module';
import {
  createComponentFactory,
  Spectator,
  SpectatorFactory
} from '@ngneat/spectator';
import { cleanStylesFromDom } from '@test/test';

describe('DhButtonContainerComponent', (): void => {
  const componentFactory: SpectatorFactory<DhButtonContainerComponent> = createComponentFactory({
    component: DhButtonContainerComponent,
    imports: [
      DhButtonContainerTestingModule
    ]
  });
  let spectator: Spectator<DhButtonContainerComponent>;

  beforeEach((): void => {
    spectator = componentFactory();
  });

  it('should create', (): void => {
    expect(spectator.component).toBeDefined();
  });

  afterAll((): void => {
    cleanStylesFromDom();
  });
});
