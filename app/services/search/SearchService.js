angular.module('knowlEDGE.services')
    .service('SearchService', [function() {
        var activeSearchElement;

        this.setActiveSearchElement = function(document) {
            activeSearchElement = document;
        };

        this.getActiveSearchElement = function() {
            return activeSearchElement;
        };
        this.getSearchResults = function() {
            // TODO: Server side implementation.
            // the activeSearchElement should be sent
            // to the server to get a result list.
            return [{
                title: "Ice cream sandwich history",
                description: "This document is about ice cream sandwich history in San Jose, Costa Rica.",
                recomendation: "Sharable with clients to know how to easily make ice cream sandwichs",
                documentId: 27091990,
                timestamp: 1441366472000,
                downloadcount: 30,
                rating: 3,
                ratingCount: 5,
                commentsCount: 4,
                authorslist: [{
                    "id": 1,
                    "username": "jazagoury",
                    "enabled": true,
                    "firstName": "Jessica",
                    "lastName": "Azagoury",
                    "picture": "assets/images/user-1.jpg",
                    "email": "jessica.azagoury@hpe.com"
                }]
            }, {
                title: "Ice cream sandwich recipes",
                description: "This document contains 10 ice cream sandwich recipes to do at home.",
                recomendation: "Sharable with clients to know how to easily make ice cream sandwichs.",
                documentId: 27091980,
                timestamp: 1445589272000,
                downloadcount: 55,
                rating: 5,
                ratingCount: 25,
                commentsCount: 10,
                authorslist: [{
                    "id": 1,
                    "username": "jazagoury",
                    "enabled": true,
                    "firstName": "Jessica",
                    "lastName": "Azagoury",
                    "picture": "assets/images/user-1.jpg",
                    "email": "jessica.azagoury@hpe.com"
                }, {
                    "id": 2,
                    "username": "bvargas",
                    "enabled": true,
                    "firstName": "Bryan",
                    "lastName": "Vargas",
                    "picture": "assets/images/user-2.jpg",
                    "email": "bryan.vargas@hpe.com"
                }]
            }];
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

        this.getRelatedSearchItems = function(itemId) {
            // TODO: Server side implementation.
            // When this get implemented the itemId should
            // be sent to the server and it should respond
            // with an array of items matching related search
            // values.
            // Including in the request a default limit of
            // items could be good idea as well.
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
