 'use strict';

require('../lib/redis');

module.exports = function ( machine, callback ) {
    redis.zrem( machine.ip + ':' + machine.port + ':' + machine.id, function ( err, machine ) {

      if ( err ) {
        return callback( err );
      }

      var client = vertigo.createClient({ host : machine.ip, port : machine.port });
      client.request( 'monitorKillContainer', image, callback );

    });
};
