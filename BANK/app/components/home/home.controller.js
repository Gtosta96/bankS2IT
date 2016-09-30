angular.module('bank.home.controller', [])
.controller('HomeController', homeController);

homeController.$inject = ['BankStatementService'];
function homeController(BankStatementService) {

    var vm = this;
    vm.onlyNumbers = /^\d+$/;
    vm.mensagem = {};
    vm.filtro = '';
    vm.total;
    vm.actions = [];
    vm.remove = remove;
    vm.addAction = addAction;

    vm.currentPage = 1;
    vm.numPerPage = 10;
    vm.maxSize = 5;


    getBankStatements();

    function getBankStatements() {
        vm.actions = BankStatementService.get();
        setActionsTotal();
    };

    function addAction(action) {
        if(action.value) BankStatementService.add(action);
        getBankStatements();
    };

    function remove(action) {
        BankStatementService.remove(action);
        getBankStatements();
    };

    function setActionsTotal() {
        var deposit = 0;
        var withdraw = 0;
        var action;
        for(var i = 0; i < vm.actions.length; i++) {
            action = vm.actions[i];
            if(action.actionType == 'withdraw') {
                withdraw += action.value;
            } else {
                deposit += action.value;
            }
        }

        vm.total = deposit - withdraw;
    };
};
