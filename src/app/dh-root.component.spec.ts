import { DhRootComponent } from '@dh/component';
import { cleanStylesFromDom } from '@test/test';
import { configureTestSuite } from 'ng-bullet';

describe('DhRootComponent', () => {
  let component: DhRootComponent;

  configureTestSuite(() => {
    component = new DhRootComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterAll(() => {
    cleanStylesFromDom();
  });
});
