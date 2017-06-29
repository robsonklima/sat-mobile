app.controller("chamadosMapaCtrl", function ($scope, $location, $rootScope, $cordovaGeolocation, config, messages, geoLocationService, osService) {
    $scope.options = { scrollwheel: false };
    var posOptions = { timeout: 20000, enableHighAccuracy: true };
    $scope.map = { center: { latitude: null, longitude: null } };
    $scope.loading = true;
    $scope.errors = [];
    
    $scope.onSwipeRight = function(ev) {
        $location.path('chamados-lista');
    };
    
    document.addEventListener("deviceready", function () {
      $cordovaGeolocation.getCurrentPosition(posOptions).then(function(position) {
          var myLat = position.coords.latitude;
          var myLng = position.coords.longitude;
          $scope.map = { center: { latitude: myLat, longitude: myLng }, zoom: 10 };
          $scope.markers = [];
          $scope.markers.push({ id: 9999, latitude: myLat, longitude: myLng, 
            title: messages.minhaLocalizacao, "icon": config.iconsUrl + "car/4.png" });
          
          osService.find().success(function(data, status) {
              $scope.places = data.orders;
    
              angular.forEach($scope.places, function(value, key) {
                  geoLocationService.findByAddress($scope.places[key].address).success(function(data, status) {
                    if (data.status !== 'OK') {
                        $scope.places[key].formattedAddress = messages.enderecoNaoEncontrado;
                        return
                    }

                    $scope.places[key].latitude = data.results[0].geometry.location.lat;
                    $scope.places[key].longitude = data.results[0].geometry.location.lng;
                    $scope.places[key].formattedAddress = data.results[0].formatted_address;
                    geoLocationService.findDrivingRoute(myLat, myLng, $scope.places[key].latitude, $scope.places[key].longitude).success(function(data, status) {
                      if (data.rows[0].elements[0].status === 'ZERO_RESULTS') {
                          $scope.places[key].distance = messages.distanciaNaoEncontrada;          
                          $scope.places[key].duration = messages.duracaoNaoEncontrada;            
                          return
                      }

                      $scope.places[key].distance = data.rows[0].elements[0].distance.text;
                      $scope.places[key].duration = data.rows[0].elements[0].duration.text;

                      $scope.markers.push({ 
                          id: key, 
                          latitude: $scope.places[key].latitude, 
                          longitude: $scope.places[key].longitude, 
                          title: 
                            '<a href="#/chamado/' + $scope.places[key].os + '" style="text-decoration:none;">' 
                                + $scope.places[key].os + '</a><br/>'
                            + $scope.places[key].local + "<br/>" 
                            + $scope.places[key].distance + ", " 
                            + $scope.places[key].duration + "<br/>" 
                            + "SLA: " + $scope.places[key].sla_status,
                          icon: config.iconsUrl + $scope.places[key].marker_color + "/" 
                            + $scope.places[key].order + ".png"
                      });

                    }).error(function(data, status) {
                        $scope.places[key].distance = messages.distanciaNaoEncontrada;          
                        $scope.places[key].duration = messages.duracaoNaoEncontrada;          
                    });
                  }).error(function(data, status) {
                      $scope.places[key].formattedAddress = messages.enderecoNaoEncontrado;
                  });
              }, $scope.places);
          }).error(function(err, status) {
              $scope.errors.push({ details: err });
          }).finally(function() {
              $scope.loading = false;
          });
          
      }, function(error) {
          $scope.errors.push({ details: error.message });
      });
    }, false);    
});