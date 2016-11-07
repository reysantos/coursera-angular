(function () {
'use strict';

angular.module('MenuApp')
.component('itemsList', {
  templateUrl: 'src/menuApp/templates/itemslist.template.html',
  bindings: {
    items: '<'
  }
});

})();
