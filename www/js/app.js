var app = angular.module("app", ["ngRoute", "ngMessages", "ngCookies", "ngMaterial", "ngCordova", "uiGmapgoogle-maps"])
  .run(['$rootScope', '$cookieStore', '$location', '$http', function (
      $rootScope, $cookieStore, $location, $http) {
        
    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
            $location.path('/login');
        }          
    });
}]);
