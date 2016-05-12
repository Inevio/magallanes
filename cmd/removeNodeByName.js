'use strict';

module.exports = function ( name, callback ) {

    mysql.query('DELETE FROM nodes WHERE name = ?', [ name ], function ( err, affectRows ) {
        callback( err, !!callback );
    });

};
