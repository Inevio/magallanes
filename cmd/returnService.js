'use strict';

require('../lib/redis');

module.exports = function( typs, callback ){
  redis.zrangebyscore([ instance.type, '-inf', '+inf' ], function ( err, machines ) {
    callback( null, machines[0] );
  });
};
