import { enableProdMode } from '@angular/core';
import { ENVIRONMENT } from '@app/environments/environment';
import { enableAkitaProdMode } from '@datorama/akita';
import * as mockBrowser from 'mock-browser';

if (ENVIRONMENT.isProduction) {
  enableProdMode();
  enableAkitaProdMode();
}

const MockBrowser = mockBrowser.mocks.MockBrowser;
const mock = new MockBrowser();

// @ts-ignore
global[ 'navigator' ] = mock.getNavigator();

export { AppServerModule } from './app/app.server.module';
export { ngExpressEngine } from '@nguniversal/express-engine';
export { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
