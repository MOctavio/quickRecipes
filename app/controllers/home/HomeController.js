angular.module('knowlEDGE.controllers')
    .controller('HomeController', ['$scope', function($scope) {
        $scope.selected = undefined;
        $scope.documents = [{id: 0, label: 'Ice cream sandwich'},{id: 1, label: 'Ice cream recipes'},
            {id: 2, label: 'Ice cream history'},{id: 3, label: 'Cherry pie recipe'},{id: 4, label: 'Cherry pie history'}];

        this.goToSerachView = function () {
            console.log("goToSerachView, " + $scope.selected);
        };
    }]);
