'use strict';

require('angular');

angular.module('app', [
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
      resolve: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
        var deferred = $q.defer();

        require.ensure([], function() {
          var mod = require('./dashboard/dashboard.module');
          $ocLazyLoad.load({
            name: mod.name
          });

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
      resolve: {
        loadController: function($q, $ocLazyLoad) {
          return $q(function(resolve)  {
            require.ensure([], function() {
              // load only controller module
              var module = require('./welcome/welcome.module');
              $ocLazyLoad.load({name: module.name});
              resolve(module.controller);
            });
          });
        }
      }
    });

}
  function showLoadingState() {
    console.log('SHOW Loading');
  }

  function hideLoadingState() {
    console.log('HIDING Loading');
  }
