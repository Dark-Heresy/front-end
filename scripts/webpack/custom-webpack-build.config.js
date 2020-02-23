const MOMENT_LOCALES_WEBPACK_PLUGIN = require('moment-locales-webpack-plugin');
const MOMENT_TIMEZONE_DATA_WEBPACK_PLUGIN = require('moment-timezone-data-webpack-plugin');
const IMAGEMIN_WEBPACK_PLUGIN = require('imagemin-webpack-plugin').default;
const COMPRESSION_WEBPACK_PLUGIN = require('compression-webpack-plugin');

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
    }),

    /**
     * @description
     * Optimize all images size
     */
    new IMAGEMIN_WEBPACK_PLUGIN({
      test: /\.(jpe?g|png|gif|svg)$/gim,
      disable: false,
      maxConcurrency: Infinity,
      optipng: {
        optimizationLevel: 3
      },
      gifsicle: {
        optimizationLevel: 1
      },
      jpegtran: {
        progressive: true
      },
      svgo: {
        removeXMLNS: true
      }
    }),

    /**
     * @description
     * Compress the sitemap files
     */
    new COMPRESSION_WEBPACK_PLUGIN({
      test: /\.xml$/,
      include: /(?:(sitemap-){1}.*(.xml){1})/
    })
  ]
};
