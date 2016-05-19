'use strict';

require('../lib/redis');

module.exports = function( name, image, callback ){
  redis.keys( name, function ( err, machine  ) {

    if ( err ) {
      return callback( err );
    }

    if ( !machine.length || machine[0].image  !== image ) {
      return callback('The machine is already dead');
    }

    var client = vertigo.createClient({ host : machine[0].ip, port : machine[0].port });

    client.request('monitorRemoveImage', image, callback);

  });
};
