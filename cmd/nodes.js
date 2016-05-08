'use strict';

module.exports = function( callback ){

  console.log( new Date() + ' | nodes' );

  mysql.query('SELECT name, ip, lastPing FROM nodes WHERE 1', function( error, rows ){

    rows.forEach( function( item ){

      item.status = item.lastPing > ( Date.now() - 15000 ) ? 'ON' : 'OFF';

      delete item.lastPing;

    });

    callback( null, rows );
  })

};
