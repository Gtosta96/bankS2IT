angular.module('bank',
	[
		'bank.routes',

		'bank.home.controller',

		'bank.bankStatement.service',
		'bank.storage.service',

		'bank.friendlyActionType.filter',

		'ui.bootstrap'
	]);
