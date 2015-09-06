angular.module('sandbox', ['ui.router','ngAnimate','sandbox.controllers','sandbox.services','sandbox.directives'])

.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'index.html'
            });

    }
]);

angular.module('sandbox.controllers', []);
angular.module('sandbox.services', []);
angular.module('sandbox.directives', []);
