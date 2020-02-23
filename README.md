[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Maintainability](https://api.codeclimate.com/v1/badges/db32cd18a29bb54553e4/maintainability)](https://codeclimate.com/github/Dark-Heresy/front-end/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/db32cd18a29bb54553e4/test_coverage)](https://codeclimate.com/github/Dark-Heresy/front-end/test_coverage)

# Dark Heresy Front-End

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## Development server

Run `npm run start` to start a local development server.  
Navigate to `https://dark-heresy:3100/` to check it out.

You need to setup a custom host:

```
# Dark Heresy Front-End
# Use url => https://dark-heresy:3100
127.0.0.1 dark-heresy
```

### HMR

The Hot Module Replacement is configured so you do not have to reload your browser once your code change.  
There is no need to clean out the cache to see the new files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Generate the localhost certificate for HTTPS

Run `npm run generate-certificate` to create the certificate and the key.  
Add the certificate to Windows or iOS to make it trusted by your OS.  
You can read this article https://medium.com/@richardr39/using-angular-cli-to-serve-over-https-locally-70dab07417c8 if you want to learn more about it.

Note that if `openssl` is not recognized, you can download manually the latest version available here: https://code.google.com/archive/p/openssl-for-windows/downloads  
Then, extract the content and add it anywhere on the computer  
Add the bin path to the Windows environment variable `PATH`  
Run `openssl` and then write the content of the `npm run generate-certificate` script

## Stats

You can analyze the webpack production bundle size by running the command `npm run analyze:stats`.

## Debug

You can checkout if there is any circular dependency by running the command `npm run circular-dependencies-check`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
