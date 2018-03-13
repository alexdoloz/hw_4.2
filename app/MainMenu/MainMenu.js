'use strict';

angular
    .module('myApp')
    .component('mainMenu', {
        templateUrl: 'MainMenu/MainMenu.html',
        controller: function($scope) {
            $scope.menuItems = [
                {
                    name: "Список",
                    sref: "list"
                },
                {
                    name: "Добавить нового",
                    sref: "createNewPokemon"
                }
            ];
            $scope.selectedIndex = 0;
            $scope.menuItemClicked = function(index) {
                $scope.selectedIndex = index;
            };

            $scope.classForItem = function(index) {
                return ($scope.selectedIndex == index) ? "btn-primary" : "btn-default";
            };
        },
        controllerAs: 'vm'
    })