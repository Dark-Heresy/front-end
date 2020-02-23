const MOMENT_LOCALES_WEBPACK_PLUGIN = require('moment-locales-webpack-plugin');
const MOMENT_TIMEZONE_DATA_WEBPACK_PLUGIN = require('moment-timezone-data-webpack-plugin');

const currentYear = new Date().getFullYear();

module.exports = {
  plugins: [

    /**
     * @description
     * Optimize the moment bundle size
     * Remove all extra locales except some specifics ones
     */
    new MOMENT_LOCALES_WEBPACK_PLUGIN({
      localesToKeep: [
        'en',
        'fr'
      ]
    }),

    /**
     * @description
     * Optimize the moment timezone bundle size
     * Remove some dates which should never be set
     * Be careful though
     */
    new MOMENT_TIMEZONE_DATA_WEBPACK_PLUGIN({
      startYear: currentYear - 10,
      endYear: currentYear + 50
    })
  ]
};
