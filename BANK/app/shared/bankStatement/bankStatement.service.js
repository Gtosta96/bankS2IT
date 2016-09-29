angular.module('bank.bankStatement.service', [])
.factory('BankStatementService', bankStatementService);

bankStatementService.$inject = ['$log', 'StorageService'];
function bankStatementService($log, StorageService) {
	const ACTIONS_KEY = 'actions';
	return {
		add: add,
		remove: remove,
		get: get,
		clear: clear
	};

	function add(object) {
		var actions = StorageService.get(ACTIONS_KEY) || [];
		object.id = actions.length;
		actions.push(object);

		StorageService.set(ACTIONS_KEY, actions);
	};

	function get() {
		return StorageService.get(ACTIONS_KEY) || [];
	};

	function remove(action) {
		var actions = StorageService.get(ACTIONS_KEY);

		for(var i = 0; i < actions.length; i++) {
			if(actions[i].id == action.id) actions.splice(i, 1);
		}
		
		StorageService.set(ACTIONS_KEY, actions);
   };

   function clear(key) {
	   return localStorage.removeItem(ACTIONS_KEY);
   };
};
