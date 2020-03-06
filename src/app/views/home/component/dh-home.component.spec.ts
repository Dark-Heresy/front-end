import {
  createComponentFactory,
  Spectator
} from '@ngneat/spectator';
import { SpectatorFactory } from '@ngneat/spectator/lib/spectator/create-factory';
import { cleanStylesFromDom } from '@test/test';
import { DhHomeTestingModule } from '../dh-home.testing.module';
import { DhHomeComponent } from './dh-home.component';

xdescribe('DhHomeComponent', (): void => {
  const componentFactory: SpectatorFactory<DhHomeComponent> = createComponentFactory({
    component: DhHomeComponent,
    imports: [
      DhHomeTestingModule
    ]
  });
  let spectator: Spectator<DhHomeComponent>;

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
