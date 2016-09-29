angular.module('bank.friendlyActionType.filter', [])
.filter('bkFriendlyActionType', friendlyActionType);

function friendlyActionType() {
	return function(actionType) {
		return actionType == 'deposit' ? 'Depósito' : 'Saque';
	};
};
