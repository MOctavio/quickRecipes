angular.module('knowlEDGE.controllers')
    .controller('HomeController', ['$scope','$location','SearchService', function($scope,$location,SearchService) {
        $scope.selected = undefined;
        $scope.documents = SearchService.getDocumentList();

        this.goToSerachView = function () {
            SearchService.setActiveSearchElement($scope.selected);
            $location.url('/search');
        };
    }]);
