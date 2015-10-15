angular.module('baseproject', ['ui.router', 'ngAnimate', 'baseproject.services', 'baseproject.controllers', 'baseproject.directives', 'baseproject.filters'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
	    .state('home', {
	        url: '/',
	        templateUrl: 'views/home/home.html'
	    });

}]);

angular.module('baseproject.services',[]);
angular.module('baseproject.controllers',[]);
angular.module('baseproject.directives',[]);
angular.module('baseproject.filters',[]);