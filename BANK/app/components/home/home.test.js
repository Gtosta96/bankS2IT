describe('Test: Testing Bank Statement', function() {

	beforeEach(angular.mock.module('bank.storage.service'));
    beforeEach(angular.mock.module('bank.bankStatement.service'));

    var BankStatementService;
    beforeEach(inject(function(_BankStatementService_) {
        BankStatementService = _BankStatementService_;
    }));


    it('Should contain all factory functions defined', function() {

        var test = [];
        var keys = Object.keys(BankStatementService);
        keys.forEach(function(attribute) {
            test.push(BankStatementService[attribute]);
        });
        var expectation = new Array(test.length);

        expect(test).not.toBe(expectation);
    });
});
