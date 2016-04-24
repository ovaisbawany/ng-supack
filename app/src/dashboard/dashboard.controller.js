'use strict';

module.exports = controller;

/* @ngInject */
function controller($log) {
  var vm = this;

  vm.welcomeMessage = 'Dashboard is HERE';
  vm.testFunction = testFunction;

    $log.info('Initializing  Dashboard controller');

  function testFunction(num) {
    $log.info('This is a test function number ' + num);
  }
}
