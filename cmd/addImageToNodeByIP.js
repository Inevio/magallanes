'use strict';

module.exports = function ( ip, image, callback ) {

    mysql.query('SELECT * FROM nodes WHERE ip = ? LIMIT 1', [ ip ], function ( err, rows ) {

        if ( err ){
            return callback(err);
        }

        if ( !rows.length ) {
            return callback('The machine with the IP ' + ip + ' does not exist');
        }

        var client =  vertigo.createClient({ host: ip, port: 21042 });

        client.request('monitorAddImage', image, function ( err, res ) {
            callback( err, res );
        });

    });

};
