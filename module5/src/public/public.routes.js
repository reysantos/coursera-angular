(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })

    .state('public.myinfo', {
      url: '/myinfo',
      templateUrl: 'src/public/menu/myinfo.html',
      controller: 'MenuMyInfoController',
      controllerAs: 'menuMyInfoCtrl',
      resolve: {
        selectedItem: ['SavedPreferenceService', function (SavedPreferenceService) {
          return SavedPreferenceService.getSelectedItem();
        }]
      }
    })
    .state('public.signup', {
      url: '/signup',
      templateUrl: 'src/public/menu/signup.html',
      controller: 'MenuSignUpController',
      controllerAs: 'menuSignUp',
      resolve: {
        menuItems: ['MenuService', 'SavedPreferenceService', function (MenuService, SavedPreferenceService) {
          return MenuService.getMenuItems();
        }]
      }
    })

    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    });
}
})();
