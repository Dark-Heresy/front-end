import { AppComponent } from '@app/component';
import { cleanStylesFromDom } from '@test/test';
import { configureTestSuite } from 'ng-bullet';

describe('AppComponent', () => {
  let component: AppComponent;

  configureTestSuite(() => {
    component = new AppComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterAll(() => {
    cleanStylesFromDom();
  });
});
