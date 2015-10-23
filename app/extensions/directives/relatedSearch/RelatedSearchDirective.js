angular.module('knowlEDGE.directives')
    .directive('relatedSearch', [function() {
        return {
            scope: {
                // items: '=',
                // options: '=',
                // activeItem: '=?'
            },
            restrict: 'E',
            templateUrl: 'extensions/directives/relatedSearch/_relatedSearchTemplate.html',
            controller: ['$scope', '$location', 'SearchService', function($scope, $location, SearchService) {
                $scope.searchItems = SearchService.getRelatedSearchItems();

                this.redirectTo = function(url) {
                    if (url) $location.url(url);
                };
            }],
            controllerAs: 'relatedSearch',
            link: function($scope, element, attrs, controller) {}
        };
    }]);
