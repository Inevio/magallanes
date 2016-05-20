'use strict';

require('../lib/redis');

module.exports = function( instance, callback ){

  redis.zadd( instance.type, instance.percentage, instance.ip + ':' + instance.port + ':' + instance.id, function ( err, res ) {
    callback( err );
  });

};
