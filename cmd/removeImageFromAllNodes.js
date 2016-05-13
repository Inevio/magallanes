'use strict';

// Modules
var request = require('request');

module.exports = function( name, image, callback ) {

    mysql.query('SELECT * FROM nodes', [ name ], function ( err, rows ) {

        if ( err ) {
          return callback(err);
        }

        if ( !rows.length ) {
            return callback('The machine named ' + name + ' does not exist');
        } else {
          async.forEach(rows, function ( item, callback ) {

            vertigo.createClient({ host: item.ip, port: 21041 }).request('monitorRemoveImage', image, callback);

            client.request('monitorRemoveImage', image, callback);

          }, callback);
        }

    });

};
