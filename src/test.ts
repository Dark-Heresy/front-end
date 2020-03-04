// This file is required by karma.conf.js and loads recursively all the .spec and framework files
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import _ from 'lodash';
import 'zone.js/dist/zone-testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Then we find all the tests.
const context: any = require.context('./', true, /\.spec\.ts$/);

// And load the modules.
context.keys().map(context);

export function cleanStylesFromDom(): void {
  const head: HTMLHeadElement | null = document.getElementsByTagName('head')[ 0 ];

  if (!_.isNil(head)) {
    const styles: HTMLCollectionOf<HTMLStyleElement> = head.getElementsByTagName('style');

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < styles.length; i++) {
      head.removeChild(styles[ i ]);
    }
  }
}
