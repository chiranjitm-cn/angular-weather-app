'use strict';

/* Directives */
angular.module('myApp')
.directive('directivTest', [function () {
	return {
		restrict: 'A',
		template:'<div class="showDirective">Text from directive</div>',
		link: function (scope, iElement, iAttrs) {
			
		}
	};
}])