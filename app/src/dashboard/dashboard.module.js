'use strict';

var name = module.exports = 'app.dashboard';

 var mod = angular
  .module(name, [])
  .controller('Dashboard', require('./dashboard.controller'));

module.exports = mod;

