'use strict';

/* Directives */

angular.module('spotlistr.directives', []).
	directive('appVersion', ['version', function(version) {
		return function(scope, elm, attrs) {
			elm.text(version);
		};
	}])
	.directive('resultModule', function() {
		return {
			restrict: 'AEC',
			scope: false,
			templateUrl : 'partials/results.html'
		};
	})
	.directive('card', function () {
		return {
			restrict: 'E',
			scope: false,
			templateUrl: 'partials/card.html'
		};
	})
	.directive('adblockWarning', function () {
		return {
			restrict: 'E',
			scope: false,
			templateUrl: 'partials/adblock-warning.html'
		};
	});