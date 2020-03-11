import { DhButtonContainerComponent } from '@dh/components/buttons/button-container/component/dh-button-container.component';
import { DhButtonContainerTestingModule } from '@dh/components/buttons/button-container/dh-button-container.testing.module';
import {
  createComponentFactory,
  Spectator
} from '@ngneat/spectator';
import { cleanStylesFromDom } from '@test/test';

describe('DhButtonContainerComponent', () => {
  const createComponent = createComponentFactory({
    component: DhButtonContainerComponent,
    imports: [
      DhButtonContainerTestingModule
    ]
  });
  let spectator: Spectator<DhButtonContainerComponent>;

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
