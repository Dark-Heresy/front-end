import { DhButtonComponent } from '@dh/components/buttons/button/component/dh-button.component';
import { DhButtonSizeEnum } from '@dh/components/buttons/button/enums/dh-button-size.enum';
import { DhButtonTypeEnum } from '@dh/components/buttons/button/enums/dh-button-type-enum';
import {
  createComponentFactory,
  Spectator
} from '@ngneat/spectator';
import { cleanStylesFromDom } from '@test/test';

describe('DhButtonComponent:TestDOM', () => {
  const componentRootClass = '.dh-button';
  const createComponent = createComponentFactory({
    component: DhButtonComponent
  });
  let spectator: Spectator<DhButtonComponent>;

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should have a medium size class', () => {
    expect(spectator.query(componentRootClass)).toHaveClass(DhButtonSizeEnum.MEDIUM);
  });

  it('should have a primary type class', () => {
    expect(spectator.query(componentRootClass)).toHaveClass(DhButtonTypeEnum.PRIMARY);
  });

  afterAll(() => {
    cleanStylesFromDom();
  });
});
