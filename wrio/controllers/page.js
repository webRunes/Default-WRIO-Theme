'use strict'

angular.module('main').controller('page', ['$scope', page]);

function page($scope){
	var vm = this;
    vm.ld = JSON.parse($("script[type='application/ld+json']").html());
    vm.datatype = vm.ld.entity.toLowerCase();
    console.log(vm.ld);
}