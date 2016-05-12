'use strict';

module.exports = function ( ip, callback ) {

    mysql.query('DELETE FROM nodes WHERE ip = ?', [ ip ], function ( err, affectRows ) {
        callback( err, !!callback );
    });

};
