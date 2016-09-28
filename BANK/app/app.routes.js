angular.module('bank.routes', ['ngRoute'])
.config(config);

function config($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'app/components/home/home.view.html',
		controller: 'HomeController',
		controllerAs: 'vm'
	})

	.otherwise({redirectTo: '/'});
};
