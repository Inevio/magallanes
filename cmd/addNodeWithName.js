'use strict';

module.exports = function( ip, name, callback ){

  console.log( new Date() + ' | addNodeWithName => ' + ip + ' - ' + name );

  mysql.query( 'INSERT INTO nodes SET ip = ?, name = ?', [ ip, name ], function( error, result ){

    if( error ){

      if( error.code === 'ER_DUP_ENTRY' ){
        return callback('SERVER EXISTS ALREADY');
      }

      return callback('ERROR');

    }

    callback( null, !!result.affectedRows );

  });

};
