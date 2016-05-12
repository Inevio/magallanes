'use strict';

module.exports = function( ip, callback ){

    mysql.query('SELECT * FROM nodes WHERE ip = ? LIMIT 1', [ ip ], function ( err, rows ) {

        if ( err ) return callback(err);

        if ( !rows ) {
            callback('The machine with the IP ' + ip + ' does not exist');
        } else {
            var client = vertigo.createClient({ host: ip, port: 21042 });

            client.request('monitorNode', function ( err, res ) {
                callback( err, res );
            });
        }

    });

};
