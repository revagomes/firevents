angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Agenda', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var agenda = [
    { id: 0, name: 'Leading a Big Bang Agile Transformation'},
    { id: 1, name: 'Refatorar codigo migrano de Cobol' },
    { id: 2, name: 'From Zero to Agile' },
    { id: 3, name: 'Scrumetes - uma comunidade de práticas' }
  ];

  return {
    all: function() {
      return agenda;
    },
    get: function(agendaId) {
      // Simple index lookup
      return agenda[agendaId];
    }
  }
});
