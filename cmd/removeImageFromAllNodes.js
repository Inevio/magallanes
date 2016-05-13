'use strict';

// Modules
module.exports = function( image, callback ) {

  mysql.query('SELECT * FROM nodes', function ( err, rows ) {

    if ( err ) {
      return callback(err);
    }

    if ( !rows.length ) {
      return callback('There are not machines');
    }

    async.map(rows, function ( item, callback ) {

      var client = vertigo.createClient({ host: item.ip, port: 21042 });

      client.request('monitorRemoveImage', image, callback);

    }, callback);

  });

};
