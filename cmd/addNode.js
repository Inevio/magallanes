'use strict';

module.exports = function ( ip, callback ) {

    console.log( new Date() + ' | addNode => ' + ip );

    mysql.query('INSERT INTO nodes SET ip = ?', [ip], function ( err ) {

        if ( error ) {
            if ( error.code === 'ER_DUP_ENTRY' ) {
              return callback('SERVER EXISTS ALREADY');
            }
            return callback('ERROR');
        }

        callback( null, !!result.affectedRows );

    });

};
