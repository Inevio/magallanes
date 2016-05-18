'use strict';

module.exports = function( ip, image, instances, callback ){

  mysql.query('SELECT * FROM nodes WHERE ip = ? LIMIT 1', [ ip ], function ( err, rows ) {

    if ( err ) {
      return callback ( err );
    }

    if ( !rows.length ) {
      return callback( 'There are no machines running' );
    } else {

      var client = vertigo.createClient({ host : ip, port : 21042 });

      client.request('monitorScaleImage', image, instances, function ( err, res ) {
        callback( err, res );
      });

    }

  });

};
