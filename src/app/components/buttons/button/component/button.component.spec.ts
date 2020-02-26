import { ButtonComponent } from '@app/components/buttons/button/component/button.component';
import { cleanStylesFromDom } from '@test/test';
import { configureTestSuite } from 'ng-bullet';

describe('ButtonComponent', () => {
  let component: ButtonComponent;

  configureTestSuite(() => {
    component = new ButtonComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterAll(() => {
    cleanStylesFromDom();
  });
});
