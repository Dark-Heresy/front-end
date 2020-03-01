import { DhButtonLabelComponent } from '@dh/components/buttons/button-label/component/dh-button-label.component';
import { DhButtonLabelTestingModule } from '@dh/components/buttons/button-label/dh-button-label.testing.module';
import { dhGetFakeTranslation } from '@dh/features/translation/functions/fakes/dh-get-fake-translation';
import {
  createComponentFactory,
  Spectator
} from '@ngneat/spectator';
import { cleanStylesFromDom } from '@test/test';

describe('DhButtonLabelComponent', () => {
  const componentRootClass = '.dh-button-label';
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

  it('should hide the label by default', () => {
    expect(spectator.query(componentRootClass)).toBeNull();
  });

  describe('when the labelTranslation input change', () => {
    beforeEach(() => {
      spectator.setInput('labelTranslation', undefined);
    });

    describe('when the labelTranslation new value is undefined', () => {
      beforeEach(() => {
        spectator.setInput('labelTranslation', undefined);
      });

      it('should hide the label', () => {
        expect(spectator.query(componentRootClass)).toBeNull();
      });
    });

    describe('when the labelTranslation new value is null', () => {
      beforeEach(() => {
        spectator.setInput('labelTranslation', null);
      });

      it('should hide the label', () => {
        expect(spectator.query(componentRootClass)).toBeNull();
      });
    });

    describe('when the labelTranslation new value is a translation', () => {
      beforeEach(() => {
        spectator.setInput('labelTranslation', dhGetFakeTranslation());
      });

      it('should show the label', () => {
        expect(spectator.query(componentRootClass)).toBeDefined();
        expect(spectator.query(`${componentRootClass} .dh-button-label--label`)).toBeDefined();
      });
    });
  });

  afterAll(() => {
    cleanStylesFromDom();
  });
});
