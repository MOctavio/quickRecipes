angular.module('knowlEDGE.controllers')
    .controller('SearchController', ['$scope', '$location', 'SearchService', function($scope, $location, SearchService) {
        var documents = SearchService.getItemsList();
        $scope.selected = SearchService.getActiveSearchElement();
        $scope.search = {
            items: documents,
            options: {
                chevron: true,
                advanceSearch: true
            },
            activeItem: $scope.selected
        };
        this.redirectTo = function(url) {
            console.log(url);
            if (url) $location.url(url);
        };
    }]);
