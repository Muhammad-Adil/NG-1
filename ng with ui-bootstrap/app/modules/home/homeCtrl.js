(function(){
  'use strict';
  angular
        .module('ng-app')
        .controller('homeCtrl', homeCtrl)

  function homeCtrl() {
    var vm = this;
    vm.title = "Hey em from home ctrl"
    
  }

})();