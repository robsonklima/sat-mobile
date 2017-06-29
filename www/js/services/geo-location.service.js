app.factory("geoLocationService", function($http, $location, config) {

    var _findDrivingRoute = function(latOrigin, lngOrigin, latDestiny, lngDestiny) {
        return $http({
            url:'https://maps.googleapis.com/maps/api/distancematrix/json?' 
                    + 'origins=' + latOrigin + ',' + lngOrigin 
                    + '&destinations=' + latDestiny + ',' + lngDestiny 
                    + '&mode=driving&language=en-EN&key=' + config.googleKey,
            method: 'GET'
        });
    }
    
    var _findByLatLong = function(lat, lng) {
        return $http({
            url:'https://maps.googleapis.com/maps/api/geocode/json?latlng=' 
                + lat + ',' + lng + '&key='  + config.googleKey,
            method: 'GET'
        });
    }
 
    var _findByAddress = function(address) {
        return $http({
            url:'https://maps.googleapis.com/maps/api/geocode/json?address=' 
                + address + '&key=' + config.googleKey,
            method: 'GET'
        });
    }
    
//    var _insert = function(latitude, longitude) {
//        var location = {
//            latitude: latitude,
//            longitude: longitude, 
//            date_add: new Date()
//        };
//        
//        return $http({
//            url: config.apiUrl + 'geolocations/',
//            method: 'POST',
//            data: location
//        });
//    }
    
    return {
        findDrivingRoute: _findDrivingRoute,
        findByLatLong: _findByLatLong,
        findByAddress: _findByAddress
//        insert: _insert
    };
    
});
