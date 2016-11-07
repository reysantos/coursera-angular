(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'src/menuApp/templates/categorieslist.template.html',
  bindings: {
    categories: '<'
  }
});

})();
