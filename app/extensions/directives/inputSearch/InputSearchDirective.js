angular.module('knowlEDGE.directives')
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
                this.onSelect = function($item) {
                    SearchService.setActiveSearchElement($item);
                };
                this.redirectTo = function(url) {
                    if (url) $location.url(url);
                };
            }],
            controllerAs: 'inputSearch',
            link: function($scope, element, attrs, controller) {}
        };
    }]);
