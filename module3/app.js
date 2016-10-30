(function() {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemDirective);

 
    function FoundItemDirective() {
        var ddo = {
            templateUrl: 'menuList.html',
            scope: {
                founditems: '<',
                onRemove: '&'
            },
            controller: MenuListDirectiveController,
            controllerAs: 'narrowitdown',
            bindToController: true
        };

        return ddo;
    }


    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var narrowitdown = this;

        narrowitdown.searchFromHeroku = function() {

            narrowitdown.founditems = [];
            narrowitdown.searched = false;

            console.log('passed search term is: ' + narrowitdown.searchterm);
            if ((narrowitdown.searchterm === undefined) || (narrowitdown.searchterm.length === 0)) {
                narrowitdown.empty = true;

            } else {

                narrowitdown.empty = false;
                MenuSearchService.getMatchedMenuItems(narrowitdown.searchterm).then(function(jsonData) {
                    narrowitdown.founditems = jsonData;
                    narrowitdown.searched = true;
                }, function(error) {

                });
            }


        }

        narrowitdown.removeItem = function(itemIndex) {

            narrowitdown.founditems.splice(itemIndex, 1);

        }
    }

    MenuSearchService.$inject = ['$http']

    function MenuSearchService($http) {
        var service = this;

        service.itemsInMenu = [];

        var itemsFilteredResults = [];


        service.getMatchedMenuItems = function(searchterm) {

            return $http({
                    method: "GET",
                    url: ("http://davids-restaurant.herokuapp.com/menu_items.json")
                })
                .then(function(response) {

                        itemsFilteredResults = [];

                        var newResponseArray = response.data.menu_items;

                        for (var i = 0; i < response.data.menu_items.length; i++) {
                            var itemdescription = response.data.menu_items[i].description;

                            if (itemdescription.toLowerCase().indexOf(searchterm) !== -1) {

                                service.addItemFiltered(response.data.menu_items[i].name, response.data.menu_items[i].short_name, response.data.menu_items[i].description);
                            } else {
                                // ignore this bec searchterm is Not in description
                            }
                        }

                        return itemsFilteredResults;
                    },
                    function(error) {
                        console.log("error on http call " + error);
                    });
        }


        service.addItemFiltered = function(name, short_name, description) {

            var itemsToAdd = {

                itemName: name,
                itemShortName: short_name,
                itemDescription: description
            };
            itemsFilteredResults.push(itemsToAdd);

        }

    }

    function MenuListDirectiveController() {
        var list = this;

    }


})();
