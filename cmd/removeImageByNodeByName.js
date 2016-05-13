'use strict';

// Modules
var request = require('request');

module.exports = function( name, image, callback ) {

    mysql.query('SELECT * FROM nodes WHERE name = ? LIMIT 1', [ name ], function ( err, rows ) {

        if ( err ) {
          return callback(err);
        }

        if ( !rows.length ) {
            return callback('The machine named ' + name + ' does not exist');
        } else {
            vertigo.createClient({ host: ip, port: 21041 }).request('monitorRemoveImage', image, callback);

            client.request('monitorRemoveImage', image, callback);
        }

    });

};
