#! /usr/bin/env node
'use strict'

// Global modules
require('./lib/mysql');
require('./lib/vertigo');
require('./lib/async');

// Create server
var server = vertigo.createServer( 21041 );

// Listen petitions
server.on( 'nodes', require('./cmd/nodes') ); //✅
server.on( 'nodeByName', require('./cmd/nodeByName') ); //✅
server.on( 'nodeByIP', require('./cmd/nodeByIP') ); //✅
server.on( 'addNode', require('./cmd/addNode') ); //✅
server.on( 'addNodeWithName', require('./cmd/addNodeWithName') ); //✅
server.on( 'removeNode', require('./cmd/removeNode') ); //✅
server.on( 'removeNodeByName', require('./cmd/removeNodeByName') ); //✅
server.on( 'addImageToAllNodes', require('./cmd/addImageToAllNodes') ); //✅
server.on( 'removeImageFromAllNodes', require('./cmd/removeImageFromAllNodes') ); //✅
server.on( 'addImageToNodeByIP', require('./cmd/addImageToNodeByIP') ); //✅
server.on( 'addImageToNodeByName', require('./cmd/addImageToNodeByName') ); //✅
server.on( 'removeImageByNodeByIP', require('./cmd/removeImageByNodeByIP') ); //✅
server.on( 'removeImageByNodeByName', require('./cmd/removeImageByNodeByName') ); //✅
server.on( 'updateAllImagesOfAllNodes', require('./cmd/updateAllImagesOfAllNodes') );//✅
server.on( 'updateImageOfAllNodes', require('./cmd/updateImageOfAllNodes') ); //✅
server.on( 'updateImageOfNode', require('./cmd/updateImageOfNode') ); //✅
server.on( 'scaleImageInAllNodes', require('./cmd/scaleImageInAllNodes') ); //✅
server.on( 'scaleImageInNodeByIP', require('./cmd/scaleImageInNodeByIP') ); //✅
server.on( 'scaleImageInNodeByName', require('./cmd/scaleImageInNodeByName') ); //✅
server.on( 'monitorUpdate', require('./cmd/monitorUpdate') ); //✅

// Service petitions
server.on( 'registerService', require('./cmd/registerService') );
server.on( 'returnService', require('./cmd/returnService') );
server.on( 'updateService', require('./cmd/updateService') );
server.on( 'suspendService', require('./cmd/suspendService') );
server.on( 'killService', require('./cmd/killService') );
