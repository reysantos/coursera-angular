(function() {
    "use strict";

    angular.module('public')
        .controller('MenuMyInfoController', MenuMyInfoController);


    MenuMyInfoController.$inject = ['selectedItem', 'SavedPreferenceService'];

    function MenuMyInfoController(selectedItem, SavedPreferenceService) {
        var menuMyInfoCtrl = this;
        menuMyInfoCtrl.selectedItem = selectedItem;
        menuMyInfoCtrl.message = "";
        menuMyInfoCtrl.email = "";
        menuMyInfoCtrl.phone = "";
        menuMyInfoCtrl.shortname = "";
        menuMyInfoCtrl.desc = "";
        menuMyInfoCtrl.short_name = "";
        menuMyInfoCtrl.pictureAvailable = false;

        menuMyInfoCtrl.checkIfRegistered = false;
        var userProperties = [];
        // check if user object literal is emtpy, if it is then user has not registered yet
        for (var prop in selectedItem) {
            if (selectedItem.hasOwnProperty(prop))
                menuMyInfoCtrl.checkIfRegistered = true;
            
            var userValues = selectedItem[prop];
            userProperties = userValues.split(',');
        }

        if (menuMyInfoCtrl.checkIfRegistered) {

            menuMyInfoCtrl.message = 'Hello ' + userProperties[0];
            menuMyInfoCtrl.email = userProperties[1];
            menuMyInfoCtrl.phone = userProperties[2];
            menuMyInfoCtrl.shortname = userProperties[4];
            menuMyInfoCtrl.desc = userProperties[3];

            if ((menuMyInfoCtrl.shortname === 'A1') || (menuMyInfoCtrl.shortname === 'B2') || (menuMyInfoCtrl.shortname === 'C5') || (menuMyInfoCtrl.shortname === 'V3') || (menuMyInfoCtrl.shortname === 'F1')) {
                menuMyInfoCtrl.pictureAvailable = true;
            }

        } else {
            menuMyInfoCtrl.message = "Not Signed Up Yet. Sign up Now! ";
        }

    }


})();
