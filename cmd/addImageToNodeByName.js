'use strict';

module.exports = function( name, image, callback ){

    mysql.query('SELECT * FROM nodes WHERE name=? LIMIT 1', [name], function ( err, rows ) {

            if (err) return callback(err);

            if ( !rows ) {
                callback('The machine named ' + name + ' does not exist');
            } else {
                var client = vertigo.createClient({ host: rows[0].ip, port: 21042 });

                client.request('monitorAddImage', image, function ( err, res ) {
                    callback( err, res );
                });
            }

    });

};
