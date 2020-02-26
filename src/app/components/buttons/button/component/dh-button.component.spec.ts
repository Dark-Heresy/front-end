import { DhButtonComponent } from '@dh/components/buttons/button/component/dh-button.component';
import { cleanStylesFromDom } from '@test/test';
import { configureTestSuite } from 'ng-bullet';

describe('DhButtonComponent', () => {
  let component: DhButtonComponent;

  configureTestSuite(() => {
    component = new DhButtonComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterAll(() => {
    cleanStylesFromDom();
  });
});
