angular.module('quickRecipes.directives')
    .directive('recipeItem', [function() {
        return {
            scope: {
                recipe: '='
            },
            restrict: 'E',
            templateUrl: 'extensions/directives/recipeItem/_recipeItemTemplate.html',
            controller: ['$scope', '$location', 'SearchService', function($scope, $location, SearchService) {

            }],
            controllerAs: 'recipeItem',
            link: function($scope, element, attrs, controller) {}
        };
    }]);
