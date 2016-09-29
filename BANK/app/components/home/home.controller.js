angular.module('bank.home.controller', [])
.controller('HomeController', homeController);

homeController.$inject = ['BankStatementService'];
function homeController(BankStatementService) {

    var vm = this;
    vm.mensagem = {};
    vm.filtro = '';
    vm.remove = remove;
    vm.actions = [];
    vm.addAction = addAction;

    getBankStatements();

    function getBankStatements() {
        vm.actions = BankStatementService.get();
    };

    function addAction(action) {
        BankStatementService.add(action);
        getBankStatements();
    };

    function remove(action) {
        BankStatementService.remove(action);
        getBankStatements();
    };
};
