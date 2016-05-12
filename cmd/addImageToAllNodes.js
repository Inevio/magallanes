'use strict';

module.exports = function ( ip, image, callback ) {

    mysql.query('SELECT ip FROM nodes', [ ip ], function ( err, rows ) {

        if ( err ){
            return callback(err);
        }

        if ( !rows.length ) {
            return callback('There are no machines running.');
        }

        async.map( rows, function ( machine, callback ) {

            var client =  vertigo.createClient({ host: machine.ip, port: 21042 });

            client.request('monitorAddImage', image, function ( err, res ) {
                callback( err, res );
            });

        }, function ( err, res ) {
            callback(err, res);
        });

    });

};
