'use strict';

module.exports = function( name, image, instances, callback ){

  mysql.query('SELECT * FROM nodes WHERE name = ? LIMIT 1', [ name ], function ( err, rows ) {

    if ( err ) {
      return callback ( err );
    }

    if ( !rows.length ) {
      return callback( 'There are no machines running' );
    } else {

      var client = vertigo.createClient({ host : rows[0].ip, port : 21042 });

      client.request('monitorScaleImage', image, instances, function ( err, res ) {
        callback( err, res );
      });

    }

  });

};
