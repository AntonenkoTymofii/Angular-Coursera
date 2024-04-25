(function (){
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchItems = '';
        $scope.message = '';

        $scope.checkLunch = function () {
            let items = $scope.lunchItems.split(',');
            let itemsCount = calculateNotEmptyItems(items);

            let inputElem = document.getElementById("lunch-menu");
            let messageElem = document.getElementById("myMessage");

            if (itemsCount === 0){
                $scope.message = 'Please enter data first';
                inputElem.style.borderColor = "red";
                messageElem.style.color = "red";
            } else if (itemsCount <= 3) {
                $scope.message = 'Enjoy!';
                inputElem.style.borderColor = "green";
                messageElem.style.color = "green";
            } else {
                $scope.message = 'Too much!';
                inputElem.style.borderColor = "green";
                messageElem.style.color = "green";
            }
        }

        function calculateNotEmptyItems(items) {
            let counter = 0;

            for (let i = 0; i < items.length; i++) {
                if (items[i].trim() !== '') {
                    counter++;
                }
            }
            return counter;
        }
    }
})();