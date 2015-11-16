'use strict';

module.exports = routingEvents;

/* @ngInject */
function routingEvents($rootScope, $log) {

  $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
    if (__DEV__) {
      $log.info(event, unfoundState, fromState, fromParams);
    }
  });

  $rootScope.$on('$stateChangeSuccess', function (event, toState/*, toParams, fromState, fromParams*/) {
    // Add Page Title.
    $rootScope.pageTitle = toState.title || 'Angular + Webpack = NgPack';
  });
}
