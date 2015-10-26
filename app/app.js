angular.module('knowlEDGE', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'angular-humanize', 'knowlEDGE.services', 'knowlEDGE.controllers', 'knowlEDGE.directives', 'knowlEDGE.filters'])

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

angular.module('knowlEDGE.services',[]);
angular.module('knowlEDGE.controllers',[]);
angular.module('knowlEDGE.directives',[]);
angular.module('knowlEDGE.filters',[]);
