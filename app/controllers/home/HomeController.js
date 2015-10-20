angular.module('knowlEDGE.controllers')
    .controller('HomeController', ['$scope', '$location', 'SearchService', function($scope, $location, SearchService) {
        $scope.selected = undefined;
        $scope.documents = SearchService.getDocumentList();

        this.onSelect = function($item) {
            SearchService.setActiveSearchElement($item);
        };
        this.redirectTo = function(url) {
            if (url) $location.url(url);
        };

    }]);
