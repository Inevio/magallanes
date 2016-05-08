'use strict';

module.exports = function( ip, callback ){

  console.log( new Date() + ' | monitorUpdate => ' + ip );

  mysql.query( 'UPDATE nodes SET lastPing = ? WHERE ip = ? LIMIT 1', [ Date.now(), ip ], function( error ){
    callback( error );
  });

};
