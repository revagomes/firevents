angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Agenda', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var agenda = [
    {
      id: 0,
      name: 'Leading a Big Bang Agile Transformation',
      speaker: 'Thiago Palma',
      date: '2014/11/05',
      time: '10:00',
      room: 'Sala Jurerê'
    },
    { id: 1,
      name: 'Refatorar codigo migrano de Cobol',
      speaker: 'Thiago Palma',
      date: '2014/11/05',
      time: '10:00',
      room: 'Sala Jurerê'
    },
    {
      id: 2,
      name: 'From Zero to Agile',
      speaker: 'Thiago Palma',
      date: '2014/11/05',
      time: '10:00',
      room: 'Sala Jurerê'
    },
    {
      id: 3,
      name: 'Scrumetes - uma comunidade de práticas',
      speaker: 'Thiago Palma',
      date: '2014/11/05',
      time: '10:00',
      room: 'Sala Jurerê'
    }
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
