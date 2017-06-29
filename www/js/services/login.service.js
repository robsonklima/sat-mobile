app.factory("loginService", function($http, $rootScope, $cookieStore, base64Factory, config) {

    var _login = function(user) {
        return $http({
           url: config.apiUrl + 'users/me',
           method: 'POST',
           data: user
        })
    }
    
    var _setCredentials = function (user) {
        var authdata = base64Factory.encode(user.email + ':' + user.password);

        $rootScope.globals = { currentUser: user };

        $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
        $cookieStore.put('globals', $rootScope.globals);
    };
    
    var _clearCredentials = function () {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic ';
        };

    return { 
        login: _login,
        setCredentials: _setCredentials,
        clearCredentials: _clearCredentials
    };
    
});
