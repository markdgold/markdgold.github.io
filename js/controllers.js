angular.module('PortfolioCtrls', [])

.controller('SlideCtrl', ['$scope', function($scope){
	$(document).ready(function(){
		$('main').addClass('animated fadeIn');
	});
}])

.controller('WorkCtrl', ['$scope', function($scope){
	$(document).ready(function(){
		$('main').addClass('animated fadeIn');
		// $('.project-left').addClass('animated slideInLeft')
		// $('.project-right').addClass('animated slideInRight')
	});
}]);
