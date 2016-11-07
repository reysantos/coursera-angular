(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('MainCategoriesListController', MainCategoriesListController);


    MainCategoriesListController.$inject = ['categories'];

    function MainCategoriesListController(categories) {
        var mainList = this;

      
        mainList.categories = categories;


    }

})();
