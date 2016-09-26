(function() {
    
    var CustomersController = function ($scope, customersService, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;

        function init() {
            $scope.customers = customersService.getCustomers();
        }
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
        
        init();
        
    };
    
    CustomersController.$inject = ['$scope', 'customersService', 'appSettings'];

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);
    
}());