'use strict';

require('../lib/redis');

module.exports = function( name, callback ){
  redis.keys( name, function ( err, machines ) {

    redis.del( name, function ( err, res ) {
      callback( err );
    });

  });
};
