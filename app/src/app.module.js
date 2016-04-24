'use strict';

require('angular');

angular.module('app', [
    require('./core/core.module'),
    require('oclazyload'),
    require('./common/common.module')
  ])
  .config(configurationWelcome);

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
