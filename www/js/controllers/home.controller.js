app.controller("homeCtrl", function($scope, $rootScope, $interval, $cordovaNetwork, $cordovaGeolocation, geoLocationService){
    document.addEventListener("deviceready", function () {
        
        $interval.cancel($rootScope.locationInterval);
        $rootScope.locationInterval = $interval(getLocation, 60000);
        getNetwork();
        
        function getLocation() {
            var posOptions = { timeout: 20000, enableHighAccuracy: true };
            
            $cordovaGeolocation.getCurrentPosition(posOptions).then(function(position) {
                $rootScope.myLatitude = position.coords.latitude;
                $rootScope.myLongitude = position.coords.longitude;
                
                sendLocation($rootScope.myLatitude, $rootScope.myLongitude);
            }, function(error) {
                $rootScope.myLatitude = null;
                $rootScope.myLongitude = null;
            });
        }
        
        function getNetwork() {
            $rootScope.isConnected = $cordovaNetwork.isOnline();
            
            $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
              $rootScope.isConnected = true;
            });

            $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
              $rootScope.isConnected = false;
            });
        }
        
        function sendLocation(latitude, longitude) {
            geoLocationService.insert(latitude, longitude).success(function(data, status) {
                console.log(data);
            }).error(function(data, status) { 
                console.log(data);
            });
        };

    }, false);
    
});

