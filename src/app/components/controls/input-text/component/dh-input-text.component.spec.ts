import { DhInputTextComponent } from '@dh/components/controls/input-text/component/dh-input-text.component';
import { DhInputTextTestingModule } from '@dh/components/controls/input-text/dh-input-text.testing.module';
import {
  createComponentFactory,
  Spectator
} from '@ngneat/spectator';
import { cleanStylesFromDom } from '@test/test';

describe('DhInputTextComponent', () => {
  const componentRootClass = '.dh-input-text';
  const createComponent = createComponentFactory({
    component: DhInputTextComponent,
    imports: [
      DhInputTextTestingModule
    ]
  });
  let spectator: Spectator<DhInputTextComponent>;

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
