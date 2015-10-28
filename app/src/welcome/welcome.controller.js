'use strict';

module.exports = controller;

/* @ngInject */
function controller() {
  var vm = this;

  vm.welcomeMessage = 'ZE GENGO !';
  vm.testFunction = testFunction;

  function testFunction(num) {
    console.info('This is a test function number ' + num);
  }
}
