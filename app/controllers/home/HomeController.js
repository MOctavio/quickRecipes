angular.module('knowlEDGE.controllers')
    .controller('HomeController', ['$scope', function($scope) {
        $scope.selected = undefined;
        $scope.documents = ['Ice cream sandwich','Ice cream recipes', 'Ice cream history', 'Cherry pie recipe', 'Cherry pie history'];
    }]);
