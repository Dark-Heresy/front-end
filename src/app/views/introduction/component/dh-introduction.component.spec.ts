import {
  createComponentFactory,
  Spectator
} from '@ngneat/spectator';
import { SpectatorFactory } from '@ngneat/spectator/lib/spectator/create-factory';
import { cleanStylesFromDom } from '@test/test';
import { DhIntroductionTestingModule } from '../dh-introduction.testing.module';
import { DhIntroductionComponent } from './dh-introduction.component';

describe('DhIntroductionComponent', (): void => {
  const componentFactory: SpectatorFactory<DhIntroductionComponent> = createComponentFactory({
    component: DhIntroductionComponent,
    imports: [
      DhIntroductionTestingModule
    ]
  });
  let spectator: Spectator<DhIntroductionComponent>;

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
