angular.module('bank.home.controller', [])
.controller('HomeController', homeController);

homeController.$inject = ['BankStatementService'];
function homeController(BankStatementService) {

    var vm = this;
    vm.mensagem = {};
    vm.filtro = '';
    vm.data = getBankStatements();
    vm.remove = remove;

    function getBankStatements() {
        vm.data = BankStatementService.get();
    };

    function remove(contato) {
        BankStatementService.remove({id: contato.id});
    };
};
