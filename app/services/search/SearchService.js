angular.module('quickRecipes.services')
    .service('SearchService', [function() {
        var activeSearchElement;
        var observers = [];
        var self = this;

        this.setActiveSearchElement = function(element) {
            activeSearchElement = element;
            self.notifyObservers();
        };
        this.getActiveSearchElement = function() {
            return activeSearchElement;
        };
        this.registerObserver = function(f) {
            observers.push(f);
        };
        this.notifyObservers = function() {
            observers.forEach(function(observer) {
                observer(activeSearchElement);
            });
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
            id: 0,
            title: "Fresh fruit skewers",
            description: "I was looking for a different way to serve fruit, and it just popped into my head! Why not use fruit skewers?",
            timestamp: 1441366472,
            views: 30,
            rate: 3,
            rateCount: 5,
            commentsCount: 4,
            author: {
                id: 1,
                username: "bflay",
                firstName: "Bobby",
                lastName: "Flay",
                picture: "assets/images/user-1.jpg",
                email: "bobby.flay@sample.com"
            },
            favorite: false,
            category: ["Desserts", "Healthy"]
        }, {
            id: 1,
            title: "Gourmet dessert",
            description: "This is a festive, crunchy, and fruity dessert with sweet oranges and strawberries",
            timestamp: 1445589272,
            views: 15,
            rate: 5,
            rateCount: 25,
            commentsCount: 10,
            author: {
                id: 2,
                firstName: "Julia",
                lastName: "Child",
                picture: "assets/images/user-2.jpg",
                email: "julia.child@sample.com"
            },
            favorite: true,
            category: ["Desserts"]
        }, {
            id: 2,
            title: "Lemonade gelatin",
            description: "Lemon gelatin, lemonade concentrate, and lemon zest lend the flavor to this molded dessert.",
            timestamp: 1445589272,
            views: 14,
            rate: 5,
            rateCount: 7,
            commentsCount: 3,
            author: {
                id: 2,
                firstName: "Julia",
                lastName: "Child",
                picture: "assets/images/user-2.jpg",
                email: "julia.child@sample.com"
            },
            favorite: true,
            category: ["Desserts"]
        }, {
            id: 3,
            title: "Royal dessert",
            description: "A yummy dessert made with lemonadeand frozen whipped topping. Freezes well, too.",
            timestamp: 1446472244,
            views: 15,
            rate: 3,
            rateCount: 5,
            commentsCount: 4,
            author: {
                id: 1,
                username: "bflay",
                firstName: "Bobby",
                lastName: "Flay",
                picture: "assets/images/user-1.jpg",
                email: "bobby.flay@sample"
            },
            favorite: false,
            category: ["Desserts"]
        }, {
            id: 4,
            title: "Cherry pie crust ",
            description: "It is our favorite! Prep time does not include the time it takes to pit the cherries or make the pie crust.",
            timestamp: 1445435440,
            views: 17,
            rate: 4,
            rateCount: 13,
            commentsCount: 4,
            author: {
                id: 1,
                username: "bflay",
                firstName: "Bobby",
                lastName: "Flay",
                picture: "assets/images/user-1.jpg",
                email: "bobby.flay@sample"
            },
            favorite: false,
            category: ["Desserts"]
        }, {
            id: 5,
            title: "Sour cherry pie",
            description: "You've never had a cherry pie this good—an incredible sour cherry filling, a light and flaky crust, and vanilla ice cream to top it all off.",
            timestamp: 1441366472,
            views: 28,
            rate: 2,
            rateCount: 2,
            commentsCount: 1,
            author: {
                id: 1,
                username: "bflay",
                firstName: "Bobby",
                lastName: "Flay",
                picture: "assets/images/user-1.jpg",
                email: "bobby.flay@sample"
            },
            favorite: false,
            category: ["Desserts", "Other"]
        }, {
            id: 6,
            title: "Chocolate cake",
            description: "Chocolate cake, chocolate frosting, but with what a difference. Peanut butter is the magic ingredient.  It is spread between the cake and the frosting.",
            timestamp: 1441366472,
            views: 24,
            rate: 2,
            rateCount: 2,
            commentsCount: 1,
            author: {
                id: 1,
                username: "bflay",
                firstName: "Bobby",
                lastName: "Flay",
                picture: "assets/images/user-1.jpg",
                email: "bobby.flay@sample"
            },
            favorite: false,
            category: ["Desserts", "Other"]
        }];

        var itemsList = [{
            id: 0,
            label: "Fresh fruit skewers"
        }, {
            id: 1,
            label: "Gourmet dessert"
        }, {
            id: 2,
            label: "Lemonade gelatin"
        }, {
            id: 3,
            label: "Royal dessert"
        }, {
            id: 4,
            label: "Chocolate cake "
        }, {
            id: 5,
            label: "Sour cherry pie"
        }];

        var relatedSearchItems = [{
            label: "Lemonade cake"
        }, {
            label: "Raspberry Sorbet"
        }, {
            label: "Appricot dessert"
        }, {
            label: "Ice sandwich"
        }, {
            label: "Cherry pie"
        }, {
            label: "Blueberry pie"
        }, {
            label: "Strawberry ice cream"
        }, {
            label: "Tiramisu Toffee"
        }];
        var searchFilters = [{
            label: "Category",
            filters: [{
                label: "Healthy",
                id: 2,
                active: false
            }, {
                label: "Dessert",
                id: 1,
                active: false
            }, {
                label: "Other",
                id: 1,
                active: false
            }]
        }];
    }]);
