import {
  createComponentFactory,
  Spectator
} from '@ngneat/spectator';
import { cleanStylesFromDom } from '@test/test';
import { DhHomeTestingModule } from '../dh-home.testing.module';
import { DhHomeComponent } from './dh-home.component';

describe('DhHomeComponent', (): void => {
  const createComponent = createComponentFactory({
    component: DhHomeComponent,
    imports: [
      DhHomeTestingModule
    ]
  });
  let spectator: Spectator<DhHomeComponent>;

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
