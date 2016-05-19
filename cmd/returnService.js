'use strict';

require('../lib/redis');

module.exports = function( typs, callback ){

  redis.keys(instance.type + '-*', function ( err, machines ) {

    if ( err ) {
      return callback( err );
    }

    var lower;

    for (var i = 0; i < machines.length; i++) {
      if (!lower) {
        lower = machines[i];
      } else if ( machines[i].percentage < lower.percentage  ) {
        lower = machines[i];
      }
    }

    callback( null, lower );

  });
};
