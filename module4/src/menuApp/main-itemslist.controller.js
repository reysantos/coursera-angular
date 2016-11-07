(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('MainItemsListController', MainItemsListController);

    MainItemsListController.$inject = ['items'];

    function MainItemsListController(items) {
        var itemList = this;

        itemList.items = items;


    }

})();
