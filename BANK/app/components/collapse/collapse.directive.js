angular.module('bank.collapse.directive', [])
.directive('bkCollapse', collapse);

function collapse() {
	return {
		restrict: 'E',
		templateUrl: 'app/components/collapse/collapse.view.html'
	};
};
