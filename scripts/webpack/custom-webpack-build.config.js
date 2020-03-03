const IMAGEMIN_WEBPACK_PLUGIN = require('imagemin-webpack-plugin').default;
const COMPRESSION_WEBPACK_PLUGIN = require('compression-webpack-plugin');
const WEBPACK_BUNDLE_ANALYZER_PLUGIN = require('webpack-bundle-analyzer');

module.exports = {
  plugins: [

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
    }),

    /**
     * @description
     * Visualize size of webpack output files
     */
    new WEBPACK_BUNDLE_ANALYZER_PLUGIN.BundleAnalyzerPlugin()
  ]
};
