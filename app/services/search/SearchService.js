angular.module('knowlEDGE.services')
    .service('SearchService', [function() {
        var activeSearchElement;

        this.setActiveSearchElement = function(document) {
            activeSearchElement = document;
        };
        this.getActiveSearchElement = function() {
            return activeSearchElement;
        };

        // TODO: Server side implementation.
        // The following methods should feed
        // throught API's.

        this.getSearchResults = function() {
            return searchResults;
        };

        this.getResultsCount = function() {
            return searchResults.length;
        };
        this.getItemsList = function() {
            return itemsList;
        };

        this.getSearchFilters = function(itemId) {
            return searchFilters;
        };

        this.getRelatedSearchItems = function(itemId) {
            // TODO: Server side implementation.
            // When this get implemented the itemId should
            // be sent to the server and it should respond
            // with an array of items matching related search
            // values.
            // Including in the request a default limit of
            // items could be good idea as well.
            return relatedSearchItems;
        };

        /***********************************************************************/
        // Hardcoded data
        /***********************************************************************/
        var searchResults = [{
            title: "Ice cream sandwich history",
            description: "This document is about ice cream sandwich history in San Jose, Costa Rica.",
            recomendation: "Sharable with clients to know how to easily make ice cream sandwichs",
            documentId: 27091990,
            timestamp: 1441366472,
            downloadCount: 30,
            rate: 3,
            rateCount: 5,
            commentsCount: 4,
            authorslist: [{
                id: 1,
                username: "jazagoury",
                enabled: true,
                firstName: "Jessica",
                lastName: "Azagoury",
                picture: "assets/images/user-1.jpg",
                email: "jessica.azagoury@hpe.com"
            }]
        }, {
            title: "Ice cream sandwich recipes",
            description: "This document contains 10 ice cream sandwich recipes to do at home.",
            recomendation: "Sharable with clients to know how to easily make ice cream sandwichs.",
            documentId: 27091980,
            timestamp: 1445589272,
            downloadCount: 55,
            rate: 5,
            rateCount: 25,
            commentsCount: 10,
            authorslist: [{
                id: 1,
                username: "jazagoury",
                enabled: true,
                firstName: "Jessica",
                lastName: "Azagoury",
                picture: "assets/images/user-1.jpg",
                email: "jessica.azagoury@hpe.com"
            }, {
                id: 2,
                username: "bvargas",
                enabled: true,
                firstName: "Bryan",
                lastName: "Vargas",
                picture: "assets/images/user-2.jpg",
                email: "bryan.vargas@hpe.com"
            }]
        }, {
            title: "Ice cream sandwich",
            description: "This document contains 10 ice cream sandwich recipes to do at home.",
            recomendation: "Sharable with clients to know how to easily make ice cream sandwichs.",
            documentId: 27091980,
            timestamp: 1445589272,
            downloadCount: 0,
            rate: 5,
            rateCount: 7,
            commentsCount: 3,
            authorslist: [{
                id: 1,
                username: "jazagoury",
                enabled: true,
                firstName: "Jessica",
                lastName: "Azagoury",
                picture: "assets/images/user-1.jpg",
                email: "jessica.azagoury@hpe.com"
            }, {
                id: 2,
                username: "bvargas",
                enabled: true,
                firstName: "Bryan",
                lastName: "Vargas",
                picture: "assets/images/user-2.jpg",
                email: "bryan.vargas@hpe.com"
            }]
        }];

        var itemsList = [{
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

        var relatedSearchItems = [{
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

        var searchFilters = [{
            label: "Category",
            filters: [{
                label: "All",
                id: 0,
                active: true
            }, {
                label: "Other",
                id: 1,
                active: false
            }, {
                label: "R&D",
                id: 2,
                active: false
            }]
        }, {
            label: "Document Type",
            filters: [{
                label: "All",
                id: 0,
                active: true
            }, {
                label: "Web Page",
                id: 1,
                active: false
            }, {
                label: "Adobe PDF",
                id: 2,
                active: false
            }, {
                label: "Word",
                id: 3,
                active: false
            }, {
                label: "Excel",
                id: 4,
                active: false
            }]
        }, {
            label: "Location",
            filters: [{
                label: "Worldwide",
                id: 0,
                active: true
            }, {
                label: "EUR",
                id: 1,
                active: false
            }, {
                label: "EMEA",
                id: 2,
                active: false
            }, {
                label: "US",
                id: 3,
                active: false
            }]
        }];
    }]);
