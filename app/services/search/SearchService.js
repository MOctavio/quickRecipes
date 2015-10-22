angular.module('knowlEDGE.services')
    .service('SearchService', [function() {
        var activeSearchElement;

        this.setActiveSearchElement = function(document) {
            activeSearchElement = document;
        };

        this.getActiveSearchElement = function() {
            return activeSearchElement;
        };

        this.getItemsList = function() {
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
                label: 'Cherry pie'
            }, {
                id: 5,
                label: 'Ice cream'
            }, {
                id: 6,
                label: 'Ice cream desserts'
            },{
                id: 7,
                label: 'Ice cream cake'
            }, {
                id: 8,
                label: 'Sandwich'
            }, {
                id: 9,
                label: 'Desserts'
            }, {
                id: 10,
                label: 'Sweet sandwich'
            }];
        };

        this.getRelatedSearchItems = function(itemId) {
            // When this get implemented the itemId should
            // be sent to the server and it should respond
            // with an array of items matching related search values.
            return [{
                id: 5,
                label: 'Ice cream'
            }, {
                id: 6,
                label: 'Ice cream desserts'
            }, {
                id: 7,
                label: 'Ice cream cake'
            }, {
                id: 8,
                label: 'Sandwich'
            }, {
                id: 9,
                label: 'Desserts'
            }, {
                id: 10,
                label: 'Sweet sandwich'
            }];
        };

    }]);
