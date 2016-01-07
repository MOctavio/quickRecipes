angular.module('quickRecipes.controllers')
    .controller('HomeController', ['$scope', '$location', 'SearchService', function($scope, $location, SearchService) {
        var documents = SearchService.getItemsList();
        $scope.selected = SearchService.getActiveSearchElement();

        this.redirectTo = function(url) {
            if (url) $location.url(url);
        };

        $scope.search = {
            items: documents,
            options: {
                chevron: true,
                advanceSearch: false
            },
            activeItem: $scope.selected
        };
    }]);
