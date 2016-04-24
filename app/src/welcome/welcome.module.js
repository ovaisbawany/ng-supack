'use strict';

require('./welcome.scss');

var name = module.exports = 'app.welcome';

var mod = angular
  .module(name, [])
  .controller('Welcome', require('./welcome.controller'))
;

module.exports = mod;
