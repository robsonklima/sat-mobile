angular.module("app").config(function ($routeProvider, $httpProvider) {

    // avoid browser cash
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider.when("/", {
       templateUrl: "views/login.html",
       controller: "loginCtrl"
    });
    
    $routeProvider.when("/login", {
       templateUrl: "views/login.html",
       controller: "loginCtrl"
    });

    $routeProvider.when("/chamados-lista", {
       templateUrl: "views/chamados-lista.html",
       controller: "chamadosListaCtrl"
    });
    $routeProvider.when("/chamados-mapa", {
       templateUrl: "views/chamados-mapa.html",
       controller: "chamadosMapaCtrl"
    });
    $routeProvider.when("/chamado", {
       templateUrl: "views/chamado.html",
       controller: "chamadoCtrl"
    });
    $routeProvider.when("/chamado-detalhes-detalhes", {
       templateUrl: "views/chamado-detalhes-detalhes.html"
    });
    $routeProvider.when("/chamado-detalhes-servico", {
       templateUrl: "views/chamado-detalhes-servico.html"
    });
    $routeProvider.when("/chamado-detalhes-acoes", {
       templateUrl: "views/chamado-detalhes-acoes.html"
    });
    $routeProvider.when("/chamado-detalhes-acoes-add", {
       templateUrl: "views/chamado-detalhes-acoes-add.html",
       controller: "chamadoDetalhesAcoesAddCtrl"
    });

    // dashboard
    $routeProvider.when("/home", {
       templateUrl: "views/home.html",
       controller: "homeCtrl"
    });

    // Error
    $routeProvider.when("/erro", {
       templateUrl: "views/erro.html"
    });

    // Redirect
    $routeProvider.otherwise({redirectTo: "/erro"});
});
