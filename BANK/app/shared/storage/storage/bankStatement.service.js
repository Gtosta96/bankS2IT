angular.module('bank.bankStatement.service', [])
.factory('BankStatementService', bankStatementService);

bankStatementService.$inject = ['$log', 'StorageService'];
function bankStatementService($log, StorageService) {
	const CART_KEY = 'cart';
	return {
		add: add,
		remove: remove,
		getCart: getCart,
		clear: clear
	};

	function add(product) {
		var cart = StorageService.get(CART_KEY) || {};

		var productInCart = cart[product.id];
		if(productInCart) {
			productInCart.qntCart++;
		} else {
			product.qntCart = 1;
			cart[product.id] = product;
		}

		StorageService.set(CART_KEY, cart);
	};

	function getCart() {
		return StorageService.get(CART_KEY);
	}

	function remove(key) {
 	   var cart = StorageService.get(CART_KEY);
   };

   function clear(key) {
	   return localStorage.removeItem(CART_KEY);
   };
};
