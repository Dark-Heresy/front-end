import {
  Component,
  ValueProvider
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { DhDisabledControlDirective } from '@dh/directives/disabled-control/directive/dh-disabled-control.directive';
import {
  createDirectiveFactory,
  SpectatorDirective,
  SpectatorDirectiveFactory
} from '@ngneat/spectator';
import { cleanStylesFromDom } from '@test/test';
import _ from 'lodash';

@Component({
  selector: 'dh-custom-host',
  template: ''
})
class DhCustomHostComponent {
}

describe('DhDisabledControlDirective', (): void => {
  const directiveFactory: SpectatorDirectiveFactory<DhDisabledControlDirective, DhCustomHostComponent> = createDirectiveFactory({
    directive: DhDisabledControlDirective,
    host: DhCustomHostComponent,
    providers: [
      <ValueProvider> {
        provide: NgControl,
        useValue: {
          control: {
            disable: _.noop,
            enable: _.noop,
          }
        }
      }
    ]
  });
  let spectator: SpectatorDirective<DhDisabledControlDirective, DhCustomHostComponent>;
  let ngControl: NgControl;

  let ngControlControlEnableSpy: jasmine.Spy;
  let ngControlControlDisableSpy: jasmine.Spy;

  beforeEach((): void => {
    spectator = directiveFactory('<input dhDisabledControl>');
    ngControl = spectator.inject(NgControl);

    ngControlControlEnableSpy = spyOn<any>(ngControl.control, 'enable').and.stub();
    ngControlControlDisableSpy = spyOn<any>(ngControl.control, 'disable').and.stub();
  });

  describe('when the disabled control input change with undefined as value', (): void => {
    beforeEach((): void => {
      spectator.setInput('disabledControl', undefined);
    });

    it('should not enable the form control', (): void => {
      expect(ngControlControlEnableSpy).not.toHaveBeenCalled();
    });

    it('should disable the form control', (): void => {
      expect(ngControlControlDisableSpy).toHaveBeenCalledTimes(1);
      expect(ngControlControlDisableSpy).toHaveBeenCalledWith();
    });
  });

  describe('when the disabled control input change with null as value', (): void => {
    beforeEach((): void => {
      spectator.setInput('disabledControl', null);
    });

    it('should not enable the form control', (): void => {
      expect(ngControlControlEnableSpy).not.toHaveBeenCalled();
    });

    it('should disable the form control', (): void => {
      expect(ngControlControlDisableSpy).toHaveBeenCalledTimes(1);
      expect(ngControlControlDisableSpy).toHaveBeenCalledWith();
    });
  });

  describe('when the disabled control input change with an empty string as value', (): void => {
    beforeEach((): void => {
      spectator.setInput('disabledControl', '');
    });

    it('should not enable the form control', (): void => {
      expect(ngControlControlEnableSpy).not.toHaveBeenCalled();
    });

    it('should disable the form control', (): void => {
      expect(ngControlControlDisableSpy).toHaveBeenCalledTimes(1);
      expect(ngControlControlDisableSpy).toHaveBeenCalledWith();
    });
  });

  describe('when the disabled control input change with true string as value', (): void => {
    beforeEach((): void => {
      spectator.setInput('disabledControl', 'true');
    });

    it('should not enable the form control', (): void => {
      expect(ngControlControlEnableSpy).not.toHaveBeenCalled();
    });

    it('should disable the form control', (): void => {
      expect(ngControlControlDisableSpy).toHaveBeenCalledTimes(1);
      expect(ngControlControlDisableSpy).toHaveBeenCalledWith();
    });
  });

  describe('when the disabled control input change with false string as value', (): void => {
    beforeEach((): void => {
      spectator.setInput('disabledControl', 'false');
    });

    it('should not enable the form control', (): void => {
      expect(ngControlControlEnableSpy).toHaveBeenCalledTimes(1);
      expect(ngControlControlEnableSpy).toHaveBeenCalledWith();
    });

    it('should disable the form control', (): void => {
      expect(ngControlControlDisableSpy).not.toHaveBeenCalled();
    });
  });

  describe('when the disabled control input change with true as value', (): void => {
    beforeEach((): void => {
      spectator.setInput('disabledControl', true);
    });

    it('should not enable the form control', (): void => {
      expect(ngControlControlEnableSpy).not.toHaveBeenCalled();
    });

    it('should disable the form control', (): void => {
      expect(ngControlControlDisableSpy).toHaveBeenCalledTimes(1);
      expect(ngControlControlDisableSpy).toHaveBeenCalledWith();
    });
  });

  describe('when the disabled control input change with false as value', (): void => {
    beforeEach((): void => {
      spectator.setInput('disabledControl', false);
    });

    it('should not enable the form control', (): void => {
      expect(ngControlControlEnableSpy).toHaveBeenCalledTimes(1);
      expect(ngControlControlEnableSpy).toHaveBeenCalledWith();
    });

    it('should disable the form control', (): void => {
      expect(ngControlControlDisableSpy).not.toHaveBeenCalled();
    });
  });

  afterAll((): void => {
    cleanStylesFromDom();
  });
});
