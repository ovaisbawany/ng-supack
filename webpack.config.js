/**
 * Created by Umayr Shahid on 10/27/2015.
 */

'use strict';

module.exports = {
  cache: true,
  entry: './app/src/app.module',
  output: {
    filename: 'browser-bundle.js'
  },
  module: {
    loaders: []
  }
};
