'use strict';

module.exports = function ( name, callback ) {

    mysql.query('DELETE FROM nodes WHERE name = ? LIMIT 1', [ name ], function ( err, result ) {
        callback( err, !!result.affectRows );
    });

};
