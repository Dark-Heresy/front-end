import {
  enableProdMode,
  NgModuleRef,
  ViewEncapsulation
} from '@angular/core';
import {
  NgElement,
  WithProperties
} from '@angular/elements';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  akitaConfig,
  enableAkitaProdMode,
  persistState
} from '@datorama/akita';
import { IDhButtonLabel } from '@dh/components/buttons/button-label/interfaces/dh-button-label';
import { IDhButton } from '@dh/components/buttons/button/interfaces/dh-button';
import { DH_ENVIRONMENT } from '@dh/environments/dh-environment';
import { dhCreateScript } from '@dh/functions/scripts/dh-create-script';
import { dhLoadScript } from '@dh/functions/scripts/dh-load-script';
import { DhRootModule } from '@dh/module';
import 'hammerjs';
import localForage from 'localforage';
import { MonoTypeOperatorFunction } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { HMR_BOOTSTRAP } from './hmr';

if (DH_ENVIRONMENT.isProduction) {
  enableProdMode();
  enableAkitaProdMode();
} else {
  const script: HTMLScriptElement = dhCreateScript('lazy-styles.js');

  dhLoadScript(script);
}

const akitaLocalForage: LocalForage = localForage.createInstance({
  description: 'storage for akita stores',
  driver: [
    localForage.INDEXEDDB,
    localForage.LOCALSTORAGE,
    localForage.WEBSQL
  ],
  name: 'dh_akita',
  size: 4980736,
  storeName: 'dark_heresy',
  version: 1.0
});

persistState({
  preStorageUpdateOperator: (): MonoTypeOperatorFunction<unknown> => {
    return debounceTime(500);
  },
  storage: akitaLocalForage
});

akitaConfig({
  resettable: true
});

declare global {
  // tslint:disable-next-line:interface-name
  interface HTMLElementTagNameMap {
    'dh-button': NgElement & WithProperties<IDhButton>;
    'dh-button-label': NgElement & WithProperties<IDhButtonLabel>;
  }
}

const bootstrap: any = (): Promise<NgModuleRef<DhRootModule>> => platformBrowserDynamic().bootstrapModule(DhRootModule, {
  defaultEncapsulation: ViewEncapsulation.ShadowDom,
  ngZoneEventCoalescing: true
});

if (DH_ENVIRONMENT.hmr.isEnabled) {
  if ((module as any)[ 'hot' ]) {
    HMR_BOOTSTRAP(module, bootstrap);
  } else {
    console.error('HMR is not enabled for webpack-dev-server !');
    console.log('Are you using the --hmr flag for ng serve ?');
  }
} else {
  document.addEventListener('DOMContentLoaded', (): void => {
    bootstrap().catch((error: any): void => {
      console.error(error);
    });
  });
}
