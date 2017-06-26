app.controller("loginCtrl", function ($scope, $rootScope, $location, loginService) {
   
    loginService.clearCredentials();
    $scope.errors = [];
    
    $scope.login = function(user) {
      $scope.loading = true;
        
      loginService.login(user).success(function(data, status) {
          loginService.setCredentials(user);
          $location.path('home');
      }).error(function(data, status) { 
          $scope.error = "E-mail ou senha incorretos.";
      }).finally(function() {
          $scope.loading = false;
      });
    };
   
});