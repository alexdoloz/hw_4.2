'use strict';

angular
    .module('myApp')
    .controller('MyAccountCtrl', function () {
        var vm = this;
        vm.save = function (formData, form) {
            if (form.$valid) {
                console.log(formData);
            }
        };
    });