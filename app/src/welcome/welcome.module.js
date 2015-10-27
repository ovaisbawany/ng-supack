'use strict';

var angular = require('angular');

var module = angular.module('app.welcome', []);

module.exports = module.name;

module.configuration(configuration);

/* @ngInject */
function configuration($stateProvider) {
  $stateProvider
    .state('Welcome', {
      url: '/welcome',
      templateUrl: 'src/welcome/welcome.html',
      controller: 'Welcome as vm',
      title: 'ng-Super Welcome'
    });
}
