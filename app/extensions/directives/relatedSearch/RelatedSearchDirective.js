angular.module('quickRecipes.directives')
    .directive('relatedSearch', [function() {
        return {
            scope: {},
            restrict: 'E',
            templateUrl: 'extensions/directives/relatedSearch/_relatedSearchTemplate.html',
            controller: ['$scope', '$location', 'SearchService', function($scope, $location, SearchService) {
                $scope.relatedSearchItems = SearchService.getRelatedSearchItems();

                this.redirectTo = function(url) {
                    if (url) $location.url(url);
                };
            }],
            controllerAs: 'relatedSearch',
            link: function($scope, element, attrs, controller) {}
        };
    }]);
