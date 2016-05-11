'use strict';

module.exports = function( info, callback ){

    var client = vertigo.createClient({ host: 'magallanes-monitor', port: 21042 });

    client.request('monitorAddImage', 'registry.inevio.com:5000/magallanes-server', function ( err, res ) {
        console.log(err);
        console.log(res[0]);
        console.log(res[1]);
        console.log(res[2]);
    });

};
