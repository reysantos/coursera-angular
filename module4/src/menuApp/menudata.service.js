(function() {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService);


    MenuDataService.$inject = ['$http', '$q', '$timeout'];

    function MenuDataService($http, $q, $timeout) {
        var service = this;


        service.getAllCategories = function() {
            console.log('about to invoke getAllCategories inside the menuData service.js');
            return $http({
                    method: "GET",
                    url: ("https://davids-restaurant.herokuapp.com/categories.json")
                })
                .then(function(response) {

                        console.log("done invoking restful webservice via $http to pull the categories");

                        var responseArray = response.data;

                        return responseArray;
                    },
                    function(error) {
                        console.log("error on http call " + error);
                    });

        };


        service.getItemsForCategory = function(shortName) {

            return $http({
                    method: "GET",
                    url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + shortName)
                })
                .then(function(response) {


                        var responseArray = response.data.menu_items;
                        return responseArray;
                    },
                    function(error) {
                        console.log("error on http call " + error);
                    });

        };


    }

})();
