'use strict';

// Modules
var request = require('request');

module.exports = function( ip, image, callback ) {

    mysql.query('SELECT * FROM nodes WHERE ip = ? LIMIT 1', [ ip ], function ( err, rows ) {
        if ( err ) return callback(err);

        if ( !rows.length ) {
            return callback('The machine with the IP ' + ip + ' does not exist');
        } else {
            vertigo.createClient({ host: ip, port: 21041 }).request('monitorRemoveImage', image, callback);

            client.request('monitorRemoveImage', image, callback);
        }
    });

};
