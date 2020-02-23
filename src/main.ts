import {
  enableProdMode,
  NgModuleRef,
  ViewEncapsulation
} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ENVIRONMENT } from '@app/environments/environment';
import { createScript } from '@app/functions/scripts/create-script';
import { loadScript } from '@app/functions/scripts/load-script';
import { AppModule } from '@app/module';
import {
  akitaConfig,
  enableAkitaProdMode,
  persistState
} from '@datorama/akita';
import 'hammerjs';
import localForage from 'localforage';
import { MonoTypeOperatorFunction } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { HMR_BOOTSTRAP } from './hmr';

if (ENVIRONMENT.isProduction) {
  enableProdMode();
  enableAkitaProdMode();
} else {
  const script: HTMLScriptElement = createScript('lazy-styles.js');

  loadScript(script);
}

const akitaLocalForage: LocalForage = localForage.createInstance({
  description: 'storage for akita stores',
  driver: [
    localForage.INDEXEDDB,
    localForage.LOCALSTORAGE,
    localForage.WEBSQL
  ],
  name: 'app_akita',
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

const bootstrap: any = (): Promise<NgModuleRef<AppModule>> => platformBrowserDynamic().bootstrapModule(AppModule, {
  defaultEncapsulation: ViewEncapsulation.None
});

if (ENVIRONMENT.hmr.isEnabled) {
  if ((module as any)[ 'hot' ]) {
    HMR_BOOTSTRAP(module, bootstrap);
  } else {
    console.error('HMR is not enabled for webpack-dev-server !');
    console.log('Are you using the --hmr flag for ng serve ?');
  }
} else {
  document.addEventListener('DOMContentLoaded', () => {
    bootstrap().catch((error: any) => console.error(error));
  });
}
