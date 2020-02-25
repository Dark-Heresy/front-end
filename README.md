# Dark Heresy Front-End

> *Dark Heresy application for the role-playing game*

[![Downloads](https://img.shields.io/npm/dt/@dark-heresy/front-end.svg?style=flat-square)]()
[![Build Status](https://travis-ci.com/Dark-Heresy/front-end.svg?branch=develop&style=flat-square)](https://travis-ci.com/Dark-Heresy/front-end)
[![All Contributors](https://img.shields.io/badge/all_contributors-41-orange.svg?style=flat-square)](#contributors)
[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Maintainability](https://api.codeclimate.com/v1/badges/db32cd18a29bb54553e4/maintainability?style=flat-square)](https://codeclimate.com/github/Dark-Heresy/front-end/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/db32cd18a29bb54553e4/test_coverage?style=flat-square)](https://codeclimate.com/github/Dark-Heresy/front-end/test_coverage)
[![Netlify Status](https://api.netlify.com/api/v1/badges/9078790d-583d-4a64-95d5-d4d8bb0f5702/deploy-status)](https://app.netlify.com/sites/dark-heresy/deploys)
[![Coverage Status](https://coveralls.io/repos/github/Dark-Heresy/front-end/badge.svg?branch=develop)](https://coveralls.io/github/Dark-Heresy/front-end?branch=develop)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## Contributing

Check out the [Contributing](CONTRIBUTING.md) file before helping us.

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

## Debug

You can checkout if there is any circular dependency by running the command `npm run circular-dependencies-check`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Stats

You can analyze the webpack production bundle size by running the command `npm run analyze:stats`.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contributors 

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

