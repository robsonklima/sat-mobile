var app = angular.module("app", ["ngRoute", "ngCookies", "ngMessages", "ngMaterial", "ngCordova", "uiGmapgoogle-maps"])
  .run(['$rootScope', '$cookieStore', '$location', '$http', '$cordovaNetwork', '$interval', '$cordovaGeolocation', function ($rootScope, $cookieStore, $location, $http, $cordovaNetwork, $interval, $cordovaGeolocation) {
    
    document.addEventListener("deviceready", function () {
        $interval.cancel($rootScope.locationInterval);
        $rootScope.locationInterval = $interval(getLocation, 15000);
        
        function getLocation() {
            var posOptions = { timeout: 20000, enableHighAccuracy: true };
            
            $cordovaGeolocation.getCurrentPosition(posOptions).then(function(position) {
                $rootScope.myLatitude = position.coords.latitude;
                $rootScope.myLongitude = position.coords.longitude;
                
                //sendLocation($rootScope.myLatitude, $rootScope.myLongitude);
            }, function(error) {
                $rootScope.myLatitude = null;
                $rootScope.myLongitude = null;
            });
        }
        
        getNetwork();
        
        function getNetwork() {
            $rootScope.isConnected = $cordovaNetwork.isOnline();
            $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
              $rootScope.isConnected = true;
            });
            $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
              $rootScope.isConnected = false;
            });
        }
        
    }, false);
      
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
