angular.module('quickRecipes', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'angular-humanize', 'quickRecipes.services', 'quickRecipes.controllers', 'quickRecipes.directives', 'quickRecipes.filters'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
	    .state('home', {
	        url: '/',
	        templateUrl: 'views/home/home.html'
	    })
        .state('search', {
	        url: '/search',
	        templateUrl: 'views/search/search.html'
	    });

}]);

angular.module('quickRecipes.services',[]);
angular.module('quickRecipes.controllers',[]);
angular.module('quickRecipes.directives',[]);
angular.module('quickRecipes.filters',[]);
