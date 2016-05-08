'use strict';

// Modules
var mysqlMod = require('mysql');

// Variables
var keepers = {};

// Function
var createConnection = function(data, name){

  console.log('create');

  clearInterval( keepers[name] );

  global[name] = mysqlMod.createConnection( data );

  handleDisconnect(data, name);

  global[name].connect( function( error ){

    console.log('connect',error);

    if( error ){

      console.log( process.pid + ' # Imposible conectar con el servidor MySQL', data.database, '|', new Date() );

      setTimeout( function(){
        createConnection(data, name);
      }, 1000 );

    }else{

      //console.log( process.pid + ' # Conexión establecida con el servidor MySQL', data.database, '|', new Date() );

      // Every hour
      keepers[name] = setInterval( function(){
        global[name].query( 'DO 0' );
      }, 3600000 );

    }

  });

};

var handleDisconnect = function(data, name){

  global[name].on( 'error', function( error ){

    console.log( process.pid + ' # Se perdió la conexión con el servidor MySQL', data.database, '|', new Date() );
    console.log( error );

    createConnection(data, name);

  });

};

// Globalize MySQL Connection
//Create general connection
createConnection( {

  "host"     : process.env.MYSQL_HOST,
  "port"     : process.env.MYSQL_PORT || 3306,
  "user"     : process.env.MYSQL_USER,
  "password" : process.env.MYSQL_PASS,
  "database" : process.env.MYSQL_DB

}, 'mysql' );

//To create ad-hoc connections
exports.createConnection = createConnection;
/* To Do -> Connection errors */
/* To Do -> Incorrect data ->  ER_ACCESS_DENIED_ERROR */
