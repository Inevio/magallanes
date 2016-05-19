'use strict';

require('../lib/redis');

module.exports = function( name, info, callback ){
  redis.keys(name, function ( err, mach ) {

    if ( err ) {
      return callback( err );
    }

    if ( !mach.length ) {
      return callback('That machine does not exist');
    }

    redis.hmget(name, function ( err, machine ) {

      for ( var prop in machine ) {
        if ( info[ prop ] ) {
          machine[ prop ] = info[ prop ];
        }
      }

      redis.hmset( name, machine, function ( err, res ) {
        callback( err );
      });

    });

  });
};
