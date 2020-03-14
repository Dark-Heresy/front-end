import {
  createComponentFactory,
  Spectator
} from '@ngneat/spectator';
import { SpectatorFactory } from '@ngneat/spectator/lib/spectator/create-factory';
import { cleanStylesFromDom } from '@test/test';
import { DhErrorPageNotFoundTestingModule } from '../dh-error-page-not-found.testing.module';
import { DhErrorPageNotFoundComponent } from './dh-error-page-not-found.component';

describe('DhErrorPageNotFoundComponent', (): void => {
  const componentFactory: SpectatorFactory<DhErrorPageNotFoundComponent> = createComponentFactory({
    component: DhErrorPageNotFoundComponent,
    imports: [
      DhErrorPageNotFoundTestingModule
    ]
  });
  let spectator: Spectator<DhErrorPageNotFoundComponent>;

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
