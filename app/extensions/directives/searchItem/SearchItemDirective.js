angular.module('knowlEDGE.directives')
    .directive('searchItem', [function() {
        return {
            scope: {
                options: '=?'
            },
            restrict: 'E',
            templateUrl: 'extensions/directives/searchItem/_searchItemTemplate.html',
            controller: ['$scope', '$location', 'SearchService', function($scope, $location, SearchService) {
                $scope.options = $scope.options || {
                    max: 5,
                    isReadonly: false,
                    stateOn: "fa fa-star",
                    stateOff: "fa fa-star-o"
                };
                $scope.searchItems = SearchService.getSearchResults();
                this.redirectTo = function(url) {
                    if (url) $location.url(url);
                };
                $scope.hoveringOver = function(value) {
                };
            }],
            controllerAs: 'searchItem',
            link: function($scope, element, attrs, controller) {}
        };
    }]);
