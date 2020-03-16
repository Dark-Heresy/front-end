import { DhButtonLabelComponent } from '@dh/components/buttons/button-label/component/dh-button-label.component';
import { DhButtonLabelTestingModule } from '@dh/components/buttons/button-label/dh-button-label.testing.module';
import { dhGetFakeTranslation } from '@dh/features/translation/functions/fakes/dh-get-fake-translation';
import {
  createComponentFactory,
  Spectator,
  SpectatorFactory
} from '@ngneat/spectator';
import { cleanStylesFromDom } from '@test/test';

describe('DhButtonLabelComponent', (): void => {
  const componentRootClass = '.dh-button-label';
  const componentFactory: SpectatorFactory<DhButtonLabelComponent> = createComponentFactory({
    component: DhButtonLabelComponent,
    imports: [
      DhButtonLabelTestingModule
    ]
  });
  let spectator: Spectator<DhButtonLabelComponent>;

  beforeEach((): void => {
    spectator = componentFactory();
  });

  it('should create', (): void => {
    expect(spectator.component).toBeDefined();
  });

  it('should hide the label by default', (): void => {
    expect(spectator.query(componentRootClass)).toBeNull();
  });

  describe('when the labelTranslation input change', (): void => {
    beforeEach((): void => {
      spectator.setInput('labelTranslation', undefined);
    });

    describe('when the labelTranslation new value is undefined', (): void => {
      beforeEach((): void => {
        spectator.setInput('labelTranslation', undefined);
      });

      it('should hide the label', (): void => {
        expect(spectator.query(componentRootClass)).toBeNull();
      });
    });

    describe('when the labelTranslation new value is null', (): void => {
      beforeEach((): void => {
        spectator.setInput('labelTranslation', null);
      });

      it('should hide the label', (): void => {
        expect(spectator.query(componentRootClass)).toBeNull();
      });
    });

    describe('when the labelTranslation new value is a translation', (): void => {
      beforeEach((): void => {
        spectator.setInput('labelTranslation', dhGetFakeTranslation());
      });

      it('should show the label', (): void => {
        expect(spectator.query(componentRootClass)).toBeDefined();
        expect(spectator.query(`${componentRootClass} .dh-button-label--label`)).toBeDefined();
      });
    });
  });

  afterAll((): void => {
    cleanStylesFromDom();
  });
});
