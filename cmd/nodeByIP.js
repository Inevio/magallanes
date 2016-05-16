'use strict';

module.exports = function( ip, callback ){

    mysql.query('SELECT name, ip, lastPing FROM nodes WHERE ip = ? LIMIT 1', [ ip ], function ( err, rows ) {

        if ( err ){
            return callback(err);
        }

        if ( !rows ) {
            return callback('The machine with the IP ' + ip + ' does not exist');
        }

        rows[ 0 ].status = rows[ 0 ].lastPing > ( Date.now() - 15000 ) ? 'ON' : 'OFF';

        if( rows[ 0 ].status === 'OFF' ){

            rows[ 0 ].containers = [];
            delete rows[ 0 ].lastPing;
            return callback( null, rows[ 0 ] );

        }

        var client = vertigo.createClient({ host: ip, port: 21042 });

        client.request('monitorNode', function ( err, res ) {

            rows[ 0 ].containers = res;
            delete rows[ 0 ].lastPing;
            callback( null, rows[ 0 ] );

        });

    });

};
