angular.module("app").factory("loadingInterceptor", function($q, $timeout, $rootScope) {
   return {
       request: function(config) {
           $rootScope.loading = true;

           return config;
       },
       requestError: function(rejection) {
           $rootScope.loading = false;

           return $q.reject(rejection);
       },
       response: function (response) {
           //$timeout(function(){
               $rootScope.loading = false;
           //}, 1500);

           return response;
       },
       responseError: function(rejection) {
           $rootScope.loading = false;

           return $q.reject(rejection);
       }
   };
});
