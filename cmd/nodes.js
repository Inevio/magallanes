'use strict';

module.exports = function( callback ){

  console.log( new Date() + ' | nodes' );

  mysql.query('SELECT name, ip, lastPing FROM nodes WHERE 1', function( error, rows ){

    async.map( rows, function( machine,callback ){

      machine.status = machine.lastPing > ( Date.now() - 15000 ) ? 'ON' : 'OFF';

      if( machine.status === 'OFF' ){

        machine.containers = [];
        delete machine.lastPing;
        return callback( null, machine );

      }

      var client = vertigo.createClient({ host: machine.ip, port: 21042 });

      client.request('monitorNode', function ( err, res ) {

        if( err ){
          return callback( err );
        }

        machine.containers = res;
        delete machine.lastPing;
        callback( null, machine );

      });

    }, callback );

  });

};
