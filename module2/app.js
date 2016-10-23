(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var tobuy = this;
        tobuy.itemsToBuy = ShoppingListCheckOffService.getItems();

        tobuy.addItem = function(itemIndex) {
            ShoppingListCheckOffService.addItem(itemIndex);
        }
    }


    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadybought = this;
        alreadybought.itemsBought = ShoppingListCheckOffService.getItemsBought();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        // List of shopping items
        var itemsToBuy = [{
                name: "cookies",
                quantity: "8"
            }, {
                name: "milk",
                quantity: "2"
            }, {
                name: "Donuts",
                quantity: "200"
            }, {
                name: "Chocolate",
                quantity: "5"
            }, {
                name: "Cereals",
                quantity: "10"
            }

        ];
        var itemsBought = [];

        service.addItem = function(itemIndex) {

            console.log("Item to Buy selected name: " + itemsToBuy[itemIndex].name);
            console.log("Item to Buy selected quantity: " + itemsToBuy[itemIndex].quantity);
            service.addItemToBought(itemsToBuy[itemIndex].name, itemsToBuy[itemIndex].quantity);
            // Now delete what was added to itemsBought array
            service.removeItem(itemIndex);

        }

        service.addItemToBought = function(itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            };

            itemsBought.push(item);

        };

        service.removeItem = function(itemIdex) {
            itemsToBuy.splice(itemIdex, 1);
        };

        service.getItems = function() {
            return itemsToBuy;
        };

        service.getItemsBought = function() {

            return itemsBought;
        };

    }

})();
