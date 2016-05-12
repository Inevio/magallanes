'use strict';

module.exports = function ( ip, callback ) {

    mysql.query('DELETE FROM nodes WHERE ip = ? LIMIT 1', [ ip ], function ( err, result ) {
        callback( err, !!result.affectRows );
    });

};
