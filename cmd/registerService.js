'use strict';

require('../lib/redis');

module.exports = function( instance, callback ){
  redis.keys(instance.type + '-*', function ( err, machines ) {

    if ( err ) {
      return callback( err );
    }

    var newMach = {
      ip         : instance.ip,
      port       : instance.port,
      status     : instance.status,
      percentage : instance.percentage,
      image      : instance.image,
      dockerID   : instance.dockerID
    }

    redis.hmset(instance.type '-' + (machines.length + 1), newMach, function ( err, res ) {
      callback( err );
    });

  });
};
