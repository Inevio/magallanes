'use strict';

module.exports = function ( images, callback ) {

  mysql.query('SELECT * FROM nodes', function ( err, rows ) {

    if ( err ) {
      return callback( err );
    }

    if ( !rows.length ) {
      return callback('No machines running');
    } else {

      async.map( rows, function ( machine, callback ) {

        var client = vertigo.createClient({ host : machine.ip, port : 21042 });
        client.request('monitorUpdateImages', images, callback);

      }, function ( err, bodies ) {
        callback( err, bodies );
      });

    }

  });

};
