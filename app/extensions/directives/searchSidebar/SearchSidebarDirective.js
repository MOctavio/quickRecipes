angular.module('quickRecipes.directives')
    .directive('searchSidebar', [function() {
        return {
            scope: {
                options: '=?'
            },
            restrict: 'E',
            templateUrl: 'extensions/directives/searchSidebar/_searchSidebarTemplate.html',
            controller: ['$scope', '$location', 'SearchService', function($scope, $location, SearchService) {

                $scope.searchCount = SearchService.getResultsCount();
                $scope.searchFilters = SearchService.getSearchFilters();

                this.redirectTo = function(url) {
                    if (url) $location.url(url);
                };
                $scope.hoveringOver = function(value) {};
                $scope.favorite = function(item) {
                    item.favorite = !item.favorite;
                };

            }],
            controllerAs: 'searchSidebar',
            link: function($scope, element, attrs, controller) {}
        };
    }]);
