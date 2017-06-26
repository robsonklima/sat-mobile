app.controller("chamadosMapaCtrl", function ($scope, $rootScope, geoLocationService, osService) {
    $scope.errors = [];
    if (!$rootScope.myLatitude || !$rootScope.myLongitude) { return }
    
    $scope.options = { scrollwheel: false };
    $scope.map = { center: { latitude: null, longitude: null } };
    $scope.markers = [];
    var posOptions = { timeout: 20000, enableHighAccuracy: true };
    
    $scope.map = { center: { latitude: $rootScope.myLatitude, longitude: $rootScope.myLongitude }, zoom: 10 };
    $scope.markers.push({ id: 9999, latitude: $rootScope.myLatitude, longitude: $rootScope.myLongitude, 
        title: "Minha Localização", "icon":"http://www.robsonlima.com.br/google-icons/car/4.png" });
    
    //http://tancro.e-central.tv/grandmaster/markers/google-icons/

    $scope.places = osService.find();
    
    angular.forEach($scope.places, function(value, key) {
      geoLocationService.findByAddress($scope.places[key].address).success(function(data, status) {
        if (data.status !== 'OK') {
            $scope.places[key].formattedAddress = 'Unable to find address.';
            return
        }

        $scope.places[key].latitude = data.results[0].geometry.location.lat;
        $scope.places[key].longitude = data.results[0].geometry.location.lng;
        $scope.places[key].formattedAddress = data.results[0].formatted_address;
        geoLocationService.findDrivingRoute($rootScope.myLatitude, $rootScope.myLongitude, 
            $scope.places[key].latitude, $scope.places[key].longitude).success(function(data, status) {
          if (data.rows[0].elements[0].status === 'ZERO_RESULTS') {
              $scope.places[key].distance = 'Unable to find distance.';          
              $scope.places[key].duration = 'Unable to find duration.';            
              return
          }

          $scope.places[key].distance = data.rows[0].elements[0].distance.text;
          $scope.places[key].duration = data.rows[0].elements[0].duration.text;

          $scope.markers.push({ 
              id: key, 
              latitude: $scope.places[key].latitude, 
              longitude: $scope.places[key].longitude, 
              title: 
                $scope.places[key].os + "<br/>" 
                + $scope.places[key].local + "<br/>" 
                + $scope.places[key].distance + ", " 
                + $scope.places[key].duration + "<br/>" 
                + "SLA: " + $scope.places[key].sla_status,
              icon: "http://www.robsonlima.com.br/google-icons/" + $scope.places[key].marker_color + "/" 
                + $scope.places[key].order + ".png"
          });
        }).error(function(data, status) {
            $scope.places[key].distance = 'Unable to find distance.';          
            $scope.places[key].duration = 'Unable to find duration.';          
        });
      }).error(function(data, status) {
          $scope.places[key].formattedAddress = 'Unable to find address.';
      });
    }, $scope.places);
});