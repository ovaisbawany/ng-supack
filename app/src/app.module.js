'use strict';

require('angular');

angular.module('app',
  [
    require('./core/core.module'),
    require('oclazyload'),
    require('./common/common.module')
  ])
  .config(configurationDashboard)
  .config(configurationWelcome);

function configurationDashboard($stateProvider) {
  $stateProvider
    .state('Dashboard', {
      url: '/dashboard',
      template: require('./dashboard/dashboard.html'),
      controller: 'Dashboard as vm',
      title: 'ng-Super Dashboard',
      resolve: ['$q', '$ocLazyLoad', '$log', function ($q, $ocLazyLoad, $log) {
        showLoadingState($log);
        var deferred = $q.defer();
        require.ensure([], function() {
          var mod = require('./dashboard/dashboard.module');
          $ocLazyLoad.load({
            name: mod.name
          });
          hideLoadingState($log);
          deferred.resolve(mod.controller);
        });

        return deferred.promise;
      }]
    });

}

function configurationWelcome($stateProvider) {
  $stateProvider
    .state('Welcome', {
      url: '/welcome',
      template: require('./welcome/welcome.html'),
      controller: 'Welcome as vm',
      title: 'ng-Super Welcome',
      resolve: ['$q', '$ocLazyLoad', '$log', function ($q, $ocLazyLoad, $log) {
        showLoadingState($log);
        var deferred = $q.defer();
        require.ensure([], function() {
          var mod = require('./welcome/welcome.module');
          $ocLazyLoad.load({
            name: mod.name
          });
          hideLoadingState($log);
          deferred.resolve(mod.controller);
        });

        return deferred.promise;
      }]
    });

}

function showLoadingState($log) {
  $log.info('SHOW Loading');
}

function hideLoadingState($log) {
  $log.info('HIDING Loading');
}
