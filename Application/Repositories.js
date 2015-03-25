angular.module ('CMApplication.Repositories')
       .factory ('CustomerRepository', ['$http', function ($http) { 
         return { 
           getCustomers: function (callback) { 
             $http.get ('Database/repositories.json').success (function (data) { 
               callback (data); 
             }); 
           } 
         }; 
}]);
