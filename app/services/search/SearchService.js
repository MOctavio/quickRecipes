angular.module('knowlEDGE.services')
    .service('SearchService', [function() {
        var activeSearchElement;

        this.setActiveSearchElement = function (document) {
            activeSearchElement = document;
        };

        this.getActiveSearchElement = function () {
            return activeSearchElement;
        };

        this.getDocumentList = function() {
            return [{
                id: 0,
                label: 'Ice cream sandwich'
            }, {
                id: 1,
                label: 'Ice cream recipes'
            }, {
                id: 2,
                label: 'Ice cream history'
            }, {
                id: 3,
                label: 'Cherry pie recipe'
            }, {
                id: 4,
                label: 'Cherry pie history'
            }];
        };

    }]);
