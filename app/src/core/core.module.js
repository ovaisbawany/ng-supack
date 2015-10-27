'use strict';

var angular = require('angular');

var module = angular.module('app.core', [
  require('angular-ui-router'),
  require('restangular')
]);

module.exports = module.name;
