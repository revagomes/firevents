angular.module('starter.controllers', [])

.controller('AgendaCtrl', function($scope, Agenda) {
  $scope.agenda = Agenda.all();
})

.controller('FavoritesCtrl', function($scope) {
  
})

.controller('AgendaDetailCtrl', function($scope, $stateParams, Agenda) {
  $scope.presentation = Agenda.get($stateParams.agendaId);
})

.controller('AboutCtrl', function($scope) {
});
