(function() {
    "use strict";

    angular.module('public')
        .service('SavedPreferenceService', SavedPreferenceService);

    SavedPreferenceService.$inject = ['$http', 'ApiPath'];

    function SavedPreferenceService($http, ApiPath) {
        var service = this;

        service.user = {};

        service.saveSelectedItem = function(firstname, lastname, email, phone, itemSelected, short_name) {
            service.preferredItem = itemSelected;
            service.user[firstname + lastname] = firstname +  ' ' + lastname + ',' + email + ',' + phone + ',' + itemSelected + ',' + short_name;

        };

        service.getSelectedItem = function() {

           return service.user;
        };

    }


})();
