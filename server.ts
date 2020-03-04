import { enableProdMode } from '@angular/core';
import * as express from 'express';
import _ from 'lodash';
import { join } from 'path';
import 'zone.js/dist/zone-node';
import * as mainServer from './dist/server/main';

enableProdMode();

const app = express();
const PORT = 6888;
const DIST_FOLDER = join(process.cwd(), 'dist');
const DIST_BROWSER_FOLDER = join(DIST_FOLDER, 'browser');

const { AppServerModuleNgFactory, LAZY_MODULE_MAP, ngExpressEngine, provideModuleMap }: any = mainServer;

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', DIST_BROWSER_FOLDER);

app.get('*.*', express.static(DIST_BROWSER_FOLDER, {
  maxAge: '1y'
}));

app.get('app/*', (req: any, res: any) => {
  res.type('html');

  res.render('index', {
    req
  }, (_err: any, html: any) => {
    res.send(_.unescape(html));
  });
});

app.get('*', (req: any, res: any) => {
  res.type('html');

  res.render('index', {
    req
  }, (_err: any, html: any) => {
    res.send(_.unescape(html));
  });
});

app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
