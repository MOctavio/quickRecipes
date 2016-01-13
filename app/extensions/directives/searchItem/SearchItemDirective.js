angular.module('quickRecipes.directives')
    .directive('searchItem', [function() {
        return {
            scope: {
                options: '=?'
            },
            restrict: 'E',
            templateUrl: 'extensions/directives/searchItem/_searchItemTemplate.html',
            controller: ['$scope', '$location', 'SearchService', function($scope, $location, SearchService) {

                var update = function (searchItems){
                    $scope.searchFilter = searchItems.label;
                };
                SearchService.registerObserver(update);

                $scope.options = $scope.options || {
                    max: 5,
                    isReadonly: false,
                    stateOn: "qr-spoon",
                    stateOff: "qr-spoon-o"
                };
                $scope.searchItems = SearchService.getSearchResults();
                this.redirectTo = function(url) {
                    if (url) $location.url(url);
                };
                $scope.hoveringOver = function(value) {};
                $scope.favorite = function(item) {
                    item.favorite = !item.favorite;
                };
            }],
            controllerAs: 'searchItem',
            link: function($scope, element, attrs, controller) {}
        };
    }]);
