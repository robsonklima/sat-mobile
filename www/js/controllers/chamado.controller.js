angular.module("app").controller("chamadoCtrl",
  function ($timeout, $scope, $http, $location) {
    
    $scope.tabsConfig = {size: 5, index: 0};
    
    $scope.onSwipeLeft = function(ev) {
        $scope.tabsConfig.index = Math.min($scope.tabsConfig.index + 1, 4) ;
    };

    $scope.onSwipeRight = function(ev) {
        $scope.tabsConfig.index = Math.max($scope.tabsConfig.index - 1, 0);
    };
    
    $scope.tipoCausa = null;
    $scope.tiposServicos = null;

    $scope.loadTiposCausas = function() {
        return $timeout(function() {
              $scope.tiposCausas =  [
                  { id: 1, nome: 'Máquina' },
                  { id: 2, nome: 'Extra Máquina' }
              ];

        }, 1500);
    };
    
    $scope.loadTiposServicos = function() {
        return $timeout(function() {
              $scope.tiposServicos =  [
                  { id: 1, nome: 'Serviço A' },
                  { id: 2, nome: 'Serviço B' },
                  { id: 3, nome: 'Serviço C' },
                  { id: 4, nome: 'Serviço D' },
                  { id: 5, nome: 'Serviço E' },
                  { id: 6, nome: 'Serviço F' },
                  { id: 7, nome: 'Serviço G' }
              ];

        }, 1500);
    };
  
});
