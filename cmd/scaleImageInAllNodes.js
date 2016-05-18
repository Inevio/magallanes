'use strict';

module.exports = function( image, instances, callback ){

  mysql.query('SELECT * FROM nodes', function ( err, rows ) {

    if ( err ) {
      return callback ( err );
    }

    if ( !rows.length ) {
      return callback( 'There are no machines running' );
    } else {

      async.map( rows, function ( machine, callback ) {

        var client = vertigo.createClient({ host : machine.ip, port : 21042 });

        client.request('monitorScaleImage', image, instances, function ( err, res ) {
          callback( err, res );
        });

      }, callback);

    }

  });

};
