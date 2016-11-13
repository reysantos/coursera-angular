(function() {
    "use strict";

    angular.module('public')
        .controller('MenuSignUpController', MenuSignUpController)


    MenuSignUpController.$inject = ['menuItems', 'SavedPreferenceService'];

    function MenuSignUpController(menuItems, SavedPreferenceService) {
        var menuSignUp = this;
        menuSignUp.menuItems = menuItems;

        menuSignUp.submit = function() {
            menuSignUp.completed = true;

            menuSignUp.message = 'No such menu number exists.';
            for (var i = 0; i < menuSignUp.menuItems.menu_items.length; i++) {

                if (menuSignUp.menuItems.menu_items[i].short_name === menuSignUp.menuitem) {

                    SavedPreferenceService.saveSelectedItem(menuSignUp.firstname, menuSignUp.lastname, menuSignUp.email, menuSignUp.phone, menuSignUp.menuItems.menu_items[i].name, menuSignUp.menuItems.menu_items[i].short_name);
                    menuSignUp.message = 'Your information has been saved.';
                }
            }

        }


    }


})();
