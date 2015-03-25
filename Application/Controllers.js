angular.module ('CMApplication.Controllers')
       .controller ('CustomerController', ['$scope', 'CustomerRepository',
             function ($scope, CustomerRepository) {
                   CustomerRepository.getCustomers (function (data) {
                         $scope.customers = data;
	           });
}]);
