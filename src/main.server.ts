import { enableProdMode } from '@angular/core';
import { enableAkitaProdMode } from '@datorama/akita';
import { DH_ENVIRONMENT } from '@dh/environments/dh-environment';

if (DH_ENVIRONMENT.isProduction) {
  enableProdMode();
  enableAkitaProdMode();
}

export { DhRootServerModule } from './app/dh-root.server.module';
export { ngExpressEngine } from '@nguniversal/express-engine';
export { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
