import { DhButtonLabelComponent } from '@dh/components/buttons/button-label/component/dh-button-label.component';
import { DhButtonLabelTestingModule } from '@dh/components/buttons/button-label/dh-button-label.testing.module';
import {
  createComponentFactory,
  Spectator
} from '@ngneat/spectator';
import { cleanStylesFromDom } from '@test/test';

describe('DhButtonLabelComponent', () => {
  const createComponent = createComponentFactory({
    component: DhButtonLabelComponent,
    imports: [
      DhButtonLabelTestingModule
    ]
  });
  let spectator: Spectator<DhButtonLabelComponent>;

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
