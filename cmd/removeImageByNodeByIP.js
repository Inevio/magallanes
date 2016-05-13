'use strict';

// Modules
module.exports = function( ip, image, callback ) {

  mysql.query('SELECT * FROM nodes WHERE ip = ? LIMIT 1', [ ip ], function ( err, rows ) {
    if ( err ) return callback(err);

    if ( !rows.length ) {
      return callback('The machine with the IP ' + ip + ' does not exist');
    }

    var client = vertigo.createClient({ host: rows[ 0 ].ip, port: 21042 });

    client.request('monitorRemoveImage', image, callback);

  });

};
