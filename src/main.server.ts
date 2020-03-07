import { enableProdMode } from '@angular/core';
import { ENVIRONMENT } from '@app/environments/environment';
import { enableAkitaProdMode } from '@datorama/akita';

if (ENVIRONMENT.isProduction) {
  enableProdMode();
  enableAkitaProdMode();
}

export { AppServerModule } from './app/app.server.module';
export { ngExpressEngine } from '@nguniversal/express-engine';
export { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
