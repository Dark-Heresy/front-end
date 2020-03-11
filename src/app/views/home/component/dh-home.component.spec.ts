import {
  createComponentFactory,
  Spectator
} from '@ngneat/spectator';
import { cleanStylesFromDom } from '@test/test';
import { DhHomeTestingModule } from '../dh-home.testing.module';
import { DhHomeComponent } from './dh-home.component';

describe('DhHomeComponent', () => {
  const createComponent = createComponentFactory({
    component: DhHomeComponent,
    imports: [
      DhHomeTestingModule
    ]
  });
  let spectator: Spectator<DhHomeComponent>;

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
