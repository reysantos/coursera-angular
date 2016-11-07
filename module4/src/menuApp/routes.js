(function() {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {


        $urlRouterProvider.otherwise('/tab1');

        //  Set up UI states
        $stateProvider
            .state('tab1', {
                url: '/tab1',
                templateUrl: 'src/menuApp/templates/home.template.html'

            })

        .state('tab2', {
            url: '/tab2',
            templateUrl: 'src/menuApp/categoriesstate.html',
            controller: 'MainCategoriesListController as mainList',
            resolve: {
                categories: ['MenuDataService', function(MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }

        })

        .state('tab3', {
            url: '/tab3/{itemId}',
            templateUrl: 'src/menuApp/itemsstate.html',
            controller: 'MainItemsListController as itemList',
            resolve: {
                items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
                    return MenuDataService.getItemsForCategory($stateParams.itemId);
                }]
            }

        });

    }

})();
