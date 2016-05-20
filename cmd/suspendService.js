'use strict';

require('../lib/redis');

module.exports = function ( machine, callback ) {
  redis.zrem([ machine.type, machine.ip + ':' + machine.port + ':' + machine.id ], function ( err, res ) {

    if ( err ) {
      return callback( err );
    }

    var client = vertigo.createClient({ host : machine.ip, port : machine.port });
    client.request('serviceSuspend', machine.ip, machine.port, callback);

  });
};
