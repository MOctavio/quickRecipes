angular.module('quickRecipes.directives')
    .directive('inputSearch', [function() {
        return {
            scope: {
                items: '=',
                options: '=',
                activeItem: '=?'
            },
            restrict: 'E',
            templateUrl: 'extensions/directives/inputSearch/_inputSearchTemplate.html',
            controller: ['$scope', '$location', 'SearchService', function($scope, $location, SearchService) {
                $scope.activeSearchElement = {
                    id: -1,
                    label: ""
                };

                this.onSelect = function($item) {
                    $scope.activeSearchElement = $item;
                    SearchService.setActiveSearchElement($scope.activeSearchElement);
                };

                this.redirectTo = function(url) {
                    SearchService.setActiveSearchElement($scope.activeSearchElement);
                    if (url) $location.url(url);
                };
            }],
            controllerAs: 'inputSearch',
            link: function($scope, element, attrs, controller) {}
        };
    }]);
