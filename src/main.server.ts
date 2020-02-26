import { enableProdMode } from '@angular/core';
import { enableAkitaProdMode } from '@datorama/akita';
import { ENVIRONMENT } from '@dh/environments/environment';

if (ENVIRONMENT.isProduction) {
  enableProdMode();
  enableAkitaProdMode();
}

export { DhRootServerModule } from './app/dh-root.server.module';
export { ngExpressEngine } from '@nguniversal/express-engine';
export { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
