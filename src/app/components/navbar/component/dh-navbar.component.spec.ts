import { DhNavbarComponent } from '@dh/components/navbar/component/dh-navbar.component';
import { DhNavbarTestingModule } from '@dh/components/navbar/dh-navbar.testing.module';
import {
  createComponentFactory,
  Spectator,
  SpectatorFactory
} from '@ngneat/spectator';
import { cleanStylesFromDom } from '@test/test';

describe('DhNavbarComponent', (): void => {
  const componentRootClass = '.dh-navbar';
  const componentFactory: SpectatorFactory<DhNavbarComponent> = createComponentFactory({
    component: DhNavbarComponent,
    imports: [
      DhNavbarTestingModule
    ]
  });
  let spectator: Spectator<DhNavbarComponent>;

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
