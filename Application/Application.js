angular.module ('CMApplication.Controllers', []);
angular.module ('CMApplication.Repositories', []);

angular.module ('CMApplication', ['ngRoute',
                                  'CMApplication.Controllers',
                                  'CMApplication.Repositories'])
       .config (['$routeProvider', function ($routeProvider)
{
    $routeProvider
        .when ('/customers', {
            controller: 'CustomerController',
            templateUrl: 'Partials/CustomersPartialView.html'
        })
        .otherwise ({
            redirectTo: '/customers'
        });
}]);