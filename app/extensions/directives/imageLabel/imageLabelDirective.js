angular.module('knowlEDGE.directives')
    .directive('imageLabel', [function() {
        return {
            scope: {
                items: '=',
                options: '=',
                activeItem: '=?'
            },
            restrict: 'E',
            templateUrl: 'extensions/directives/imageLabel/_imageLabelTemplate.html',
            controller: ['$scope', '$location', 'SearchService', function($scope, $location, SearchService) {
                this.onSelect = function($item) {
                    SearchService.setActiveSearchElement($item);
                };
                this.redirectTo = function(url) {
                    if (url) $location.url(url);
                };
            }],
            controllerAs: 'imageLabel',
            link: function($scope, element, attrs, controller) {}
        };
    }]);
