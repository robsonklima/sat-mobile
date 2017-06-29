app.factory("osService", function($http, config) {

    var _find = function() {
        return $http({
            url: config.apiUrl + 'orders',
            method: 'GET'
        });
    }

    var _findById = function(id) {
        return $http({
            url: config.apiUrl + 'orders' + '/' + id,
            method: 'GET'
        });
    }

    return {
        find: _find, 
        findById: _findById
    };
    
});

 